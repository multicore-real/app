const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        center: true,
        minHeight: 500,
        minWidth: 500,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
})