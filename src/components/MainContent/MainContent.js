import React from 'react';

export default function MainContent (props) {
  let className = props.className;
  const title = <h2>{props.title}</h2>;
  const subtitle = <h4>{props.subtitle}</h4>;

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
