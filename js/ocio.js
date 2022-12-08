const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((item) => item.addEventListener("click", linkAction));

//SWIPER
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 16,
});

//Scroll up
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  if (this.scrollY >= 460) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//Sections active
const sections = document.querySelectorAll("section[id]");
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener("scroll",scrollActive)
//Scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  
});
sr.reveal(`.home-swiper,.new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .pokemon__content, .footer__content`, {
  interval: 100,
});
sr.reveal(`.sobre__data, .descuento__img`, { origin: "left" });
sr.reveal(`.sobre__img, .descuento__data`, { origin: "right" });



//pokedex


const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let limit = 8;
let offset = 1;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 9;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 9;
  removeChildNodes(pokemonContainer);
  fetchPokemons(offset, limit);
});

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
      spinner.style.display = "none";
    });
}

function fetchPokemons(offset, limit) {
  spinner.style.display = "block";
  for (let i = offset; i <= offset + limit; i++) {
    fetchPokemon(i);
  }
}

function createPokemon(pokemon) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");

  cardBack.appendChild(progressBars(pokemon.stats));

  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  pokemonContainer.appendChild(flipCard);
}

function progressBars(stats) {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  for (let i = 0; i < 3; i++) {
    const stat = stats[i];

    const statPercent = stat.base_stat / 2 + "%";
    const statContainer = document.createElement("stat-container");
    statContainer.classList.add("stat-container");

    const statName = document.createElement("p");
    statName.textContent = stat.stat.name;

    const progress = document.createElement("div");
    progress.classList.add("progress");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 200);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);
  }

  return statsContainer;
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

fetchPokemons(offset, limit);


// por botones dom

function saludar(nombre, apellido) {
    console.log("Hola" + nombre + "" + apellido);
    // poner en el div el contenido Hola+nombre+apellido
    var divsaludar = document.getElementById("saludopersona")
    divsaludar.innerText = "Hola" + nombre + "" + apellido;
  
  
  }



  function MostrarMensajeSwitch() {
    /* Switch */
    let arg = prompt("Ingrese un valor");
    switch (arg) {
      case '0':
      case '1':
        alert('Uno o cero');
        break;
  
      case '2':
        alert('Dos');
        break;
  
      case 3:
        alert('¡Nunca ejecuta!');
        break;
      default:
        alert('Un valor desconocido');
    }
  }
  
  /*  While */
  
  function MostrarMensajeWhile() {
    /* While */
  
    let num = 4;
    while (num) { // cuando i sea 0, la condición se volverá falsa y el bucle se detendrá
      alert(num);
      num--;
  
    }
  }
  
  
  /* Do While */
  
  function MostrarMensajeDoWhile() {
    /* Do While */
  
    let num = 0;
  
    do {
      alert(num);
      num++;
    } while (num < 4);
  }
  
  
  /* For */
  
  function MostrarMensajeFor() {
  
  
    let listapokemon = ["pikachu", "Raichu", "bulbasour", "Venusaur", "Ivysaur.", "Squirtle",
  
      "Charizard."]
  
  
    alert("Mi lista pokemon " + listapokemon.length);
  
    for (let index = 0; index < listapokemon.length; index++) {
      const element = listapokemon[index];
  
      alert(element + " está en la posición " + index);
  
  
    }
  }
  
  /* funcion  */
  let userName = 'karen';
  
  function MostrarMensajesaludo() {
    let message = 'Hola, ' + userName;
    alert(message);
  }
  
  MostrarMensajesaludo(); // Hola, Karen