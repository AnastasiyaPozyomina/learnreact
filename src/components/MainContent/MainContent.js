import React from 'react';
import Bounce from 'react-reveal/Bounce';

export default class MainContent extends React.Component {
  render () {
    let className = this.props.className;
    const title = <h2>{this.props.title}</h2>;
    const subtitle = <h4>{this.props.subtitle}</h4>;

    return (
      <div className={className}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">   
                <Bounce  cascade text>
                 {subtitle} 
                {title}
                </Bounce>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
