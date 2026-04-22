import axios from 'axios';
import fetch from 'node-fetch';
import { XMLHttpRequest } from 'xmlhttprequest';

const url = 'https://rickandmortyapi.com/api/character/1'; // Rick Sánchez
const url2 = ' https://rickandmortyapi.com/api/character/38'; // Post de prueba

// ------------------ AXIOS ------------------
async function requestAxios() {
  try {
    const response = await axios.get(url);
    const response2 = await axios.get(url2);

    const data2 = response2.data;
    const data = response.data;
    console.log('Axios:', data.name, data.status, data.species, data.gender, data.origin.name, data.location.name);
    console.log('Axios URL2:', data2.name, data2.status, data2.species, data2.gender, data2.origin.name, data2.location.name);
  } catch (error) {
    console.error('Error Axios:', error.message);
  }
}

// ------------------ FETCH ------------------
async function requestFetch() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Fetch:', data.name, data.status, data.species);
  } catch (error) {
    console.error('Error Fetch:', error.message);
  }
}

// ------------------ AJAX ------------------
function requestAjax() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log('AJAX:', data.name, data.status, data.species);
    } else {
      console.error('Error AJAX:', xhr.statusText);
    }
  };
  xhr.onerror = () => console.error('Error AJAX: Network issue');
  xhr.send();
}

// Ejecutar todas
requestAxios();
requestFetch();
requestAjax();