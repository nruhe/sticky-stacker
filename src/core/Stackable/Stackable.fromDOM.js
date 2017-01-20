import PROTOTYPE from './Stackable.prototype';

function fromDOM({ container, sticky } = {}){
  return Object.create(PROTOTYPE, {
    container: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: container
    },
    sticky: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: sticky
    },
    bTop: {
      configurable: false,
      enumerable: true,
      get: function () {
        return this.container.getBoundingClientRect().top;
      }
    },
    bBottom: {
      configurable: false,
      enumerable: true,
      get: function () {
        return this.container.getBoundingClientRect().bottom;
      }
    },
    bLeft: {
      configurable: false,
      enumerable: true,
      get: function () {
        return this.container.getBoundingClientRect().left;
      }
    },
    bRight: {
      configurable: false,
      enumerable: true,
      get: function () {
        return this.container.getBoundingClientRect().right;
      }
    },
    cTop: {
      configurable: false,
      enumerable: true,
      get: function () {
        return this.sticky.getBoundingClientRect().top;
      }
    },
    cBottom: {
      configurable: false,
      enumerable: true,
      get: function () {
        return this.sticky.getBoundingClientRect().bottom;
      }
    },
    cLeft: {
      configurable: false,
      enumerable: true,
      get: function () {
        return this.sticky.getBoundingClientRect().left;
      }
    },
    cRight: {
      configurable: false,
      enumerable: true,
      get: function () {
        return this.sticky.getBoundingClientRect().right;
      }
    },
    stick: {
      writable: false,
      configurable: false,
      enumerable: true,
      value: function (top, left) {
        const styles = {
          position: 'fixed',
          top: `${top}px`,
          left: `${left}px`,
        };

        Object
          .keys(styles)
          .forEach((style) => {
            this.sticky.style[style] = styles[style];
          })
        ;
      }
    },
    unstick: {
      writable: false,
      configurable: false,
      enumerable: true,
      value: function () {
        const styles = {
          position: 'absolute',
          top: '0px',
          left: '0px',
        }

        Object
          .keys(styles)
          .forEach((style) => {
            this.sticky.style[style] = styles[style];
          })
        ;
      }
    },
    adjustPlaceholder: {
      writable: false,
      configurable: false,
      enumerable: true,
      value: function () {
        this.container.style.position = 'relative';
        this.container.style.height = `${this.cBottom - this.cTop}px`;
        this.container.style.width = `${this.cRight - this.cLeft}px`;
      }
    }
  });
}

export default fromDOM;
