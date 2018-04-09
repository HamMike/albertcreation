import React, { Component } from 'react';
import './App.css';
import { Row, Col, Footer } from 'react-materialize'

class About extends Component {
  render() {
    return (
      <Row>

        <Row>
          <Col s={12} className='aboutHead'>
            <h5 className="aboutH5">Me</h5>
            <hr className="aboutHr"/>
          </Col>
        </Row>

        <Row>
          <Col s={12} className='aboutHead'>
            <h6 className="aboutH6">about:</h6>
            <p className="aboutP">I am a web developer based in Seattle, Wa with an eye for clean
            functional design.</p>
          </Col>
        </Row>

        <Row>
          <Col s={12} className='aboutHead'>
            <h5 className="aboutH5">Skills</h5>
            <hr className="aboutHr"/>
          </Col>
        </Row>

        <Row>
          <Col s={4} className='aboutHead'>
            <h6 className="aboutH6">languages:</h6>
            <p className="aboutP">HTML5 | CSS3 | Javascript | SQL</p>
            <h6 className="aboutH6">databases:</h6>
            <p className="aboutP">Sequelize | PostgreSQL | Mongoose | MongoDB</p>
          </Col>
          <Col s={4} className='aboutHead'>
            <h6 className="aboutH6">frameworks:</h6>
            <p className="aboutP">Node | Express | Mocha | Chai</p>
            <h6 className="aboutH6">libraries:</h6>
            <p className="aboutP">React | Redux | Bootstrap | Materialize | jQuery</p>
          </Col>
          <Col s={4} className='aboutHead'>
            <h6 className="aboutH6">other:</h6>
            <p className="aboutP">RESTful Routing | MERN</p>
          </Col>
        </Row>

        <Row>
          <Col s={12} className='aboutHead'>
            <h5 className="aboutH5">Contact</h5>
            <hr className="aboutHr"/>
          </Col>
        </Row>

        <Row>
          <Col s={4} className='aboutHead'>
            <h6 className="aboutH6">email:</h6>
            <p className="aboutP">michaelalberthammer@gmail.com</p>
            <h6 className="aboutH6">linkedin:</h6>
            <p className="aboutP">https://www.linkedin.com/in/michael-a-hammer/</p>
            <h6 className="aboutH6">email:</h6>
            <p className="aboutP">https://github.com/HamMike/</p>
          </Col>
          <Col s={8} className='aboutHead'>

          </Col>
        </Row>

      </Row>
    );
  }
}

export default About;
