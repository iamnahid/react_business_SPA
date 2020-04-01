import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import './assets/css/style.css'
import './assets/css/Nav.css'

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel id="homeCarousel">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'
                        alt="credit to Unsplash"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='https://images.unsplash.com/photo-1509130298739-651801c76e96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                        alt="credit to Unsplash"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='https://images.unsplash.com/photo-1529346378633-c2b2a059c367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                        alt="credit to Unsplash"
                        />
                    </Carousel.Item>
                </Carousel>    
                <br/> 
                <Container fluid id="title">
                    <h1>COMPANY NAME</h1>
                    <p>COMPANY MOTTO</p>
                </Container>
            </div>
        );
    }
}
export default Home;