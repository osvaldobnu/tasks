// Arquivo de conexão com o MongoDB

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Banco MongoDB conectado');
}).catch((e) => {
    console.log('Erro ao conectar o banco de dados');
    console.log(e);
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', true);

module.exports = {
    mongoose
};