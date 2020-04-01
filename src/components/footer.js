import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import '../assets/css/footer.css'

class footer extends Component {
    render() {
        return (
            <div>
                <Container className="footer">
                    <span className="icons">      
                        <h2>Meet Us At Social Networks</h2>
                        <br/>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-google"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-pinterest"></a>
                        <a href="#" className="fa fa-dribbble"></a>
                        <a href="#" className="fa fa-flickr"></a>
                        <a href="#" className="fa fa-yahoo"></a>
                        <a href="#" className="fa fa-reddit"></a>
                    </span>
                    <span className="copy-right">&copy;<a  className="iamnahid" href="http://iamnahid.github.io">iamnahid </a>-Copyright 2020 </span>
                </Container>
            </div>
        );
    }
}

export default footer;