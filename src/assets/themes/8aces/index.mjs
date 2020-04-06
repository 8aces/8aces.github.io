export const vars = {
  text: {
    dark: '#212121',
  },

  primary: {
    dark: '#008800',
    light: '#8dd208',
  },
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
      width: 'auto',
      width: '50%',
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
