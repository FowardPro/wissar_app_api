var sql=require('mysql');
var connection =sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'eventmanagementapp'
})
connection.connect((err)=>{
if(!err) {
    console.log('Connection Established successfully!') 
}
else{
    console.log('Connection failed '+JSON.stringify(err,undefined,2))
}
})