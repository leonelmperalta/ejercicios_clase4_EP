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
},
{sequelize,modelName:'users'});

// Insercion de un registro.
sequelize.sync().then(() => User.create({firstName: 'Mauricio', lastName:'Perez'}));

// Eliminacion de un registro.

sequelize.sync().then(() =>User.destroy({
  where: {
    id: '2'
  }
}));
