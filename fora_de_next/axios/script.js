

axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error('Erro:', error);
  });