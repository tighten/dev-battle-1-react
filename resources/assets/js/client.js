import axios from 'axios';

const baseUrl = 'http://battle-api.tighten.co/api';
const headers = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${ DevBattle.auth }`
};

export default {
    getTweets() {
        return new Promise((resolve, reject) => {
            axios({
                method:'get',
                url:`${ baseUrl }/tweets`,
                headers
            }).then((response) => {
                return resolve(response);
            }).catch((error) => {
                return reject(error);
            });
        });
    },

    addTweet(tweet) {
        return new Promise((resolve, reject) => {
            axios({
                method:'post',
                url:`${ baseUrl }/tweets`,
                headers,
                data: {
                    "author": "Samantha Geitz",
                    "text": tweet,
                    "image": "base 64 encoded image here"
                }
            }).then((response) => {
                return resolve(response);
            }).catch((error) => {
                return reject(error);
            });
        });
    },

    likeTweet(id) {
        return new Promise((resolve, reject) => {
            axios({
                method:'post',
                url:`${ baseUrl }/tweets/${ id }/likes`,
                headers
            }).then((response) => {
                return resolve(response);
            }).catch((error) => {
                return reject(error);
            });
        });
    },

    deleteTweet(id) {
        return new Promise((resolve, reject) => {
            axios({
                method:'delete',
                url:`${ baseUrl }/tweets/${ id }`,
                headers,
            }).then((response) => {
                return resolve(response);
            }).catch((error) => {
                return reject(error);
            });
        });
    },
}
