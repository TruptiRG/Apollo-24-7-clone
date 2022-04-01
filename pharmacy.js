// var indexValue = 0;
// function slideShow(){
//   setTimeout(slideShow, 2500);
//   var x;
//   const img = document.querySelectorAll("img");
//   for(x = 0; x < img.length; x++){
//     img[x].style.display = "none";
//   }
//   indexValue++;
//   if(indexValue > img.length){indexValue = 1}
//   img[indexValue -1].style.display = "block";
// }
// slideShow();
console.log("a")
var main=document.querySelectorAll("#forthdiv>div");
 console.log(main);
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

var pharma=[
  {image_url: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/g/n/gnc_milk_thistle.jpg",
name: "GNC Herbal Plus Milk Thistle 250 mg, 90 Tablets",
price: "Rs. 749.5",
},
{
  image_url: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/g/n/gnc_calcium_plus.jpg",
  name:"GNC Calcium Plus with Magnesium & Vitamin",
  price: " Rs. 574.5"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/l/-/l-arginine-01.jpg",
  name:"GNC L-Arginine 1000 mg, 90 Tablets",
  price:"Rs. 924.5"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/g/n/gnc_womens_one_daily_multivitamin.jpg",
  name:"GNC Women's One Daily Multivitamin, 60 Tablets",
  price:"Rs. 724.5"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/g/n/gnc_l-carnitine.jpg",
  name:"GNC PRO Performance L-Carnitine 500 mg, 60 Tablets",
  price:" Rs. 749.5"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/m/e/mega_men_sports_3.jpg",
  name:"GNC Mega Men Sport, 120 Tablets",
  price:"Rs. 1199.5"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/g/l/glu0297_1.jpg",
  name:"Glucon-D Tangy Orange Flavour Instant Enery",
  price:"Rs. 168"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/l/a/las0139.jpg",
  name:"La Shield Sunscreem Gel SPF 50 PA+++ UVA 50 gm",
  price:"Rs. 504"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/n/i/niv0123.jpg",
  name:"Nivea Men Fresh Active Deodorant, 150 ml",
  price:"Rs. 130"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/g/l/glu0072.jpg",
  name:"Glucon-D Regular Instant Energy Drink",
  price:"Rs. 115"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/e/cet0433.jpg",
  name:"Cetaphil Sun Kids High Protection Lotion SPF",
  price:"Rs. 1155"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/o/r/orange_1_1.jpg",
  name:"Digene On The Go Pack Orange Flavour Antacid",
  price:"Rs. 1"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/1/_/1.jpg",
  name:"Colgate ToothPaste For Diabetics, 70 gm",
  price:"Rs. 90"
},
{
  image_url: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0033.jpg",
  name:"Sebamed Extra Soft Baby Cream, @00 ml",
  price:"Rs. 519.98"
},
{
  image_url: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/g/n/gnc_amp_whey_1kg_1.jpg",
  name:"GNC AMP Gold 100% Whey Protein Advance",
  price:"Rs. 3159"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/sen0219.jpg" ,
  name:"Sensodyne Sensitive Soft Toothbrush",
  price:"Rs. 94.5"
},
{
  image_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/j/o/jolly_2_.jpeg" ,
  name:"Jolly Tulsi 51 Drops, 30 ml",
  price:"Rs. 213.3"
},
{//half price store
  image_url: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/col0550_1.jpg",
  name:"Colgate Sensitive Plus Anticavity Toothpaste",
  price:"Rs. 168"
},
{
  image_url: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/n/i/niv0398.jpg",
  name:"Nivea Milk Delights Turmeric Face Wash",
  price:"Rs. 45"
},
{
  image_url: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/l/i/lit0170_3.jpg",
  name:"Littles Soft Cleansing Baby Wipes, 80 Count",
  price:"RS. 95"
},
{
  image_url: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/p/a/pack_front_1500x1500px_new_48_1__1.jpg",
  name:"PreVID Powered-Up Immunity Pack, 48gm",
  price:"Rs. 1199.5"
},
{
  image_url: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/u/sunshield.jpg",
  name:"Lacto Calamine Daily Sunshield SPF 50 PA++",
  price:"Rs. 174.5"
},
{
  image_url: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/set0156.jpg",
  name:"Set Wet Swag Avatar Deodorant Body Spray",
  price:"Rs. 99.5"
},


];
var cartData=JSON.parse(localStorage.getItem("cart"))||[];

