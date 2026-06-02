const lyricsData = [
    { time: 0, text: "Start Song 🎵" },
    { time: 3, text: "Music 🎵" },
    { time: 15, text: "My transistor radio comes from far away" },
    { time: 22, text: "And when it's night over here over  there it's a breakin day" },
    { time: 30, text: "I remember all the good times I had a walkin in the sand" },
    { time: 37, text: "With the beautiful girl that I met made in Japan" },
    { time: 45, text: "The beauty of her face was beyond my wildest dreams" },
    { time: 52, text: "Like cherry blossoms blooming in the mountain in the early spring" },
    { time: 59, text: "As we walked by the river and she softly took hold of my hand" },
    { time: 66, text: "Thats when I fell deep in love with the girl made in Japan" },
    { time: 73, text: "Music 🎵" },
    { time: 101, text: "In the dark of night we would lay on Tokyo Bay" },
    { time: 108, text: "And the singin of the birds woke us up at the break of day" },
    { time: 115, text: "Her smiling eyes always seemed to try to understand" },
    { time: 122, text: "All the love in my heart for the girl made in Japan" },
    { time: 129, text: "My transistor radio comes from far away" },
    { time: 136, text: "And when it's night over here over there it's a breakin day" },
    { time: 143, text: "She cried when she said she'd been promised to another man" },
    { time: 150, text: "Thats when I left my heart with the girl made in Japan" },
    { time: 158, text: "Yes my heart will always be with the girl made in Japan." }
];

const lyricsBox = document.getElementById('lyricsBox');
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');

lyricsData.forEach((line, index) => {
    const p = document.createElement('p');
    p.classList.add('lyric-line');
    p.setAttribute('id', `line-${index}`);
    p.textContent = line.text;
    lyricsBox.appendChild(p);
});

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playBtn.textContent = "Play";
    }
}

audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;

    lyricsData.forEach((line, index) => {
        const currentLineElement = document.getElementById(`line-${index}`);
        
        if (currentTime >= line.time && (index === lyricsData.length - 1 || currentTime < lyricsData[index + 1].time)) {
            document.querySelectorAll('.lyric-line').forEach(el => el.classList.remove('active'));
            currentLineElement.classList.add('active');
            lyricsBox.scrollTop = currentLineElement.offsetTop - lyricsBox.offsetTop - 100;
        }
    });
});