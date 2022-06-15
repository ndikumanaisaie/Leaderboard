const tbody = document.querySelector('.table-body');

const scoreArray = [
  {
    Name: 'ndikumana',
    score: '20',
  },
  {
    Name: 'isaie',
    score: '30',
  },
  {
    Name: 'godzilla',
    score: '12',
  },
  {
    Name: 'Iribuka',
    score: '23',
  },
  {
    Name: 'Eliane',
    score: '18',
  },
];

export default () => {
  scoreArray.forEach((score) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.innerHTML = `<span> ${score.Name} : ${score.score} </span>`;
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
};