var myEmail = "";


const handleChange = (e) => {
    document.getElementById("errorMessage").innerHTML = ""
    myEmail = e.target.value;
    myEmail = document.getElementById("myInput1").value;
}
const handleValidate = () => {
    let regexp = /\S+@\S+\.\S+/;
    return regexp.test(String(myEmail).toLowerCase());
}

const handleSubmit = () => {
    console.log(myEmail)
    let val1 = handleValidate();
    if (myEmail === "") {
        document.getElementById("errorMessage").innerHTML = "Field Should not be Empty";
    }
    else if (!val1) {
        document.getElementById("errorMessage").innerHTML = "Valid email required";
    }
    else {
        // localStorage.setItem("myEmail",myEmail)
        // window.location.href = "done.html";
        document.getElementById("box1").style.display="none";
        document.getElementById("box2").style.display="flex";
        document.getElementById("showEmail").innerText=myEmail;
    }
}
// addEventListener("load", () => {
//     if (window.location.href === 'http://127.0.0.1:5500/done.html') {
//         let val1=localStorage.getItem("myEmail")
//         document.getElementById("showEmail").value=val1
        
//     }
// });
window.addEventListener("change", handleChange);