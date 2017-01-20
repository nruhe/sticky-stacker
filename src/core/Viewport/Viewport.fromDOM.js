import PROTOTYPE from './Viewport.prototype';

function fromDOM({ node } = {}){
  return Object.create( PROTOTYPE, {
    node: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: node
    },
    top: {
      configurable: false,
      enumerable: true,
      get: function () {
        return this.node.getBoundingClientRect().top + this.node.clientTop;
      }
    },
    bottom: {
      configurable: false,
      enumerable: true,
      get: function () {
        return this.top + this.node.clientHeight;
      }
    },
    left: {
      configurable: false,
      enumerable: true,
      get: function () {
        return this.node.getBoundingClientRect().left + this.node.clientLeft;
      }
    },
    right: {
      configurable: false,
      enumerable: true,
      get: function () {
        return this.left + this.node.clientWidth;
      }
    }
  })
}

export default fromDOM;
