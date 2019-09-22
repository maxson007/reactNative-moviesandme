const API_TOKEN = "XXXXXXXXXXXXXdafafafXXXXXfafa9àiàççàjfijéiXXX56cae6b4fb9179svsvsvsvzvzrvzrvzkmpkma990I9hjknd66f27dc4c7f04403a";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}
