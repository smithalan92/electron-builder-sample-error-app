const { app } = require('electron');
const window = require('./window');

const attachAppEvents = () => {
    app.on('window-all-closed', () => {
      app.quit();
    });

    app.on('ready', () => {
      window.create();
    });

    app.on('activate', () => {
      window.show();
    });
};

module.exports = {
    attachAppEvents,
}
