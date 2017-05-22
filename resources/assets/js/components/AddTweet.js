import React, { Component } from 'react';

import { FormControl, HelpBlock, Button } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
bootstrapUtils.addStyle(HelpBlock, 'custom');

import EmojiPicker from './EmojiPicker';

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

    handleEmojiSelect(emoji) {
        this.setState({
            input: this.state.input + ' ' + emoji
        });
    }

    helpBlockColor() {
        const remaining = 140 - this.state.input.length;

        if (remaining >= 21) {
            return '#000';
        } else if (remaining <= 10) {
            return '#ff0000';
        }

        return '#8b0000';
    }

    render() {
        return (
            <div>
                <style type="text/css">{`
                    .help-block-custom {
                        color: ${ this.helpBlockColor() };
                    }
                `}</style>

                <FormControl
                    type="text"
                    value={ this.state.input }
                    placeholder="Enter text"
                    onChange={(e) => { this.handleInputChange(e.target.value) }} />

                <EmojiPicker onEmojiSelect={ emoji => this.handleEmojiSelect(emoji) }/>

                <FormControl.Feedback />
                <HelpBlock bsStyle="custom">{ 140 - this.state.input.length } characters remaining</HelpBlock>

                <br /><br />
                <Button bsClass="btn btn-primary" disabled={ ! this.state.input || this.state.input.length > 140 } onClick={ () => { this.handleSubmit() }}>Tweet</Button>
            </div>
        );
    }

}
