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
}