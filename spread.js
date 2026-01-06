function add(a, b,...x){

    console.log(a + b , "<br>", x,"<br>")
    console.log(x)
    for(let value of x){
        document.write(value,"<br>")
    }
}
add(10, 20, 35, 49, 51) 

// default parameters 

function newApp(a = 20 , b = 40){
    document.write("welcome",a+b)
}