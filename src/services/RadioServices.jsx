import config from "../config";
import radios from "../../radios.json";

//Get top 10 radios by ranking
export const getTrendingRadios = async () => {
    try {
        const sortedRadios = radios.data.sort((a, b) => a.ranking - b.ranking);
        return sortedRadios.slice(0, 10);
    } catch (error) { 
        console.error("Error fetching top radios: ", error);
        throw error;
    }
}

//Get radio by country
export const getRadioByCountry = async (country) => {
    try {
        return radios.data.filter(radio => 
            radio.country.toLowerCase() === country.toLowerCase()
        ).slice(0, 10);
    } catch (error) {
        console.error(`Error fetching radio with country ${country}: `, error);
        throw error;
    }
}

//Get radio by Id
export const getRadioById = async (id) => {
    try {
        return radios.data.find(radio => radio.id === parseInt(id));
    } catch (error) {
        console.error(`Error fetching radio with id ${id}: `, error);
        throw error;
    }
};

//Get radio by atribute
export const searchRadios = async (params) => {
    try {
        return radios.data.filter(radio => {
            return Object.entries(params).every(([key, value]) => {
                if (!value) return true;
                if (key === 'genre') {
                    return radio.genres.includes(value.toLowerCase());
                }
                if (key === 'country') {
                    return radio.country.toLowerCase() === value.toLowerCase();
                }
                return radio[key]?.toString().toLowerCase().includes(value.toLowerCase());
            });
        });
    } catch (error) {
        console.error('Error fetching radios:', error);
        throw error;
    }
}

// Get all radio genres
export const getRadioGenres = async () => {
    try {
        const allGenres = radios.data.reduce((genres, radio) => {
            radio.genres.forEach(genre => genres.add(genre));
            return genres;
        }, new Set());
        return Array.from(allGenres).slice(0, 5);
    } catch (error) {
        console.error('Error fetching radio genres:', error);
        throw error;
    }
}

//Get radio by genre
export const getRadioByGenre = async (genre) => {
    try {
        return radios.data.filter(radio => 
            radio.country.toLowerCase() === 'usa' && 
            radio.genres.includes(genre.toLowerCase())
        );
    } catch (error) {
        console.error(`Error fetching radio with genre ${genre}: `, error);
        throw error;
    }
}