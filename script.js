
const listEl = document.getElementById('character-list');

async function getData() {

    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const data = await response.json();
    const characters = data.slice(0, 12).map(c => ({
        firstName: c.firstName,
        lastName: c.lastName,
        imageUrl: c.imageUrl || 'https://via.placeholder.com/220x220?text=No+Image',
    }));
    return characters; // liefert die Charaktere zurück

}
function render(characters) {
    listEl.innerHTML = ''; // vorher leeren
    for (let i = 0; i < characters.length; i++) {
        const c = characters[i];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${c.imageUrl}" alt="${c.firstName} ${c.lastName}">
            <h2>${c.firstName} ${c.lastName}</h2>
        `;
        listEl.appendChild(card);
    }
}


async function init() {
    const characters = await getData();
    render(characters);
}

document.addEventListener('DOMContentLoaded', init);