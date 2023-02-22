// get references to the HTML elements
const form = document.querySelector('form');
const productList = document.querySelector('ul');
const currencySelect = document.getElementById('currency-select');

// listen for the form to be submitted
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting

  // get the values of the form fields
  const name = document.getElementById('product-name').value;
  const description = document.getElementById('product-description').value;
  const price = document.getElementById('product-price').value;

  // get the selected currency symbol
  const currencySymbol = currencySelect.value;

  // create a new product object
  const product = {
    name: name,
    description: description,
    price: price,
    currencySymbol: currencySymbol
  };

  // create a new list item for the product
  const li = document.createElement('li');
  li.classList.add('product');

  // create the name element
  const nameElement = document.createElement('div');
  nameElement.classList.add('product-name');
  nameElement.innerText = product.name;
  li.appendChild(nameElement);

  // create the price element
  const priceElement = document.createElement('div');
  priceElement.classList.add('product-price');
  priceElement.innerText = product.currencySymbol + product.price;
  li.appendChild(priceElement);

  // create the description element
  const descriptionElement = document.createElement('div');
  descriptionElement.classList.add('product-description');
  descriptionElement.innerText = product.description;
  li.appendChild(descriptionElement);

  // create a delete button for the product
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerText = 'Delete';
  li.appendChild(deleteButton);

  // add the list item to the product list
  productList.appendChild(li);

  // clear the form fields
  form.reset();
});

// listen for clicks on the delete buttons
productList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    event.target.parentElement.remove();
  }
});



