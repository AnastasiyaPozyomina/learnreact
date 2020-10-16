import React from 'react';
import './Main.css';
import { Typography} from '@material-ui/core';







  export default class Main extends React.Component {
     
    render() {

        return ( 
         <div className="container">
            <main>
            <article>
            <header>
           
            <Typography variant="h1" color="primary"> Hello, World!</Typography>
            <Typography variant="h2" color="textSecondary" align="left"> My first app </Typography>
            <Typography variant="h6" color="error" align="center"> Lorem ipsum dolor sit amet consectetur </Typography>
            </header> 
            
            <p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Magni officia tempora voluptatibus nisi quia, corporis cumque vel veritatis.Itaque exercitationem, blanditiis nemo similique repellendus voluptas minima ? Placeat tenetur sed aperiam. </p> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Magni officia tempora voluptatibus nisi quia, corporis cumque vel veritatis.Itaque exercitationem, blanditiis nemo similique repellendus voluptas minima ? Placeat tenetur sed aperiam. </p> 
            </article> 
            </main>
            </div>
        )
    }
}

 