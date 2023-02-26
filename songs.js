document.addEventListener("keypress",function(event){
    makesound(event.key);
});

function makesound(key){
    switch(key){
        case "a":
            var aud1 = new Audio("/Users/atharvmishra/Desktop/Projects/SongsLib/Vande Mataram - India National Songs.mp3");
            aud1.play();
            break;

        case "b":
            var aud2 = new Audio("/Users/atharvmishra/Desktop/Projects/SongsLib/Maa Tujhe Saalam - A R Rahman.mp3");
            aud2.play();
            break;
        
        case "c":
            var aud2 = new Audio("/Users/atharvmishra/Desktop/Projects/SongsLib/Chak De India.mp3");
            aud2.play();
            break;

        default:
            alert("no audio");
            break;
            
    }
}
