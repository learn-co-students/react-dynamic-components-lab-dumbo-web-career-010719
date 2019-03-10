import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const opaValue = this.props.opacity;
    if(opaValue >= 0.2){
      return (
        <div className="color-box" style={{opacity: opaValue}}>
          <ColorBox opacity={opaValue-0.1}/>
        </div>
      )
    }else{
      return null;
    }
   
  }
  
}
