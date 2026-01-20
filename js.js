const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid black';
    section.style.marginBottom ='10px ';
    section.style.padding= '10px';
    section.style.borderRadius='10px';
    section.style.textAlign='center'
}
const lists = document.querySelectorAll('li');
for(const list of lists){
    list.style.listStyleType='none'
}
const fruits = document.getElementById('fruits')
fruits.style.background='pink';
const names = document.getElementById('names')
names.style.background='#88d36aff';
const colours = document.getElementById('colours')
colours.style.background='yellow';