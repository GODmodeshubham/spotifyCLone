const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Bella Ciao",
    type: "energetic",
    artist: "El Profesor",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2Fbella%20ciao.mp3?alt=media&token=50f4aa8a-97df-428f-95ca-35a08386d105",
    imgSrc:
      "https://perceptivecolors.files.wordpress.com/2020/05/lede-money-heist-1300x785-1.jpg",
  },
  {
    id: 2,
    favourite: false,
    songName: "Amplifier",
    type: "romantic",
    artist: "Anirudh Ravichander",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2FAmplifier.mp3?alt=media&token=ff589f3c-aa83-466c-b052-ce11d3d2aa9b",
    imgSrc:
      "https://c0.wallpaperflare.com/preview/176/478/441/amplifier-close-up-console-control.jpg",
  },
  {
    id: 3,
    favourite: false,
    songName: "Chore Ncr Wale",
    artist: "Hildur Guðnadóttir",
    type: "energetic",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2FChore%20NCR%20wale.mp3?alt=media&token=ef76f344-5b32-4658-be6f-31fa2cdbc055",
    imgSrc: "https://i.ytimg.com/vi/Aex7YALaqkg/maxresdefault.jpg",
  },
  {
    id: 4,
    favourite: false,
    songName: "Let the bodies Hit The floor",
    type: "energetic",
    artist: "Otnicka",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2FLet%20the%20bodies%20hit%20the%20floor.mp3?alt=media&token=73b94435-b7da-468e-9c47-507f2f2f7fb8",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVr2UvTSsgqLB03WWyHrCgvx-j9HC6L2NqQDL1CJLmNm5_iLQzzt-Ri2aYZyX3jlzd4B0&usqp=CAU",
  },
  {
    id: 5,
    favourite: false,
    songName: "Counting Stars",
    type: "romantic",
    artist: "Yuvan Shankar Raja",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2FCounting%20stars.mp3?alt=media&token=e4dd73f6-169e-4619-b32c-90751335e114",
    imgSrc:
      "https://a-static.besthdwallpaper.com/counting-stars-wallpaper-3554x1999-33924_53.jpg",
  },
  {
    id: 6,
    songName: "Yadav Band",
    artist: "White Town",
    type: "energetic",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2FYadav%20Band.mp3?alt=media&token=394174ce-884b-40ef-aab1-c318df37fb74",
    imgSrc:
      "https://w0.peakpx.com/wallpaper/794/156/HD-wallpaper-yadav-rao-sahab-logo.jpg",
  },
  {
    id: 7,
    favourite: false,
    songName: "Eenie Meenie",
    artist: "Justin Bieber",
    type: "romantic",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2Feenie%20meenie.mp3?alt=media&token=89dbdbb6-65fa-40e0-b240-bfa4fa8fb0fe",
    imgSrc:
      "https://2.bp.blogspot.com/-zdDt9KAm6MA/TlhYhqZGZ2I/AAAAAAAAAAU/JtBptYdvheQ/s1600/justin-bieber-favorite-girl1-500x5002.jpg",
  },
  {
    id: 8,
    favourite: false,
    songName: "Phir Kbhi",
    type: "sad",
    artist: "Arijit Singh",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2Fkhudse%20milenge%20phir%20kbhi.mp3?alt=media&token=1635414d-c409-4b70-a823-194524d9c39f",
    imgSrc:
      "https://m.timesofindia.com/photo/76955107/size-252760/76955107.jpg",
  },
  {
    id: 9,
    favourite: false,
    songName: "Hurt So Good",
    artist: "David Guetta",
    type: "sad",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2Fhurts%20so%20good.mp3?alt=media&token=d8c71cfa-b6bc-4f04-9a1d-7bbda1448d5d",
    imgSrc:
      "https://w0.peakpx.com/wallpaper/27/159/HD-wallpaper-your-love-good-hurts-so.jpg",
  },
  {
    id: 10,
    favourite: false,
    songName: "Din Chadeya",
    artist: "CVR Toon ",
    type: "sad",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2Fdin%20chadeya.mp3?alt=media&token=d785b71a-110d-45e1-ae47-f72f32c60677",
    imgSrc:
      "https://c-cl.cdn.smule.com/rs-s-sf-3/arr/d6/1a/ec0ab67a-7a86-496e-b0da-d34945bffb33.jpg",
  },
  {
    id: 11,
    favourite: false,
    songName: "Sooraj Dooba He",
    artist: "CVR Toon ",
    type: "Masti",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2Fsooraj%20diiba%20h%20yaro.mp3?alt=media&token=6a9695d6-5bd2-4faf-8395-49aa4f87f05e",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/images%2Fsooraj%20dooba%20he.jpeg?alt=media&token=91f939cf-7ca5-4d86-aad2-bd69e1533a2e",
  },
  {
    id: 12,
    favourite: false,
    songName: "Galan Goodiyan",
    artist: "CVR Toon ",
    type: "Masti",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2Fgalan%20goodaiyan.mp3?alt=media&token=3e4bd36c-c4aa-4b1c-978f-5975dfc577ea",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/images%2FDil-Dhadakne-Do-Hindi-2015-500x500.jpg?alt=media&token=501bafee-c1b3-4861-8b6d-4f8e806d94fc",
  },
  {
    id: 13,
    favourite: false,
    songName: "Matargasti",
    artist: "CVR Toon ",
    type: "Masti",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2Fmatargasti.mp3?alt=media&token=9ad1d3bf-28da-4444-b9de-68d4896b9511",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/images%2FTamasha-Hindi-2015-500x500.jpg?alt=media&token=77455c3a-0d58-4feb-9535-6ce806b2a727",
  },
  {
    id: 11,
    favourite: false,
    songName: "INNA",
    artist: "CVR Toon ",
    type: "Masti",
    song: "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/Songs%2FINNA.mp3?alt=media&token=d81f6ac6-c3da-4cd5-927a-6b4db6d5ee1d",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/melodystream-41d0f.appspot.com/o/images%2Finaa.jpeg?alt=media&token=67bce551-b12d-4f18-b51d-87b81afff6c0",
  },
];

export { Songs };
