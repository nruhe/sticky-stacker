import { Component, PropTypes } from 'react';
import ViewportFactory from '../core/Viewport/Viewport';
import StickyStackFactory from '../core/StickyStack/StickyStack';

class WindowStickyStacker extends Component {
  static childContextTypes = {
    stickyStack: PropTypes.object
  }

  constructor(props, context){
    super(props, context);

    let viewport = ViewportFactory.fromWindow();
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

    window.addEventListener('scroll', this.onUpdate);
    window.addEventListener('resize', this.onUpdate);
    stickyStack.process();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onUpdate);
    window.removeEventListener('resize', this.onUpdate);
  }

  componentDidUpdate() {
    let { stickyStack } = this.state;

    stickyStack.process();
  }

  onUpdate = () => {
    let { stickyStack } = this.state;

    stickyStack.process();
  }

  render() {
    let { children } = this.props;

    return (
      <div>{ children }</div>
    );
  }
}

export default WindowStickyStacker;
