export const View = () => div({ class: 'Logo' }, Img({ src: '/8a-min.svg' }))

export const style = vars => ({
  width: '50vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: vars.neutral,

  img: {
    position: 'absolute',
    top: '13vh',
    height: '15vh',
    left: '50vw',
    margin: '0 0 0 -26vh',
  },
})
