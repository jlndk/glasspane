const { BrowserWindow} = require('electron');
const path = require('path');

class Window extends BrowserWindow {
    constructor(dev = false) {
        super({
            fullscreen: !dev,
            transparent: true,
            frame: false,
            webPreferences: {
                preload: path.join(__dirname, '../renderer', 'preload.js')
            }
        });

        this.loadFile('src/renderer/index.html');

        if(dev) {
            mainWindow.webContents.openDevTools();
        }
    }
}

module.exports = Window;
