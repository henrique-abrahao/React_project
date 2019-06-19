import React from 'react'
import Route from './Routes'
import Login from './Login'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logado: null
        }
    }

    async componentWillMount() {
        let logado = await sessionStorage.getItem('usuarioLogado')
        this.setState({ ...this.state, logado })
        console.log(logado)
    }

    render() {
        const { logado } = this.state
        if (logado) {
            return (
                < Route />
            )
        }
        return (
            < Login />
        )
    }
}