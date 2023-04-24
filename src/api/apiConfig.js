const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8603be6b23d5239905f00f485c87e996',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}
export default apiConfig;