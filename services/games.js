export const FetchGames = async(params) => {
    try {
        const response = await fetch(`https://mmo-games.p.rapidapi.com/${params}`, {
        method: "GET",
        headers: {
		"x-rapidapi-host": "mmo-games.p.rapidapi.com",
		"x-rapidapi-key": "96fa88043dmsh76c2a78e77c1c6bp17cd8ajsn6cc0625e7279"
	    }
        })
        const lista = await response.json();
        return lista;
    } 
    catch (error) {
        console.error(error.message);
    }
}