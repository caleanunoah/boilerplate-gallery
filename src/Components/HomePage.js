// React and Bootstrap modules
import {React, Component} from 'react';
//import Button from 'react-bootstrap/Button';
import { Link} from 'react-router-dom';

// Custom Components
import Header from "./Header";
import Footer from './Footer';
import Banner from './Banner';
//import RepeatingTitleAndImage from './RepeatingTitleText'

// Stylesheets for all components on the homepage (minus Nav)
import '../Styles/HomePage.css';

class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
          name: '',
          greeting: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
      handleChange(event){
        this.setState({name: event.target.value});
      }
  
      handleSubmit(event){
        event.preventDefault();
        fetch(`/api/greeting?=name=${encodeURIComponent(this.state.name)}`).then(response=>response.json()).then(state=>this.setState(state));
  
      }


    render(){
        return(
            <>
            <head>
              <link rel="preconnect" href="https://fonts.gstatic.com"></link>
              <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;700&display=swap" rel="stylesheet"></link>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            
            <body>

            <Header></Header> 

              <div className="page-content">

                  {/* Repeating Title text and Logo */}
                  
                  <Banner></Banner> 


                  {/* The About Us Section */ }
                  <section className="container-fluid sections px-0">
                      <div className="row text-center align-items-center page photo-border">

                        {/* Photo on the Left */}
                        <div className="col-md-6 order-2 order-md-1 zero-pad">
                          <img className="img-fluid photo-border" src="https://images.unsplash.com/photo-1562537620-406906b8a00f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" alt="poop"/>
                        </div>

                        {/* Text content on the right */}
                        <div className="col-md-6 order-1 order-md-2 zero-pad" id="about" >
                          <div className="row justify-content-center ">
                            <div className="col-10 col-lg-8">
                              <h2 class="photo-content-title">ABOUT US</h2>
                              <p className="lead photo-content">Come visit us during our operating hours
                              <ul>
                                <li class="list-item">Monday - Thursday : 8am-8pm</li>
                                <li class="list-item">Friday : 10am-8pm</li>
                                <li class="list-item">Weekends : 2am-6pm</li>
                              </ul>
                              </p>
                              
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
                              <h2 class="photo-content-title">OUR EVENTS</h2>
                              <p className="lead photo-content ">We hold monthly events including photography workshops, brunch, and photography outings. Come join us to see what we are up to next and take a few memorable snapshots while you're at it!</p>
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
                              <h2 class="photo-content-title">SHOP</h2>
                              <p className="lead photo-content ">Check out the world class photography equipment, lessons, and more at our online shop! Shipping free for Canadian orders over $50.</p>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                  </section>

                  {/* Button linking to the Gallery Page with photographs*/}
                  <button type="button" className="btn gallery-btn btn-outline-*"> 
                  <Link to="/gallery" className="gallery-link">Visit Gallery</Link>
                  </button> 
                  
                  
              </div>

              
            <Footer></Footer>
            
          </body>
            </>
        );
    }

} export default HomePage;