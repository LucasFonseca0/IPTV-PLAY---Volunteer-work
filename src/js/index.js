const apps = [
  {
      nome: "IboPlay 3.8",
      url: "./images/moreImages/01.png",
      vantagens: [
          "App Exclusivo!",
          "Funciona em qualquer dispositivo Android!"
      ],
      downloadURL: "./src/apps/IboPlay 3.8.apk"
  },
  {
      nome: "IPTV Play",
      url: "./images/moreImages/02.png",
      vantagens: [
          "App Exclusivo!",
          "Funciona em qualquer dispositivo Android!"
      ],
      downloadURL: "./src/apps/IPTV Play.apk"
  },
  {
      nome: "IPTV Smarters",
      url: "./images/moreImages/03.jpg",
      vantagens: [
          "App Exclusivo!",
          "Funciona em qualquer dispositivo Android!"
      ],
      downloadURL: "./src/apps/iptv-smarters-pro-4-0.apk"
  },
  {
      nome: "XC IPTV",
      url: "./images/moreImages/04.jpg",
      vantagens: [
          "App Exclusivo!",
          "Funciona em qualquer dispositivo Android!"
      ],
      downloadURL: "./src/apps/XCIPTV_6.0.apk"
  }
];

const appsContainer = document.getElementById("apps");

apps.forEach((app) => {
    const appCard = document.createElement("div");
    appCard.classList.add("max-w-md", "mx-auto", "mb-6", "bg-white", "rounded-xl", "overflow-hidden", "shadow-md", "hover:shadow-lg", "flex", "flex-col", "md:flex-row", "md:max-w-2xl");
    appCard.innerHTML = `
        <img class="h-56 w-full md:w-72 object-contain" src="${app.url}" alt="${app.nome}">
        <div class="p-6 flex flex-col justify-between">
            <h2 class="text-2xl font-bold mb-4">${app.nome}</h2>
            <ul class="pl-0 mb-4 md:mb-0">
                ${app.vantagens.map(vantagem => `<li><span class="text-green-500">&#10003;</span> ${vantagem}</li>`).join('')}
            </ul>
            <a href="${app.downloadURL}" class="block bg-blue-500 text-white px-4 py-2 rounded-md mt-4 text-center hover:bg-blue-600">Baixe aqui</a>
        </div>
    `;
    appsContainer.appendChild(appCard);
});


const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const screenArea = screenWidth * screenHeight;

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": true,
        "value_area": 2000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

