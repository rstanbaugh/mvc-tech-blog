<h1 align="center">TechTalk! (MVC) Tech Blog 👋</h1>
  
<p align="center">
    <img src="https://img.shields.io/github/repo-size/rstanbaugh/mvc-tech-blog" />
    <img src="https://img.shields.io/github/languages/top/rstanbaugh/mvc-tech-blog"/>
    <img src="https://img.shields.io/github/issues/rstanbaugh/mvc-tech-blog" />
    <img src="https://img.shields.io/github/last-commit/rstanbaugh/mvc-tech-blog" >
    <a href="https://github.com/rstanbaugh">
    <img src="https://img.shields.io/github/followers/rstanbaugh?style=social" target="_blank" /></a>
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/javascript-yellow" />
    <img src="https://img.shields.io/badge/node-yellow" />
    <img src="https://img.shields.io/badge/express-green" />
    <img src="https://img.shields.io/badge/sequelize-blue"  />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/handlebars-red"  />
    <img src="https://img.shields.io/badge/dotenv-orange" />
</p>
   
## Description

🔍 TechTalk! blog  is a CMS-style application built using the Model View Controller (MVC) paradigm. Built using Node/Javascript, Express, MySQL2, Sequelize, Handlebars and dotenv.

**[Deployed TechTalk! Application](https://tech-talk-22.herokuapp.com)**
  
💻 <br>
TechTalk! Screenshot:
  
![TechTalk!: a tech blog](./public/images/TechTalk%20Dashboard.png)
<br>

## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time

THEN I am presented with the homepage, which includes existing blog posts if any have been posted; 

WHEN I click on the homepage option
THEN I am taken to the homepage

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site
```
<br>
   
## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [Questions](#questions)

<br>

## Installation
💾   <br>
`npm init`<br>
`npm install`
  
## Usage
💻   
  
Run the following command at the root of your project and answer the prompted questions:

Setup the database:<br>
`mysql -u root -p`

Enter PW when promted<br>
`source db/schema.sql`<br>
`quit`

Seed the database:<br>
`npm run seed`
  
Start the application:<br>
`npm start`<br>
<br>
## Testing
Jest as used to verify the helper function
<br>

## Contributing
[Rich Stanbaugh](https://github.com/rstanbaugh)

## Questions
✉️ Contact me with any questions: [email](mailto:rstanbaugh@gmail.com.com) , [GitHub](https://github.com/rstanbaugh)<br />