/* // Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event, context) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: 'usd',
      // Verify your integration in this guide by including this parameter
      metadata: { integration_check: 'accept_a_payment' },
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
 */


require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = function(event, context, callback) {

  //-- We only care to do anything if this is our POST request.
  if(event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode,
      headers,
      body: ''
    });
  }

  //-- Parse the body contents into an object.
  const data = JSON.parse(event.body);

  //-- Make sure we have all required data. Otherwise, escape.
  if(
    !data.token ||
    !data.amount ||
    !data.idempotency_key
  ) {

    console.error('Required information is missing.');

    callback(null, {
      statusCode,
      headers,
      body: JSON.stringify({status: 'missing-information'})
    });

    return;
  }

  stripe.charges.create(
    {
      currency: 'usd',
      amount: data.amount,
      source: data.token.id,
      receipt_email: data.token.email,
      description: `charge for a widget`
    },
    {
      idempotency_key: data.idempotency_key
    }, (err, charge) => {

      if(err !== null) {
        console.log(err);
      }

      let status = (charge === null || charge.status !== 'succeeded')
        ? 'failed'
        : charge.status;

      callback(null, {
        statusCode,
        headers,
        body: JSON.stringify({status})
      });
    }
  );
}
