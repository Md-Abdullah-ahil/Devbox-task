
const eventCards = document.querySelector('.cards');
// console.log(cards)
const data1 = [
    {
        image:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
        option:'option1'

}]
const card = document.createElement('div');
card.classList = 'card';

card.innerHTML = `<img src='${data1.image}' alt="">
<h4 class="options">${data1.option}</h4>
`;
eventCards.appendChild(card);
console.log(eventCards)


