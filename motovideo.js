// Плавна прокрутка меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Плейлист відео
const playlist = [
  {
    title: "Вертикальне відео 1",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1564734336018944251/video_2026-10-27_22-14-59.mp4?ex=6ae257e9&is=6ae10669&hm=a20cd18e47a706166c50d8eb1702b39c1cb4c9dc16eae7c86dbf02db03ddd8b2&"
  },
  {
    title: "Вертикальне відео 2",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1564734336777982102/video_2026-10-27_22-14-56.mp4?ex=6ae257e9&is=6ae10669&hm=55602a841f0b8b3f7618e48345d902edff7de0787a5df9d5757a9c759876d9e4&"
  },
  {
    title: "Вертикальне відео 3",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1564734337520369764/video_2026-10-27_22-14-53.mp4?ex=6ae257e9&is=6ae10669&hm=282ed25691153a5a2f27d154a16fba2f1c4c485a4413a8936829d3bbe6dfe62e&"
  },
  {
    title: "Вертикальне відео 4",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1564734338099187742/video_2026-10-27_22-14-50.mp4?ex=6ae257e9&is=6ae10669&hm=8fd22d3796e4a26c2db3045cd067cbd75b53b19738f67d506ac8a270cce31932&"
  },
  {
    title: "Вертикальне відео 5",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1564734339080790076/video_2026-10-27_22-14-47.mp4?ex=6ae257e9&is=6ae10669&hm=eb87939f98b7683cf7a2c22f6a8e4d59b3e71e992c175388a374b12d0e9afcdb&"
  },
  {
    title: "Вертикальне відео 6",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1564734340011921539/video_2026-10-27_22-14-43.mp4?ex=6ae257ea&is=6ae1066a&hm=f343740063a4592e8a1cdc9270dc35568e9e84c916e6a6fd6f910f0d9eeaf14f&"
  },
];

let currentIndex = 0;

const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoCounter = document.getElementById('videoCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function loadVideo(index) {
  const currentVideo = playlist[index];
  
  // Оновлюємо текст заголовка та лічильника
  videoTitle.textContent = currentVideo.title;
  videoCounter.textContent = `Відео ${index + 1} з ${playlist.length}`;

  // Встановлюємо джерело та примусово завантажуємо
  videoPlayer.src = currentVideo.src;
  videoPlayer.load();
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadVideo(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadVideo(currentIndex);
});

// Первинне завантаження першого відео при старті сторінки
loadVideo(currentIndex);