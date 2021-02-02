import {React, Component} from 'react';
import moment from 'moment'
import { Calendar, momentLocalizer  } from 'react-big-calendar' 

// custom components 
import Header from './Header';
import Footer from './Footer';
//import Basic from "./Basic";
// style sheets
import '../Styles/GalleryPage.css';
import '../Styles/Footer.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const myEventsList = []
/*
const MyCalendar = props => (
    <div>
        <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "500px" }}
        />
    </div>

)
*/
class EventsPage extends Component {


    render(){

        return(
            <>
            
            <head>
              <link rel="preconnect" href="https://fonts.gstatic.com"></link>
              <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;700&display=swap" rel="stylesheet"></link>
            </head>

             <Header></Header>


            <body>

            <div className="page-content">

               
                <h1 className="gallery-title">Events</h1>
                <Calendar 
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: "500px" }}
                    />

            </div>

            
            
            <Footer></Footer>

            </body>
            
            </>
        );
    }

} export default EventsPage;
