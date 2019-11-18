const errors = {
    "auth/user-not-found": "User with the provided credentials was not found. Please try again with valid crendentails.",
    "auth/email-already-in-use": "The email address is already in use by another user",
    "auth/weak-password": "The password you entered is very weak. Use a stronger password."
}
const getAuthErrorMessage = (key)=>{
    if(errors[key])return errors[key];
    return null;
}

export {errors, getAuthErrorMessage}