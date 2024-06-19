// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
//   onThemeChanged: (callback) => ipcRenderer.on('theme-changed', callback),
  openProductWindow: (productId: any) => ipcRenderer.send('open-product-window', productId),
  onProductDetailsLoaded: (callback:any) => ipcRenderer.on('load-product-details', callback),
});
