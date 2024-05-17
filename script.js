const container = document.getElementById('container');

const panelNum = 16;


function addSquare() {
    for(let i = 1; i <= panelNum; i++){
        const panel = document.createElement("div");
        
        panel.style.height = '100px';
        panel.style.width = '100px';
        panel.style.backgroundColor = 'green';

      
        // add the newly created element and its content into the DOM
        container.appendChild(panel);
    };
};
addSquare();