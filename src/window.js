const { BrowserWindow } = require('electron');
let window = null

const create = () => {
    window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
          },
          show: false,
          center: true,
          height: 600,
          width: 1000,
    });

    window.loadURL(`https://google.ie`);

    window.once('ready-to-show', () => {
      window.show();
    });
}

const show = () => {
    if (window && !window.isDestroyed()) window.show();
}

module.exports = {
    create,
    show,
}
