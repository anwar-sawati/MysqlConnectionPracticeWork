const express= require("express")
const app= express();


var mysql= require("mysql2");


var con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"anwar",
    database:"umair"

});
con.connect(function(error){
    if (error) throw error;
    console.log("connection successfull")

    con.query("select * from emplaoyee", function(error, results){
        if(error) throw error;
        console.log(results);
    })

    con.query("select * from department", function(error, results){
        if(error) throw error;
        console.log(results);
    })
});