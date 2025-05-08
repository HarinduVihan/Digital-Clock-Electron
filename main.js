const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 150,
    frame: false,
    transparent: true,
    // backgroundMaterial: "acrylic",
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
