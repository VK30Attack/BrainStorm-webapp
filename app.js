const products = [
  {
    id: '1',
    name: 'BrainStorm Cloudberry',
    price: '4990 ₽',
    description: 'Повышает концентрацию и ясность мышления.',
    image: 'https://ewaproduct.com/media/catalog/product/cache/...cloudberry.jpg',
    link: 'https://ewaproduct.com/ru/product/brainstorm-cloudberry'
  },
  {
    id: '2',
    name: 'BrainStorm Cherry',
    price: '4990 ₽',
    description: 'Энергия и фокус со вкусом вишни.',
    image: 'https://ewaproduct.com/media/catalog/product/cache/...cherry.jpg',
    link: 'https://ewaproduct.com/ru/product/brainstorm-so-vkusom-vishni'
  },
  // в будущем добавишь сюда новые товары
];

const grid = document.getElementById('product-grid');

products.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <div class="price">${p.price}</div>
    <a href="${p.link}" target="_blank">
      <button>Купить 💳</button>
    </a>
  `;
  grid.appendChild(card);
});