import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './assets/css/style.css'

class Contact extends Component {
    render() {
        return (
            <div>
            <br/>
                <Container className="contact">
                    <Row className="mapRow">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                
                                <iframe width="100%" height="245" id="gmap_canvas" src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

                                <a href="#"></a>
                            </div>
                        </div>
                    </Row>
                    <br/> <br/>
                    <Row>
                        <Col className="contact-details">
                            <h1>Corporate Headquarters</h1>
                            <p>ABC Tower, H.n: ##, R.n: #, XYZ Road, Dhaka, Bangladesh</p>
                            <p><strong>Contact No: </strong>123567890</p>
                            <p><strong>Email us: </strong>abc@demo.com</p>
                        </Col>
                    </Row>
                    <br/><br/>
                    <Row>
                        <Col className="cont-form">
                        <section className="mb-4">
                            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Us</h2>
                           
                            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. I will come back to you within
                                a matter of hours to help you.</p>

                            <div className="row">

                              
                                <div className="col-md-12 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                       
                                        <div className="row">

                                          
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <input type="text" id="name" name="name" className="form-control"></input>
                                                    <label for="name" className="">Your name</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <input type="text" id="email" name="email" className="form-control"></input>
                                                    <label for="email" className="">Your email</label>
                                                </div>
                                            </div>

                                        </div>
                                        

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form mb-0">
                                                    <input type="text" id="subject" name="subject" className="form-control"></input>
                                                    <label for="subject" className="">Subject</label>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        <div className="row">

                                            <div className="col-md-12">

                                                <div className="md-form">
                                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                                    <label for="message">Your message</label>
                                                </div>

                                            </div>
                                        </div>

                                    </form>
                                    <br/><br/>
                                    <div className="text-center text-md-center">
                                        <a className="btn btn-primary disabled" onclick="document.getElementById('contact-form').submit();">Send</a>
                                    </div>
                                    <div className="status"></div>
                                </div>

                            </div>

                            </section>
                        </Col>
                    </Row>
                </Container>
                <br/><br/><br/>
            </div>
        );
    }
}

export default Contact;