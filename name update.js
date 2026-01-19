document.getElementById('btn-update').addEventListener('click',function(){
    const inputfield = document.getElementById('input-field')
    const inputtext = inputfield.value;

    const p = document.getElementById('input-text-display');
    p.innerText= inputtext;
    inputfield.value='';
})