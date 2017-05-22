import React from 'react';
import moment from 'moment';
import { ListGroupItem } from 'react-bootstrap';

export default ({ tweet }) => {
    const trashButtonStyle = {
        bottom: '8px',
        cursor: 'pointer',
        position: 'absolute',
        right: '14px',
    };

    return (
        <ListGroupItem>
            <h4>
                { tweet.author }
                <small className="pull-right">{ moment(tweet.created_at + "-00:00").fromNow() }</small>
            </h4>

            <p>{ tweet.text }</p>
            <i className="ion-trash-a" style={ trashButtonStyle } />
        </ListGroupItem>
    );
}
