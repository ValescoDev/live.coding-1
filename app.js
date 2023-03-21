// Define el array de palabras
const wordArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'perro', 'gato', 'tigre', 'elefante'];

// Función que devuelve un arreglo de palabras más largas que la palabra dada
const bigWords = (word, array) => {
  return array.filter((item) => item.length > word.length);
}

// Función que imprime el array en una lista en el HTML
const printArray = (array) => {
  const list = document.getElementById('wordList');
  list.innerHTML = '';

  array.forEach((item) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    list.appendChild(li);
  });
}

// Función que se ejecuta cuando se hace click en el botón
const searchWords = () => {


