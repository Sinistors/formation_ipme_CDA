import { Game } from "./Game";

export class GameLibrary
{
    private _name: string;
    private _games: Array<Game> = [];

    constructor(name: string)
    {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public addGame(game: Game)
    {
        this._games.push(game);
    }

    private FindGameIndex(gameName: string): number
    {
        for (let i = 0; i < this._games.length; i++) 
        {
            if (gameName.toLowerCase() == this._games[i].name.toLowerCase()) 
            {
                return i;
            }
        }
        return -1;
    }

    public removeGame(gameName: string)
    {
        let i = this.FindGameIndex(gameName);
        if (i == -1) 
        {
            console.log("Game not found to remove.");
            return;    
        }
        this._games.splice(i,1);
    }

    public giveGame(gameName: string, gameLibrary: GameLibrary)
    {
        let i = this.FindGameIndex(gameName);
        if (i == -1) 
        {
            console.log("Game not found to give.");
            return;    
        }
        let games: Array<Game> = this._games.splice(i,1);
        console.log(games);
        gameLibrary.addGame(games[0]);
    }

    public display()
    {
        console.log(this.name + " a " + this._games.length + " jeux :");
        for (let game of this._games)
        {
            game.display();
        }
    }
}