export default class{
    constructor() {
        this.title = "Dashboard";
    }

    async getHTML(){
        return `
            <h1 class = "main-banner">Home</h1>
        `;
    }
}