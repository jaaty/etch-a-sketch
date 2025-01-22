const setupBoard = () => {
    const container = document.querySelector(".container");
    const rows = [];

    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.className = `row${i}`;
        rows.push(row);
    }

    rows.forEach(row => {
        for (let i = 0; i < 16; i++) {
            const column = document.createElement("div");
            column.className = `column${i}`;
            row.appendChild(column);
        }
        container.appendChild(row);
    });
}