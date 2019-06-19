import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setAtq, setDef, setName, setType, save, clear, edit  } from './CardActions'
import Main from '../template/Main'

const headerProps = {
    title: 'Cartas',
    subtitle: 'Inserir Cartas'
}

class CardCrud extends Component {

    renderForm() {
        clear()
        const { id } = this.props.match.params
        const { name, forcaAtq, forcaDef, typeCard } = this.props;
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.props.name}
                                onChange={this.props.setName}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Tipo de Carta</label>
                            <input type="text" className="form-control"
                                name="typeCard"
                                value={this.props.typeCard}
                                onChange={this.props.setType}
                                placeholder="Digite o tipo de carta..." />
                        </div>
                    </div>


                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Força de Ataque</label>
                            <input type="number" className="form-control"
                                name="forcaAtq"
                                value={this.props.forcaAtq}
                                onChange={this.props.setAtq} />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Força de Defesa</label>
                            <input type="number" className="form-control"
                                name="forcaDef"
                                value={this.props.forcaDef}
                                onChange={this.props.setDef} />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">

                        <button className="btn btn-primary"
                            onClick={id ? edit(id,name, forcaAtq, forcaDef, typeCard) : save(name, forcaAtq, forcaDef, typeCard)}>
                            {id ? 'Editar' : 'Salvar'}
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={()=>this.props.clear()}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
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

const mapStateToProps = state => ({ name: state.card.name, forcaAtq: state.card.forcaAtq, forcaDef: state.card.forcaDef, typeCard: state.card.typeCard })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ save, setName, setAtq, setDef, setType, clear, edit}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CardCrud)