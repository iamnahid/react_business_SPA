import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import i1 from './assets/img/i1.jpg';
import './assets/css/style.css'
import './assets/css/Nav.css'

class About extends Component {
    render() {
        return (
            <div>
                <br/>
                <Container fluid id="about" className="About">
                    <Row>
                        <Col>
                            <img src='https://cdn.pixabay.com/photo/2015/07/28/22/01/office-865091_1280.jpg' alt="COMPANY TITLE"/>
                        </Col>
                        <Col>
                            <h1>Who We Are</h1>
                            <p>Eiusmod enim culpa enim ad laboris aute aliqua mollit consectetur. Lorem exercitation laboris id esse exercitation et pariatur cupidatat occaecat officia enim enim. Culpa sint laborum voluptate sit consequat pariatur dolore. Veniam elit labore qui laboris. Anim elit aliquip incididunt consequat consequat eu tempor velit sit. Ea est enim eu irure occaecat nulla.

                            Consequat cillum cillum velit mollit officia dolor adipisicing mollit voluptate deserunt enim voluptate cillum. Cupidatat aute veniam aliqua et ut. Esse consectetur magna ut sunt velit dolore et voluptate.</p>
                        </Col>
                    </Row>
                </Container>
                <br/><br/><br/><br/>
                <br/>
            </div>
        );
    }
}

export default About;