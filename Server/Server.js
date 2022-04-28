const fs = require("fs");
const Websocket = require("nodejs-websocket");
const Seed = "";
var seedvault = "";

function addlogin(newhash){
    //addlogin after the client verifies the data and the data is sent to us then we can add the login hash to the server
    //the data will be stored in the user profile(home on linux) folder on the server
    var seedvaultold = seedvault;
    seedvault = seedvaultold + newhash;
    fs.appendFileSync("%userprofile%/uplink/conf/seedvault.txt", seedvault);
}
function login(Hash){
    // login function checks the hash from the client against the seedvault
    // if it fails it'll tell the user the error "login failed the password or username is incorrect"
    var success = false;
        seedvault.forEach(element => {
        if(Hash == seedvault.element){
            success = true;
        }
    });
    if(success == false){
        //fail login
    }
}
