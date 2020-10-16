import {Container} from '@material-ui/core';
import React from 'react';
import Hello from '../../components/Hello';
import Main from '../../main/Main';

export default class Home extends React.Component {
  render () {
    return (
      <div>

        <Main />
        <Hello />
      </div>
    );
  }
}
