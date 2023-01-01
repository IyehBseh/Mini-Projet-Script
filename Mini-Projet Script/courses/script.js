var content2 = document.querySelector('.content2');
var listCat = document.querySelector('#listCat');
let category = document.getElementById('txt_search');

function creationCours(image, titre, prix) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2 ');
    let img = document.createElement('img');
    img.setAttribute('class','image-crd')
    //img.setAttribute('src',image)
    img.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-title mt-3');
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);

    let span = document.createElement('span');
    span.setAttribute('class', 'card-text mt-2 ');
    span.appendChild(document.createTextNode(prix + '$'));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content2.append(div)
}


courses.forEach((el) => {
    creationCours(el.image, el.title, el.price);
})

function createCategories(cat){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(cat));
    li.setAttribute('class','list-group-item');
    li.id=cat
    listCat.append(li);
}

var categories = ['All',...new Set(courses.map((v)=> v.category.toLowerCase()))]; 

categories.forEach((v)=>{
    createCategories(v);
});
//    filter by title
//--------------------------------------------------------------------------------------------------------------------
function searchByTitle(){
    document.getElementById('cards').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].title.toLowerCase().includes(category.value.toLowerCase())){
            creationCours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
    if(category =="")
        courses.forEach((el)=>{
            creationCours(el.image,el.title,el.price)
        })
}
category.addEventListener('keyup',searchByTitle)


//    filter by cat
//--------------------------------------------------------------------------------------------------------------------
function searchBycat(categorie){
    document.getElementById('cards').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()===categorie){
            creationCours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------

document.getElementById('All').addEventListener('click',()=>{
    document.getElementById('cards').innerHTML = " "
    courses.forEach((el) => {
        creationCours(el.image, el.title, el.price);
    })
})

document.getElementById('js').addEventListener('click',()=>{
    searchBycat("js")
})
document.getElementById('html').addEventListener('click',()=>{
    searchBycat("html")
})
document.getElementById('css').addEventListener('click',()=>{
    searchBycat("css")
})
document.getElementById('php').addEventListener('click',()=>{
    searchBycat("php")
})



document.getElementById('rg').addEventListener('change',()=>{
    var value =document.getElementById('rg').value
    document.getElementById('price').innerHTML = "Value : "+ value +" $"
    document.getElementById('cards').innerHTML = " "
        for(let i =0;i<courses.length;i++){
            if(courses[i].price <= value){
                creationCours(courses[i].image,courses[i].title,courses[i].price)
            }          
        }
}

)