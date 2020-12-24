let player = false;
let table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

document.querySelector('table').addEventListener('click', function (e) {
    const cell = e.target;
    const x = cell.dataset.index[0];
    const y = cell.dataset.index[1];
    if (player) {
        cell.innerText = 'x'
        table[x][y] = 1;
    } else {
        cell.innerText = 'o'
        table[x][y] = -1;
    }
    player = !player;
    checkTable();
})

function init() {
    table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    const cells = document.getElementsByTagName('td');
    [...cells].forEach(cell => cell.innerText = '');
}

function checkTable() {
    for (let i = 0; i < 3; i++) {
        checkArea(table[i][0], table[i][1], table[i][2]);
        checkArea(table[0][i], table[1][i], table[2][i]);
    }
    checkArea(table[0][0], table[1][1], table[2][2]);
    checkArea(table[0][2], table[1][1], table[2][0]);
}

function checkArea(...items) {
    const sum = items.reduce((x, y) => x + y);
    console.log(sum)
    if (sum === 3)
        return alert('Won with X');
    else if (sum === -3)
        return alert('Won with O');
    else
        return false;
}

