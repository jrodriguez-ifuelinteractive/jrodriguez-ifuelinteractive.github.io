import React, { Component } from 'react';
import Link from './Link.js';
import me from './image.jpg';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <img id="image" alt="Jesus Rodriguez" src={me} />
            <h1 id="name">Jesus Rodriguez</h1>
            <ul id="links">
                <Link name="GitHub" link="https://github.com/jrodriguez-ifuelinteractive" />
                <Link name="Twitter" link="https://twitter.com/jesuserodriguez" />
                <Link name="Instagram" link="https://www.instagram.com/z0e0u0s/" />
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
