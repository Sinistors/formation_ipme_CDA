export function generatePassword(characterNb:number):string 
{
    let password:string = "";
    
    for (let i = 0; i < characterNb; i++) 
    {
        password += String.fromCharCode(33 + Math.floor(Math.random() * 89));     
    }

    return password;
}