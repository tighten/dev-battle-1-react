import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import update from 'react-addons-update';

import TweetList from './TweetList';
import AddTweet from './AddTweet';

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
            this.setState({ tweets: response.data });
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
            const tweets = update(this.state.tweets, {
                 $push: [response.data]
            });

            this.setState({ tweets });

        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <AddTweet addTweet={ (tweet) => { this.addTweet(tweet) }} />

                <hr />

                <TweetList tweets={ this.state.tweets } />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('example'));
