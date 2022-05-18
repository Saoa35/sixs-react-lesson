import React from 'react';
import StylesCompExamples from '../StylesCompExamples/StylesCompExamples';
import Triel from '../Triel/Triel';
import styles from './App.module.css';
import clsx from 'clsx';


class App extends React.Component {

  state = {

    clicked: false

  } 

  render() {

    const textAlign = 'center';
    const color = 'red';

    const inlineStyles = {
      color,
      textAlign
    }

    return (
      <div className={styles.App}>
        <h2 style={inlineStyles}>Some Text</h2>

        <h4 className={clsx(
          'h3-test', 
          this.state.clicked && 'hidden-class', 
          'test-class')}
          >
            Text in h4 headline
        </h4>

        <p>
          <button onClick={() => this.setState({clicked: !this.state.clicked})}>
            Click me
          </button>
        </p>

        <h3 className='h3-test'>Test text1</h3>

        <Triel/>

        <StylesCompExamples/>
        
      </div>
    );
  }
}

export default App;
