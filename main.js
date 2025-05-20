const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 150,
    frame: false,
    transparent: true,
    // backgroundMaterial: "acrylic",
    skipTaskbar: true,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});

app.setLoginItemSettings({ openAtLogin: true });

//---------------------------
// const path = require('path')
// const Electrolytic = require('electrolytic')
// const { app, BrowserWindow, Menu, nativeImage, Tray } = require('electron')

// let tray = null
// function createTray () {
//   const icon = path.join(__dirname, '/app.png') // required.
//   const trayicon = nativeImage.createFromPath(icon)
//   tray = new Tray(trayicon.resize({ width: 16 }))
//   const contextMenu = Menu.buildFromTemplate([
//     {
//       label: 'Show App',
//       click: () => {
//         createWindow()
//       }
//     },
//     {
//       label: 'Quit',
//       click: () => {
//         app.quit() // actually quit the app.
//       }
//     },
//   ])

//   tray.setContextMenu(contextMenu)
// }

// const ELECTROLYTIC_APP_KEY = '<Your-app-Key>'

// const electrolytic = Electrolytic({
//   appKey: ELECTROLYTIC_APP_KEY,
// })

// electrolytic.on('token', token => { // will be called everytime on app start
//   console.log('user token', token);
//   mainWindow && mainWindow.webContents.send('token', token)
// })

// electrolytic.on('push', (payload) => { // when you use the API to send a push
//   console.log('got push notification in main', payload)
//   mainWindow && mainWindow.webContents.send('push', payload)
// })

// let mainWindow

// function createWindow () {
//   if (!tray) { // if tray hasn't been created already.
//     createTray()
//   }

//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true // not cool. I'm sorry.
//     }
//   })

//   mainWindow.loadFile('index.html')
//   mainWindow.on('closed', function () {
//     mainWindow = null
//   })
// }

// app.on('ready', createWindow)

// app.on('window-all-closed', () => {
//   app.dock.hide()
//   // any other logic
// })
