const playlistContainerTag = document.getElementsByClassName("playlistContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const imgTag = document.getElementsByClassName("img")[0];
const imgAndAudioTag = document.getElementsByClassName("imgAndAudio")[0];

const tracks = [
    { trackId: "music/track1.mp3", imgSrc: "images/shutdown.jfif", title: "Shut Down" },
    { trackId: "music/track2.mp3", imgSrc: "images/lovesickgirl (2).jfif", title: "Lovesick Girl" },
    { trackId: "music/track3.mp3", imgSrc: "images/howyoulikethat.png", title: "How You Like That" },
    { trackId: "music/track4.mp3", imgSrc: "images/ddududdudu.jfif", title: "Ddu Du Ddu Du" },
    { trackId: "music/track5.mp3", imgSrc: "images/killthislove.jfif", title: "Kill This Love" },
];



for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.classList.add("trackItem");
    const imgTag = document.createElement("img");
    imgTag.classList.add("image");
    imgTag.src = tracks[i].imgSrc;
    const titleNumber = (i + 1).toString() + ". ";
    const title = tracks[i].title;
    trackTag.append(titleNumber, imgTag, title)
    playlistContainerTag.append(trackTag);
};