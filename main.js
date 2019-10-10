document.addEventListener('DOMContentLoaded', (e) => {
    let canvas = document.querySelector('#canvas');
    let gridSize = document.querySelector(`#sizePicker`);


    const height = document.querySelector('#height').value;
    const width = document.querySelector('#width').value;
    
    
    // Make Grid
    function makeGrid() {
        for(i = 0; i <= height; i++) {
            let row = document.createElement(`tr`);
            canvas.appendChild(row);
            for(x = 0; x <= width; x++) {
                let cell = document.createElement(`td`);
                cell.style.backgroundColor = `#ffffff`;
                row.appendChild(cell);
            }
        }
    }

    makeGrid();

    gridSize.addEventListener(`submit`, (e) => {
        e.preventDefault();
        makeGrid();
    });
    
    // Toggle background fill
    canvas.addEventListener(`click`, (e) => {
       let color = document.querySelector(`#colorPicker`).value;
        e.target.style.backgroundColor = color;
    })
});