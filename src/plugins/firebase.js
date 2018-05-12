import firebase from 'firebase'

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  const config = {
    apiKey: 'AIzaSyBSJsvAYTrFoZxgkHZqbUdCQkxQhYFhmz8',
    authDomain: 'controle-de-tarefas.firebaseapp.com',
    databaseURL: 'https://controle-de-tarefas.firebaseio.com',
    projectId: 'controle-de-tarefas',
    storageBucket: 'controle-de-tarefas.appspot.com',
    messagingSenderId: '335056991749'
  }
  firebase.initializeApp(config)
  Vue.prototype.$firebase = firebase
}
