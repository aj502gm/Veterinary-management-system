export default class{
    constructor() {
        this.title = "Dashboard";
    }

    async getHTML(){
        return `
            <h1 class = "main-banner">Home</h1>
            <div class = "main-dashboard">
               <div>
                    <p>X<p>
                    <p>Pets<p>
               </div>
               <div>
                    <p>X<p>
                    <p>Owners<p>
               </div>
               <div>
                    <p>X<p>
                    <p>Employees<p>
               </div>
               <div>
                    <p>X<p>
                    <p>Species<p>
               </div>
               
            </div>

            <div class = "main-dashboard-graphs">
                <p>JFKDSJFKDSAJFKSDAJFKJSDALFJDSAFJSDALJ</p>
            </div>
        `;
    }
}