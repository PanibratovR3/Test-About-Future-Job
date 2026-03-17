# Test-About-Future-Job  

Test for applicants, which determines their future job.  
This site was implemented by using _*PERN*_ stack.

* _*P*_: PostgreSQL for database.
* _*E*_: Express as web application framework for API.
* _*R*_: React as library for client side.
* _*N*_: NodeJS as runtime environment for server side.

When applicants enter the site they must provide credentials such as full name, phone number, date of birth, city, school and studying status. There is also a password field, but it's optional. When all required data are entered correctly, they get phone code for verification on their Telegram account. If applicants enter correct phone code, which they get on the messenger, site redirects them to test page.

Test for applicants, who are studying at school, contains 75 questions and other one for graduates contains 76 questions. Latter one includes providing final marks of maths and physics according to school certificate. Rest of questions includes two texts and five variant of answers. During the completing the test applicant gets next metric points:

1. **Activity**: initiative and interest in new things.
2. **Social**: communication and work with people.
3. **Emotional stability**: stress resistance.
4. **Structure**: systematicity and discipline.
5. **Leadership**: propensity for management.

After completing the test metrics points (and both math and physics points in case of graduated status) are written to the database. Applicant is redirected to results page, where results of test are multiplied with weights of possible jobs. Job, which gets maximum value, will be the future one for applicant with description about it and recommendation about department enrolling.

Server side of this site was implemented by using the next packages:  

* _*express*_: for building web applications and APIs;
* _*dotenv*_: for working with environmental variables;
* _*cors*_: for setting CORS response headers;
* _*pg*_: for communication with PostgreSQL databse;
* _*telegram*_:  a Telegram client for Node.js.

Database contains only one table **applicants**, which includes next columns:  

1. **id**: id of the applicant, integer type, generated automatically.
2. **fullname**: full name of the applicant, text type.
3. **phonenumber**: phone number of the applicant, text type.
4. **isphonenumbervalid**: indicator for monitoring whether phone number is validated or not, boolean type; it has  true value when applicant entered password and it's correct; false by default.
5. **dateofbirth**: date of birth of applicant, text type.
6. **city**: name of city, where applicant is living and studying or has graduated, text type.
7. **school**: name of school, where applicant is studying or has graduated, text type.
8. **studyingstatus**: applicant's status of studying; they can study in school (from 6th to 11th form) or be graduated, text type.
9. **hascompletedtest**: indicator for monitoring whether applicant has completed test or not, boolean type; false by default.
10. **activityscore**: activity metric from test, numeric type.
11. **socialscore**: social metric from test, numeric type.
12. **emotionalstabilityscore**: emotional stability metric from test, numeric type.
13. **structurescore**: structure metric from test, numeric type.
14. **leadershipscore**: leadership metric from test, numeric type.
15. **mathscore**: points from math, according to school certificate, integer type.
16. **physicsscore**: points from physics, according to school certificate, integer type.

For information about client implementation check [here](./client/README.md).