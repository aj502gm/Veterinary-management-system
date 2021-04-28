export default class{
    constructor() {
        this.title = "Dates";
    }

    async getHTML(){
        return `
            <h1 class = "main-banner">Dates</h1>
            <form class = "new-date" method= "post">
                <h3>Owner</h3>
                <select class = "form-element global" >
                </select>
                <h3>Pet</h3>
                <select class = "form-element global">
                </select>
                <h3>Schedule the date</h3>
                <input type="date" id="birthday" name="birthday" class = "form-element global">
                <h3>Description</h3>
                <textarea class = "form-element description-text" placeholder= "What is wrong with your pet?" value = "" ></textarea><br>
                <input type="submit" class = "form-element btn" value="Add">
            </form>
        `;
    }
}