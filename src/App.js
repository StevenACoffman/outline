import React, { Component } from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import './App.css';

const styles = {
    output: {height: "21.5em"},
    outputRender: {height: "100%"}
};

class App extends Component {
  render() {

    return (
      <div>
      <FormGroup>
                    <FormControl componentClass="textarea" rows="6" id="codeInput" />
                </FormGroup>
                <FormGroup>
                    <Button block>Run!</Button>
                </FormGroup>
      </div>
    );
  }
}

export default App;
