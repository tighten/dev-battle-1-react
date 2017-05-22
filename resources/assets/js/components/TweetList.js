import React, { Component } from 'react';

import { ListGroup, ListGroupItem } from 'react-bootstrap';
import moment from 'moment';

export default class TweetList extends Component {
    renderTweets() {
        return this.props.tweets.reverse().map((tweet, i) => {
            return (
                <ListGroupItem key={ i }>
                    <h4>
                        { tweet.author }
                        <small className="pull-right">{ moment(tweet.date).calendar() }</small>
                    </h4>

                    <p>{ tweet.text }</p>

                </ListGroupItem>
            );
        });
    }

    render() {
        return (
            <ListGroup>
                { this.renderTweets() }
            </ListGroup>
        );
    }
}
