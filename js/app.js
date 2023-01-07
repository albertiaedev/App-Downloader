class App {
	constructor(name, downloads, rating, storageSpace) {
		this.name = name;
		this.downloads = downloads;
		this.rating = rating;
		this.storageSpace = storageSpace;
		this.open = false;
		this.installed = false;
	}

	openApp() {
		if (this.open === false) {
			this.open === true;
			let appOpen = document.write(`${this.name} has been opened succesfully.`);
			return appOpen;
		}
	}

	closeApp() {
		if (this.open === true) {
			this.open === false;
			appClose = document.write(`${this.name} has been closed succesfully.`);
			return appClose;
		}
	}

	installApp() {
		if (this.installed === false) {
			this.installed === true;
			appInstall = document.write(`${this.name} has been installed succesfully.`);
			return appInstall;
		}
	}

	uninstallApp() {
		if (this.installed === true) {
			this.installed === false;
			appUninstall = document.write(`${this.name} has been uninstalled succesfully.`);
			return appUninstall;
		}
	}
}