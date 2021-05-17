export const APP_CONSTANTS = {
    ENDPOINT: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json',
    HEADERS: {
        headers: {
            'Authorization': process.env.REACT_APP_TOKEN
        }
    }
};
