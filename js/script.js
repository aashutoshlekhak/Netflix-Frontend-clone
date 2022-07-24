const tabItems=document.querySelectorAll('.tab-item');
//the above line selected the top icon of the 3 tabs where red bottom bar is shown 

const tabContentItems=document.querySelectorAll('.tab-content-item');
//the bottor tables and lists of actual contents 

//this will select tab content items
function selectItem(e)
{
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    const tabContentItem=document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');


}

function removeBorder()
{
    tabItems.forEach(item => item.classList.remove('tab-border'));

}

function removeShow()
{
    tabContentItems.forEach(item => item.classList.remove('show'));

}


//listem for tab clicks
tabItems.forEach(item => item.addEventListener('click', selectItem));
