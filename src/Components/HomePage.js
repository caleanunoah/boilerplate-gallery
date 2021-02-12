// React and Bootstrap modules
import {React, Component} from 'react';
import { Link} from 'react-router-dom';

// Custom Components
import Header from "./Header";
import Footer from './Footer';
import Banner from './Banner';

// Stylesheets for all components on the homepage (minus navbar Header)
import '../Styles/HomePage.css';

class HomePage extends Component {

    // add constructor bc we want to test server connection
    constructor(props){
        super(props);
        this.state = {
        name: '',
        greeting: ''
        };
        // javascript rules say to bind functions that involve state change
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle changes occuring by updating name (that we want to encode in a uri)
    // we will send name to server on localhost:3001
    handleChange(event){
        this.setState({name: event.target.value});
    }

    // send to server
    handleSubmit(event){
        event.preventDefault();
        fetch(`/api/greeting?=name=${encodeURIComponent(this.state.name)}`).then(response=>response.json()).then(state=>this.setState(state));

    }


    render(){
        return(
            <>
            <head>
              {/* Link fonts and other dependencies here*/}
              <link rel="preconnect" href="https://fonts.gstatic.com"></link>
              <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;700&display=swap" rel="stylesheet"></link>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            
            <body>

            {/* Navbar header for page navigation (currently doesnt do anything, just for visual */}
            <Header></Header> 
      
              <div className="page-content">

                  {/* Repeating Title text and Logo */}
                  
                  <Banner></Banner>
                  
                  {/* The About Us Section */ }
                  <section className="container-fluid sections px-0" id="about" >
                      <div className="row text-center align-items-center page photo-border">

                        {/* Photo on the Left */}
                        <div className="col-md-6 order-2 order-md-1 zero-pad">
                          <img className="img-fluid photo-border" src="https://images.unsplash.com/photo-1562537620-406906b8a00f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" alt="poop"/>
                        </div>

                        {/* Text content on the right */}
                        <div className="col-md-6 order-1 order-md-2 zero-pad">
                          <div className="row justify-content-center ">
                            <div className="col-10 col-lg-8">
                              <h2 className="photo-content-title">ABOUT US</h2>
                              <p className="lead photo-content">
                                  I am an experienced photographer from Vancouver with a small business downtown selling and renting photography equipment.
                                  Come visit The Gallery during our operating hours
                              <ul className ="gallery-hours">
                                <li className="list-item">Monday - Thursday : 8am-8pm</li>
                                <li className="list-item">Friday : 10am-8pm</li>
                                <li className="list-item">Weekends : 2am-6pm</li>
                              </ul>
                              </p>
                              <button type="button" className="btn mini-btn btn-outline-*"> 
                                <Link to="/about" className="mini-link">Read about us</Link>
                              </button> 
                              
                            </div>
                          </div>
                        </div>
                        </div>
                  </section>

                  {/* The Events Section */ }
                  <section className="container-fluid sections px-0">
                      <div className="row text-center align-items-center page photo-border">

                        {/* Photo on the Right */}
                        <div className="col-md-6 order-1 zero-pad">
                          <img className="img-fluid photo-border" src="https://images.unsplash.com/photo-1568992688527-e1c1894e4e30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="poop"/>
                        </div>

                        {/* Text Content on the Left */}
                        <div className="col-md-6 zero-pad" >
                          <div className="row justify-content-center">
                            <div className="col-10 col-lg-8">
                              <h2 className="photo-content-title">OUR EVENTS</h2>
                              <p className="lead photo-content ">The Gallery holds monthly events for photographers including photography workshops, lessons, and photography outings. See what we are up to next and take a few memorable snapshots while you're at it!</p>
                              <button type="button" className="btn mini-btn btn-outline-*"> 
                                <Link to="/events" className="mini-link">See Events</Link>
                              </button> 
                            </div>
                          </div>
                        </div>
                      </div>
                  </section>


                  {/* The Shop Section */ }
                  <section className="container-fluid sections px-0">
                      <div className="row text-center align-items-center page photo-border">

                        {/* Photo on the Left */}
                        <div className="col-md-6 order-2 order-md-1">
                          <img className="img-fluid " src="https://images.unsplash.com/photo-1583151485573-c3e8795e477a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="poop"/>
                        </div>

                        {/* Text Content on the Right */}
                        <div className="col-md-6 order-1 order-md-2" >
                          <div className="row justify-content-center">
                            <div className="col-10 col-lg-8">
                              <h2 className="photo-content-title">SHOP</h2>
                              <p className="lead photo-content ">Check out the world class photography equipment, lessons, and more at our online shop! Shipping free for Canadian orders over $50.</p>
                              <button type="button" className="btn mini-btn btn-outline-*"> 
                                <Link to="/shop" className="mini-link">Online Store</Link>
                              </button> 
                            </div>
                          </div>
                        </div>
                      </div>
                  </section>

                  {/* Button linking to the Gallery Page with photographs*/}
                  <button type="button" className="btn gallery-btn btn-outline-*"> 
                  <Link to="/photos" className="gallery-link">See My Photos</Link>
                  </button> 
                  
                  
              </div>

            {/* Footer that currently only adds some whitespace for visual nice-ness
            But would update to have social media/contact links in the future similar to 
            noah-caleanu.ca */} 
            <Footer></Footer>
            <Footer></Footer>
            <Footer></Footer>
            <Footer></Footer>
            <Footer></Footer>
            <Footer></Footer>
          </body>
            </>
        );
    }

} export default HomePage;