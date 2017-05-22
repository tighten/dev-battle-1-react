import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TweetItem from './TweetItem';

export default ({ deleteTweet, tweets }) => {
    return (
        <ListGroup>
            { tweets.map((tweet, i) => { return <TweetItem deleteTweet={ deleteTweet } tweet={ tweet } key={ i } /> }) }
        </ListGroup>
    );
}
