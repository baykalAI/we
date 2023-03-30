const option1Button = document.getElementById("option1");
const option2Button = document.getElementById("option2");

const content = [  {    title: "",    description: "Penguenlerin yalnızca siyah-beyaz renkli olmalarının nedeni nedir?",    options: ["Seçenek miyaw", "Seçenek meow"],
  },
  {
    title: "",
    description: "             Kediler neden hırıldarlar?            ",
    options: ["Seçenek miyaw", "Seçenek meow"],
  },
  {
    title: "",
    description: "             Bebekler neden emekler?               ",
    options: ["Seçenek miyaw", "Seçenek meow"],
  },
  {
    title: "",
    description: "       edilerin tüyleri UV ışığında nasıl görünüyor?",
    options: ["Seçenek miyaw", "Seçenek meow"],
  },
  {
    title: "",
    description: "            Bebekler neden göz teması kurarlar?           ",
    options: ["Seçenek miyaw", "Seçenek meow"],
  },
  {
    title: "",
    description: "      Kedilerin gece görüşü insanlardan daha iyi mi?",
    options: ["Seçenek miyaw", "Seçenek meow"],
  },  {
    title: "",
    description: "            (bu bir hata değildir) Eéen essevéi iüau           ",
    options: ["Fi ivr ççlénkcé", "aufr"],
  },
  // Add more content objects here
];

let currentIndex = 0;

function updateContent() {
  const currentContent = content[currentIndex];
  document.querySelector(".title").textContent = currentContent.title;
  document.querySelector(".description").textContent = currentContent.description;
  option1Button.textContent =  currentContent.options[0];
  option2Button.textContent = currentContent.options[1];
}

function nextPage() {
  currentIndex++;
  if (currentIndex >= content.length) {
    currentIndex = 0;
  }
  updateContent();
}

option1Button.addEventListener("click", () => {
  nextPage();
});

option2Button.addEventListener("click", () => {
  nextPage();
});


function updateContent() {
  const currentContent = content[currentIndex];
  const titleElement = document.querySelector(".title");
  const descriptionElement = document.querySelector(".description");

  titleElement.textContent = currentContent.title;
  descriptionElement.textContent = currentContent.description;
  option1Button.textContent = currentContent.options[0];
  option2Button.textContent = currentContent.options[1];

  titleElement.classList.add("fade");
  descriptionElement.classList.add("fade");
  option1Button.classList.add("fade");
  option2Button.classList.add("fade");

  setTimeout(() => {
    titleElement.classList.remove("fade");
    descriptionElement.classList.remove("fade");
    option1Button.classList.remove("fade");
    option2Button.classList.remove("fade");
  }, 1200);
}

const images = [  "path/to/your/image1.jpg",  "path/to/your/image2.jpg",  "path/to/your/image3.jpg"];
const colors = [];

for (let i = 0; i < 700; i++) {
  const hue = (i / 700) * 360;
  const saturation = 100;
  const lightness = 50;
  colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
}

let colorIndex = 0;

function changeBackground() {
  const images = [
    "path/to/your/image1.jpg",
    "path/to/your/image2.jpg",
    "path/to/your/image3.jpg"
  ];

  const color = colors[colorIndex];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  document.body.style.backgroundImage = `url('${randomImage}')`;
  document.body.style.backgroundColor = color;

  colorIndex++;
  if (colorIndex >= colors.length) {
    colorIndex = 0;
  }

  const fadeElements = document.querySelectorAll(".fade");
  fadeElements.forEach(element => {
    element.classList.add("fade-in");
    element.classList.remove("fade-out");
  });
}

function fadeOutElements() {
  const fadeElements = document.querySelectorAll(".fade");
  fadeElements.forEach(element => {
    element.classList.add("fade-out");
    element.classList.remove("fade-in");
  });
}

function changeBackgroundOnMouseMove(event) {
  // ...
}

document.addEventListener("mousemove", changeBackgroundOnMouseMove);

setInterval(() => {
  fadeOutElements();
  setTimeout(changeBackground, 1000);
}, 200);

updateContent();

