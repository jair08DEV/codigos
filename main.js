const { app, BrowserWindow } = require('electron');
			let win; //variable de ventana o Frame
			function createWindow () {     
			// Crear ventana.
			win = new BrowserWindow({ width: 800, height: 600 });
			// y carga el index.html en el app. 
			win.loadFile('./dist/usuariowsfweb/index.html');
			// Abrir las herramientas de desarrollador.
			win.webContents.openDevTools();
			// Cerrar ventana.
			win.on('closed', () => {       
			   win = null     
			  })
			};      
			// Este método será llamado cuando Electron Finalice   
			// Iniciado y listo para el Software.   
			// Algunas apps lo tienen despues de que el evento ocurra.   
			app.on('ready', createWindow);

			// Cierra todo cuando la ventana se cierre.
			app.on('window-all-closed', () => { 
			
			if (process.platform !== 'darwin') {       app.quit()     }   });      
			app.on('activate', () => {
			if (win === null) {       
				createWindow()     
				}   
			});
