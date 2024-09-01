// const API_KEY = '45718127-30771d56f6b088ceef33bd7c7';
// const BASE_URL = 'https://pixabay.com';

// export const fetchRequest = (value) => {
// const urlOptions = new URLSearchParams({
//     key: API_KEY,
//     q: value,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
// });
    
//     console.log(`${baseURL}/api/?${urlOptions}`);
//    return fetch(`${baseURL}/api/?${urlOptions}`)
//     .then((resolve) => {
//         if (!resolve.ok) {
//             throw new Error("Error!")
//         }
//         return resolve.json();
//     })
// }

export async function fetchImages(query, page = 1) {
    const API_KEY = '45718127-30771d56f6b088ceef33bd7c7';
    const BASE_URL = 'https://pixabay.com/api/';
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
}