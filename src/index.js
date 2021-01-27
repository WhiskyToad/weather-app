/* eslint-disable no-console */
/*
possible upgrades
cat meme genrator using promises
c/f toggle
country and flag generator
check readme and use everything in it
sunrise/sunset
time
loading time

*/
import { getData } from './weather';

const submit = document.getElementById('search-button');
submit.onclick = () => {
  const location = document.getElementById('search-bar').value;
  getData(location);
};

getData('london');
