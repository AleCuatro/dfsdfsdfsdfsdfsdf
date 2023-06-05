async function hola() => {
const gif = await fetch("https://nekos.best/api/v2/slap");
return console.log(gif)
} 
hola()
