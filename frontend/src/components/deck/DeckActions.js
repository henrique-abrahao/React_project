import axios from 'axios'

const URL = 'http://localhost:3001/card'

export const remove = (card) => {
    return dispatch => {
        axios.delete(`${URL}/${card.id}`)
            .then(resp => dispatch(search()))
    }
}
export const search = () => {
    return (dispatch, getState) => {
        const data = getState().card.data
        const search = data ? `&data__regex=/${data}/` : ''
         axios.get(`${URL}?sort=createdAt${search}`)
            .then(resp => dispatch({type: 'JOGO_SEARCHED', payload: resp.data}))
    }
}

export const gerar = () => (dispatch) => {
    axios(URL).then(resp => dispatch(gerarLista(resp.data)))
}

export const gerarLista = (lista) => ({type:'GERALIST', payload: lista})


