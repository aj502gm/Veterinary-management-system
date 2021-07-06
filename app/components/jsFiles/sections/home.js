let tableData = "";
export default class{
   
    constructor() {
        this.title = "Dashboard";
        
    }
    async getHTML(){
       
        fetch('http://localhost:5600/renderMainDashboard') //DEFAULT GET 
        .then(response => response.json())
        .then(finalResponse => {
            tableData = finalResponse.map((data,index)=>
            `
            <tr>
                <td class="column1">${data.id}</td>
                <td class="column2">${data.firstName} ${data.lastName}</td>
                <td class="column3">${data.phoneNumber}</td>
                <td class="column4">Null</td>
            </tr>
            `).join("");
            console.log(tableData);
        });
        console.log(tableData);
        return `
        <script src = "./components/jsFiles/graphs.js" type = "module"></script>
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
                <p>Doctors<p>
           </div>
           <div>
                <p>X<p>
                <p>Species<p>
           </div>
           
        </div>
        <div class="main-dashboard-graphs">
            <canvas id = "myChart">
                
            </canvas>
        </div>
        <div class="limiter">
            <div class="container-table100">
                <div class="wrap-table100">
                    <div class="table100">
                        <table>
                            <thead>
                                <tr class="table100-head">
                                    <th class="column1">User ID</th>
                                    <th class="column2">Name</th>
                                    <th class="column3">Phone number</th>
                                    <th class="column4"></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                  ${tableData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}