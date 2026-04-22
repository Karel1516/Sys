import axios from 'axios';
import fetch from 'node-fetch';
import { XMLHttpRequest } from 'xmlhttprequest';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

// ------------------ AXIOS ------------------
async function requestAxios() {
  try {
    const response = await axios.get(url);
    console.log('Axios:', response.data);
  } catch (error) {
    console.error('Error Axios:', error.message);
  }
}

// ------------------ FETCH ------------------
// con . json para parsear la respuesta a JSON
async function requestFetch() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Fetch:', data);
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
      console.log('AJAX:', JSON.parse(xhr.responseText));
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