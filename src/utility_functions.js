/* eslint-disable import/no-cycle */
import displayScore from './dom_functions.js';

const requestedURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';
export const sendData = async (name, score) => {
  await fetch(requestedURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  })
    .then((response) => response.json())
    .then((json) => json.result);
};

export const getScores = () => {
  fetch(requestedURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result)
    .then((data) => displayScore(data));
};
