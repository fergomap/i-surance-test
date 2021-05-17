import { APP_CONSTANTS } from '../config/constants';

export const loadTweets = async(query) => {
    const params = new URLSearchParams();
    params.append('lang', 'es');
    params.append('q', query);

    const response = await fetch(`${APP_CONSTANTS.ENDPOINT}?${params}`, APP_CONSTANTS.HEADERS);
    const data = await response.json();
    return data.statuses;
};

export const loadMoreTweets = async(query, maxId) => {
    const params = new URLSearchParams();
    params.append('lang', 'es');
    params.append('q', query);
    params.append('max_id', maxId);

    const response = await fetch(`${APP_CONSTANTS.ENDPOINT}?${params}`, APP_CONSTANTS.HEADERS);
    const data = await response.json();
    return data.statuses;
};
