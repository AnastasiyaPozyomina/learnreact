import React from 'react';
import './Main.css';


class Main extends React.Component {
    render() {
        return ( 
            <div className="container">
            <main>
            <article>
            <header>
            <h1 className = "text-success"> Hello. World! </h1> 
            <h2 > My first app </h2> 
            </header> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Magni officia tempora voluptatibus nisi quia, corporis cumque vel veritatis.Itaque exercitationem, blanditiis nemo similique repellendus voluptas minima ? Placeat tenetur sed aperiam. </p> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Magni officia tempora voluptatibus nisi quia, corporis cumque vel veritatis.Itaque exercitationem, blanditiis nemo similique repellendus voluptas minima ? Placeat tenetur sed aperiam. </p> 
            </article> 
            </main>
            </div>
        )
    }
}

export default Main;