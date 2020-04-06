export const View = () =>
  div({ class: 'Branding' }, [p({ class: 'eight' }, 'EIGHT'), p({ class: 'aces' }, 'ACES')])
//[
// div({ class: 'Eight' }, [
// p({ class: 'Word' }, [b('e'), div('thical')]),
// p({ class: 'Word' }, [b('i'), div('ncentives')]),
// p({ class: 'Word' }, [b('g'), div('enerate')]),
// p({ class: 'Word' }, [b('h'), div('ealthy')]),
// p({ class: 'Word' }, [b('t'), div('raders')]),
// ]),

// div({ class: 'Aces' }, [
// p({ class: 'Word' }, [b('a'), div('uto')]),
// p({ class: 'Word' }, [b('c'), div('orrecting')]),
// p({ class: 'Word' }, [b('e'), div('conomical')]),
// p({ class: 'Word' }, [b('s'), div('ystem')]),
// ]),
//])

export const style = vars => ({
  left: vars.headerWidth,
  position: 'fixed',
  top: '14.3vh',
  margin: '0 0 0 -.5vh',
  fontSize: '5vw',
  fontWeight: '200',

  p: {
    lineHeight: '1',
  },

  '.aces': {
    margin: '0 0 0 .3vh',
  },

  // '.Word': {
  // lineHeight: 1,

  // p: {
  // float: 'left',
  // },

  // div: {
  // display: 'none',
  // },
  // },
})
