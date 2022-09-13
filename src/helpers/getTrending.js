import config from "../config/config";

export const getTrending = async ( media_type = 'all', time_window = 'day') => {

    const { ApiKey, Endpoint } = config;
    const url = `${Endpoint}/trending/${media_type}/${time_window}?api_key=${ApiKey}`;
    const resp = await fetch( url );
    const { results } = await resp.json();

    return results;
}