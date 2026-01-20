const frutisLists = document.querySelectorAll('#fruits-list');
for ( const frutisList of frutisLists){
    frutisList.style.listStyleType='none'
}



document.getElementById('btn-input').addEventListener('click', function(){
    const input = document.getElementById('input-text')
    const inputText = input.value;

    const inputBox = document.getElementById('fruits-list');
    const p = document.createElement('li');
    p.innerText = inputText;
    inputBox.appendChild(p)
    input.value='';
})