var button1=$("#sciencequiz");
var button2=$("#animalsquiz");
var button3=$("#filmquiz");
var button4=$("#geoquiz");
var button5=$("#animequiz");
button1.on("click",()=>{
    window.location.href = "quiz.html";


  
})
button2.on("click",()=>{
    window.location.href="animals.html";
})

button3.on("click",()=>{
    window.location.href="film.html";
})

button4.on("click",()=>{
    window.location.href="geo.html";
})
button5.on("click",()=>{
    window.location.href="anime.html";
})

