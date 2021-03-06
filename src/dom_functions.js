/* eslint-disable import/no-cycle */
import { sendData, getScores } from './utility_functions.js';

const form1 = document.querySelector('.form1');
const tbody = document.querySelector('.table-body');
const refresh = document.querySelector('.refresh');

form1.addEventListener('submit', (event) => {
  event.preventDefault();
  const player = document.querySelector('.name');
  const score = document.getElementById('number');
  sendData(player.value, score.value);
  player.value = '';
  score.value = '';
});

export default (scoreArray) => {
  scoreArray.forEach((score) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const td1 = document.createElement('td');
    td.innerHTML = `<span> ${score.user}</span>`;
    td1.innerHTML = `<span> ${score.score} </span>`;
    tr.appendChild(td);
    tr.appendChild(td1);
    tbody.appendChild(tr);
  });
};

refresh.addEventListener('click', () => {
  tbody.innerHTML = '';
  getScores();
});
