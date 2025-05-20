//const { app, BrowserWindow } = require("electron");
const { app, BrowserWindow, Menu, Tray } = require("electron");

let win;

const createWindow = () => {
  win = new BrowserWindow({
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
  tray = new Tray("./favicon.ico");
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Show Digital Clock",
      type: "radio",
      checked: true, // Initially selected
      click: () => {
        win.show();
      },
    },
    {
      label: "Hide Digital Clock",
      type: "radio",
      click: () => {
        win.hide();
      },
    },
    {
      label: "Close Digital Clock",
      click: () => {
        app.quit(); // actually quit the app.
      },
    },
  ]);
  tray.setToolTip("Digital Clock");
  tray.setContextMenu(contextMenu);
});

app.setLoginItemSettings({ openAtLogin: true });
