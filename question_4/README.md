# imbankcodetest
code test for I &amp; M Bank

# Project Details
1.Question-4
REST api for IOUs operations.


# Technologies
Java- Version 1.8 
Spring
Apache Tomcat 8
Maven 3.3
IDE- Intellije IDE
MySql 5.7
Google cloud database

# Setup
Open the project in Intellije as maven project.
Contains maven modules
1.restModelVo
2.restBusinessAccessLayer
3.restDataAccessLayer
4.restServiceLayer

# Config server and Database

- web server- Apache tomcat 8 
- For Connection string of DB- kindly refer to config.xml file in application folder.
and make changed in context.xml file in tomcat->conf folder accordingly.
- also check attached schema for cloud intance. Resotre the DB backup and point to the db instance of any local DB.
- Server port also can be changed from server.xml file in tomcat->conf folder.
 

# Compile and Run
-mvn clean install
-To run configure the tomcate instance.
copy the restApi.war file from the target folder of restServiceLayer to tomcat's webapps folder.
run the startup.batch file.
