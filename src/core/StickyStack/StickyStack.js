import PROTOTYPE from './StickyStack.prototype';

function StickyStack({ viewport } = {}){
  return Object.create(PROTOTYPE, {
    viewport: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: viewport
    },
    stack: {
      writable: false,
      configurable: false,
      enumerable: true,
      value: []
    }
  })
}

export default StickyStack;
