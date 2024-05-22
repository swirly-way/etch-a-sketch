const container = document.getElementById('container');

let input = prompt('How many squares per side?');
let inputInt = Number(input);
let panelNum =  inputInt * inputInt;
let randomOn = false;

function generateScreen() {

   function gridGenerator(){
    for(let i = 1; i <= panelNum; i++){
        const panel = document.createElement("div");
        panel.addEventListener('mouseover', function(){
            panel.style.backgroundColor = 'black';
            });
        panel.classList.add('panel');
        container.appendChild(panel);
        panel.style.flexBasis = `calc(100% / ${inputInt})`;
    };
}
gridGenerator();

    const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function(){
        container.childNodes.forEach((child) => {
            child.style.backgroundColor = 'white';
          });
      
    })
   

    const changeBtn = document.getElementById('changeBtn');
    changeBtn.addEventListener('click', function(){
        container.replaceChildren();
        input = prompt('How many squares per side?');
        inputInt = Number(input);
        panelNum =  inputInt * inputInt;
          gridGenerator();
    })
};
generateScreen();



