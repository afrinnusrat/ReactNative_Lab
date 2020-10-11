const initialState = {
    loginDetails: {
        email: "", password: "", fname: "", lname: "" 
    }};
    const loginDetailReducer = (state = initialState , action) => {
    switch(action.type){
    case "SAVE_LOGIN_DETAIL" :{
    return{
    ...state,
    loginDetails : action.loginDetails
    }}
    default:{
    return state;
    }}}
    export default loginDetailReducer;