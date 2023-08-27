//Client side
//made api calls
//display in page.tsx

export const getMovies = async () => {
    const url = "/api/get-movies"
    // picks the base url during runtime
    const response = await fetch ( url );
if(!response.ok){
    return 'Error fetching movies'
}
    const result = await response.json();
    return result.results;
}