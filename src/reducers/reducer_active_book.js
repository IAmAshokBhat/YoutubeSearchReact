//State here is not whole state object of App, rather part of state this reducer handles

export default function(state = null,action){
    switch(action.type){
        case 'BOOK_SELECTED':
         return action.payload;

    }
    return state;
}