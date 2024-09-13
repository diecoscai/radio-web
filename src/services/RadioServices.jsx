import config from "../config";

//Get top 10 radios by ranking
export const getTrendingRadios = async () => {
    try {
        const response = await fetch(`${config.API_URL}/radio/find?ranking=10`);
        if (!response.ok) {
            throw new Error('Networ response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching top radios: ", error);
        throw error;
    }
}


// //Get radio by Id
// export const getRadioById = async (id) => {
//     try {
//         const response = await fetch(`${config.API_URL}/radio/${id}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data.data;
//     } catch (error) {
//         console.error(`Error fetching radio with id ${id}: `, error);
//         throw error;
//     }
// };

// //Get radio by atribute
// export const searchRadios = async (params) => {
//     const searchParams = new URLSearchParams();

//     //Create an URL with the atributes selected
//     Object.entries(params).forEach(([key, value]) => {
//         if (value !== undefined && value !== null && value !== '') {
//             searchParams.append(key, value.toString());
//         }
//     });

//     const url = `${config.API_URL}/radio/find?${searchParams.toString()}`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data.data;
//     } catch (error) {
//         console.error('Error fetching radios:', error);
//         throw error;
//     }
// }