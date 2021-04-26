export default class{
    constructor() {
        this.title = "Dates";
    }

    async getHTML(){
        return `
            <h1 class = "main-banner">Dates</h1>
            <form class = "new-date ">
                <h3>Owner</h3>
                <select class = "form-element global" >
                </select>
                <h3>Pet</h3>
                <select class = "form-element global">
                </select>
                <h3>Description</h3>
                <textarea class = "form-element description-text" placeholder= "What is wrong with your pet?" value = "" ></textarea><br>
                <input type="submit" class = "form-element btn" value="Add">
            </form>
        `;
    }
}