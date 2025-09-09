import IGame from "./interface/steamish/IGame";
import IResponse from "./interface/steamish/IResponse";

let page: number = 1;
let isFetching:boolean = false;

let gameListDiv: HTMLDivElement | null = document.querySelector("#gameList");
let searchBarElement: HTMLInputElement | null = document.querySelector("#searchBar");

findNextGames();

function findNextGames():void
{
    if (gameListDiv != null) 
    {
        isFetching = true;
        let apiCall:string = 'https://api.rawg.io/api/games?key=' + '8663bd76098941f2852fcd0bbb1d700e'+ '&page=' + page;
        if (searchBarElement != null && searchBarElement.value != "") 
        {
            apiCall += "&search=" + searchBarElement.value;    
        }
        fetch(apiCall)
        .then((response: Response): Promise<any> => {
            console.log(response);
            return response.json()
        })
        .then((data: IResponse):void => {
            console.log(data);
            let games: Array<IGame> = data.results;

            
            for (let game of games)
            {
                let gameElement: HTMLDivElement = document.createElement("div");
                gameElement.innerHTML = 
                "<h2>" + game.name + "</h2>" +
                "<img src='" + game.background_image + "' height='100px'>";
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

