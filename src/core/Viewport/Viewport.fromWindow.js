import PROTOTYPE from './Viewport.prototype';

function fromWindow(){
  return Object.create( PROTOTYPE, {
    top: {
      writable: false,
      configurable: false,
      enumerable: true,
      value: 0
    },
    bottom: {
      configurable: false,
      enumerable: true,
      get: function () {
        return window.document.documentElement.clientHeight;
      }
    },
    left: {
      writable: false,
      configurable: false,
      enumerable: true,
      value: 0
    },
    right: {
      configurable: false,
      enumerable: true,
      get: function () {
        return window.document.documentElement.clientWidth;
      }
    }
  });
}

export default fromWindow;
