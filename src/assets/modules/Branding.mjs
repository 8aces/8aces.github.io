export const View = () => div({ class: 'Branding' }, [span({ class:'eight' }, 'eight'), span({ class: 'aces' }, 'aces')])
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
  left: '37vw',
  position: 'fixed',
  top: '28vh',
  margin: '0 0 0 1.5vh',
  letterSpacing: '.2em',
  fontSize: '1.5em',

  '.aces': {
    margin: '0 0 0 1.5vh',
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
