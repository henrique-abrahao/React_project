import React from 'react'
import Main from '../template/Main'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { remove, gerar } from './DeckActions'


const headerProps = {
    title: 'Deck',
    subtitle: 'Aqui você verá as cartas do seu deck'
}

class DeckList extends React.Component {

    componentDidMount() {
        console.log(this.props)
        this.props.gerar()
    }

    renderRows() {
        return this.props.list.map(card => (
            <tr key={card.id}>
                <td>{card.id}</td>
                <td>{card.name}</td>
                <td>{card.forcaAtq}</td>
                <td>{card.forcaDef}</td>
                <td>{card.typeCard}</td>
                <td>
                    <button className="btn btn-danger ml-2"
                        onClick={() => this.props.remove(card)}>
                        <i className="fa fa-trash"></i>
                    </button>
                    <Link to={`/deck/${card.id}`}>
                        <button className="btn btn-warning ml-2">
                            <i className="fa fa-search-plus"></i>
                        </button>
                    </Link>
                </td>

            </tr>

        )
        )
    }
    renderForm() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Forca de Ataque</th>
                        <th>Força de Defesa</th>
                        <th>Tipo de Carta</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}


const mapStateToProps = state => ({ list: state.deck.list })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ remove, gerar }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DeckList)