const characters = [
    { firstName: "Jon", lastName: "Snow", imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg" },
    { firstName: "Tyrion", lastName: "Lannister", imageUrl: "https://thronesapi.com/assets/images/tyrion-lannister.jpg" },
    { firstName: "Jaime", lastName: "Lannister", imageUrl: "https://thronesapi.com/assets/images/jaime-lannister.jpg" },
    { firstName: "Arya", lastName: "Stark", imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg" },

];

const listEl = document.getElementById('character-list');


function render(characters) {
    listEl.innerHTML = ''; // vorher leeren
    characters.forEach(c => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${c.imageUrl}" alt="${c.firstName} ${c.lastName}">
            <h2>${c.firstName} ${c.lastName}</h2>
        `;
        listEl.appendChild(card);
    });
}


function init() {
    render(characters);
}
document.addEventListener('DOMContentLoaded', init);