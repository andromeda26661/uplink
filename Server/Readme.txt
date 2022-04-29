Server for holding assets and for login
Running nodejs 18
Websocket for client to server comm
server to server encrypted binary data (hex) over https
login is done via using a hash of the username + password + seed then is salted
this means that the username and password is not known for the login
email must added for verification and 2fa
never give out the info about the server