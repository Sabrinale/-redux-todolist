const redux = require('redux');

// reducer is a pure func can state cu va chi thi action
// const defaultState = { 
//     mang: ['Android', 'Ios', 'Nodejs'],
//     isAdding: false,
// }
// var reducer = (state = defaultState, action) => {
   
//         switch (action.type) {
//            //case 'TOGGLE': 
//          //return {...state, isAdding : !isAdding } 
//             case 'ADD_ITEM': 
//             return {...state, mang : [ ...state.mang, action.item]}
//              case 'REMOVE_ITEM':
//              return {...state, mang: state.mang.filter((e, i)=> i !== action.index)}
//     default:
//     return state;
//     }
// }
var mangReducer= (state = ['Android', 'Ios', 'Nodejs'], action ) => {
    switch (action.type) {
        case 'ADD_ITEM': 
            return [...state,action.item]
        case 'REMOVE_ITEM':
            return state.filter((e, i)=> i !== action.index)
        default:
            return state;
    }
}
var isAddingReducer = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE': 
            return !state
        default:
            return state;
    }

}
var reducer = redux.combineReducers({
    mang: mangReducer,
    isAdding: isAddingReducer 
});
const store = redux.createStore(reducer, redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
//console.log(store.getState());
// de thuc thi chi thu ta goi store ra va dispatch = thuc thi
  //store.dispatch({ type: 'TOGGLE_IS_ADDING' });
//   store.subscribe(() => {
//   var str = store.getState();
//   document.getDocumentById('p-detail').innerHTML = JSON.stringify(str);

// });
// store.dispatch({ 
//     type: 'TOGGLE'
//  });
// store.dispatch({ 
//     type: 'ADD_ITEM',
//     item: 'Unity'
//  });
//  console.log(store.getState());
//  store.dispatch({
//      type: 'REMOVE_ITEM',
//      index: 1
//     });
//     console.log(store.getState());
//     // moi lan thay doi thi lam gi store

    export default store;

