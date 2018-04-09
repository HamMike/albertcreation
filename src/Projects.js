import React, { Component } from 'react';
import './App.css';
import { Row, Col, Footer } from 'react-materialize'

class Projects extends Component {
  render() {
    return (

      <Row>

        <Row className="projDiv even">
          <Col m={6}>
            <img className="projIm1 img" src="../images/caddy.png"/>
          </Col>
          <Col m={6} className="projDesc">
              <h5 className="even">A Cinderella Story <i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i>
              <i className="fab fa-js-square"></i> </h5>
              <p className="even">A themed two player memory game with the goal of matching the  most
              characters before the other player.</p>
              <a className="pojLinks" href="https://github.com/HamMike/Cinderella-Story"><i class="fas fa-link"></i></a>
          </Col>
        </Row>

        <Row className="projDiv">
          <Col m={6} className="projDesc">
              <h5 className="odd">Powder Hound <i className="fab fa-html5"></i> <i className="fab fa-css3-alt"></i>
                <i className="fab fa-js-square"></i> <i className="fab fa-node"></i> </h5>
              <p className="odd">Powder Hond is a weather app,  that shows the snowfal for the
              surrounding Seattle area ski resorts.   Users can log in, find snowfall
              reports as well as post photos and  comments to the weather page itself.</p>
              <a className="pojLinks" href="https://powder-hound.herokuapp.com/"><i class="fab fa-github"></i></a>
              <a className="pojLinks" href="https://github.com/HamMike/powder-hound"><i class="fas fa-link"></i></a>
          </Col>
          <Col m={6}>
            <img className="projIm2 img" src="../images/powderHound.png"/>
          </Col>
        </Row>

        <Row className="projDiv even">
          <Col m={6}>
            <img className="projIm3 img" src="../images/tornando.png"/>
          </Col>
          <Col m={6} className="projDesc">
              <h5 className="even">Apocalyprep <i className="fab fa-html5"></i> <i className="fab fa-css3-alt"></i>
               <i className="fab fa-js-square"></i> <i className="fab fa-react"></i> </h5>
              <p className="even">Apocalyprep is list prep app for  natural disasters. Users can veiw
              NOAA alerts for there area and go  though the prep check list for specific
              natural disasters.</p>
              <a className="pojLinks" href="http://apocalyprep.herokuapp.com/"><i class="fab fa-github"></i></a>
              <a className="pojLinks" href="https://github.com/HamMike/apocalyprep"><i class="fas fa-link"></i></a>
          </Col>
        </Row>


      </Row>
    );
  }
}

export default Projects;
