import React, { Component } from 'react';

import { FormControl, HelpBlock, Button } from 'react-bootstrap';

export default class AddTweet extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        };
    }

    handleInputChange(input) {
        this.setState({ input });
    }

    handleSubmit() {
        this.props.addTweet(this.state.input);

        this.setState({ input: '' });
    }

    render() {
        return (
            <div>
                <FormControl
                    type="text"
                    value={ this.state.input }
                    placeholder="Enter text"
                    onChange={(e) => { this.handleInputChange(e.target.value) }}
                />

                <FormControl.Feedback />
                <HelpBlock bsClass={ this.state.input.length > 140 ? 'alert-danger' : '' }>{ 140 - this.state.input.length } characters remaining</HelpBlock>

                <br /><br />
                <Button bsClass="btn btn-primary" disabled={ ! this.state.input || this.state.input.length > 140 } onClick={ () => { this.handleSubmit() }}>Tweet</Button>
            </div>
        );
    }

}
