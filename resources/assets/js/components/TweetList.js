import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TweetItem from './TweetItem';

export default ({ tweets }) => {
    return (
        <ListGroup>
            { tweets.map((tweet, i) => { return <TweetItem tweet={ tweet } key={ i } /> }) }
        </ListGroup>
    );
}
