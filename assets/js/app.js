const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const n = document.querySelector('.name'); //se coloca .name y se elimina el signo de $
const b = document.querySelector('.blog');// se coloca .blog y se elimina el signo de $
const l = document.querySelector('.location');//se elimina el signo de $

async function displayUser(username) { //se pone async ya que se requiere para poder usar el await
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  let data = await response.json();//recupera y analiza los datos obtenidos de la API
  console.log(data);
  n.textContent = `${data.name}`;//se elimina el signo de $ al inicio, se colocan la `` en lugar de ''
  b.textContent = `${data.blog}`;//se elimina el signo de $ al inicio, se colocan la `` en lugar de ''
  l.textContent = `${data.location}`;//se elimina el signo de $ al inicio, se colocan la `` en lugar de ''
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}
displayUser('stolinski').catch(handleError);