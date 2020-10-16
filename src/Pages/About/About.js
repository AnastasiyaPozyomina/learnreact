import React from 'react';
import Game from '../../components/Game/Game';
import './About.css';


export default class About extends React.Component {
    render() {
        return ( 
            <div>
                <h1>Игра Крестики Нолики</h1>
               <Game />
            </div>
   
            
        );
    }
}

