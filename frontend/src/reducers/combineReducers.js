import { combineReducers} from 'redux'
import CardReducer from './CardReducer'
import DeckReducer from './DeckReducer'

const rootReducer = combineReducers({
   card: CardReducer,
   deck: DeckReducer,
})

export default rootReducer