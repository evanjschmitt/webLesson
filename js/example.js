var users = [
    { name: "John Wick", age: 25, email: "john@example.com" },
    { name: "Alice (In) Wonderland", age: 30, email: "alice@example.com" },
    { name: "Bob Ross", age: 28, email: "bob@example.com" },
    { name: "Emily", age: 22, email: "emily@example.com" },
    { name: "Michael Myers", age: 35, email: "michael@example.com" },
    { name: "Samantha", age: 29, email: "samantha@example.com" },
    ];

    var userTable = document.getElementById("userTable");
    var table = document.createElement("table");


    var userTable = document.getElementById("userTable");

var table = document.createElement("table");

// Loop through each user
for (var i = 0; i < users.length; i++) {
var user = users[i];

// Create a new row for each user
var row = document.createElement("tr");

// Create table cells for each user attribute
var index = document.createElement("td");
index.textContent = i + 1; // User index
var userName = document.createElement("td");
userName.textContent = user.name;
var userAge = document.createElement("td");
userAge.textContent = user.age;
var userEmail = document.createElement("td");
userEmail.textContent = user.email;

// Append table cells to the row
row.appendChild(index);
row.appendChild(userName);
row.appendChild(userAge);
row.appendChild(userEmail);

// Append the row to the table
table.appendChild(row);
}

userTable.appendChild(table);