import React, { Component } from 'react';

const EntryHeader = () => {
    return <h3>Title</h3>
}

const EntryBody = props => {
    const lines = props.entryData.map((line, index) => {
        return (
            <div key={index}>
                <h2>{line.title}</h2>
                <p>{line.body}</p>
                <button onClick={() => props.removeEntry(index)}>Delete</button>
                <br></br>
            </div>
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
                <h2>My Entries</h2>
                <br></br>

                <EntryHeader />
                <EntryBody entryData={entryData} removeEntry={removeEntry}/>
                <br></br>
            </div>

        )

}

export default Entries