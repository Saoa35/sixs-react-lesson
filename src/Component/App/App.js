import React from 'react';
import Triel from '../Triel/Triel';
import './App.css';

class App extends React.Component {

  render() {

    const textAlign = 'center';
    const color = 'red';

    const inlineStyles = {
      color,
      textAlign
    }

    return (
      <div className="App">
        <h2 style={inlineStyles}>Some Text</h2>
      </div>
    );
  }
}

export default App;
