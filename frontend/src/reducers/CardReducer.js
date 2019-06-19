const initialState = { name: '', forcaAtq: 0, forcaDef: 0, typeCard: '' }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGENAME':
            return { ...state, name: action.payload }
        case 'CHANGEFORCAATQ':
            return { ...state, forcaAtq: action.payload }
        case 'CHANGEFORCADEF':
            return { ...state, forcaDef: action.payload }
        case 'CHANGETYPE':
            return { ...state, typeCard: action.payload }
        case 'CLEAR':
            return { ...state,  name: '', forcaAtq: 0, forcaDef: 0, typeCard: '' }
        default:
            return state
    }

}