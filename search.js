let categori = [
   {
    image: "./search img/image 3.svg",
    title: "Pakaian Pria",
   },
   {
    image: "./search img/rBVaWVwbCjOARccwAAENKTtEpWg078 1.svg",
    title: "Pakaian Wanita",
   },
   {
    image: "./search img/image 3 (1).svg",
    title: "Celana Pria",
   },
   {
    image: "./search img/image 3 (2).svg",
    title: "Celana Wanita",
   },
   {
    image: "./search img/image 3 (3).svg",
    title: "Sepatu",
   },

];
let categoriya = document.getElementById('kategori');
for(element of categori){
    let mainDiv = document.createElement('div');
    categoriya.appendChild(mainDiv);
    mainDiv.className = 'mainDiv';

    let imageTag = document.createElement('img');
    mainDiv.appendChild(imageTag);
    imageTag.src = element.image;
    imageTag.className = "images";

    let titleTag = document.createElement('p');
    mainDiv.appendChild(titleTag);
    titleTag.textContent = element.title;
    titleTag.className = 'titles';
}
let elektronic = [
    {
    image: "./search img/image 3 (4).svg",
    title: "Elektronik",
   },
   {
    image: "./search img/image 3 (5).svg",
    title: "Perlengkapan Rumah",
   },
   {
    image: "./search img/image 3 (6).svg",
    title: "Perawatan & Kecantikan",
   },
   {
    image: "./search img/image 3 (7).svg",
    title: "Komputer & Aksesoris",
   },
   {
    image: "./search img/image 3 (8).svg",
    title: "Handphone & Aksesoris",
   },
];
let categoriya2 = document.getElementById('kategori2');
for(element of elektronic){
    let mainDiv = document.createElement('div');
    categoriya2.appendChild(mainDiv);
    mainDiv.className = 'mainDiv';

    let imageTag = document.createElement('img');
    mainDiv.appendChild(imageTag);
    imageTag.src = element.image;
    imageTag.className = "images";

    let titleTag = document.createElement('p');
    mainDiv.appendChild(titleTag);
    titleTag.textContent = element.title;
    titleTag.className = 'titles';
}

let popular = [
    {
     image: "./search img/Новая папка/image 3 (5).svg",
     title: "T-Shirt Flamengo",
    },
    {
     image: "./search img/Новая папка/image 3.svg",
     title: "HyperX Alloy FPS 63201",
    },
    {
     image: "./search img/Новая папка/image 3 (1).svg",
     title: "Sepatu Nike",
    },
    {
     image: "./search img/Новая папка/image 3 (2).svg",
     title: "Kacamata Hitam",
    },
    {
     image: "./search img/Новая папка/image 3 (3).svg",
     title: "Dress Wanita",
    },
    {
        image: "./search img/Новая папка/image 3 (4).svg",
        title: "Smart Watch",
    },
 
 ];

 let categoriya3 = document.getElementById('kategori3');
for(element of popular){
    let mainDiv = document.createElement('div');
    categoriya3.appendChild(mainDiv);
    mainDiv.className = 'mainDiv';

    let imageTag = document.createElement('img');
    mainDiv.appendChild(imageTag);
    imageTag.src = element.image;
    imageTag.className = "images";

    let titleTag = document.createElement('p');
    mainDiv.appendChild(titleTag);
    titleTag.textContent = element.title;
    titleTag.className = 'titles';
}