const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');//

async function displayUser(username) {
  $n.textContent = 'cargando...';
}
 try { const response = await response.json();
  console.log(data);
  $n.textContent = data.name;
  $b.textContent = data;
}

/*function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
*/