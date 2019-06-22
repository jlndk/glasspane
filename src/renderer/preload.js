/**
 * This script has access to the node environment,
 * and thus works as a link between the frontend and backend.
 */

const {ipcRenderer} = require('electron');

window.shutdown = function() {
    ipcRenderer.send('shutdown');
}

window.restart = function() {
    ipcRenderer.send('restart');
}

window.logout = function() {
    ipcRenderer.send('logout');
}

window.lock = function() {
    ipcRenderer.send('lock');
}

window.quit = function() {
    ipcRenderer.send('quit');
}
