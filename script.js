var app = new Vue({
  el: '#app',
  data: {
    email: '',
    listaEmails: [],
    message: 'Mimimimi!',
    mostrarBoton: true,
    codigoHtml: '<h1>Título de la página</h1>',
    estaChequeado: true,
    contador: 0,
    listaDeElementos: []
  },
  methods: {
    mostrarTextoEnConsola: function(){
      console.log('texto en consola')
    },
    enviar: function(){
      alert('estamos enviado...')
    },
    agregarEmail: function(){
      this.listaEmails.push(this.email);
      this.email = "";
    }
  }
})

setTimeout(() => {
  app.codigoHtml = '<h3>No te durmas</h3>'
}, 2000);

app.listaDeElementos.push(1);
app.listaDeElementos.push(2);
app.listaDeElementos.push(3);

//console.log(app.listaDeElementos)