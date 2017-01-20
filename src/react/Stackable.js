import { Component, PropTypes } from 'react';
import StackableFactory from '../core/Stackable/Stackable';

class Stackable extends Component {
  static contextTypes = {
    stickyStack: PropTypes.object
  }

  constructor(props, context){
    super(props, context);

    this.state = {
      stackable: StackableFactory.fromDOM()
    };
  }

  componentDidMount() {
    let { stickyStack } = this.context;
    let { stackable } = this.state;

    stackable.adjustPlaceholder();
    stickyStack.add(stackable);
  }

  componentDidUpdate() {
    let { stackable } = this.state;

    stackable.adjustPlaceholder();
  }

  componentWillUnmount() {
    let { stickyStack } = this.context;
    let { stackable } = this.state;

    stickyStack.remove(stackable);
  }

  render() {
    let { children } = this.props;
    let { stackable } = this.state;

    return (
      <div ref={(node) => { stackable.container = node; }}>
        <div style={{ display: 'inline-block' }} ref={(node) => { stackable.sticky = node }}>
          { children }
        </div>
      </div>
    );
  }
}

export default Stackable;
