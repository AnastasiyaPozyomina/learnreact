import React from 'react';



export default class MainContent extends React.Component {
    render() {
      let className = this.props.className;
      const h2 = <h2>{this.props.h2}</h2>;
      const h4 = <h4>{this.props.h4}</h4>;
     
        return ( 
          <div className = {className}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-content">
                    {h4}
                    {h2}
                  </div>
                </div>
              </div>
            </div>
          </div>
   
        );
    }
}
