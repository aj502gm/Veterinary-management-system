export default class{
    constructor() {
        this.title = "Schedule a date";
    }

    async getHTML(){
        return `
            
            <h1 class = "main-banner">Schedule a new date</h1>
            <div class = "new-date" >
            <div class = "new-date" >
                <h3>Owner</h3>
                <select class = "form-element global"  id="owner">
                </select>
                <h3>Pet</h3>
                <select class = "form-element global" id = "pet">
                </select>
                <h3>Schedule the date</h3>
                <input type="date" id="birthday" name="birthday" class = "form-element global"  id="date">
                <h3>Description</h3>
                <textarea class = "form-element description-text" placeholder= "What is wrong with your pet?" value = "" ></textarea  id="problem"><br>
                <input type="button" class = "form-element btn" value="Add">
            </div>
        `;
    }
}