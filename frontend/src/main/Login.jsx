import React from 'react';



export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            nome: "",
            senha: ""
        }
    }

    onEntrar() {
        const { nome, senha } = this.state;
        if (nome && senha) {
                sessionStorage.setItem('usuarioLogado', 'true') 
                window.location.reload();  
          
        } else {
            alert("Usuario Invalido")
        }
    }
    updateField(event) {
        const login = { ...this.state }
        login[event.target.name] = event.target.value
        this.setState({ ...login })
    }



    render() {
        return (
            <div id='forms'>
                <label>Nome</label>
                <input name='nome' onChange={e => this.updateField(e)} value={this.state.nome} placeholder="Nome" />
                <label>Senha</label>
                <input name='senha' onChange={e => this.updateField(e)} value={this.state.senha} placeholder="Senha" type='password' />
                <button onClick={this.onEntrar.bind(this)}>Entrar</button>
            </div>
        )
    }
} 
