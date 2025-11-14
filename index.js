function checkUser(str){
    const validUsers = ["alice", "bob", "charlie"];
    if(validUsers.includes(str.toLowerCase())){
        return "User already exists,Please login.";
    }
    else{
        validUsers.push(str.toLowerCase());
        return "Sign Up successful,Please login";
    }
}

function login(username, password){
    const validUsers = ["alice", "bob", "charlie"];
    if(validUsers.includes(username.toLowerCase()) && password === "Emp@123"){
        return "Login successful";
    }
    else if(validUsers.includes(username.toLowerCase()) && password != "Emp@123"){
        return "Wrong password";
    }
    else{
        return "User not found,Please sign up.";
    }
}