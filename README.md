## Project Description:

This project creates a messaging single page app with React, Redux and React-Router. To persist the data the project uses [Redux Blog Post herokuapp API](https://reduxblog.herokuapp.com/ "Redux Blog Post herokuapp API"). 

The project is done together with the great React and Redux turorial from Stephen Grider:

   [Modern React with Redux](https://www.udemy.com/react-redux/ "Modern React with Redux")


## Installing:

####  Dependencies

You need to have Node.js installed to run the project

[Download Node.js](https://nodejs.org/en/download/ "Download Node.js")

Check in linux terminal that package was installed properly

`node -v`

Check also npm is installed

`npm -v`

#### On linux terminal

1. In target directory clone the repository from gitHub

	` git clone https://github.com/manuelAlonsoPerez/messagingApp_react_router.git`

2. Navigate to project folder

	`cd messagingApp_react_router`

3. Install package

	`npm install`

4. Run project

	`npm start`

5.Open a new browser window and navigate to

    http://localhost:8080/


#### Alternatively

Download  .zip, .tar, .tar.gz or .tar compressed package, decompress it to target folder and follow from Step 2.


## Status

The  project is working and is possible to see the posts list, create a new post and delete a post. The application navigates throught the different components using React-Roter, no extra HTTP calls are needed to render the different components.

The store is binded to Redux Promise middleware to assure correct functioning of async Api calls.

![](./messagesApp_posts_lists)

![](./messagesApp_show_post)

![](./messagesApp_new_post)
