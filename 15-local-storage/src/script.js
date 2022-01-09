const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('plates')) || [];

function handleSubmit(e) {
    e.preventDefault();
    let text = this.querySelector('input[type=text]').value;
    let plate = {
        text,
        status: false
    };
    items.push(plate);
    populate(items);
    // this.querySelector('input[type=text]').value = "";
    this.reset();
    localStorage.setItem('plates', JSON.stringify(items));
};

function toggleStatus(e){
    if (e.target.matches('input')) {
        console.log(e.target.dataset.index);
        let i = e.target.dataset.index;
        items[i].status = !items[i].status;
        localStorage.setItem('plates', JSON.stringify(items));
    }
}
function populate() {
    itemsList.innerHTML = items.map((item, index) => 
    `<li>
    <input data-index=${index} id="item-${index}" type="checkbox" ${item.status ? 'checked' : ''}/>
    <label for="item-${index}">${item.text}</label>
    </li>`)
    .join('');
};

populate(items);
addItems.addEventListener('submit', handleSubmit);
itemsList.addEventListener('click', toggleStatus)