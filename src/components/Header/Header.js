import React from 'react';
import Nav from '../Nav/Nav';

export default class Header extends React.Component {
    state = {
    bgColor: 'red'
  }

    listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({bgcolor: '#fff'})
    } else {
      this.setState({bgcolor: '#212529'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
 
  render () {
    return (
      <header className="position-fixed" style={{backgroundColor: this.state.bgcolor}}>
        <Nav />
      </header>
    );
  }
}
