import React from 'react';

// style sheets 
import '../Styles/HomePage.css';

class Banner extends React.Component{


    render(){

        

        return(

            <>
                <section className="container-fluid px-0 sections first-section">
                  <div className="row align-items-center">

                    <div className="col-lg-6 ">
                      <div id="heading-group" className="heading-text text-center d-none d-lg-block mt-5">
                        <h1 className="heading-text">THE<span>/</span>ULTIMATE<span>/</span>PHOTO<span>/</span>GALLERY</h1>
                        <h1 className="heading-text">THE<span>/</span>ULTIMATE<span>/</span>PHOTO<span>/</span>GALLERY</h1>
                        <h1 className="heading-text">THE<span>/</span>ULTIMATE<span>/</span>PHOTO<span>/</span>GALLERY</h1>
                        <h1 className="heading-text">THE<span>/</span>ULTIMATE<span>/</span>PHOTO<span>/</span>GALLERY</h1>
                        <h1 className="heading-text">THE<span>/</span>ULTIMATE<span>/</span>PHOTO<span>/</span>GALLERY</h1>
                        <h1 className="heading-text">THE<span>/</span>ULTIMATE<span>/</span>PHOTO<span>/</span>GALLERY</h1>
                        <h1 className="heading-text">THE<span>/</span>ULTIMATE<span>/</span>PHOTO<span>/</span>GALLERY</h1>
                        </div>
                    </div>

                    <div className="col-lg-6">
                    
                    <img className="img-fluid photo-border" src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="poop"/>
                    
                    </div>
                  </div>
                </section>

            </>

        );
    }
} export default Banner;