const music = new Audio('audio/Passion.mp3');

music.play();

const songs = [
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    },
    {
        id:'Wherever',
        songName:`Wherever you lead me
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Wherever.jpg',

    },
    {
        id:'Cream',
        songName:`Cream 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Cream.jpg',

    },
    {
        id:'Movie',
        songName:`Movie
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Movie.jpg',

    },
    {
        id:'Rainy',
        songName:`Rainy Thoughts
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Rainy.jpg',

    },    
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    },
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    },
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    },
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    },
    {
        id:'Wherever',
        songName:`Wherever you lead me
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Wherever.jpg',

    },
    {
        id:'Cream',
        songName:`Cream 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Cream.jpg',

    },
    {
        id:'Movie',
        songName:`Movie
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Movie.jpg',

    },
    {
        id:'Rainy',
        songName:`Rainy Thoughts
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Rainy.jpg',

    },
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    },
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    },
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    },
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    },
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    },
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    },
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    },
    {
        id:'Passion',
        songName:`Passion 
        <br>
        <div class="subtitle">Uthum</div>`,
        poster:'img/Passion.jpg',

    }
];

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    if (songs.length > i && songs[i].poster) {
        e.getElementsByTagName('img')[0].src =  songs[i].poster;
        e.getElementsByTagName('h5')[0].innerHTML =  songs[i].songName;
    } else {
        console.error(`Unable to set song item ${i} poster and name`);
    }
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
});

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft -= 330;
});

const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((e)=>{
        e.style.background = 'rgb(144, 118, 142, .0)';
    });
}

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.remove('fa-play');
        el.classList.add('fa-pause');
    });
}

var index="";
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        music.src='audio/'+index+'.mp3';
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        music.play();

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach((elss)=>{
            let {songName, poster} = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        });

        Array.from(document.getElementsByClassName('songItem'))[songs.indexOf(index)-1].style.background = "rgb(144, 118, 142, .1)";
        makeAllPlays();
        el.target.classList.add('fa-play');
        el.target.classList.remove('fa-pause');
        wave.classList.add('active1');
    });
});

let currentStartTime = document.getElementById('currentStart');
let currentEndTime = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    if (sec1 < 10) {
        sec1 = "0"+sec1;
    }
    currentEndTime.innerText = min1+":"+sec1;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);

    if (sec2 < 10) {
        sec2 = "0"+sec2;
    }

    currentStartTime.innerText = min2+":"+sec2;

    let progress = parseInt((music_curr/music_dur) *100);
    seek.value = progress;
    let seekbar = seek.value;
    bar2.style.width =`${seekbar}%`;
    dot.style.left =`${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration/100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementsById('vol_dot');

let download = document.getElementById('download_music');

download.addEventListener('click',()=>{
    let a = document.createElement('a');
    a.href = music.src;
    a.download = music.src;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

vol.addEventListener('change',()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('fa-volume-up');
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-off');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('fa-volume-up');
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-mute');
    }

    if (vol.value > 70) {
        vol_icon.classList.remove('fa-volume-up');
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-mute');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});