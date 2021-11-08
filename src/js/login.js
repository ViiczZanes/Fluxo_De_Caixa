class Login{
    logar(){
        const txtUser = document.getElementById("txUser").value
        const txtPass = document.getElementById("txPassword").value
    
        if(txtUser && txtPass == "admin"){
            window.location.href = "../views/Ganhos.html"
            alert("Foi!")
        } else {
            alert("Erro tente novamente")
        }
    
    }

    log_out(){
       const confi =  confirm("Deseja Realmente Sair?")
        if(confi){
            window.location.href = "../views/index.html"
        }else{
            alert("Bem Vindo de Volte 🥺❤️")
        }
    }

}

const login = new Login()
