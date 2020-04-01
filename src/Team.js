import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import fb from './assets/img/fb.png';
import man from './assets/img/man.png';
import girl from './assets/img/girl.png';
import boss from './assets/img/boss.png';
import woman from './assets/img/woman.png';
import tw from './assets/img/tw.png';
import lin from './assets/img/lin.png';
import './assets/css/style.css'


class Team extends Component {
    render() {
        return (
            <div>
            <br/>
                <Container fluid id="team">
                    <h1>Meet Our Awsome Team</h1>
                    <br/><br/>
                    <Row>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='http://hd.wallpaperswide.com/thumbs/simple_gray_background-t2.jpg' />
                                <Image className="teamImg" src={boss} roundedCircle />
                                <Card.Body>
                                    <Card.Title className="cardTitle">Mr. John Doe</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Designation</Card.Subtitle>
                                    <br/>
                                    <Card.Text>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                    </Card.Text>
                                    <hr/>
                                    <Card.Link href="#"> <img src={fb} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={lin} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={tw} alt=""/> </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='http://hd.wallpaperswide.com/thumbs/noisy_orange_background-t2.jpg' />
                                <Image className="teamImg" src={man} roundedCircle />
                                <Card.Body>
                                    <Card.Title className="cardTitle">Mr. John Doe</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Designation</Card.Subtitle>
                                    <br/>
                                    <Card.Text>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                    </Card.Text>
                                    <hr/>
                                    <Card.Link href="#"> <img src={fb} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={lin} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={tw} alt=""/> </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='http://hd.wallpaperswide.com/thumbs/cyan_color_background-t2.jpg' />
                                <Image className="teamImg" src={woman} roundedCircle />
                                <Card.Body>
                                    <Card.Title className="cardTitle">Ms. John Doe</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Designation</Card.Subtitle>
                                    <br/>
                                    <Card.Text>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                    </Card.Text>
                                    <hr/>
                                    <Card.Link href="#"> <img src={fb} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={lin} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={tw} alt=""/> </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='http://hd.wallpaperswide.com/thumbs/blue-t2.jpg' />
                                <Image className="teamImg" src={girl} roundedCircle />
                                <Card.Body>
                                    <Card.Title className="cardTitle">Ms. John Doe</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Designation</Card.Subtitle>
                                    <br/>
                                    <Card.Text>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                    </Card.Text>
                                    <hr/>
                                    <Card.Link href="#"> <img src={fb} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={lin} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={tw} alt=""/> </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='http://hd.wallpaperswide.com/thumbs/green_2design-t2.jpg' />
                                <Image className="teamImg" src={boss} roundedCircle />
                                <Card.Body>
                                    <Card.Title className="cardTitle">Mr. John Doe</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Designation</Card.Subtitle>
                                    <br/>
                                    <Card.Text>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                    </Card.Text>
                                    <hr/>
                                    <Card.Link href="#"> <img src={fb} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={lin} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={tw} alt=""/> </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='http://hd.wallpaperswide.com/thumbs/blue_gradient_background-t2.jpg' />
                                <Image className="teamImg" src={man} roundedCircle />
                                <Card.Body>
                                    <Card.Title className="cardTitle">Mr. John Doe</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Designation</Card.Subtitle>
                                    <br/>
                                    <Card.Text>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                    </Card.Text>
                                    <hr/>
                                    <Card.Link href="#"> <img src={fb} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={lin} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={tw} alt=""/> </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='http://hd.wallpaperswide.com/thumbs/purple_19-t2.jpg' />
                                <Image className="teamImg" src={woman} roundedCircle />
                                <Card.Body>
                                    <Card.Title className="cardTitle">Ms. John Doe</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Designation</Card.Subtitle>
                                    <br/>
                                    <Card.Text>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                    </Card.Text>
                                    <hr/>
                                    <Card.Link href="#"> <img src={fb} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={lin} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={tw} alt=""/> </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="columns">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src='http://hd.wallpaperswide.com/thumbs/yellow_10-t2.jpg' />
                                <Image className="teamImg" src={girl} roundedCircle />
                                <Card.Body>
                                    <Card.Title className="cardTitle">Ms. John Doe</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Designation</Card.Subtitle>
                                    <br/>
                                    <Card.Text>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                        <p>MBA, ABC UNIVERSITY, XYZ</p>
                                    </Card.Text>
                                    <hr/>
                                    <Card.Link href="#"> <img src={fb} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={lin} alt=""/> </Card.Link>
                                    <Card.Link href="#"> <img src={tw} alt=""/> </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row><br/>
                    
                </Container>
                <br/><br/><br/><br/><br/>
            </div>
        );
    }
}

export default Team;