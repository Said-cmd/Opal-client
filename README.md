# Opal
## By Said-cmd
## Description

This project is a web application that allows users to have a note taking app on the web. Designed to mimic physical sticky notes, users can add notes, delete notes and search through their notes for specific entries. The notes are also ordered by date added which is automatically attached to footer of each note once it's generated. There's also a dark mode feature which allows the user to change the color of the site depending on their preference.

## Features

### How to use the webpage 

Once the page has fully loaded, navigate to the sticky note at the end of the list (which is in the darkest shade of blue with an add icon and an "Add a note...' placeholder). Type in whatever note it is you would like to enter and click the plus icon to add it to your list of notes. To delete any note simply, tap the delete icon (bin icon). And finally filter through your exisiting notes for a specific entry using the search bar at the top of the page. Toggle dark mode on and off depending on your preference by tapping the toggle icon at the top of the screen.

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

* GET /transactions - when you load the site.
* POST /transactions - whenever you add a new note.
* PATCH /transactions/:id - whenever delete a note.
* DELETE /transactions/:id - whenever delete a note.

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
