import React, { Component } from 'react';
import './App.css';
import { Row, Col, Footer } from 'react-materialize'


class Main extends Component {
  render() {
    return (
      <Row>
      
        <Row>
          <Col s={12} className='spacer'>
          </Col>
        </Row>


        <Row>
          <Col s={12} className="typewriter">
           <div className="flexy">
              <h4>Hello, I am Michael, a web developer?</h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col s={12} className='spacer'>
          </Col>
        </Row>



      </Row>
    );
  }
}

export default Main;
