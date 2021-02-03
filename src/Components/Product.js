import React from 'react';
import {
    Card
} from 'react-bootstrap';



class Product extends React.Component {
    render(){
        return(
            <>
            <Card className="bg-dark text-white product">
            <Card.Img className="img-fluid product-img" src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Card image" />
                <Card.ImgOverlay className="overlay-text">
                    <div className="overlay-rectangle">
                        <Card.Title className="card-title">Canon Rebel</Card.Title>
                        <Card.Text className="card-price">$ 798</Card.Text>
                   </div>
                    
                </Card.ImgOverlay>
            </Card>
            </>
        );
    }
} export default Product;