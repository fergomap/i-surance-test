import { APP_CONSTANTS } from '../config/constants';

export const loadTweets = async(query, maxId) => {
    const params = new URLSearchParams();
    params.append('lang', 'es');
    params.append('q', query);

    if (maxId) {
        params.append('max_id', maxId);
    }

    const response = await fetch(`${APP_CONSTANTS.ENDPOINT}?${params}`, APP_CONSTANTS.HEADERS);
    const data = await response.json();
    return data.statuses;
};
