const { contextBridge } = require('electron');

// Exponer APIs seguras al proceso de renderizado
contextBridge.exposeInMainWorld('electronAPI', {
  version: process.versions.electron,
  platform: process.platform
});