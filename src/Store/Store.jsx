import { createStore } from 'redux';
import rootReducer from './reducers'; // Подставьте путь к корневому reducer

const store = createStore(rootReducer);
export default store;