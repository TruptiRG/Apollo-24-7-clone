console.log("a")
document.querySelector("#pop").addEventListener("click",click);
function click(){
    event.preventDefault()
    console.log("inside me")
    var a=document.querySelector("#pop1");
    a.innerText="This may happen due to poor internet connectivity or due to some technical glitch. In such cases, please check your internet connection and if the issue persists, please email us at helpdesk@apollo247.com with the screenshot of the error and we will get this checked from our end."
    // var b=document.querySelector("#pop2");
    // b.src="img\images.png"
    // b.setAttribute("src",".\img\angle-up-solid.svg")

}