// Preload script para seguridad
// Aquí puedes exponer APIs seguras al renderer process
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  version: process.versions.electron
});