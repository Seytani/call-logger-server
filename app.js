require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db');
// let user = require('./controllers/user-controller');
// let call = require('./controllers/call-controller');
// let callType = require('./controllers/call-type-controller');
// let todo = require('./controllers/todo-controller');

// app.use(express.json());

sequelize.sync();

// app.use('/user', user);
// app.use('/call', call);
// app.use('/call', callType);
// app.use('/todo', todo);

app.listen(3001, () => console.log('****** NODEMON PORT 3001 *******'));
