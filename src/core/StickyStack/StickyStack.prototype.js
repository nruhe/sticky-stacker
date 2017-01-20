const PROTOTYPE = Object.create( Object.prototype, {
  add: {
    writable: false,
    configurable: false,
    enumerable: true,
    value: function(stackable){
      if(!this.stack.includes(stackable)){
        this.stack.push(stackable);
      }
    }
  },
  remove: {
    writable: false,
    configurable: false,
    enumerable: true,
    value: function(stackable){
      if(this.stack.includes(stackable)){
        this.stack.splice(this.stack.findIndex(stackable), 1);
      }
    }
  },
  process: {
    writable: false,
    configurable: false,
    enumerable: true,
    value: function(){
      [ ...this.stack]
        // Order rects by y, descending
        .sort((a, b) => a.bTop - b.bTop)
        // Make a new array of what everything would look like stacked on top of each other
        .reduce((sRects, rect) => {
          let top = sRects
            .filter((s) => !(s.cLeft > rect.bRight || s.cRight < rect.bLeft))
            .reduce(
              (top, s) => s.cBottom > top ? s.cBottom : top,
              this.viewport ? this.viewport.top : 0
            )
          ;

          if (top >= rect.bTop) {
            rect.stick(top, rect.bLeft - this.viewport.left);
            sRects.push(rect);
          } else {
            rect.unstick();
          }

          return sRects;
        }, [])
      ;
    }
  }
});

export default PROTOTYPE;
