const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba','root','root',{
  host: 'localhost',
  dialect: 'mariadb'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


class User extends Sequelize.Model {}
User.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
}, {sequelize,modelName:'users'});

// Insercion de un registro.
sequelize.sync().then(() => User.create({firstName: 'Nombre', lastName:'Apellido'}));

// Actualizacion de varios registros.
sequelize.sync().then(() => User.update({ firstName: 'Mauricio'},{
  where: { lastName: 'Apellido'
}}));
