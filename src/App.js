import React, { Component } from 'react';
import {Button, ButtonGroup, Col, ControlLabel, DropdownButton, FormControl, FormGroup,
  Glyphicon, Grid, HelpBlock, ListGroup, ListGroupItem, MenuItem, Panel, Row} from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const styles = StyleSheet.create({
  top15: {
    marginTop: '15px'
  },
  container: {
    display: 'flex'
  },
  item: {
    flexGrow: 1
  }
});

const title = (
  <h3>Build Outline: Robots</h3>
);
class App extends Component {
  render() {
    return (
      <div>
        <div className={css(styles.top15)}>&nbsp;</div>
        <Grid>
          <Row>
            <Col xs={10} xsOffset={1}>
              <Panel header={title}>
                <section>
                  <FormGroup>
                    <ButtonGroup className={css(styles.container)}>
                      <DropdownButton title="Citation Format" className={css(styles.item)}>
                        <MenuItem eventKey="1" active>APA</MenuItem>
                        <MenuItem eventKey="2">MLA</MenuItem>
                      </DropdownButton>
                      <DropdownButton title="File Format" className={css(styles.item)}>
                        <MenuItem eventKey="1" active>APA</MenuItem>
                        <MenuItem eventKey="2">Text File (.txt)</MenuItem>
                      </DropdownButton>
                      <Button className={css(styles.item)}>Save <Glyphicon glyph="floppy-save" /></Button>
                      <Button className={css(styles.item)}>Download <Glyphicon glyph="download-alt" /></Button>
                    </ButtonGroup>
                  </FormGroup>
                </section>
                <section>
                  <Panel>
                    <form>
                      <FormGroup>
                        <ControlLabel>Section Name</ControlLabel>
                        <FormControl
                          type="text"
                          value="Robots are the enemy"
                          placeholder="Robots are the enemy"
                        />
                      </FormGroup>
                      <FormGroup>
                        <ControlLabel>Section Notes</ControlLabel>
                        <FormControl componentClass="textarea" rows="6" id="codeInput" value="Random text goes here"/>
                      </FormGroup>
                    </form>
                    <ListGroup>
                      <ListGroupItem>
                        Susan Milius. (2001). Don't Look Now, but Is That Dog Laughing? Science News, 160(4), 55-55. Retrieved from <a href="http://www.jstor.org/stable/4012579">http://www.jstor.org/stable/4012579</a>&nbsp;
                        <Button bsSize="xsmall" ><Glyphicon glyph="remove" /> Remove</Button>
                      </ListGroupItem>
                      <ListGroupItem>
                        TAYLOR, A. (2013). DOGS. In Tutu D. (Author) &amp; Linzey A. (Ed.), The Global Guide to Animal Protection (pp. 116-118). University of Illinois Press. Retrieved from <a href="http://www.jstor.org/stable/10.5406/j.ctt2tt9r9.73">http://www.jstor.org/stable/10.5406/j.ctt2tt9r9.73</a>&nbsp;
                        <Button bsSize="xsmall" ><Glyphicon glyph="remove" /> Remove</Button>
                      </ListGroupItem>
                      <ListGroupItem>
                        <Button><Glyphicon glyph="plus" /> Add citation from list</Button>
                      </ListGroupItem>
                    </ListGroup>
                  </Panel>
                  <FormGroup>
                      <Button block><Glyphicon glyph="plus" /> Add Section</Button>
                  </FormGroup>
                </section>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
