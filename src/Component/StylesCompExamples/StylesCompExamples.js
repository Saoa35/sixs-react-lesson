import React from 'react';
import { Button, Section } from './styles';



export default class StylesCompExamples extends React.Component {

    state = {

        clicked: false

    }

    render() {

        return(

            <div>
                <Section>
                  Some random text

                  <Button 
                    onClick={() => this.setState({clicked: !this.state.clicked})}
                    primary={this.state.clicked}
                    >
                    Click me!
                  </Button>
                </Section>
            </div>

        )
    }
}