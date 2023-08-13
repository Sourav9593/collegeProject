const menu = document.getElementById("menu");
const play = document.getElementById("play");
const title = document.getElementById("title");
const body = document.getElementById("body");
const song = document.getElementById('song');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById("progress");
const light = document.getElementById("light");
// const bg = document.getElementById("bg");

// sidebar handler
menu.addEventListener("click",()=>{
    document.getElementById("sidebar1").classList.toggle("hiddenShow");
})

// darkmode/lightmode
light.addEventListener('click',()=>{
    let element = document.querySelector("link");
    if(element.getAttribute("href") === "light.css"){
        element.setAttribute("href", "dark.css")
        light.classList.replace('fa-moon','fa-sun')
    }else{
        element.setAttribute("href", "light.css")
        light.classList.replace('fa-sun','fa-moon')
    }   
})


let isPlay=false;
play.addEventListener("click",()=>{
    
    if(isPlay===false){
        song.play();
        isPlay=true
        play.classList.replace('fa-play','fa-pause');
        body.classList.add('animate');
        body.style.display="block"
        title.style.display="block"
    }
    else{
        song.pause();
        isPlay=false;
        play.classList.replace('fa-pause','fa-play');
        body.classList.remove('animate');
        body.style.display="none"
        title.style.display="none"
    }
})

next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);

const playList=[
    {title:"Bones",
    song:"./songs/BONES.mp3"
    },

    {title:"Believer",
    song:"./songs/Believer.m4a"
    },

    {title:"cold play",
    song:"./songs/cold play.mp3"
    },

    {title:"Cradles",
    song:"./songs/Cradles.mp3"
    },

    {title:"Despacito",
    song:"./songs/Despacito.mp3"
    },

    {title:"Faded",
    song:"./songs/Faded.mp3"
    },

    {title:"Shape Of You",
    song:"./songs/Shape_Of_You.mp3"
    },

    {title:"Let-Me-Down-Slowly",
    song:"./songs/Let-Me-Down-Slowly.mp3"
    },

    {title:"Play-Date",
    song:"./songs/Play-Date.mp3"
    },

    {title:"Unholy",
    song:"./songs/Unholy.mp3"
    },
    {title:"Gangnam Style",
    song:"./songs/Gangnam Style.mp3"
    },
    {title:"Let Me Love You",
    song:"./songs/Let-Me-Love-You.mp3"
    }
]

let index=0
const loadSong = (playList)=>{
    song.src = `${playList.song}`
    title.innerHTML = `${playList.title}`
}
loadSong(playList[0]);


next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);

function nextSong(){
    index++;
    loadSong(playList[index % playList.length]); 
    song.play();
    play.classList.replace('fa-play','fa-pause');
    image.classList.add('animate');
}

function prevSong(){
    index--;
    loadSong(playList[index % playList.length]);
    song.play();
    play.classList.replace('fa-play','fa-pause');
    image.classList.add('animate');
}

// play music from sidebar

document.getElementById("bones").addEventListener("click",()=>{
    song.src = `./songs/BONES.mp3`
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("believer").addEventListener("click",()=>{
    song.src = playList[1].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("cold").addEventListener("click",()=>{
    song.src = playList[2].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("cradles").addEventListener("click",()=>{
    song.src = playList[3].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("despacito").addEventListener("click",()=>{
    song.src = playList[4].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("faded").addEventListener("click",()=>{
    song.src = playList[5].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("shape").addEventListener("click",()=>{
    song.src = playList[6].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("letme").addEventListener("click",()=>{
    song.src = playList[7].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("playDate").addEventListener("click",()=>{
    song.src = playList[8].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("unholy").addEventListener("click",()=>{
    song.src = playList[9].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("gangnam").addEventListener("click",()=>{
    song.src = playList[10].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("letmeloveyou").addEventListener("click",()=>{
    song.src = playList[11].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})

// play music from cards

document.getElementById("one").addEventListener("click",()=>{
    song.src = `./songs/BONES.mp3`
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("two").addEventListener("click",()=>{
    song.src = playList[1].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("three").addEventListener("click",()=>{
    song.src = playList[2].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("four").addEventListener("click",()=>{
    song.src = playList[3].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("five").addEventListener("click",()=>{
    song.src = playList[4].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("six").addEventListener("click",()=>{
    song.src = playList[5].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("seven").addEventListener("click",()=>{
    song.src = playList[6].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("eight").addEventListener("click",()=>{
    song.src = playList[7].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("nine").addEventListener("click",()=>{
    song.src = playList[8].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("ten").addEventListener("click",()=>{
    song.src = playList[9].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("eleven").addEventListener("click",()=>{
    song.src = playList[10].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})
document.getElementById("twelve").addEventListener("click",()=>{
    song.src = playList[11].song
    song.play()
    isPlay=true
    play.classList.replace('fa-play','fa-pause');
    body.classList.add('animate');
})

// progressbar

song.addEventListener("timeupdate",(event)=>{
    const {currentTime , duration } = event.srcElement
    let progress_percentage = (currentTime/duration)*100
    progress.style.width = `${progress_percentage}%`;
    document.getElementById("current_time").innerHTML=(currentTime/60).toFixed(2);
    if(duration){
        document.getElementById(`duration`).innerHTML=(duration/60).toFixed(2);
    }    
})


// #Login Page 

// const btn = document.getElementById("btn")
// btn.addEventListener('click',()=>{
//     let data = document.getElementById("name").value;
//     alert(data)
// })

function getVal() {
    const val = document.getElementById('name').value;
    alert(`${val.toUpperCase()} You are Successfully Login`);
  }