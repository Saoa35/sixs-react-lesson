import React from 'react';
import StylesCompExamples from '../StylesCompExamples/StylesCompExamples';
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

        <h3 className='h3-test'>Test text1</h3>

        <Triel/>

        <StylesCompExamples/>
        
      </div>
    );
  }
}

export default App;
