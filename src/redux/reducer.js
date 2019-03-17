

const initialState =  {
    id: 0,
    username: '',
    cart: [],
    cartTotal: 0,
    cartQuantity: 0,
    main_img: ''
}

const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER = 'CLEAR_USER';
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_CART_TOTAL = 'UPDATE_CART_TOTAL';
const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';



export function clearUser(user) {
    return {
        type: CLEAR_USER,
        payload: user
    }
}

export function updateUser() {
    return {
        type: UPDATE_USER
    }
}






export default function reducer(state = initialState, action) {
    const {payload, type} = action;
    switch(type) {
       case UPDATE_USER:
         const {id, username} = payload;
         return {...state, id, username}
       case CLEAR_USER:
         return {...state, id:0, username:''}
     

        default:
        return state
    }
}