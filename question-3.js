// Question #3
let userPassword = "066";
// เริ่มเขียนโค้ดตรงนี้
let checkPasswordStrength = (userPassword) => {
    for (let i = 0;i < userPassword.length;i++){
        count = userPassword.length
    };
    if(count < 6 && count > 0){
        result = "Weak"
    } else if (count < 10 && count > 6){
        result = "Medium"
    } else {
        result = "Strong"
    }
    return result ;
};
console.log(checkPasswordStrength(userPassword))