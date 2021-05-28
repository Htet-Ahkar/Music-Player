const palyLsitContainerTag =
  document.getElementsByClassName("playListContainer")[0];

const audioTag = document.getElementsByClassName("audioTag")[0];

const tracks = [
  { trackId: "music/track1.mp3", title: "December Nya - Lin Nit" },
  { trackId: "music/track2.mp3", title: "Tsaw Ra Ai Tsaw Hkrup Sai - Ann Naw" },
  {
    trackId: "music/track3.mp3",
    title: "Lann Mha Gyee Yey Bey - Wine Su Khine Thein",
  },
  { trackId: "music/track4.mp3", title: "Yee Zarr Sar - Sai Sai Kham Hlaing" },
];

for (let i = 0; i < tracks.length; i++) {
  const trackTag = document.createElement("div");
  trackTag.addEventListener("click", () => {
    const trackId = tracks[i].trackId;
    audioTag.src = trackId;
    audioTag.play();
  });
  trackTag.classList.add("trackItem");
  const title = (i + 1).toString() + ". " + tracks[i].title;
  trackTag.textContent = title;
  palyLsitContainerTag.append(trackTag);
}
