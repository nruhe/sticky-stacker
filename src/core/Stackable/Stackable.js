import PROTOTYPE from './Stackable.prototype';
import fromDOM from './Stackable.fromDOM';

function Stackable(){
  return Object.create(PROTOTYPE);
}

Stackable.fromDOM = fromDOM;

export default Stackable;
