const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


//function selectItem
function selectItem(e){

//remove border function
removeBorder();
//remove show function
removeShow();

//add border to clicked tab
this.classList.add('tab-border');

const tabContentItem = document.querySelector(`#${this.id}-content`);

tabContentItem.classList.add('show');

}

//remove content
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//remove border fucntion
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

/*event listener tab click (why loop ? because there are 3 tabs/items and each of them can be click, 
selectItem is the function name)*/
tabItems.forEach(item => item.addEventListener('click', selectItem));


