const products = [
  {
    id: '1',
    name: 'BrainStorm Cloudberry',
    price: '4990 ₽',
    description: 'Инновационный продукт для улучшения когнитивных функций, концентрации и памяти.',
    link: 'https://ewaproduct.com/ru/product/brainstorm-cloudberry'
  },
  {
    id: '2',
    name: 'BrainStorm со вкусом Вишни',
    price: '4990 ₽',
    description: 'Тонизирующий напиток с экстрактом гриба ежовика, готу кола, женьшень и витаминами группы B.',
    link: 'https://ewaproduct.com/ru/product/brainstorm-so-vkusom-vishni'
  }
];

const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');

// Показываем список продуктов
products.forEach(p => {
  const btn = document.createElement('button');
  btn.textContent = p.name;
  btn.onclick = () => showDetails(p);
  productList.appendChild(btn);
});

function showDetails(product) {
  productList.style.display = 'none';
  productDetails.style.display = 'block';
  productDetails.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>Цена: ${product.price}</p>
    <a href="${product.link}" target="_blank">
      <button>Купить 💳</button>
    </a>
    <br/><br/>
    <button onclick="backToList()">Назад к выбору</button>
  `;
}

function backToList() {
  productDetails.style.display = 'none';
  productList.style.display = 'block';
}