/********************************************************************************************************/
var elmnt1 = document.querySelector(".scrollPresentaion");
var elmnt11 = document.querySelector(".nav-item");
var elmnt2 = document.querySelector(".presentationSpace.row");

elmnt1.addEventListener('click',() => {
    
   elmnt2.scrollIntoView();
});


const presentationAwesomeNavBar=document.querySelector('.PRESENTATION');


presentationAwesomeNavBar.addEventListener('click',()=>{
    
    elmnt2.scrollIntoView(); 
    
});

/********************************************************************************************************/
var elmnt3 = document.querySelector(".scrollActivity");
var elmnt4 = document.querySelector(".activity");
elmnt3.addEventListener("click",()=>{
    
   elmnt4.scrollIntoView();
});

const activityAwesomeNavBar=document.querySelector('.ACTIVITY');

activityAwesomeNavBar.addEventListener('click',()=>{elmnt4.scrollIntoView(); });

/********************************************************************************************************/
var elmnt5 = document.querySelector(".scrollDepartement");
var elmnt6 = document.querySelector(".departements");
elmnt5.addEventListener("click",()=>{
    
   elmnt6.scrollIntoView();
});




const departementAwesomeNavBar=document.querySelector('.DEPARTEMENTS');

departementAwesomeNavBar.addEventListener('click',()=>{elmnt6.scrollIntoView(); });

/********************************************************************************************************/

var elmnt7 = document.querySelector(".scrollEventsHistory");
var elmnt8 = document.querySelector(".eventsHistory");
elmnt7.addEventListener("click",()=>{
    
   elmnt8.scrollIntoView();
});



const eventsAwesomeNavBar=document.querySelector('.EVENT-HISTORY');
eventsAwesomeNavBar.addEventListener('click',()=>{ elmnt8.scrollIntoView(); });

/********************************************************************************************************/

/********************************************************************************************************/


/********************************************************************************************************/



var awesomeNavBar=document.querySelector("#main");


awesomeNavBar.style.opacity="0";

document.addEventListener("scroll",()=>{
//    console.log(window.pageYOffset);
     if(window.pageYOffset>=75)
        awesomeNavBar.style.opacity="1";
    else 
        awesomeNavBar.style.opacity="0";
    
});
    





//console.log(window.pageYOffset);





String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);

  return string + this;
};

var something = "How you?";
something = something.insert(4, "are ");

//for(var i=0;i<4;i++){
//   
//        imageName=imageNamePart1+(i+1)+imageNamePart2;
//        
//    images.push(imageName);
//    console.log(images[i]);
//}
var i=0;
var images=['IMAGES\\img1.jpg','IMAGES\\img2.jpg','IMAGES\\img3.jpg','IMAGES\\img4.jpg'];


 
var changeImages = () => {
      
        document.slide.src=images[i];
        if(i< images.length-1 ){

            i++;
        }
        else i=0;

        setTimeout("changeImages()",3000);

        }   


window.onload=changeImages();



//
//const contact= document.createElement("div").addClass("contactUS");
//
//console.log(contact);


/*******************************************************************************************************/


//
//document.querySelector(".scrollContactUs").addEventListener("click",()=>{
////   console.log(document.querySelector(".contactUS"));
//            document.querySelector(".contactUS").style.display="block";
//            
//   
//});
//
//document.querySelector(".CONTACTUS").addEventListener("click",()=>{
////   console.log(document.querySelector(".contactUS"));
//    
//            document.querySelector(".contactUS").style.display="block";
//           
//    
//});
//
//
//document.querySelector(".outContactUs").addEventListener("click",()=>{
//    
//    document.querySelector(".contactUS").style.display="none";
//    
//    
//});
//
//
//console.log(window.innerWidth);
//
//if(window.innerWidth <= 900){
//    document.querySelector(".contactUS").style.display="block";
//    document.querySelector(".contactUS").style.top="200px";
//    document.querySelector(".contactUS").style.position="relative";
//    document.querySelector(".contactUS").style.left="50%";
//    document.querySelector("div .outContactUs").style.display="none";
//    
//    document.querySelector("div .outContactUs").style.zIndex="0";
//}
//
//
//
//if(window.innerWidth <= 767){
//    document.querySelector(".contactUS").style.top="500px";
//    
//}
//







