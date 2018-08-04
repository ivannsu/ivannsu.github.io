if(typeof(Storage) === 'undefined') {
  // Do something to tell users
  console.log('localStorage not supported, please update your browser!');
}

function cheatDOM() {

}

function start() {
  if(localStorage.getItem('collections') === null) {
    localStorage.setItem('collections', JSON.stringify([]));
  } else {
    let dataContainer = document.getElementById('data-container');
    let collections = JSON.parse(localStorage.getItem('collections'));
    
    // let rows = document.createElement('div');
    // rows.setAttribute('class', 'row');
    // rows.appendChild()

    // // console.log(collections);
    // for(let i = 0; i < collections.length; i++) {

    // }
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