import config from "../config/config";

export const getMovieById = async ( movieId, language = 'es-MX') => {

    const { ApiKey, Endpoint } = config;
    const url = `${Endpoint}/movie/${movieId}?api_key=${ApiKey}&language${language}`;
    const resp = await fetch( url );
    const result = await resp.json();

    return result;
}