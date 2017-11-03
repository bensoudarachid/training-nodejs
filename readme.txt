
I'm happy to present the Training (or School) App. This is a prototype of data management application for Schools and Training centers

School-App is a Saas Single Page App (SPA) based on React, Redux, Immutable, Babel ES6 and Spring Boot Rest API

This project is firstly about covering and learning all basic features of a modern SPA: All the tools a developer needs to have a nice and fast development routine, a project ready, solid and intuitive code architecture and the basics of the main technologies involved. It's also about combining the old solid Java Back End World with the modern Front End Technologies and getting the best of both(see list below)

An Redhat Openshift online demo is running here http://demo1.school.royasoftware.com http://demo2.school.royasoftware.com
Another jenkins managed demo on a normal pc will be be put online here https://reactlearning.school.royasoftware.com/. This one goes with SSL
Check it out! Login: admin, Password: jefaistout

The App is composed of two projects. Training-nodejs is the Front-End. The express server is only responsible of delivering the bundles and performing server rendering
Once the front end is loaded on the browser, the communication continues with the back end. The REST Server is the second Project: Training-springboot

This is a work in progress. The code is not optimal

Covered topics:

Performance:
 Isomorphic Rendering
 General lazy image loading and on scroll image loading
 Vendor + Route Oriented JS and CSS Code Splitting, Routes are based on roles
 Spring-Rest API delivers Optmized Image Sizes using Batik from regular images formats + SVG

Security:
 OAuth-2 Authentication and Role based Authorization, JDBC TokenStore

Architecture:
 Feature oriented Front End Code Architecture
 Classic back end 3 Tier architecture with Service, Repository (DAO) and Database layers
 
Testing:
 Mocha chai enzyme sinon component Testing

Development :
 Fast development through Nodemon and Webpack Hot Middleware

Front End:
 One Scss file per React component
 Json automatic date conversion in Javascript (Json parsing polyfill)
 Animation on Scroll using SASS and jQuery
 React component life cycle integrated Animation
 Webpack Bundle Hashing to ensure browser downloads the right versions
 Use of Material Design Lite (MDL) UI framework, customized MDL colors and integration with own Scss variables
 Front end side form validation
 Modal dialogs for login and error messages
 
Back End:
 Letsencrypt automatic certificate renewal through Spring Scheduler
 Json automatic date conversion in Java (@JsonFormat)
 Get Images as dynamic, access-protected Spring-REST Api resources
 Iterative DB-Update using Flyway. Update runs automatically on all tenant DB's on App Boot 
 Multitenancy through URL app subdomain 'tenantxy.school.domain' . Each tenant has his own DB and own storage
 Server side form validation
 Combined Jackson and Hibernate annotations for One-to-Many relationships
 

A Series of Blog posts is being planned to talk about those topics and others:
 Easier zero downtime deployments using Apache/Tomcat clusters using stateless SPAs
 Use Webpack analyzer Tool to check webpack bundle composition and detect unnecessary big libs
 Webpack Source maps and Editing source code directly in chrome dev tools editor
 Introduction to Webstorm
 The issue of double rest api call in case of server rendering
 Material design lite integration
 Optimize Rest api image delivery including SVGs

