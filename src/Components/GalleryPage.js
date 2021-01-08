import {React, Component} from 'react';
import { Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import '../Styles/GalleryPage.css';
import '../Styles/Footer.css';


class GalleryPage extends Component {


    render(){
        return(
            <>

            <head>
              <link rel="preconnect" href="https://fonts.gstatic.com"></link>
              <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;700&display=swap" rel="stylesheet"></link>
            </head>


            <Header></Header>


            <body>

            <div className="page-content ">

                <h1 className="gallery-title">PHOTO GALLERY</h1>

                {/* ROW 1 */}
                <div className="row justify-content-center">
                    <div className="col-lg-4 text-center img-container">
                        <img className="img-fluid gallery-img" src="https://images.unsplash.com/photo-1573614999645-e5f0f16ec15d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="poop"/>  
                    </div>

                    <div className="col-lg-4 text-center img-container">
                        <img className="img-fluid gallery-img" src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="poop"/>
                         
                    </div>

                    <div className="col-lg-4 text-center img-container">
                        <img className="img-fluid gallery-img" src="https://images.unsplash.com/photo-1609790275030-51cf3949ca0c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="poop"/>
                    </div>

                </div>

                {/* ROW 2 */}
                <div className="row justify-content-center img-container">
                    <div className="col-lg-4 text-center">
                        <img className="img-fluid gallery-img" src="https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="poop"/>  
                    </div>

                    <div className="col-lg-4 text-center img-container">
                        <img className="img-fluid gallery-img" src="https://images.unsplash.com/photo-1516919549054-e08258825f80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="poop"/>
                        
                    </div>

                    <div className="col-lg-4 text-center img-container">
                        <img className="img-fluid gallery-img" src="https://images.unsplash.com/photo-1569201529241-f96205e2f2c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" alt="poop"/>
                        
                    </div>
                </div>

                {/* ROW 3 */}
                <div className="row justify-content-center img-container">
                    <div className="col-lg-4 text-center">
                        <img className="img-fluid gallery-img" src="https://images.unsplash.com/photo-1609710219611-33446ea1f2ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80" alt="poop"/>  
                    </div>

                    <div className="col-lg-4 text-center img-container">
                        <img className="img-fluid gallery-img" src="https://images.unsplash.com/photo-1516737886147-4c9f10ea3ace?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80" alt="poop"/>
                        
                    </div>

                    <div className="col-lg-4 text-center img-container">
                        <img className="img-fluid gallery-img" src="https://images.unsplash.com/photo-1587668178269-b941ed743de1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="poop"/>
                        
                    </div>
                </div>
                    
            {/* Button linking to the Home page*/}
            <button type="button" className="btn gallery-btn btn-outline-*"> 
                  <Link to="/" className="gallery-link">Back to Home</Link>
                  </button> 

            </div>

            

            <Footer></Footer>

            </body>
            
            </>
        );
    }

} export default GalleryPage;