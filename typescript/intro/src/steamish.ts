import IGame from "./interface/steamish/IGame";
import IGameDetail from "./interface/steamish/IGameDetail";
import IResponse from "./interface/steamish/IResponse";

let page: number = 1;
let isFetching:boolean = false;
let key:string = '8663bd76098941f2852fcd0bbb1d700e';

let gameListDiv: HTMLDivElement | null = document.querySelector("#gameList");
let searchBarElement: HTMLInputElement | null = document.querySelector("#searchBar");

findNextGames();

function findNextGames():void
{
    if (gameListDiv != null) 
    {
        isFetching = true;
        let apiCall:string = 'https://api.rawg.io/api/games?key=' + key + '&page=' + page;
        if (searchBarElement != null && searchBarElement.value != "") 
        {
            apiCall += "&search=" + searchBarElement.value;    
        }
        fetch(apiCall)
        .then((response: Response): Promise<any> => {
            return response.json()
        })
        .then((data: IResponse):void => {
            let games: Array<IGame> = data.results;

            
            for (let game of games)
            {
                let gameElement: HTMLDivElement = document.createElement("div");
                gameElement.innerHTML = 
                "<a href='/steamish/game.html?id=" + game.id + "'>" +
                "<h2>" + game.name + "</h2>" +
                "<img src='" + game.background_image + "' height='100px'>" +
                "</a>";
                gameListDiv.append(gameElement);
            }
            page++;
            isFetching = false;
        }); 
    }
}

document.addEventListener("scroll", () => 
{
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight-3 && !isFetching) 
    {
        findNextGames();   
    }
});

let timeoutID: ReturnType<typeof setTimeout>;
if (searchBarElement != null) 
{
    searchBarElement.addEventListener("input", () =>
    {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => 
        {
            if (gameListDiv != null) 
            {
                gameListDiv.innerHTML = "";
                page = 1;
                findNextGames();
            }
        }, 500);

    })    
}

const gameDiv: HTMLDivElement | null = document.querySelector("#gameDiv");
if (gameDiv != null) 
{
    let params = new URLSearchParams(document.location.search);
    let gameId: string | null = params.get("id");

    fetch('https://api.rawg.io/api/games/' + gameId + '?key=' + key)
    .then((response: Response): Promise<any> => {
        return response.json()
    })
    .then((game: IGameDetail):void => 
    {
        const title:HTMLTitleElement | null = document.querySelector('title');
        if (title != null) 
        {
            title.textContent = game.name;

            const gameDiv: HTMLDivElement | null = document.querySelector("#gameDiv");

            if (gameDiv != null) 
            {
                gameDiv.innerHTML = 
                "<h2>" + game.name + "</h2>" +
                "<img src='" + game.background_image + "' height='500px'>" +
                "<p>" + game.description + "</p>" +
                "<p>Score : " + game.rating + "</p>" +
                "<p>Date de publication : " + game.released + "</p>"; 
            }
        }

    }); 
}

