const setupBoard = (numOfRows = 16) => {
    const container = document.querySelector(".container");
    container.style.display = `flex`;
    container.style.flexDirection = `column`;
    container.style.justifyContent = `center`;
    container.style.flex = `1 1 auto`;
    container.style.maxHeight = `600px`;
    container.style.maxWidth = `600px`;
    container.style.aspectRatio = `1 / 1`;
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
        row.style.flexGrow = `1`;
        rows.push(row);
    }

    rows.forEach(row => {
        for (let i = 0; i < numOfRows; i++) {
            const column = document.createElement("div");
            column.className = `column${i}`;
            column.style.justifyContent = `center`;
            column.style.alignItems = `center`;
            column.style.flex = `1 1 auto`;
            column.style.flexGrow = `1`;
            column.style.aspectRatio = `1 / 1`;
            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = `black`;
            });
            row.appendChild(column);
        }
        container.appendChild(row);
    });
};

const clearBoard = () => {
    const body = document.querySelector("body");
    const container = document.querySelector(".container");
    body.removeChild(container);
    const div = document.createElement("div");
    div.classList.add("container");
    div.style.display = `flex`;
    div.style.flexDirection = `column`;
    div.style.flex = `1 1 auto`;
    div.style.maxWidth = `800px`;
    div.style.aspectRatio = `1 / 1`;
    body.appendChild(div);
};

const setNumOfRows = (container) => {
    const button = document.createElement("button");
    button.style.width = `100px`;
    button.style.height = `30px`;
    button.style.minHeight = `30px`;
    button.innerText = `reset board`;
    let numOfRows = 16;
    button.addEventListener("click", () => {
        const input = prompt("How many rows would you like the sketch pad to be?");
        numOfRows = Number(input);
        if (numOfRows <= 100 && numOfRows > 0) {
            clearBoard();
            setupBoard(numOfRows);
        }
    })
    container.appendChild(button);
}

setupBoard();