import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TweetItem from './TweetItem';

export default ({ likeTweet, deleteTweet, tweets }) => {
    return (
        <ListGroup>
            { tweets.map((tweet, i) => { return <TweetItem likeTweet={ likeTweet } deleteTweet={ deleteTweet } tweet={ tweet } key={ i } /> }) }
        </ListGroup>
    );
}
