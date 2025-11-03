const listEl = document.getElementById('character-list');

async function getData() {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const data = await response.json();
    return data.slice(0, 12).map(c => ({
        firstName: c.firstName,
        lastName: c.lastName,
        imageUrl: c.imageUrl || 'https://via.placeholder.com/220x220?text=No+Image',
        family: c.family,
        title: c.title,
        born: c.born,

    }));
}

function render(characters) {
    listEl.innerHTML = '';
    const showOverlay = setupOverlay(); // Overlay-Funktion abrufen

    for (let i = 0; i < characters.length; i++) {
        const c = characters[i];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
<img src="${c.imageUrl}" alt="${c.firstName} ${c.lastName}">
<h2>${c.firstName} ${c.lastName}</h2>
        `;
        // Klick auf Karte öffnet Overlay
        card.addEventListener('click', () => showOverlay(c));

        listEl.appendChild(card);
    }
}
function setupOverlay() {
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-overlay');
    const overlayImg = document.getElementById('overlay-img');
    const overlayName = document.getElementById('overlay-name');
    const overlayHouse = document.getElementById('overlay-house');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayBorn = document.getElementById('overlay-born');


    // Overlay schließen
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.style.display = 'none';
    });

    // Funktion zum Anzeigen
    return function showOverlay(character) {
        overlayImg.src = character.imageUrl;
        overlayName.textContent = character.firstName + " " + character.lastName;
        overlayHouse.textContent = character.family ? "House: " + character.family : "";
        overlayTitle.textContent = character.title ? "Title: " + character.title : "";
        overlayBorn.textContent = character.born ? "Born: " + character.born : "";

        overlay.style.display = 'flex';
    };
}
async function init() {
    const characters = await getData();
    render(characters);
}

document.addEventListener('DOMContentLoaded', init);