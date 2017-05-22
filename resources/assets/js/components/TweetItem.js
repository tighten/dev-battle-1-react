import React from 'react';
import moment from 'moment';
import { ListGroupItem } from 'react-bootstrap';
import ReactEmoji from 'react-emoji';

export default ({ likeTweet, deleteTweet, tweet }) => {
    const favoriteCountStyle = {
        bottom: '-19px',
        position: 'absolute',
        right: '55px',
    };

    const favoriteButtonStyle = {
        cursor: 'pointer',
        position: 'absolute',
        right: '40px',
    };

    const trashButtonStyle = {
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
                <div className="col-xs-3 col-sm-2">
                    <img src={`/images/${ profileImage() }`} className="img-thumbnail" height="80px" />
                </div>

                <div className="col-xs-7 col-sm-8">
                    <h4>
                        { tweet.author }
                    </h4>

                    <p>{ ReactEmoji.emojify(tweet.text) }</p>
                    <small>{ moment(tweet.created_at + "-00:00").fromNow() }</small>
                </div>

                <div className="col-xs-2">

                    <span style={ favoriteCountStyle }>{ tweet.like_count }</span>
                    <i className="ion-android-favorite" onClick={ () => likeTweet(tweet.id) } style={ favoriteButtonStyle } />
                    <i className="ion-trash-a" onClick={ () => deleteTweet(tweet.id) } style={ trashButtonStyle } />
                </div>
            </div>

        </ListGroupItem>
    );
}
