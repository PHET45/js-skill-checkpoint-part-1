// Question #3
let userPassword = "066999";
// เริ่มเขียนโค้ดตรงนี้
let checkPasswordStrength = (userPassword) => {
    
    count = userPassword.length
    
    if(count < 6 && count > 0){
        result = "Weak"
    } else if (count <= 10 && count >= 6){
        result = "Medium"
    } else {
        result = "Strong"
    }
    return result ;
};
console.log(checkPasswordStrength(userPassword))