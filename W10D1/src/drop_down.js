
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};



function dogLinkCreator(){
  const dogLinks = [];
 
  for(let key in dogs){
    let dog = document.createElement('a');    
    dog.innerHTML = key;
    dog.href = dogs[key];
    let list = document.createElement('li');
    list.classList.add("dog-link");
    list.appendChild(dog);
    dogLinks.push(list);
  }

  return dogLinks;

}

function attachDogLinks(){
  let dogLinks = dogLinkCreator();
  const dropDownDog = document.getElementsByClassName("drop-down-dog-list");
  for(let i in dogLinks){
    dropDownDog[0].appendChild(dogLinks[i]);
  }
};

attachDogLinks();

const mouseTarget = document.getElementsByClassName("drop-down-dog-nav");

mouseTarget[0].addEventListener('mouseenter', (e)=>{
  const item = document.getElementsByClassName("drop-down-dog-list")
  item[0].removeAttribute("attribute");

});

mouseTarget[0].addEventListener('mouseleave', (e) => {
  const item = document.getElementsByClassName("drop-down-dog-list");
  let att =document.createAttribute('attribute');
  att.value= 'hidden';
  item[0].setAttributeNode(att);

});

module.exports = "attachDogLinks";
