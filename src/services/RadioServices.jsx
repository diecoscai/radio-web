import config from "../config";

//Get top 10 radios by ranking
export const getTrendingRadios = async () => {
    try {
        const response = await fetch(`${config.API_URL}/radio/find?ranking=10`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.statusCode === 200) {
            return data.data;
        } else {
            throw new Error('Invalid data structure received from API');
        }
    } catch (error) { 
        console.error("Error fetching top radios: ", error);
        throw error;
    }
}

//Get radio by country
export const getRadioByCountry = async (country) => {
    try {
        const response = await fetch(`${config.API_URL}/radio/find?ranking=10&country=${country}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.statusCode === 200) {
            return data.data;
        } else {
            throw new Error('Invalid data| structure received from API');
        }
    } catch (error) {
        console.error(`Error fetching radio with country ${country}: `, error);
        throw error;
    }
}


//Get radio by Id
export const getRadioById = async (id) => {
    try {
        const response = await fetch(`${config.API_URL}/radio/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(`Error fetching radio with id ${id}: `, error);
        throw error;
    }
};

//Get radio by atribute
export const searchRadios = async (params) => {
    const searchParams = new URLSearchParams();

    //Create an URL with the atributes selected
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
            searchParams.append(key, value.toString());
        }
    });

    const url = `${config.API_URL}/radio/find?${searchParams.toString()}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching radios:', error);
        throw error;
    }
}

// Get all radio genres
export const getRadioGenres = async () => {
    try {
        const response = await fetch(`${config.API_URL}/radio/genres`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data.slice(0, 5);
    } catch (error) {
        console.error('Error fetching radio genres:', error);
        throw error;
    }
}

//Get radio by genre
export const getRadioByGenre = async (genre) => {
    try {
        const response = await fetch(`${config.API_URL}/radio/find?country=usa&genre=${genre}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.statusCode === 200) {
            return data.data;
        } else {
            throw new Error('Invalid data structure received from API');
        }
    } catch (error) {
        console.error(`Error fetching radio with genre ${genre}: `, error);
        throw error;
    }
}