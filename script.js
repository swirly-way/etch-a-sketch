const container = document.getElementById('container');

const panelNum = 64;


function addSquare() {
    for(let i = 1; i <= panelNum; i++){
        const panel = document.createElement("div");
        panel.classList.add('panel');
        container.appendChild(panel);
        panel.addEventListener('mouseover', function(){
            panel.style.backgroundColor = 'white';
        })
    };
};
addSquare();
