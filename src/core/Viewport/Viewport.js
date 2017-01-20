import PROTOTYPE from './Viewport.prototype';
import fromDOM from './Viewport.fromDOM';
import fromWindow from './Viewport.fromWindow';

function Viewport(){
  return Object.create( PROTOTYPE )
}

Viewport.fromDOM = fromDOM;
Viewport.fromWindow = fromWindow;

export default Viewport;
