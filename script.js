const text= document.querySelector(".sec-text");
const textLoad=()=>{
    setTimeout(()=>{
        text.textContent="AWS Cloud Engineer"

    },0);
    setTimeout(()=>{
        text.textContent="Jr Frontend Developer"

    },4000);
    setTimeout(()=>{
        text.textContent="H/w-Network Engineer"

    },8000);
}
textLoad();
setInterval(textLoad,12000);


function alertmsg(){
        document.getElementById("see-msg").style.display = "inline-block",setTimeout(function(){
            document.getElementById("see-msg").style.display = "none";
        },5000);
    }