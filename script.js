const setupBoard = () => {
    const container = document.querySelector(".container");
    const rows = [];

    for (let i = 0; i < 16; i++) {
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
        for (let i = 0; i < 16; i++) {
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

setupBoard();