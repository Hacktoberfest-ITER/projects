function FetchFunction(){
fetch('https://meme-api.herokuapp.com/gimme')
    .then(data => data.json())
    .then(jokeData => {
        console.log(jokeData);
        var size = jokeData.preview;
        var nsfw = jokeData.nsfw;
        console.log(nsfw);
        if(nsfw==true){
            FetchFunction();
        }
        console.log(size.length);
        const jokeText = jokeData.preview[size.length-1];
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.src = jokeText;
    })
}
FetchFunction();