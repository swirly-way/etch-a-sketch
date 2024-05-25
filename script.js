const container = document.getElementById('container');

let input, inputInt, panelNum
let randomOn = false;


function generateScreen() {

    function requestInput(){
        input = prompt('How many squares per side? (Max 100)');
        inputInt = Number(input);
        panelNum =  inputInt * inputInt;
        if(inputInt >= 101){
            requestInput();
        }
    
    }
    requestInput();


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

    const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function(){
        container.childNodes.forEach((child) => {
            child.style.backgroundColor = 'white';
          });
      
    })
   

    const changeBtn = document.getElementById('changeBtn');
    changeBtn.addEventListener('click', function(){
        container.replaceChildren();
          requestInput();
          gridGenerator();
    })

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



