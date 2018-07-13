import WebServer from './web.server';

let webServer = new WebServer();

webServer
	.start()
	.then(() => {
		console.log('Web Server Started!');
	})
	.catch(err => {
		console.error(err);
		console.error('Failed to start web server');
	});
