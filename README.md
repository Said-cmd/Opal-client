# Opal
## By Said-cmd
## Front-end Opal Interface
This repository holds the client-side of the app.
This app is used in conjunction with my financial fransactions API [see the repo](https://github.com/Said-cmd/Opal-server).
## Description

This project is a web application that allows users to log and organise their transactions. Users can add transactions, update and delete transactions and search through their list of transactions for a specific one. The transactions are also sorted by category so that the user can see what they spend on each category.

## Features

### How to use the webpage 

Once the page has fully loaded the login page will pop up. Upon logging in you'll be programmatically redirected to your account. This is where you'll be able to view all your transactions. On the sidebar on the left you can click to view your transactions for a specific category or even use the search bar to find the exact transaction you're after. If you wish to add a transaction simply tap the add transaction button on the sidebar and fill in the fields with your transaction data. Once submitted you'll be redirected to you account where you can view or edit your recently added transaction.

### Users of the application will be able to:

* Add a transaction
* Delete a transaction
* Uodate an existing transaction
* Search through their list of transactions for a specific transaction
* View their transactions by category

## Requirements

* Internet access
* A computer with a compatible browser 

## Installation Process

Clone this repo locally using the format: git clone https://github.com/Said-cmd/Opal-client

Unzip the downloaded files and open them in a text editor of your choice.

Run npm install to install the node modules and package dependancies.

Run the npm start to start up the site. 

Since we have a key of transactions poiting to an array of transaction entries, the Sinatra API will generate the following routes:

* GET /transactions - loads all transactions when you load the site.
* POST /transactions - whenever you add a new transaction.
* PATCH /transactions/:id - whenever you edit a transaction.
* DELETE /transactions/:id - whenever you delete a transaction.

## Technologies Used

* HTML - used to structure the webpage.

* CSS - used to style the user interface and the webpage as a whole.

* JavaScript- used to make the webpage responsive.

* React.js - used to build the entire user interface allowing for a single page web application.

* Material UI - used to improve the UX/UI design of the web app with intuitive React tools.

* JSON - used as the data exchange format.

## License

## MIT License

Copyright (c) [2022] [Said-cmd]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

## Author

GitHub: https://github.com/Said-cmd
