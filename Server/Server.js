// Importing Required Modules
const crypto = require('crypto');
const buffer = require('buffer');
const fs = require("fs");
const Websocket = require("ws");
// varibles
const wss = new WebSocketServer.Server({ port: 8080 });
const Seed = "";
var seedvault = "";
const AcceptedHash = "69"; // value temperary for testing perposes 
var verifiedhwid = "";
var bannedhwid = "";

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
  });

// Creating connection using websocket
wss.on("connection", ws => {
    console.log("new client connected");
    //comformation for client
    ws.sendText("Connected, Please provide verification");
    // sending message
    ws.on("message", data => {
        var databuf = new buffer(data);
        //check data to see if it is from intended client(game md5 hash followed by hwid), reject everything else
        console.log(`Client has sent us: ${data}`); // only use this for debug remove later
        var hwid =  databuf.toString().substring(AcceptedHash.length(), databuf.toString())
        //check for banned users
        bannedhwid.forEach(element => {
            if(hwid == bannedhwid){
                ws.close(403, "You are banned");
            }
        })
        //check if client can be trusted old verifiedhwids will be removed after 7 days
        //2faless login will be provided if hwid matchs one recorded on account
        verifiedhwid.forEach(element => {
            if(element != verifiedhwid){
                if(data == AcceptedHash){
                    ws.sendText("Verified game client, Please send login");
                    //record hwid for processing
                }
                else{
                    ws.close(403, "not game client");
                }
            }
            else{
                if(data == AcceptedHash){
                    ws.sendText("Verified game client, Please send login");
                    //record hwid for processing but without 2fa
                }
                else{
                    ws.close(403, "not game client");
                }
            }
        });
        

    });
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has connected");
    });
    // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred");
    }
});
conso
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
