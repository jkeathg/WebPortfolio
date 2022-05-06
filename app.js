// import functions

// reference needed DOM elements


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
const illWindow = document.getElementById('imgGallery');
const openGallery = document.getElementById('illustrationBtn');
let containerDiv = null;
    
    
    
openGallery.addEventListener('click', () => {
    
    if (illWindow.children.length === 0) {
    
    
        containerDiv = document.createElement('div');
        containerDiv.classList = 'containerDiv';
    
        const img1 = document.createElement('img');
        img1.src = './assets/Thing.jpg';
        const img2 = document.createElement('img');
        img2.src = './assets/Frank.jpg';
        const img3 = document.createElement('img');
        img3.src = './assets/herbert.jpg';
        const clsBtn = document.createElement('input');
        clsBtn.type = 'button';
        clsBtn.value = 'Close';
        clsBtn.classList = 'clsBtn';
    
    
        containerDiv.appendChild(img1);
        containerDiv.appendChild(img2);
        containerDiv.appendChild(img3);
        containerDiv.appendChild(clsBtn);
        illWindow.appendChild(containerDiv);
    }
    
});
    
    // close window
illWindow.addEventListener('click', clsWindow);
    
    
function clsWindow(e) {
        // select clicked target
    const item = e.target;
        // find if clear btn pressed.
    if (item.className === 'clsBtn'){
            // point to parent element and assign variable, remove that element.
        const clr = item.parentElement;
        clr.remove();
    }
}