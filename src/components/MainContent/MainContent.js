import React from "react";

export default class MainContent extends React.Component {
  render() {
    let className = this.props.className;
    const title = <h2>{this.props.title}</h2>;
    const subtitle = <h4>{this.props.subtitle}</h4>;

    return (
      <div className={className}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                {subtitle}
                {title}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
