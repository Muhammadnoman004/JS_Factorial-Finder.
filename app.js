var userInp = prompt('Enter a number and find out the factorial')

for(var fact = 1; userInp > 1; userInp--){
    fact = userInp * fact
}
alert(fact)