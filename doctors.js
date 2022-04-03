console.log("a")
var main=document.querySelectorAll("#hello>div");
// console.log(main);
for(var i=0; i<main.length; i++){
    main[i].addEventListener("click",function(){
        // var counter=0;
        console.log(this.id)
        switch (this.id) {
            case "1":
                // console.log("a")
                var img="#pop1_";
                var Hbox="#pop1__";
                break;
            case "2":
                var img="#pop2_";
                var Hbox="#pop2__";
                // console.log("b")
                break;
            case "3":
                console.log("a")
                var img="#pop3_";
                var Hbox="#pop3__";
                break;
            case "4":
                var img="#pop4_";
                var Hbox="#pop4__";
                break;
            case "5":
                var img="#pop5_";
                var Hbox="#pop5__";
                break;
            case "6":
                var img="#pop6_";
                var Hbox="#pop6__";
                break;
            case "7":
                var img="#pop7_";
                var Hbox="#pop7__";
                break;
            case "8":
                var img="#pop8_";
                var Hbox="#pop8__";
                break;
            case "9":
                var img="#pop9_";
                var Hbox="#pop9__";
                break;
            case "10":
                var img="#pop10_";
                var Hbox="#pop10__";
                break;
            case "11":
                var img="#pop11_";
                var Hbox="#pop11__";
                break;
            case "12":
                var img="#pop12_";
                var Hbox="#pop12__";
                break;
            case "13":
                var img="#pop13_";
                var Hbox="#pop13__";
                break;
            case "14":
                var img="#pop14_";
                var Hbox="#pop14__";
                break;
            case "15":
                var img="#pop15_";
                var Hbox="#pop15__";
                break;
            case "16":
                var img="#pop16_";
                var Hbox="#pop16__";
                break;
            case "17":
                var img="#pop17_";
                var Hbox="#pop17__";
                break;
            case "18":
                var img="#pop18_";
                var Hbox="#pop18__";
                break;
            case "19":
                var img="#pop19_";
                var Hbox="#pop19__";
                break;
            case "20":
                var img="#pop20_";
                var Hbox="#pop20__";
                break;
            case "21":
                var img="#pop21_";
                var Hbox="#pop21__";
                break;
            case "22":
                var img="#pop22_";
                var Hbox="#pop22__";
                break;
            case "23":
                var img="#pop23_";
                var Hbox="#pop23__";
                break;

            default:
                break;
        }
        click(img,Hbox)
    });

}
var counter=0;



// document.querySelector("#pop2").addEventListener("click",click);
function click(img,Hbox){
    event.preventDefault()
    counter++;


    // console.log(counter);
    if(counter%2==0){
        OpenModal(img,Hbox);
    }
    else{
        CloseModal(img,Hbox);
    }

}
function OpenModal(img,Hbox) {
    let element = document.querySelector(Hbox)
    element.style.display = 'block'
    var a=document.querySelector(img);
    a.src="./img/angle-up-solid.svg"
  }
function CloseModal(img,Hbox) {
    let element = document.querySelector(Hbox)
    element.style.display = 'none'
    var a=document.querySelector(img);
    a.src="./img/angle-down-solid.svg"
  }