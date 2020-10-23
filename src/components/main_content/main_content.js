import React from 'react';



export default class MainContent extends React.Component {
    render() {
      
      const h2 = <h2>{this.props.h2}</h2>;
      const h4 = <h4>{this.props.h4}</h4>;
     
        return ( 
          <div className="page-heading about-heading header-text">
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
