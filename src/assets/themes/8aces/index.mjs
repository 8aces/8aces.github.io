export const vars = {
  text: {
    dark: '#212121',
  },

  neutral: '#008800',
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
      color: v.neutral,
      fontSize: '20px',
    },

    a: {
      color: v.neutral,

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
      color: v.neutral,
      fontSize: '0.7em',
      textAlign: 'right',

      a: {
        color: v.neutral,

        '&:hover': {
          color: v.text.dark,
        },
      },
    },
  }
}
