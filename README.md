# Review App

An app to view reviews of any number of establishments and responses to those reviews.

## Setup & Run

After cloning the project, you should be able to simply run ```npm start``` and the app will run on http://localhost:3000/. Tests can be run using ```npm test App.test.js```, though they're a bit bare-bone.

## Navigation

The "homepage" of this app is the list view of all reviews. 
![List View](https://i.imgur.com/OPLSTeJ.png)
Simply select a review to view its full details. All reviews can have a direct response, and if there isn't a response yet, there will be a form provided to write one. This view can also be exited by clicking the black "X" at the top-left of the screen, or by clicking the "Reviews" logo in the navbar.
![Full Details View](https://i.imgur.com/5vjAbZ2.png)
After a response has been submitted, it will be displayed as a card. The response can be edited by selecting the pencil (edit) button.
![Full Details with Response](https://i.imgur.com/ieaVxIs.png)
When a response is being edited, a form similar to the new response form will be provided. Simply select the Save button and this edit will be persisted.
![Full Details editing](https://i.imgur.com/9j4zJMP.png)