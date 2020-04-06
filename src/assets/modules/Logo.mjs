export const View = () =>
  div({ class: 'Logo' }, [
    img({
      alt: 'eight aces',
      title:
        'ethical incentive generates healthy traders - autonomously correcting economical system',
      src: '/8aces.png',
    }),
  ])

export const style = vars => ({
  width: vars.headerWidth,
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: vars.primary.dark,

  img: {
    position: 'absolute',
    top: '13vh',
    height: '12.5vw',
    left: '17vw',
  },
})
