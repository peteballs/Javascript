let bt = document.querySelector('.addBtn');
let input = document.querySelector('#add');
bt.onclick = function() {
    let listItem = document.createElement('li');
    textnode = input.value;
    listItem.innerHTML = textnode;
    document.getElementById('myUL').appendChild(listItem);
}

document.querySelector('.notDone').addEventListener('click', event => {
   // event.target.classList.remove('incomplete');
   // event.target.classList.add('complete');
   console.log(event.target);    

    document.querySelector('.soDone').append(event.target);    
})

document.querySelector('.soDone').addEventListener('click', event => {
    event.target.remove();
})