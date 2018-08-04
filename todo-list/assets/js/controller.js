if(typeof(Storage) === 'undefined') {
  // Do something to tell users
  console.log('localStorage not supported, please update your browser!');
}

function createNewElm(tag, attributes, text) {
  let elm = document.createElement(tag);

  if(!attributes || attributes !== null) {
    for(let i in attributes) {
      elm.setAttribute(i, attributes[i]);
    }
  }
  if(!text || text !== null || text !== undefined) {
    elm.innerHTML = text;
    return elm;
  } else {
    return elm;
  }
}

function start() {
  // Fix double appendChild()
  let dataContainer = document.getElementById('data-container');
  let dataEmpty = document.getElementById('data-empty')

  dataContainer.innerHTML = '';
  dataContainer.style.display = 'block';
  dataEmpty.style.display = 'none';

  if(localStorage.getItem('collections') === null || JSON.parse(localStorage.getItem('collections')).length === 0) {
    dataEmpty.style.display = 'block';
    dataContainer.style.display = 'none';
  } else {
    dataEmpty.style.display = 'none';
    dataContainer.style.display = 'block';
  }

  if(localStorage.getItem('collections') === null) {
    localStorage.setItem('collections', JSON.stringify([]));
  } else {
    let collections = JSON.parse(localStorage.getItem('collections'));
    
    for(let i = 0; i < collections.length; i++) {
      // console.log(collections[i].title);
      let row = createNewElm('div', {class: 'row'}, null);
      row.appendChild(createNewElm('div', null, i + 1));
      row.appendChild(createNewElm('div', null, collections[i].title));
      
      let rowBtn = row.appendChild(createNewElm('div', {style: 'text-align: right'}, null));
      rowBtn.appendChild(createNewElm('span', {class: 'fa fa-times delete'}, null));
      rowBtn.appendChild(createNewElm('span', {class: 'fa fa-check check'}, null));

      dataContainer.appendChild(row);
    }
  }
}

let form = document.getElementById('todo-form');
let input = form.title;

form.addEventListener('submit', function(evt) {
  if(input.value === '' || input.value === 'undefined') {
    alert('Write something to add list');
  } else {
    let obj = {title: input.value};
    let collections = JSON.parse(localStorage.getItem('collections'));

    collections.push(obj);
    localStorage.setItem('collections', JSON.stringify(collections));
    input.value = '';

    start();
  }

  evt.preventDefault();
});

start();