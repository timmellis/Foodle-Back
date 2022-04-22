# Foodle
Our vision behind this app is a mock version of instagram or flickr, but made specifically for food. Each user is able to create a post with an image of their dish, along with a link to the recipe they used, a rating (out of 5), and comments about their experience.
Other users can then comment on posts, give them their own ratings, and "follow" users they like.


## Github and Trello Links
[Trello](https://trello.com/c/Fphk4xoz/14-screen-shot-2022-04-14-at-31858-pmpng)   
[Front End (includes Readme)](https://github.com/Neoj1sec142/Foodle-Front)   
[Back End](https://github.com/timmellis/Foodle-Back)   

## Features:
[x] Front to Back JWT Auth   
[x] PostgreSQL & Sequelize Back End    
[x] React & Redux Front End   
[x] Full CRUD:
* [x] Create
* [x] Read
* [x] Update
* [x] Delete  

[x] Users Able to Post & Comment on other Posts   
[x] Read Access only to user posts    
[x] Rating System for User on their own posts   
[x] Rating system on User Comments of other user posts  
[x] Stretch: Onclick for post should usenav to recipe card  
[x] Stretch: Add Following abilities to users to follow pages   
[ ] Stretch: Embed recipe URL source page as an iFrame for immediate viewing   
[ ] Stretch: Overall Rating on Comment System give average rating of users recipe post credibility at top of profile   

## Page Layout: 
### Home Page (not logged in)
![home](/assets/home.png)
***
### Sign in page
Notes: Users who are not logged in are required to register and/or login, using JWT Authorization. Their login token persists in the browser's localStorage until they actively "Sign Out"
![signin](/assets/signin.png)
***
### profile page (logged in)
Notes: Once logged in, the Nav bar updates to include links and pages that are not available without proper authorization. 
![profile](/assets/profile.png)
Backend Notes: Each user makes user of the "User" table model, as well as the "UserFollowers" join-table structure to map the many-to-many relationship between "Followers" and "Following" 
![profile-table-structure](/assets/sql_table_users.png)
![join-table](/assets/sql_jointable.png)
***
### feed page (logged in)
Notes: The feed page loads ALL posts by ALL users, sorted by most recently posted content.
![feed](/assets/allfeed.png)
![posts-table-structure](/assets/sql_table_posts.png)
***
### Update profile page (logged in user only)
![update](/assets/update.png)
***
***
# Development

## Component Heirarchy Diagram:
![CHD](/assets/CHD2.png)   
***
## Enitity Relationship Diagram:
![ERD](/assets/ERD2.png)
***
## WireFrame Basic Layout Idea:
![WireFrame](/assets/WireFrame.png)
***
## All SQL Tables (created using Posgres/Sequelize)
![database](/assets/sql_tables.png)
***
### Installs List Front End:
* axios 
* react-redux
* react-router-dom
* react-stars
* redux devtools extension
* redux-thunk
* cors
* react-router-dom
***
### Installs List Back End:
* cors body-parser morgan 
* dotenv
* nodemon
* sequelize pg
* jsonwebtoken
* bcrypt
* @ngneat/falso
* express

***
### Tech Used Overall Project:
* React
* Redux (possible)
* PostgreSQL
* Express 
* Sequelize
* Javascript
* JWT Authentication
***

### Created By:
[Tim Ellis](https://github.com/timmellis)   
    * [LinkedIn](https://linkedin.com/in/tim-m-ellis/)   
[Joshua Grainger](https://github.com/joshgrainger22)   
    * [LinkedIn](https://linkedin.com/in/joshua-grainger-5aa230229/)   
[Mark Harmon](https://github.com/Neoj1sec142)    
    * [LinkedIn](https://linkedin.com/in/markharmon142/)   
***