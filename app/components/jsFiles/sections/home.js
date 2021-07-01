
export default class{
    constructor() {
        this.title = "Dashboard";
        
       let data =  $.ajax({
            type:'GET',
            url: 'http://localhost:5600/renderMainDashboard',
            success: function(res){
               console.log("FKDSJFKDSJFKSDJFKSDJFKSDJ");
            },
            error: function(xhr, status, err) {
                console.log(xhr.responseText);
            }
        })
        
    }
    async getHTML(){
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
                                    <tr>
                                        <td class="column1">Null</td>
                                        <td class="column2">Null</td>
                                        <td class="column3">Null</td>
                                        <td class="column4">Null</td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}