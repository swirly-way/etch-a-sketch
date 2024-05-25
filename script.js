const container = document.getElementById('container');

let input, inputInt, panelNum // These variables will hold the user input (string), the input as an integer and the number of panels (product of inputInt)
let randomOn = false; // This variable stores a boolean that evaluates if random color mode is toggled on or off.

// This function generates the screen in which the user draws, storing also the event handlers.
function generateScreen() { 


    // This function assigns a value to the variables previously declared, performs a calculation and returns the amount of panels to use in the screen.
    // It also evaluates if the amount of panels exceeds the limit.
    function requestInput(){
        input = prompt('How many squares per side? (Max 100)');
        inputInt = Number(input);
        panelNum =  inputInt * inputInt;
        if(inputInt >= 101){
            requestInput();
        }
    
    }
    requestInput();

   // This function generates the grid in which the panels are stored.
   // The loop takes panelNum as a condition/limit creating a child and appending it for each iteration.
   // It counts with a hover event listener that paints a child black or random color depending on the condition of the randomOn boolean.
   function gridGenerator(){
    for(let i = 1; i <= panelNum; i++){
        const panel = document.createElement("div");
        panel.addEventListener('mouseover', function(){
            if(randomOn === true){
                const color = Math.floor(Math.random()*16777215).toString(16);
                panel.style.backgroundColor = `#${color}`;
               }
               else{
                panel.style.backgroundColor = 'black';
               }
                });
        panel.classList.add('panel');
        container.appendChild(panel);
        panel.style.flexBasis = `calc(100% / ${inputInt})`;
    };
}
gridGenerator();


   // Identification of the clear button and adding an event listener that changes all children color to white.
    const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function(){
        container.childNodes.forEach((child) => {
            child.style.backgroundColor = 'white';
          });
      
    })
   
  
    // Identification of the change button with a click event listener that deletes all children, calls for a new Input and for a new grid to be generated.
    const changeBtn = document.getElementById('changeBtn');
    changeBtn.addEventListener('click', function(){
        container.replaceChildren();
          requestInput();
          gridGenerator();
    })


    // Identification of the random button with a click event listener that toggles random mode on or off.
    const randomBtn = document.getElementById('randomBtn');
randomBtn.addEventListener('click', function(){
    if(randomOn === true){
        randomOn = false;
    }
    else{
        randomOn = true;
    }
})

};
generateScreen();



