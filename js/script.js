/*Variables*/

//the text that appear on the background
const bgText = document.querySelector('.bg-text');

//intro
const introText = document.querySelector('.intro-text');
const phone = document.querySelector('.phone');
const scrollDownButton = document.querySelector('.arrow-down');

//section1 variables
const section1 = document.getElementById('section1');
const section1Top = section1.offsetTop;
const section1Height = section1.offsetHeight;

//section4 variables
const section4 = document.getElementById('section4');
const section4Top = section4.offsetTop;
const section4Height = section4.offsetHeight;

const opacityTo1 = document.querySelectorAll('.opacity');
const op = opacityTo1[1].offsetTop;
const positionTo0 = document.querySelectorAll('.position-appear');

/*Functions*/

//intro animation when site is opened
introFunction = ()=>{
    introText.style.opacity = "1";
    introText.style.transform = "translateX(0)"; 
    phone.style.transform= "scale(1)";
};
introFunction();

//scroll down button function
scrollDown =  ()=>{
    section1.scrollIntoView({behavior:'smooth'});
};

//Background Text Changing depending on the position of the top of the window
changeBgText = ()=>{
    let windowTop = window.pageYOffset;
    if(windowTop >= 0 && windowTop < section1Top){
        bgText.textContent = "Lorem ipsum dolor sit amet,  a aliqua.Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit";
        return;
    }else if(windowTop > section1Top && windowTop < section1Top + section1Height){
        bgText.textContent = "a aliqua.Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        return;
    }else if(windowTop > section4Top - 50){
        bgText.textContent = "So.. What are you waiting for?!";

    }
};

//Elements Appear when reached
ApearWhenReach = ()=>{
    let windowTop = window.pageYOffset;
    let windowHeight = window.innerHeight;

    
    if(windowTop >= section1Top - windowHeight/2){
        
        opacityTo1.forEach(e =>{
            e.style.opacity = "1";
        });
        positionTo0.forEach(e =>{
            e.style.transform = "translateY(0)";
        });

    }

    /*
    for(let i = 0;i< opacityTo1.length;i++){
       
        if(windowTop <= opacityTo1[i].getBoundingClientRect().top - windowHeight/2){
            opacityTo1[i].classList.add('fade-in')
        }
    };
    */

    /*
    opacityTo1.forEach(element =>{
        let elementTop = element.offsetTop;
        if(windowTop <= elementTop - windowHeight/2){
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
                return;
        }
    });
    */
    
    
};


/*Events*/

window.addEventListener('scroll', ()=>{
    changeBgText();
    ApearWhenReach();
});

scrollDownButton.addEventListener('click', scrollDown);



//edit 1
//create loading overlay

const loading = document.createElement("div");
loading.innerHTML = " <div class='load'><hr/><hr/><hr/><hr/></div>";
loading.setAttribute('style','width:100vw;height:100vh;background-color:#f1f1f1;z-index:1000;position:fixed;top:0;left:0;transition:all ease-in-out 2s');
document.body.appendChild(loading);


window.addEventListener('load',function(){
    loading.style.opacity = "0";
    setTimeout(function(){
        loading.style.display = "none";
    },2000);
});

