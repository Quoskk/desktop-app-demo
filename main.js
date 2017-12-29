
// proceso principal maneja todo el ciclo de vida de la aplicacion

const electron = require ('electron')
const {app, BrowserWindow} = electron

const path = require ('path')
const url = require ('url')

let win

// funcion que crea la ventana
function createWindow(){
	win = new BrowserWindow ({width:800, height:600, icon: __dirname + '/favicon.ico'})
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true

	}))
	win.webContents.openDevTools()
}


app.on ('ready', createWindow)