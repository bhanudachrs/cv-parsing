import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import walletReducer from './reducers/wallet.reducer';

const rootReducer = combineReducers({
    // wallet: walletReducer
  });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;