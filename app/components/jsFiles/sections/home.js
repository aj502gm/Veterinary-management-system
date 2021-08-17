let ownersBanner = document.getElementById('ownersBanner');
export default class{
   
    constructor() {
        this.title = "Dashboard";
        
    }
    async getData(){    
        const request = await fetch('http://localhost:5600/renderMainDashboard');
        const data = await request.json(); //DEFAULT GET 
        const tableDataTemp = data.map((data,index)=>
            `
            <tr>
                <td class="column1">${data.id}</td>
                <td class="column2">${data.firstName} ${data.lastName}</td>
                <td class="column3">${data.phoneNumber}</td>
                <td class="column4">BRUHHH</td>
            </tr>
            `);
        return tableDataTemp;
    }
    async getHTML(){
        let tableData = await this.getData();
        console.log(tableData);
        return `
       
        <h1 class = "main-banner">Home</h1>
        <div class = "main-dashboard">
           <div>
                <p>X<p>
                <p>Pets<p>
           </div>
           <div>
                <p id= 'ownersBanner'>X<p>
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