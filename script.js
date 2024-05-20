const container = document.getElementById('container');

const input = 30;

const panelNum =  input * input;



function generateScreen() {

   const gridGenerator = function(){
    for(let i = 1; i <= panelNum; i++){
        const panel = document.createElement("div");
        panel.classList.add('panel');
        container.appendChild(panel);
        panel.style.flexBasis = `calc(100% / ${input})`;
        panel.addEventListener('mouseover', function(){
        panel.style.backgroundColor = 'black';
        });
    };
}

    const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function(){
        container.childNodes.forEach((child) => {
            child.style.backgroundColor = 'white';
          });
      
    })
   

    const changeBtn = document.getElementById('changeBtn');
    changeBtn.addEventListener('click', function(){
        while (container.firstChild) {
            container.removeChild(container.lastChild);
          }
    })
};
generateScreen();



