import React from 'react';


export default class MainContent extends React.Component {
    render() {
      const h2 = <h2>{this.props.h2}</h2>;
      const h4 = <h4>{this.props.h4}</h4>;
  
        return ( 
            <div class="page-heading about-heading header-text">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="text-content">
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
