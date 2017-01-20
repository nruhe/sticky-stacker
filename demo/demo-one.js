import { Component } from 'react';
import { WindowStickyStacker, Stackable } from 'sticky-stacker';

const sectionStyle = {
  marginBottom: '3vh',
  width: '100%'
};

const stackableStyle = {
  background: '#ccffff',
  height: '40px',
  boxSizing: 'border-box',
  border: '1px #aadddd solid',
};

const nonStackableStyle = {
  ...stackableStyle,
  background: '#ffffcc',
  border: '1px #ddddaa solid',
};

class DemoOne extends Component {
  render(){
    return (
      <WindowStickyStacker>
        <div style={{textAlign:'center', padding:'5px'}}>{'Refresh to re-randomize layout! Blue = sticky'}</div>
        {[...Array(100).keys()].map((i) => (
          <div key={i} style={sectionStyle}>
            <div style={{paddingLeft: `${Math.floor(Math.random() * (100 + 1))}%`}}>
              { i % 3
                ? <Stackable>
                  <div style={{
                    ...stackableStyle,
                    width: `${Math.floor(Math.random() * (100 - 30 + 1)) + 30 }px`}}
                  >
                  </div>
                </Stackable>
                : <div style={{
                  ...nonStackableStyle,
                  width: `${Math.floor(Math.random() * (100 - 30 + 1)) + 30 }px`}}
                >
                </div>
              }
            </div>
          </div>
        ))}
      </WindowStickyStacker>
    )
  }
}

export default DemoOne;

//(i % 2 ? stackableStyle : { ...stackableStyle, marginLeft: '50%' })
