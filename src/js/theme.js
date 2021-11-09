const checkbox = document.getElementById('checkbox');
const itens = document.querySelectorAll('.theme');

checkbox.addEventListener('change', () => {

    for(let item of itens){
        item.classList.toggle('dark');
    }

});