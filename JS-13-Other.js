// ? Question-1:select section counter by class name(.cards__card__img__icon) and save in variable "counterEl":
// !Answer:
let counterEl=document.getElementsByClassName('cards__card__img__icon');
// ? Question-2:select item counter by id(#counter) and save in variable "counter":
// !Answer:
const counter=document.querySelector("#counter");
// ? Question-3:select section (.cards) and save in variable "card":
// !Answer:
const card=document.querySelector('.cards');
// ? Question-4:select section (.cards__card) and save in variable "cards":
// !Answer:
const cards=document.querySelector('.cards__card');
// ? Question-5:select button in class cards_card_footer and save in variable "btnEl":
// !Answer
const btnEl=document.querySelector(".cards_card_footer button");
// ? Question-6:select the img that has attribute "man" and show in console:
// !Answer
const imgEl=document.querySelectorAll("img");
// if(imgEl.getAttribute("alt")==="man"){console.log(imgEl);}
for (const element of imgEl) {
    if(element.getAttribute("alt")==="man"){console.log(element);}
}
