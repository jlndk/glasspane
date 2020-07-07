const { app, ipcMain } = require("electron");
const { exec } = require("child_process");
const Window = require("./Window.js");

let mainWindow;

const dev = false;

function createWindow() {
    mainWindow = new Window(dev);

    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}

//Is required on linux, alongside setTimeout on createWindow, to use transparent background
app.disableHardwareAcceleration();

app.on("ready", (_) => {
    setTimeout(createWindow, 50);
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
    if (mainWindow === null) createWindow();
});

ipcMain.on("shutdown", (_) => {
    exec("./scripts/shutdown.sh");
});

ipcMain.on("restart", (_) => {
    exec("./scripts/restart.sh");
});

ipcMain.on("logout", (_) => {
    exec("./scripts/logout.sh");
});

ipcMain.on("lock", (_) => {
    exec("./scripts/lock.sh");
});

ipcMain.on("quit", (_) => {
    app.quit();
});
