import {React, Component} from 'react';
import { Link} from 'react-router-dom';

// custom components 
import Header from './Header';
import Timeline from './Timeline';
import Footer from './Footer';

// style sheets
import '../Styles/GalleryPage.css';
import '../Styles/AboutPage.css'
import '../Styles/Footer.css';


class AboutPage extends Component {


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

                {/* Title  */}
                <h1 className="event-subtitle">About us</h1>
                <p className="gallery-text"> 
                The Gallery started as a photography hobby, but passion drove the opening of our doors as business in 2012. 
                Click on the years below to read our timeline
                </p>
                <Timeline></Timeline>

            </div>

            
            {/* Footer that currently only adds some whitespace for visual nice-ness
            But would update to have social media/contact links in the future similar to 
            noah-caleanu.ca */} 
            <Footer></Footer>

            </body>
            
            </>
        );
    }

} export default AboutPage;