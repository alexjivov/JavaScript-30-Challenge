const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// add data stored in the array - items + status
// on page load, it will check if something is in local storage and if not, create an empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    // stop page from reloading
    e.preventDefault();
    // grab input box from html
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        // will not be checked by default
        done: false
    };
    //push items into the array
    items.push(item);
    populateList(items, itemsList);
    //push items array into LocalStorage - has to be JSON stringified 
    localStorage.setItem('items', JSON.stringify(items));
    //need to reset the form element after input
    this.reset();

}

// push plates into an empty array so it doesn't break the JS if nothing is put in
function populateList(plates = [], platesList) {
    // map takes in an array and returns an array of other data
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <laber for="item${i}">${plate.text}</label>
        </li>   
        `;

    }).join('');

}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it is an input
    const el = e.target;
    const index = el.dataset.index;
    // set to the inverse of each other - toggles between true and false of done
    items[index].done = !items[index].done;
    localStorage.setItem('items'.JSON.stringify(items));
    populateList(items, itemsList);
}

// need to listen to clicks, hitting enter, etc - much more broad than onclick
addItems.addEventListener('submit', addItem);


itemsList.addEventListener('click', toggleDone);


populateList(items, itemsList);