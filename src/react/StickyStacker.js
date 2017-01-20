import { Component, PropTypes } from 'react';
import ViewportFactory from '../core/Viewport/Viewport';
import StickyStackFactory from '../core/StickyStack/StickyStack';

class StickyStacker extends Component {
  static childContextTypes = {
    stickyStack: PropTypes.object
  }

  constructor(props, context){
    super(props, context);

    let viewport = ViewportFactory.fromDOM();
    let stickyStack = StickyStackFactory({ viewport });

    this.state = {
      viewport,
      stickyStack
    };
  }

  getChildContext() {
    return {
      stickyStack: this.state.stickyStack
    };
  }

  componentDidMount() {
    let { stickyStack } = this.state;

    stickyStack.process();
  }

  componentDidUpdate() {
    let { stickyStack } = this.state;

    stickyStack.process();
  }

  render() {
    let { children } = this.props;
    let { stickyStack, viewport } = this.state;

    return (
      <div
        ref={(node) => { viewport.node = node }}
        onScroll={(e) => { stickyStack.process() }}
      >
        { children }
      </div>
    );
  }
}

export default StickyStacker;
