const container = document.getElementById('container');

const input = 30;

const panelNum =  input * input;

function addSquare() {
    for(let i = 1; i <= panelNum; i++){
        const panel = document.createElement("div");
        panel.classList.add('panel');
        container.appendChild(panel);
        panel.style.flexBasis = `calc(100% / ${input})`;
        panel.addEventListener('mouseover', function(){
        panel.style.backgroundColor = 'black';
        });
    };

};
addSquare();



