import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'reactstrap';
import './App.css';

const EntryHeader = () => {
    return <h3></h3>
}

const EntryBody = props => {
    const lines = props.entryData.map((line, index) => {
        return (
            <Container key={index} className="shadow p-3 mb-5 bg-white rounded">
                <Row>
                    <Col>
                        <h2>{line.title}</h2>
                        <small>{Date()}</small>
                        <p>{line.body}</p>
                        <Button onClick={() => props.removeEntry(index)}>Delete</Button>
                        <br></br>
                    </Col>
                </Row>
                
            </Container>
        )
    })

    return (
        <div>
            {lines}  
        </div>
    )
}

const Entries = (props) => {

        const { entryData, removeEntry } = props;

        return (
            <div>
                <h2 style={{paddingTop: "20px", paddingBottom: "20px"}}>My Entries</h2>
                <br></br>

                <EntryHeader />
                <EntryBody entryData={entryData} removeEntry={removeEntry}/>
                <br></br>
            </div>

        )

}

export default Entries