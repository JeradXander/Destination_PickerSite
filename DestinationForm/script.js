//e=> is the same as function(e){}
// document.getElementById('america_btn').onclick = e=>{
//     getPledge(e,)
// };

document.getElementById("myForm").addEventListener("submit", handleForm);

var cardContainer = document.getElementById('cardBox');

function handleForm(e){
    e.preventDefault();
    var form = e.target 

    console.log("working");

    const dest = form.dest.value;
    const location = form.loc.value;
    const photo = form.photo.value;
    const desc = form.desc.value;

    console.log(dest)
    console.log(location)
    console.log(photo)
    console.log(desc)



    let card = document.createElement('div');
    card.className = 'card';
    card.style = "height:30%; width:40%; margin:10px"

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let img = document.createElement('img');
    img.src = photo
    img.className = 'card-img-top';

    let title = document.createElement('h3');
    title.innerText = dest;
    title.className = 'card-title';
    
    let locationText = document.createElement('p');
    locationText.innerText = location;
    locationText.className = 'card-subtitle mb-2 text-muted';
    locationText.style = 'margin-top: 5px'

    let descText = document.createElement('p');
    descText.innerText = desc;
    descText.className = 'card-text';

    let buttonDiv = document.createElement('div');
    buttonDiv.style = "width: 100%; display: flex; justify-content: space-evenly";

    let editButton = document.createElement('button');
    editButton.className = "btn btn-warning";
    editButton.innerText = 'Edit';
    editButton.setAttribute('btn_type', 'edit_btn' );

    let deleteButton = document.createElement('button');
    deleteButton.className = "btn btn-danger";
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('btn_type', 'delete_btn' );

    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(deleteButton);




    cardBody.appendChild(title);
    cardBody.appendChild(img);
    cardBody.appendChild(locationText);
    cardBody.appendChild(descText);
    cardBody.appendChild(buttonDiv);
   
    card.appendChild(cardBody);
    cardContainer.appendChild(card);

    card.addEventListener('click',handleCardButtonClick);
    
}

function handleCardButtonClick(e){
var elt = e.target;

if(elt.getAttribute("btn_type") === 'delete_btn'){
elt.parentElement.parentElement.parentElement.remove();

}else if (elt.getAttribute("btn_type") === 'edit_btn'){
console.log("edit clicked")

var children = elt.parentElement.parentElement.children
}
}
