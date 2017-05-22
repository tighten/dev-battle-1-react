import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import { Button } from 'react-bootstrap';

import ComposeTweet from './ComposeTweet';
import TweetList from './TweetList';

export default class App extends Component {
    constructor(){
        super();

        this.state = {
            showModal: false,
            tweets: []
        }
    }

    componentDidMount() {
        axios({
            method:'get',
            url:'http://battle-api.tighten.co/api/tweets',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ DevBattle.auth }`
            }
        }).then((response) => {
            this.setState({ tweets: response.data.reverse() });
        }).catch((error) => {
            console.log(error);
        });
    }

    addTweet(tweet) {
        axios({
            method:'post',
            url:'http://battle-api.tighten.co/api/tweets',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ DevBattle.auth }`
            },
            data: {
                "author": "Samantha Geitz",
                "text": tweet,
                "image": "base 64 encoded image here"
            }
        }).then((response) => {
            const tweets = [response.data, ...this.state.tweets];

            this.setState({ tweets, showModal: false });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <Button bsStyle="primary" bsSize="large" onClick={ () => { this.setState({ showModal: true }) }}>
                    Compose Tweet
                </Button>

                <ComposeTweet addTweet={ (tweet) => this.addTweet(tweet) }
                              showModal={ this.state.showModal }
                              close={ () => this.setState({ showModal: false }) } />

                <hr />

                <TweetList tweets={ this.state.tweets } />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('example'));
