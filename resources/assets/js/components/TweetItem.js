import React from 'react';
import moment from 'moment';
import { ListGroupItem, Image } from 'react-bootstrap';

export default ({ deleteTweet, tweet }) => {
    const trashButtonStyle = {
        bottom: '8px',
        cursor: 'pointer',
        position: 'absolute',
        right: '14px',
    };

    // No author information in the API besides the 'author' field in tweets, so we're gonna hard-code this badboy
    const profileImage = () => {
        switch(tweet.author) {
            case 'Samantha Geitz':
                return 'sam.jpg';
            case 'Keith Damiani':
                return 'keith.jpg';
            case 'drumpf':
                return 'drumpf.jpg';
            default:
                return 'default.png';
        }
    };

    return (
        <ListGroupItem>
            <div className="row">
                <div className="col-md-2">
                    <img src={`/images/${ profileImage() }`} className="img-thumbnail" height="80px" />
                </div>

                <div className="col-md-10">
                    <h4>
                        { tweet.author }
                        <small className="pull-right">{ moment(tweet.created_at + "-00:00").fromNow() }</small>
                    </h4>

                    <p>{ tweet.text }</p>
                    <i className="ion-trash-a" onClick={ () => deleteTweet(tweet.id) } style={ trashButtonStyle } />
                </div>
            </div>

        </ListGroupItem>
    );
}
