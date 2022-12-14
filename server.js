const exp = require("express");
const app = exp();
const mclient=require("mongodb").MongoClient;

// require("dotenv").config()

const path = require('path');

app.use(exp.static(path.join(__dirname, "./build")));

const DBurl = "mongodb+srv://sample2022:sample2022@gghgg.xgg8vjh.mongodb.net/?retryWrites=true&w=majority";


mclient.connect(DBurl)
.then((client)=>{

    let dbObj=client.db("myFirstDataBase");
    let userCollectionObject=dbObj.collection("usercollection");
    let appointmentCollectionObject = dbObj.collection("appointmentcollection");

    app.set("userCollectionObject",userCollectionObject);
    app.set("appointmentCollectionObject",appointmentCollectionObject);

    console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection ',err))



const userApp = require("./APIs/userApi");
const appointmentApp = require("./APIs/appointmentAPI");

app.use("/user-api", userApp);
app.use("/appointment-api", appointmentApp);

app.use('*',(request, response) => {
    response.sendFile(path.join(__dirname,'./build/index.html'));
});


app.use((request, response, next) => {
    response.send({ message: `path ${request.url} is invalid` });
});
app.use((error, request, response, next) => {
    response.send({ message: "Error occurred", reason: `${error.message}` });
});

// let port = process.env.PORT
app.listen(4000, () => console.log("server listening on port 4000"));