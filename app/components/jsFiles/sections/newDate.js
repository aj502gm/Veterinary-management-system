export default class{
    constructor() {
        this.title = "Schedule a date";
    }

    async getHTML(){
        return `
            
            <h1 class = "main-banner">Schedule a new date</h1>
            <form class = "new-date" method = "POST" action = "http://localhost:5600/postDate">
                <h3>Owner</h3>
                <input type ="text" name = "ownerName" class = "form-element global"  id="owner">
                </select>
                <h3>Pet</h3>
                <input type = "text" name = "petName" class = "form-element global" id = "pet">
                </select>
                <h3>Schedule the date</h3>
                <input type="date" id="birthday" name="birthday" class = "form-element global"  id="date">
                <h3>Description</h3>
                <textarea class = "form-element description-text" placeholder= "What is wrong with your pet?" name ="problem" ></textarea  id="problem"><br>
                <input type="submit" class = "form-element btn" value="Add">
            </form>
        `;
    }
}