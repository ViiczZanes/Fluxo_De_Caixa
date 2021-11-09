class Table{

    constructor(){
        this.id = 0;
        this.arrayTableData = []

    }

    getInputs = ()=>{
        const objectInputs = {};
    
        objectInputs.id = this.id;
        objectInputs.descrição = document.getElementById('descrição').value;
        objectInputs.valor = document.getElementById('valor').value;
        objectInputs.vencimento = document.getElementById('vencimento').value;
        objectInputs.metodoPag = document.getElementById('metodoPag').value;
    
        return objectInputs;
    }




    addArray(category){
        this.arrayTableData.push(this.getInputs());
        this.array(category)
    }


    array(category){
        let data = this.arrayTableData

        this.buildTable(data)
        localStorage.setItem(category, JSON.stringify(data))

    }

    localStorage(category){
        let datas = JSON.parse(localStorage.getItem(category));
        for(let data in datas){
            this.arrayTableData.push(datas[data]);
        }

        let dataSave = this.arrayTableData;
        this.buildTable(dataSave)
        
    }


    buildTable(category){
        const tbody = document.getElementById('tbody');
        tbody.innerHTML = ''

        for(let dado in category){
            let row = `<tr>
                            <td>${category[dado].id}</td>
                            <td>${category[dado].descrição}</td>
                            <td>${category[dado].valor}</td>
                            <td>${category[dado].vencimento}</td>
                            <td>${category[dado].metodoPag}</td>

                            
                       </tr>`

            tbody.innerHTML += row
            
        }
        this.id ++
    }
}

const table = new Table;



