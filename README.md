# XP Training - Rock, Paper, Scissors
This is a training application for full stack develpoment using XP.

## Required software
For this application you will need:
- Java
- Intellij (you could use another IDR, but why would you)
- Git bash for Windows
- node (Optional if modifying GUI)
- Maven
- Docker/MySQL/MariaDB (Optional if running Database Locally)

**Software Installation:** [Software](Software.md)  

## Database (Optional)
Normally this application needs MySQL/MariaDB to persist the application data,
but for this exercise we will be implementing another version of the persistence 
components that store the information in files. So if you already have MySQL/MariaDB
available or are comfortable setting it up you can go ahead and get the database tests
to pass, if not you can let them fail.

For this application you will need a MySQL database with two users configured, 
one for running unit tests and one for running the application. We recommend 
running the database in a docker container and have created bash scripts for
creating, starting and stopping the database. 

Please see the instructions for the [Database](scripts/Database.md)

## Building the Application

To build and run the application you will need the database running as the 
persistence tests use the database. You can use the startDb.sh and stopDb.sh
scripts in the scripts directory to start and stop the database.

From a bash terminal window the command:
```
mvn clean install
```
should build the application and run all the tests.

## Running the Application

To start the backend springboot server from Intellij go to the RestApplication class
under RPS-persistence/com.rps.rest and use the green arrow to run the application.

Normally we run the GUI server using npm so we can modify the application easily. 
However, for this exercise we are not changing the GUI so we have loaded the GUI
distribution files under the spring boot application resources/static directory so
that spring boot will serve both the web content and the rest end point.

At this point you can open a browser and acess the page at:

http://localhost:8080

Note that until the new file based persistence components are created the application
will not unless you have set up a database.

The rest of this scetion you can skip unless you want to use npm.

To run the front end open a bash terminal window and go to the RPS-web directory.

The first time you run the front end you will need to run:

```
npm install
```

Note: you should not need to install the angular cli separately.

After the install is complete start the back end with:

```
npm start
```

To stop the front end use Control-c

## Stories

For this exercise we are reimplementing functionality so we should not need to create
tests from scratch. The repository interface uses a pattern where the tests are defined 
in the core component as an abstract base class and then implemented in the sub-component.
We have provided the first test and a skeleton of the first class to implement so you
know where to start.

You should only modify code under RPS-persistence and RPS-rest, not RPS-core.

You should follow the steps below:
* Remove the @Disabled annotation from the class FilePlayerRepositoryTest, run the tests
and see that they fail.
* Implement the code FilePlayerRepository until your tests pass. Hint: You can probably
reuse much of the code in the class InMemoryPlayerRepository (under core/test) adding
writing to a file on save and reading the file in the constructor. You may also need a
file cleaner class like the database cleaner.
* Create a FileGameResultIdProviderTest class that extends GameResultIdProviderTest and
a FileGameResultIdProvider class that implements GameResultIdProvider. Make sure 
the test fails.
* Implement the code FileGameResultIdProvider until your tests pass.
* Create a FilePlayerRepositoryTest class that extends PlayerRepositoryTest and
  a FilePlayerRepository class that implements PlayerRepository. Make sure
  the test fails.
* Implement the code FileGameResultIdProvider until your tests pass.
* Modify the GameResultsConfig class under RPS-rest to return the file objects
instead of the database objects.


Once you have completed the file persistence changes, there are several 
additional [stories](Stories.md) already created that you can work on to practice 
TDD using XP. In general you should work the stories in order as they get more
difficult as they progress.



