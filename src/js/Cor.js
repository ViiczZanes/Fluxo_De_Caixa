class Cor {

    altColor(color){
        const itens = document.querySelectorAll('.changeColor');

        if(color != ''){
            for(let item in itens){
                itens[item].classList.remove('padrao')
                itens[item].classList.add(color);
            }
        }
    }


    getColor(){
        const cor = document.getElementById('changerColor').value;

        localStorage.setItem("color", cor);
    }

}
const cor = new Cor