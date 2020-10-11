export const saveLoginData = (loginDetails) =>(
    {
    type:"SAVE_LOGIN_DETAIL",
    loginDetails:{
    email:loginDetails.email,
    password:loginDetails.password,
    fname:loginDetails.fname,
    lname:loginDetails.lname,
    }
    });