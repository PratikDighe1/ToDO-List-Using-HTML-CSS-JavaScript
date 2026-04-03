// javascript for toDoList.

let btn= document.querySelector('button'); // Which select first seened button element in an html-document.
let ul= document.querySelector('ul'); 
let inp= document.querySelector('input')

btn.addEventListener('click', function(){ //callBack
    let item= document.createElement('li');
    item.innerText= inp.value; //here item's inner text will set an input's value of user.

    let delBtn= document.createElement('button');
    delBtn.innerText= "Delete";
    delBtn.classList.add('delete');
    item.appendChild(delBtn);

    ul.appendChild(item); //item appended as a child of user in html-document.
    inp.value= "";
});

ul.addEventListener('click', function(event){ 
    if(event.target.nodeName=='BUTTON'){
        let listItem= event.target.parentElement;
        listItem.remove();
        console.log('Deleted...');
    }
});

// This is second method for deletion purpose, but fails to delete the new added li elment.

// let delBtns= document.querySelectorAll('.delete');
// for(delBtn of delBtns){
//     delBtn.addEventListener('click', function(){
//         let par= this.parentElement;
//         par.remove();
//     });
// }