//song list
let All_song = [
  {
    name: "AUR  TU HAI KAHAN",
    singer : "Usama Ali",
    img: "data/AUR-TU-HAI-KAHAN.jpg",
    path: "data/AUR-TU-HAI-KAHAN.mp3",
},
{
    name: "With You",
    singer : "Ap Dhillon",
    img: "data/With-You.jpg",
    path: "data/With-You.mp3",
},
{
    name: "Suzume",
    singer : "Makoto Shinkai",
    img: "data/Suzume.jpg",
    path: "data/Suzume.mp3",
},
{
    name: "YALGAAR",
    singer : "Carryminati",
    img: "data/YALGAAR.jpg",
    path: "data/YALGAAR.mp3",
},
{
    name: "SOFTLY",
    singer : "Karan Aujla",
    img: "data/SOFTLY.jpg",
    path: "data/SOFTLY.mp3",
},
{
    name: "Khalasi",
    singer : "Aditya Gadhvi",
    img: "data/Khalasi.png",
    path: "data/Khalasi.mp3",
},
{
    name: "One Love",
    singer : "Usama Ali",
    img: "data/One-Love.jpg",
    path: "data/One-Love.mp3",
},
{
    name: "Love Dose",
    singer : "Yo Yo Honey Singh",
    img: "data/Love-Dose.jpg",
    path: "data/Love-Dose.mp3",
},
{
    name: "Dope Shope",
    singer : "Yo Yo Honey Singh",
    img: "data/Dope-Shope.jpg",
    path: "data/Dope-Shope.mp3",
},
{
    name: "Closer x Apna Bana Le",
    singer : "UNKNOWN",
    img: "data/Closer-x-Apna-Bana-Le.jpg",
    path: "data/Closer-x-Apna-Bana-Le.mp3",
}
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/