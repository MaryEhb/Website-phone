/*Variables*/

const buttons = document.querySelectorAll('.products .btn');

const btnFunction = function(){
    //variables 
        const parentEl = this.parentNode.parentNode.parentNode;
        const imgSrc = parentEl.querySelector('img').src;
        const price = parentEl.querySelector('.price').innerText;
        const starsHTML = parentEl.querySelector('.stars').innerHTML;

    //create the popup and overlay
    const popup = document.createElement('div');
    popup.className = "popup";
    const popupWrap = document.createElement('div');
    popupWrap.className = "popup-wrap";
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    // appeand them to body
    popupWrap.appendChild(popup); //popup is appeanded to wrap to make popup position relative
    document.querySelector('body').appendChild(popupWrap);
    document.querySelector('body').appendChild(overlay);

    //content
    const imgEl = document.createElement('img');
    imgEl.src = imgSrc;
    popup.appendChild(imgEl);

    const textEl = document.createElement('div');
    textEl.className = "text";
    textEl.innerHTML = 
    `<div class="head">
        <h2 class="capital main-color">Mobile Name</h2>
        <div class="stars">${starsHTML}</div>
    </div>

    <div class="des">
        <h3 class="capital main-color">Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
    </div>

    <div class="colors">
        <p class="main-color capital">custom color<p>
        <ul class"flex-row">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>

    <div class="flex-row">
        <div class="flex-column">
        <p class="main-color capital">price</p>
        <p>${price}</p>
        </div>
        <button class="btn capital">add to cart</button>
    </div>    
    `;

    popup.appendChild(textEl);

    //close the popup
    const close = document.createElement('div');
    close.innerText = 'close';
    close.className = 'close-popup';
    popup.appendChild(close);

    close.onclick = (e)=>{
        overlay.remove();
        popupWrap.remove();
    };

    overlay.onclick = (e)=>{
        overlay.remove();
        popupWrap.remove();
    };


}

buttons.forEach(btn =>{
    btn.addEventListener('click', btnFunction);
});