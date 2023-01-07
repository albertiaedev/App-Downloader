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
			document.write(`${this.name} has been opened succesfully.`)
		}
	}

	closeApp() {
		if (this.open === true) {
			this.open === false;
			document.write(`${this.name} has been closed succesfully.`)
		}
	}

	installApp() {
		if (this.installed === false) {
			this.installed === true;
			document.write(`${this.name} has been installed succesfully.`)
		}
	}

	uninstallApp() {
		if (this.installed === true) {
			this.installed === false;
			document.write(`${this.name} has been uninstalled succesfully.`)
		}
	}
}