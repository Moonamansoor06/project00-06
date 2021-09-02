exports.handler = async event => {
  const data=event.body
  console.log("Data = ", JSON.parse(data));
  try {
    return {
      statusCode: 200,
      body: data,
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}