import axios from 'axios'

const URL = 'http://localhost:3001/card'

export const setName = event => ({
    type: 'CHANGENAME',
    payload: event.target.value
})
export const setAtq = event => ({
    type: 'CHANGEFORCAATQ',
    payload: event.target.value
})
export const setDef = event => ({
    type: 'CHANGEFORCADEF',
    payload: event.target.value
})
export const setType = event => ({
    type: 'CHANGETYPE',
    payload: event.target.value
})



export const save = (name, forcaAtq, forcaDef, typeCard) => {
    return dispatch => {
        axios.post(URL, { name, forcaAtq, forcaDef, typeCard })
            .then(resp => alert(`carta ${name} inserida`))
    }
}

export const edit = (id, name, forcaAtq, forcaDef, typeCard) => {
    return dispatch => {
        axios.put(`${URL}/${id}`, { name, forcaAtq, forcaDef, typeCard })
            .then(resp => alert(`carta ${name} Editada`))

    }
}


export const clear = () => ({
    type: 'CLEAR', payload: null
})


