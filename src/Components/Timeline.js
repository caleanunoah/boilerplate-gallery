import React from "react";
import { Accordion, 
        Card,
        Button 
    } from 'react-bootstrap';

class Timeline extends React.Component  {

    render(){

        return(
            <>
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="timeline-btn">
                        2008
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0" >
                    <Card.Body>Picked up photography as a hobby</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1"  className="timeline-btn">
                        2012
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Started The Gallery business </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2"  className="timeline-btn">
                        2013
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>Made first million </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3"  className="timeline-btn">
                        2012
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>Held partnered event with National Geographic </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4"  className="timeline-btn">
                        2015
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>Opened second location on Broadway </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5"  className="timeline-btn">
                        2017
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>Released product line of professional cameras</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="6"  className="timeline-btn">
                        2020
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body>Launched website</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </>
        );
    }

} export default Timeline;