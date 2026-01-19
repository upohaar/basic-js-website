
const main = document.getElementById('main-container');
const section = document.createElement('div');
section.innerHTML=`
<h1> Details Information </h1>
<p> there are the name and the there personal information is given</p>
`
main.prepend(section);
const div= document.querySelector("div");
div.style.textAlign='center';
div.style.marginBottom='50px';
div.style.marginTop='50px';

