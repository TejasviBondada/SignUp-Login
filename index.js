function checkUser(str){
    const validUsers = ["alice", "bob", "charlie"];
    if(validUsers.includes(str.toLowerCase())){
        return "User already exists,Please login.";
    }
    else{
        return "Sign Up successful,Please login";
    }
}