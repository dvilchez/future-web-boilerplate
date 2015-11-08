import { combineReducers } from 'redux'
import hello from 'hello-cmp/reducer'

const helloApp = combineReducers({
    hello
})

export default helloApp
