import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import php from './assets/img/php.jpg';
import './assets/css/style.css'

class Services extends Component {
    render() {
        return (
            <div>
            <br/>
                <Container fluid id="services">
                    <h1>Our Services</h1>
                    <br/><br/>
                    <Row>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                                <Card.Body>
                                    <Card.Title className="cardTitle">TITLE</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                                <Card.Body>
                                    <Card.Title className="cardTitle">TITLE</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                                <Card.Body>
                                    <Card.Title className="cardTitle">TITLE</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                                <Card.Body>
                                    <Card.Title className="cardTitle">TITLE</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                                <Card.Body>
                                    <Card.Title className="cardTitle">TITLE</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                                <Card.Body>
                                    <Card.Title className="cardTitle">TITLE</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                                <Card.Body>
                                    <Card.Title className="cardTitle">TITLE</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                                <Card.Body>
                                    <Card.Title className="cardTitle">TITLE</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br/> <br/><br/> <br/> <br/> <br/> <br/><br/> <br/> <br/>
            </div>
        );
    }
}

export default Services;