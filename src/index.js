const container = require('./api/container');

const application = container.resolve('app');
const db = container.resolve('db');

const init = async () => {
  try {
    await application.start();
    await db.sequelize.sync();
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

init();
