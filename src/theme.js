
import { Theme } from 'theme-ui'

export const theme = {
    fonts: {
        body: 'system-ui, sans-serif',
        heading: '"Avenir Next", sans-serif',
        monospace: 'Menlo, monospace',
    },
    colors: {
        text: '#000',
        background: "#e6e2d3",
        primary: '#33e',
    },

    buttons: {
        primary: {
            color: '#ffffff',
            margin: '1rem',
            bg: '#ada397',
            '&:hover': {
                bg: 'text',

            }
        },
        secondary: {
            color: '#ffffff',
            bg: '#c4b7a6',
        },
    },

    images: {
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 99999,
        },

    },
    cards: {
        primary: {
            width: '400px',
            padding: 2,
            borderRadius: 4,
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
            border:'solid #c4b7a6',
            display: 'flex',
            flexDirection: 'row'
        },
        compact: {
            padding: 1,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'muted',
           
        },
    },

}