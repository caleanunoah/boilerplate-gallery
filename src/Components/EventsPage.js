import {React, Component} from 'react';
import moment from 'moment'
import { Calendar, Views, momentLocalizer  } from 'react-big-calendar' 

// custom components 
import Header from './Header';
import Footer from './Footer';
import events from "../Components/events";
import * as dates from '../Components/dates';

// style sheets
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../Styles/GalleryPage.css';
import "../Styles/EventsPage.css";
import '../Styles/Footer.css';


const localizer = momentLocalizer(moment)

const myEventsList = [
    {
        id: 0,
        title: 'Beginner Photographer Lessons',
        allDay: true,
        start: new Date(2021, 1, 1),
        end: new Date(2021, 1, 5),
      },
      {
        id: 1,
        title: 'Photographer Conference',
        start: new Date(2021, 1, 12),
        end: new Date(2021, 1, 15),
      },
      {
        id: 1,
        title: 'Advanced Photographer Lessons',
        start: new Date(2021, 1, 15),
        end: new Date(2021, 1, 20),
      }
]

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'red',
    },
  })

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

            <div className="page-content container-fluid">

               
                <h1 className="event-subtitle">Events</h1>
                <p className="gallery-text"> 
                Check out what we have going on every month with our calendar.
                </p>

                <div className="calendar"> 
                <Calendar 
                    localizer={localizer}
                    events={myEventsList}
                    defaultView={Views.MONTH}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: "900px",
                            width: "900px"}}
                    />
                </div>

            </div>

            
            
            <Footer></Footer>

            </body>
            
            </>
        );
    }

} export default EventsPage;
