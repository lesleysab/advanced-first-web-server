let express = require("express");
let users = require("./state").users;
const app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.json());

//when a request message is recievd by this program this line tells the program how to respond
//  app.use(express.static('public'))


//Part 1
// * Give your server the ability to respond to a GET request with a path "/users" and return the users array from state.js
    app.use(function(req,res,next) {
    if(req.path == '/users' && req.method == "GET"){ 
       return res.send(users);
        }
    });   

// * Give your server the ability to respond to a GET request with a path "/users/1" and return the first user object from the users array from state.js
    app.use(function(req,res,next) {
    if(req.path == '/users/1' && req.method == "GET"){ 
        return res.send(users[0]);
         }
    });   
// * Give your server the ability to respond to a POST request with a path "/users" and just add a hard coded user object to the users array from state.js. .json() the last user in the array to send it back to the client. (if you do another GET request you should see this added)

    app.use(function(req,res,next) {
        if(req.path == '/users' && req.method == "POST"){ 
                users.push({
                    "_id": 6,
                    "name": "Lesley Sablatura",
                    "occupation": "Student",
                    "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"
                });
                return res.send(users) 
            }
    }); 

// * Give your server the ability to respond to a PUT request with a path "/users/1" and just change any key value on the first user object in the users array in state.js. .json() this user to send it back to the client.
    app.use(function(req,res,next) {
       if(req.path == '/users/1' && req.method == "PUT"){ 
                users[0].name = "Mike"
                return res.send(users[0]) 
                   
            }
        });   

// * Give your server the ability to respond to a DELETE request with a path "/users/1" and remove one item from the users array. send() back a messsage "deleted"
    app.use(function(req,res,next) {
        if(req.path == '/users/1' && req.method == "DELETE"){ 
            users.splice(1,1)
            return res.send("Deleted");
        }
            return res.send(users)          
     });


// Part 2
// Give your server the ability to respond to a GET request with a path "/users" and return the users array from state.js

        app.get("/users",function(req,res,next)
        {
        return res.send(users);
        });

// * Give your server the ability to respond to a GET request with a path "/users/1" and return the first user object from the users array from state.js
        app.get("/users/1",function(req,res,next)
        {
        return res.send(users[0]);
        });

// * Give your server the ability to respond to a POST request with a path "/users" and just add a hard coded user object to the users array from state.js. .json() the last user in the array to send it back to the client. (if you do another GET request you should see this added)
app.post(function(req,res,next) {
    { 
            users.push({
                "_id": 6,
                "name": "Lesley Sablatura",
                "occupation": "Student",
                "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"
            });
            return res.json(users[users.length -1]) 
        }
}); 

// * Give your server the ability to respond to a PUT request with a path "/users/1" and just change any key value on the first user object in the users array in state.js. .json() this user to send it back to the client.
        app.put(function(req,res,next) {    
                users[0].name = "Mike"
                return res.json(users[0]) 
        }); 

// * Give your server the ability to respond to a DELETE request with a path "/users/1" and remove one item from the users array. send() back a messsage "deleted"

        app.delete(app.post("/users/1",function(req,res,next)
        {  
        users.splice(1,1)
        return res.send("Deleted")
        }));
      

// ## Part 3. 
//  Add the body-parser module to your project
// * Give your server the ability to handle a POST request with a path "/users" and add the data from the client to the users array

app.post("/users",function(req,res,next)
                { 
                    let newUser = req.body;
                                    users.push(newUser);
                                    res.json(newUser);
                                });    
// * Assign an _id property to the user object that is a number that increments by 1 each time.
// * response.json() the user object to send it back to the client. (if you do another GET request you should see this added)

    app.get("/users/:userID",function(req,res,next)
                {
                return res.json(users[req.params.userID]);
                });


// ## Part 4. Use path variables
// * Give your server the ability to respond to a GET request with a path `/users/:userId` and return the user object from the users array that has the _id == userId
// * Give your server the ability to respond to a PUT request with a path `/users/:userId` and just change any key value on the user object with this _id 
// * Give your server the ability to respond to a DELETE request with a path `/users/:userId` and find the user with this id from the array. give this user object a new key value isActive:false.  send() back a messsage "deleted"


                

                    






                 

          


app.listen(3052, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Yo!");
});


