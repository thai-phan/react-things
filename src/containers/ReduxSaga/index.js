import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagaMonitor from '../sagaMonitor'

import Counter from './Counter'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
console.log(store);
const action = type => store.dispatch({ type })
console.log(action);

class ReduxSaga extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Counter
                    value={store.getState()}
                    onIncrement={() => action('INCREMENT')}
                    onDecrement={() => action('DECREMENT')}
                    onIncrementAsync={() => action('INCREMENT_ASYNC')} />
            </Provider>
        )
    }
}

export default ReduxSaga 