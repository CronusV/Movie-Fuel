import config from './config.json';

const key = config.TMDB_accessToken;

async function getImagesByID(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=en&language=en`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${key}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok (status ${response.status})`);
        }

        const json = await response.json();

        if (json.posters && json.posters.length > 0) {
            return buildImageURL(json.posters[0].file_path);
        } else {
            return ''; // Return an empty string if no image is found
        }
    } catch (err) {
        console.error('Error:', err);
        return ''; // Return an empty string on error
    }
}

function buildImageURL(path) {
    return `https://image.tmdb.org/t/p/original${path}`;
}

export default getImagesByID;
