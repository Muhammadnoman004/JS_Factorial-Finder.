let userInp = document.querySelector("#inp");
let result = document.querySelector("#resultDiv");
let resultInp = document.querySelector("#inp1");

function find(){
    if(userInp.value == ""){
        alert('Please Enter a Number.');
    }
    else{

        for(var fact = 1; userInp.value > 1; userInp.value--){
            fact = userInp.value * fact
            
        }
        result.style.display = "block";
        result.className = "resInp";
        resultInp.value = fact;
        userInp.value = "";
    }
}
