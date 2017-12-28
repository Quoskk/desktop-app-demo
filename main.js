
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

exports.openWindow = () => {
	let newWin = newBrowserWindow ({width:400, height:200})
	newWin.loadURL (url.format({
		pathname: path.join(__dirname, 'home.html'),
		protocol: 'file',
		slashes: true
	}))
}
app.on ('ready', createWindow)