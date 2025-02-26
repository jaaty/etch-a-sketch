const setupBoard = (numOfRows = 16) => {
    const container = document.querySelector(".container");
    const rows = [];
    setNumOfRows(container);

    for (let i = 0; i < numOfRows; i++) {
        const row = document.createElement("div");
        row.className = `row${i}`;
        row.style.display = `flex`;
        row.style.flexDirection = `row`;
        row.style.justifyContent = `center`;
        row.style.alignItems = `center`;
        row.style.flex = `1 1 auto`;
        rows.push(row);
    }

    rows.forEach(row => {
        for (let i = 0; i < numOfRows; i++) {
            const column = document.createElement("div");
            column.className = `column${i}`;
            column.style.border = `2px black`;
            column.style.justifyContent = `center`;
            column.style.alignItems = `center`;
            column.style.maxHeight = `30px`;
            column.style.maxWidth = `30px`;
            column.style.minHeight = `30px`;
            column.style.minWidth = `30px`;
            column.style.flex = `1 1 auto`;
            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = `black`;
            });
            row.appendChild(column);
        }
        container.appendChild(row);
    });
};

const setNumOfRows = (container) => {
    const button = document.createElement("button");
    let numOfRows = 16;
    button.addEventListener("click", () => {
        const input = prompt("How many rows would you like the sketch pad to be?");
        numOfRows = Number(input);
        setupBoard(numOfRows);
    })
    container.appendChild(button);
}

setupBoard();