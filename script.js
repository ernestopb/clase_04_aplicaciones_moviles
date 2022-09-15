var app = new Vue({
  el: '#app',
  data: {
    message: 'Mimimimi!',
    mostrarBoton: true,
    codigoHtml: '<h1>Título de la página</h1>',
    estaChequeado: true,
    contador: 0,
    listaDeElementos: []
  }
})

setTimeout(() => {
  app.codigoHtml = '<h3>No te durmas</h3>'
}, 2000);

app.listaDeElementos.push(1);
app.listaDeElementos.push(2);
app.listaDeElementos.push(3);

//console.log(app.listaDeElementos)