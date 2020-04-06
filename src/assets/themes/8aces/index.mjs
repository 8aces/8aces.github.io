export const vars = {
  text: {
    dark: '#212121',
  },

  primary: {
    dark: '#006150',
    light: '#fff', //'#48ff28',
  },

  headerWidth: '40vw',
  contentWidth: '60vw',
  logoWidth: '23vw',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    html: {
      overflow: 'hidden',
    },
    body: {
      fontFamily:
        '"Ubuntu Narrow",Ubuntu,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,sans-serif',
      color: v.primary.dark,
      fontSize: '20px',
      fontWeight: '300',
      lineHeight: 1,
    },

    a: {
      color: v.primary.dark,

      '&:hover': {
        color: v.text.dark,
      },
    },

    '.Footer': {
      position: 'fixed',
      bottom: 0,
      right: 0,
      lineHeight: 1,
      padding: 0,
      maxWidth: vars.contentWidth,
    },

    '.Spread': {
      top: '35vw',
      left: '40vw',
      position: 'absolute',
      fontSize: '2em',
      textTransform: 'uppercase',
    },

    '.Credits': {
      margin: '0.5em',
      color: v.primary.dark,
      fontSize: '0.7em',
      textAlign: 'right',

      a: {
        color: v.primary.dark,

        '&:hover': {
          color: v.text.dark,
        },
      },
    },
  }
}
