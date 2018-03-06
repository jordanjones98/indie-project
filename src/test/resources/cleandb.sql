delete from event_class;
delete from classes;
delete from events;
delete from users;
INSERT INTO `classes` VALUES (1,'2wd Buggy','2018-02-17 17:15:36'),(2,'2wd Short Course','2018-02-19 23:37:04'),(3,'4wd Modified Buggy','2018-02-19 23:57:19'),(4,'4wd Stock Buggy','2018-02-19 23:57:24');
INSERT INTO `events` VALUES (1,'Winter Blast','Winter points series',NULL, 'winter-blast'),(2,'Event One','Some Test Event',NULL,'event-one'),(3,'Friday Races','Races Every Friday',NULL,'friday-races');
INSERT INTO `users` VALUES (1,'Jordan','Jones','jordanalanjones@gmail.com','a','11','2018-02-13 22:00:45'),(2,'Mikayla','Ehlert','mehlert2@wisc.edu','a','12','2018-02-12 23:13:24'),(3,'New','ejones@wisc.edu','ejones@wisc.edu','t','1','2018-02-13 01:32:02'),(4,'Lilly','Jones','lilly@jones.tech','a','1','2018-02-18 02:32:02'),(5,'Lilly','Jones','lilly@update.com','a','1','2018-02-18 19:29:15');
INSERT INTO `event_class` VALUES (1,1),(1,2),(1,3),(2,1);
