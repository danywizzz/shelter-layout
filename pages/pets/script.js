const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

//HAMBURGER
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");
const blackout = document.querySelector(".blackout");
const body = document.querySelector("body");
const logoMenuOpen = document.querySelector(".logo-side-menu");


const hideYscroll = el => {
    el.style.overflowY = "hidden";
}

const showYscroll = el => {
    el.style.overflowY = "visible";
}

const removeClass = (element, classString) => {
    element.classList.remove(classString);
}

const addClass = (element, classString) => {
    element.classList.add(classString);
}

const openMenu = () => {
    addClass(hamburger, "open");
    addClass(navList, "open");
    addClass(blackout, "show");
    addClass(logoMenuOpen, "side-menu-open");
    hideYscroll(body);
}

const closeMenu = () => {
    removeClass(hamburger, "open");
    removeClass(navList, "open");
    removeClass(blackout, "show");
    removeClass(logoMenuOpen, "side-menu-open");
    showYscroll(body);
}

const toggleMenu = event => {
    event.target.classList.contains('open') ? closeMenu() : openMenu();
};


hamburger.addEventListener("click", toggleMenu);

navLinks.forEach(el => el.addEventListener("click", closeMenu));

// When the user clicks anywhere outside of the menu, close it
window.addEventListener('click', (event) => {
    if (event.target === blackout) {
        closeMenu();
    }
});

//POP UP
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.btn-close');
const petImg = document.querySelector(".pet-img");
const petName = document.querySelector(".pet-name");
const petType = document.querySelector(".pet-type");
const petBreed = document.querySelector(".pet-breed");
const petAbout = document.querySelector(".pet-about");
const petAge = document.querySelector(".pet-age");
const petInoculations = document.querySelector(".pet-inoculations");
const petDiseases = document.querySelector(".pet-diseases");
const petParasites = document.querySelector(".pet-parasites");
// const cards = document.querySelectorAll(".card");
const cardsContainers = document.querySelectorAll(".cards-container");

const fillInModal = (petObj) => {
    petImg.setAttribute("src", petObj.img);
    petName.innerText = petObj.name;
    petType.innerText = petObj.type;
    petBreed.innerText = petObj.breed;
    petAbout.innerText = petObj.description;
    petAge.innerText = petObj.age;
    petInoculations.innerText = petObj.inoculations;
    petDiseases.innerText = petObj.diseases;
    petParasites.innerText = petObj.parasites;
}

const findDataset = element => element.parentNode && Object.keys(element.dataset).length === 0
    ? findDataset(element.parentNode)
    : element.dataset;

const showModal = (event) => {
    const dataset = findDataset(event.target);
    const curPetObj = pets.find(pet => dataset.name === pet.name.toLowerCase());
    fillInModal(curPetObj);
    // setTimeout(() => (modal.style.display = 'flex'), 350);
    modal.style.display = 'flex';
    hideYscroll(body);
}

// [ITEM_LEFT, ITEM_ACTIVE, ITEM_RIGHT].forEach(item => item.addEventListener('click', showModal));
cardsContainers.forEach(item => item.addEventListener('click', showModal));

const hideModal = () => {
    modal.style.display = 'none';
    showYscroll(body);
};

modalClose.addEventListener('click', hideModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        hideModal();
    }
});


//PAGINATION
const firstPageBtn = document.querySelector(".btn-first-page");
const prevPageBtn = document.querySelector(".btn-previous-page");
const curPageBtn = document.querySelector(".btn-current-page");
const nextPageBtn = document.querySelector(".btn-next-page");
const lastPageBtn = document.querySelector(".btn-last-page");
let curPage = document.querySelector("#page-a");
let nextPage = document.querySelector("#page-b");
const cardsContainer = document.querySelector(".cards-container");

let activePage = 1;

const createCardTemplate = (pet) => {
    const petName = pet.name.toLowerCase();

    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(`card-${petName}`);
    card.setAttribute("data-name", petName);

    const petImg = document.createElement("div");
    petImg.classList.add(`pets-${petName}`);
    card.appendChild(petImg);

    const petCardTitle = document.createElement("h4");
    petCardTitle.classList.add("pets-card-title");
    petCardTitle.innerText = petName;
    card.appendChild(petCardTitle);

    const btn = document.createElement("button");
    btn.classList.add("btn-secondary");
    btn.innerText = "Learn more";
    card.appendChild(btn);

    return card;
}

const getCardNumOnPage = () => {
    const cardSize = Math.floor(cardsContainer.clientWidth / 270);  //4, 2, 1
    return cardSize === 4 ? cardSize * 2 : cardSize * 3;
}

const cardNumOnPage = getCardNumOnPage();
console.log(cardNumOnPage);


const getPage = (pets, pageSize, page) => {
    return pets.slice(page * pageSize, page * pageSize + pageSize);
};

const getManyPets = (pets, total) => {
    const manyPets = [];
    for (let i = 0; i < total; i++) {
        const page3 = getPage(manyPets, 3, Math.floor(i / 3));
        const page6 = getPage(manyPets, 6, Math.floor(i / 6));
        const page8 = getPage(manyPets, 8, Math.floor(i / 8));
        const unused = pets.filter(p => !(
            page3.includes(p) || page6.includes(p) || page8.includes(p))
        );
        const nextPet = unused[Math.floor(Math.random() * unused.length)]
        manyPets.push(nextPet);
        // console.log({ i, page3, page6, page8, unused, nextPet });
    }
    return manyPets;
}
const manyPets = getManyPets(pets, 48);

const renderPage = (pageEle, pageNum) => {
    pageEle.innerHTML = "";

    const page = getPage(manyPets, cardNumOnPage, pageNum-1);

    page.forEach(pet => {
        const card = createCardTemplate(pet);
        pageEle.appendChild(card);
    })
}

renderPage(curPage, 1);



const switchPage = (pageNumber) => {
    activePage = pageNumber;
    changeBtnState();

    renderPage(nextPage, activePage);

    curPage.classList.add('inactive');
    nextPage.classList.remove('inactive');
    const tmpPage = curPage;
    curPage = nextPage;
    nextPage = tmpPage;
}

const getLastPage = () => manyPets.length/cardNumOnPage;

const changeBtnState = () => {
    curPageBtn.innerText = activePage;

    if (activePage === 1) {
        addClass(firstPageBtn, "btn-inactive");
        addClass(prevPageBtn, "btn-inactive");
        removeClass(firstPageBtn, "btn-active");
        removeClass(prevPageBtn, "btn-active");
        addClass(nextPageBtn, "btn-active");
        addClass(lastPageBtn, "btn-active");
        removeClass(nextPageBtn, "btn-inactive");
        removeClass(lastPageBtn, "btn-inactive");
    } else if (activePage === getLastPage()) {
        addClass(firstPageBtn, "btn-active");
        addClass(prevPageBtn, "btn-active");
        removeClass(firstPageBtn, "btn-inactive");
        removeClass(prevPageBtn, "btn-inactive");
        addClass(nextPageBtn, "btn-inactive");
        addClass(lastPageBtn, "btn-inactive");
        removeClass(nextPageBtn, "btn-active");
        removeClass(lastPageBtn, "btn-active");
    } else {
        addClass(firstPageBtn, "btn-active");
        addClass(prevPageBtn, "btn-active");
        removeClass(firstPageBtn, "btn-inactive");
        removeClass(prevPageBtn, "btn-inactive");
        addClass(nextPageBtn, "btn-active");
        addClass(lastPageBtn, "btn-active");
        removeClass(nextPageBtn, "btn-inactive");
        removeClass(lastPageBtn, "btn-inactive");
    }
};



firstPageBtn.addEventListener("click", () => {if (activePage !== 1) switchPage(1)});
prevPageBtn.addEventListener("click", () => {if (activePage > 1) switchPage(activePage - 1)});
nextPageBtn.addEventListener("click", () => {if (activePage < getLastPage()) switchPage(activePage + 1)});
lastPageBtn.addEventListener("click", () => {if (activePage !== getLastPage()) switchPage(getLastPage())}); // max pages

changeBtnState();