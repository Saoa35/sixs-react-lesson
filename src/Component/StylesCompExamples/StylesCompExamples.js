import React from 'react';
import { Button, Section } from './styles';



export default class StylesCompExamples extends React.Component {

    render() {

        return(

            <div>
                <Section>
                  Some random text

                  <Button>
                      Click me!
                  </Button>
                </Section>
            </div>

        )
    }
}