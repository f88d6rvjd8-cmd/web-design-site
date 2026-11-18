// The menu lives here as plain data. To change a dish or a price, edit this list.
const menu = {
  Breakfast: [
    { name: 'Full Welsh breakfast', price: '£9.50', note: 'Bacon, sausage, egg, laverbread, tomato, mushrooms and toast.' },
    { name: 'Bacon bap', price: '£4.50', note: 'Smoked bacon in a soft white bap.' },
    { name: 'Welsh rarebit', price: '£7.00', note: 'Cheese and ale sauce on toasted sourdough.' },
    { name: 'Avocado on toast', price: '£7.50', note: 'Sourdough, lemon, chilli flakes and a poached egg.' },
    { name: 'Porridge with honey', price: '£4.50', note: 'Made with whole milk, topped with local honey.' }
  ],
  Lunch: [
    { name: 'Soup of the day', price: '£6.50', note: 'Served with crusty bread and butter.' },
    { name: "Welsh cheese ploughman's", price: '£9.00', note: 'Caerphilly, chutney, pickles, apple and bread.' },
    { name: 'Jacket potato', price: '£7.50', note: 'Choice of cheese and beans, tuna mayo or coronation chicken.' },
    { name: 'Toasted sandwich', price: '£6.00', note: 'Ham and cheese, or cheese and onion.' }
  ],
  Drinks: [
    { name: 'Flat white', price: '£3.20', note: 'Double shot with silky milk.' },
    { name: 'Latte', price: '£3.40', note: 'Oat, soya or whole milk.' },
    { name: 'Pot of tea', price: '£3.00', note: 'Breakfast, Earl Grey or a herbal blend.' },
    { name: 'Hot chocolate', price: '£3.60', note: 'Topped with cream and marshmallows.' },
    { name: 'Fresh orange juice', price: '£3.50', note: 'Squeezed to order.' }
  ],
  Cakes: [
    { name: 'Welsh cakes (three)', price: '£3.00', note: 'Baked on the griddle each morning.' },
    { name: 'Bara brith slice', price: '£3.00', note: 'Fruit loaf soaked in tea, served with butter.' },
    { name: 'Chocolate brownie', price: '£3.50', note: 'Rich, dense and a little bit gooey.' },
    { name: 'Scone, jam and cream', price: '£4.50', note: 'Plain or fruit, with a pot of tea for £1 extra.' }
  ]
};

const tabsEl = document.getElementById('tabs');
const itemsEl = document.getElementById('menu-items');

function showCategory(category) {
  // Mark the chosen tab as pressed
  tabsEl.querySelectorAll('button').forEach(function (button) {
    button.setAttribute('aria-pressed', String(button.textContent === category));
  });

  // Build the list of dishes for that category
  itemsEl.innerHTML = '';
  menu[category].forEach(function (dish) {
    const item = document.createElement('div');
    item.className = 'item';

    const top = document.createElement('div');
    top.className = 'item-top';

    const name = document.createElement('span');
    name.className = 'item-name';
    name.textContent = dish.name;

    const price = document.createElement('span');
    price.className = 'item-price';
    price.textContent = dish.price;

    const note = document.createElement('span');
    note.className = 'item-note';
    note.textContent = dish.note;

    top.append(name, price);
    item.append(top, note);
    itemsEl.appendChild(item);
  });
}

// Create one button per category
Object.keys(menu).forEach(function (category) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'tab';
  button.textContent = category;
  button.addEventListener('click', function () { showCategory(category); });
  tabsEl.appendChild(button);
});

showCategory('Breakfast');
