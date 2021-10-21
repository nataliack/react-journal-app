import React, { Component } from 'react';
import {Button, FormGroup, Input, Label } from 'reactstrap' ;

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            title: '',
            body: ''
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value } = event.target 

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {title, body } = this.state;

        return (
            <div>
                <form>
                    <FormGroup>
                    <br></br>
                    <Label>Title</Label>
                        <Input 
                            placeholder="Enter title"
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={this.handleChange} />
                        </FormGroup>
                        
                            <br></br>
                        <FormGroup>
                        <label>Entry</label>
                        <Input 
                            placeholder="What's up?"
                            type="textarea"
                            name="body"
                            id="body"
                            value={body}
                            onChange={this.handleChange} />
                        </FormGroup>
                </form>
                <br></br>
                <Button onClick={this.submitForm}>Submit</Button>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Form;