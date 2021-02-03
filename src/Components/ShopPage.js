import {React, Component} from 'react';
import { Link} from 'react-router-dom';

// custom components 
import Header from './Header';
import Product from './Product';
import Footer from './Footer';

// style sheets
import '../Styles/GalleryPage.css';
import '../Styles/EventsPage.css';
import '../Styles/Shop.css';
import '../Styles/Footer.css';


class ShopPage extends Component {


    render(){

        return(
            <>
            {/* Link fonts and other dependencies here*/}
            <head>
              <link rel="preconnect" href="https://fonts.gstatic.com"></link>
              <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;700&display=swap" rel="stylesheet"></link>
            </head>

            {/* Navbar header for page navigation (currently doesnt do anything, just for visual */}
            <Header></Header>


            <body>

            <div className="page-content ">

                {/* Title for Gallery */}
                <h1 className="event-subtitle">Shop</h1>
                <p className="gallery-text"> 
                This is our new online selection of cameras, lenses, and accessories.
                All prices are CAD and we offer free shipping on orders over $50.
                </p>
            
                
                <div className="row justify-content-center img-container">
                    <div className="col-lg-4 text-center">
                        {/*
                        <img className="img-fluid gallery-img product-img" src="https://images.unsplash.com/photo-1587668178269-b941ed743de1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="poop"/>
                        */}
                        <Product></Product>
                        </div>

                    <div className="col-lg-4 text-center img-container">
                        {/*
                        <img className="img-fluid gallery-img product-img" src="https://images.unsplash.com/photo-1587668178269-b941ed743de1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="poop"/>
                        */}
                        <Product></Product>
                    </div>

                    <div className="col-lg-4 text-center img-container">
                        {/*
                        <img className="img-fluid gallery-img product-img" src="https://images.unsplash.com/photo-1587668178269-b941ed743de1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="poop"/>
                        */}
                        <Product ></Product>
                    </div>
                </div>

            </div>

            
            {/* Footer that currently only adds some whitespace for visual nice-ness
            But would update to have social media/contact links in the future similar to 
            noah-caleanu.ca */} 
            <Footer></Footer>

            </body>
            
            </>
        );
    }

} export default ShopPage;