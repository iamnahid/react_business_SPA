import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import php from './assets/img/php.jpg';
import './assets/css/style.css'

class Mission extends Component {
    render() {
        return (
            <div>
            <br/>
                <Container id="mission">
                    <h1>Mission & Visions</h1>
                    <br/><br/>
                    <Row>
                        <Col xs={4} md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src='https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' />
                                <Card.Body>
                                    <Card.Title>Qui eu ut aliqua qui consectetur ullamco</Card.Title>
                                    <Card.Text className="cardText">
                                    Nostrud nostrud eiusmod veniam adipisicing. Commodo excepteur cupidatat adipisicing dolor magna deserunt consequat ipsum commodo pariatur fugiat nulla. Quis eiusmod occaecat dolore enim non minim ex sint dolor id ipsum eu. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4} md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src='https://images.unsplash.com/photo-1482059470115-0aadd6bf6834?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
                                <Card.Body>
                                    <Card.Title>Qui eu ut aliqua qui consectetur ullamco</Card.Title>
                                    <Card.Text className="cardText">
                                    Nostrud nostrud eiusmod veniam adipisicing. Commodo excepteur cupidatat adipisicing dolor magna deserunt consequat ipsum commodo pariatur fugiat nulla. Quis eiusmod occaecat dolore enim non minim ex sint dolor id ipsum eu. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4} md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' />
                                <Card.Body>
                                    <Card.Title>Qui eu ut aliqua qui consectetur ullamco</Card.Title>
                                    <Card.Text className="cardText">
                                    Nostrud nostrud eiusmod veniam adipisicing. Commodo excepteur cupidatat adipisicing dolor magna deserunt consequat ipsum commodo pariatur fugiat nulla. Quis eiusmod occaecat dolore enim non minim ex sint dolor id ipsum eu. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col xs={8} md={{ span: 4, offset: 2 }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src='https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80' />
                                <Card.Body>
                                    <Card.Title>Qui eu ut aliqua qui consectetur ullamco</Card.Title>
                                    <Card.Text className="cardText">
                                    Nostrud nostrud eiusmod veniam adipisicing. Commodo excepteur cupidatat adipisicing dolor magna deserunt consequat ipsum commodo pariatur fugiat nulla. Quis eiusmod occaecat dolore enim non minim ex sint dolor id ipsum eu. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4} md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src='https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
                                <Card.Body>
                                    <Card.Title>Qui eu ut aliqua qui consectetur ullamco</Card.Title>
                                    <Card.Text className="cardText">
                                    Nostrud nostrud eiusmod veniam adipisicing. Commodo excepteur cupidatat adipisicing dolor magna deserunt consequat ipsum commodo pariatur fugiat nulla. Quis eiusmod occaecat dolore enim non minim ex sint dolor id ipsum eu. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
                </Container>
                <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            </div>
        );
    }
}

export default Mission;