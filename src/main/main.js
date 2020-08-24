const { app, BrowserWindow, ipcMain} = require('electron');
const {exec} = require('child_process');
const path = require('path');
const fs = require("fs");
const Window = require('./Window.js');

const scriptsDir = path.join(app.getPath('appData'), 'glasspane', 'scripts');

let mainWindow;

const dev = false;

function createWindow() {
    mainWindow = new Window(dev);

    mainWindow.on('closed', function() {
        mainWindow = null
    });
}

function run(name) {
    const fullPath = path.join(scriptsDir, name);
    if (!fs.existsSync(fullPath)) {
        console.error(`Script '${fullPath}' does not exist.`);
    }
    exec(fullPath);
}

//Is required on linux, alongside setTimeout on createWindow, to use transparent background
app.disableHardwareAcceleration();

app.on('ready', _=> {
    setTimeout(createWindow, 50);
});

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
    if (mainWindow === null) createWindow();
});

ipcMain.on('shutdown', _=> {
    run('shutdown.sh');
});

ipcMain.on('restart', _=> {
    run('restart.sh');
});

ipcMain.on('logout', _=> {
    run('logout.sh');
});

ipcMain.on('lock', _=> {
    run('lock.sh');
});

ipcMain.on('quit', _=> {
    app.quit();
});
