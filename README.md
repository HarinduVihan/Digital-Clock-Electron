# Digital-Clock-Electron

This is a simple widget that can be put in your desktop, designed as a Digital Clock.

![image](https://github.com/user-attachments/assets/6ee61c9a-d3c0-4019-a6e6-11bf5b8ee792)

# What is Electron?

Electron is a framework for building desktop applications using JavaScript, HTML, and CSS. By embedding Chromium and Node.js into its binary, Electron allows you to maintain one JavaScript codebase and create cross-platform apps that work on Windows, macOS, and Linux — no native development experience required.

- https://www.electronjs.org/docs/latest/

## How to install

Either

1. You can, simply download the setup.exe from the releases.

or

2. You can, clone this repository. Type this commands in your terminal to initialize the npm package

         npm install electron --save-dev

- https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app

  2.1. to create the app files and the executeble file.

        npm install --save-dev @electron-forge/cli
        npx electron-forge import
        npm run make

  - https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging

  After the script runs, you should see an "out" folder containing both the distributable and a folder containing the packaged application code.

  or

  2.2. to create more flexible setup installer.

        npm i --save-dev electron-builder
        npm run build

  After the script runs, you should see an "dist" folder containing both the distributable and a folder containing the packaged application code.

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
