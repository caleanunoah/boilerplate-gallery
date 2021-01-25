import {React, Component} from 'react';
import { Link} from 'react-router-dom';

// custom components 
import Header from './Header';
import Footer from './Footer';

// style sheets
import '../Styles/GalleryPage.css';
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

                {/* Title for Gallery */}
                <h1 className="gallery-title">About Us</h1>
            


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