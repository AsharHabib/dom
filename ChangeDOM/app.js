const discriptioninput = document.querySelector('input.description');
const descriptionp = document.querySelector('p.description');
const descriptionbutton = document.querySelector('button.description');
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listItems = document.getElementsByTagName('li');
const listUl = listDiv.querySelector('ul');
const lis = listUl.children;
const firstListItem=listUl.firstElementChild;
const lastListItem=listUl.lastElementChild;

firstListItem.style.backgroundColor='yellow';
lastListItem.style.backgroundColor='orange';

function attachListItemButtons (li) {
  let up =document.createElement('button');
  up.className='up';
  up.textContent='Up';
  li.appendChild(up);
  let down=document.createElement('button');
  down.className='down';
  down.textContent='down';
  li.appendChild(down);
  let remove=document.createElement('button');
  remove.className='remove';
  remove.textContent='Remove';
  li.appendChild(remove);
}

  listUl.addEventListener('click', (event)=> {
      if (event.target.tagName=='BUTTON') {
        if (event.target.className==='remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
        if (event.target.className==='up') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      let prevLi = li.previousElementSibling;
      if (prevLi) {
      ul.insertBefore(li,prevLi);
    }
      }

        if (event.target.className==='down') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      let prevLi = li.nextElementSibling;
      if (prevLi) {
      ul.insertBefore(prevLi,li);
      }
      }
    }
  });

for (let i = 0;i <lis.length;i++) {
  attachListItemButtons(lis[i]);
}


toggleList.addEventListener('click', ()=>{
  if (listDiv.style.display==='none') {
    listDiv.style.display = 'block';
    toggleList.textContent = 'Hide list';
  } else {
  listDiv.style.display = 'none';
  toggleList.textContent = 'Show list';
}
});

descriptionbutton.addEventListener('click', ()=> {
  descriptionp.innerHTML = descriptioninput.value + ':';
  descriptionp.value='';
});

addItemButton.addEventListener('click', ()=>{
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent=addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value='';
});
