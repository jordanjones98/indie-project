DROP TABLE IF EXISTS `event_class`;
DROP TABLE IF EXISTS `user_event`;
DROP TABLE IF EXISTS `classes`;
DROP TABLE IF EXISTS `events`;
DROP TABLE IF EXISTS `users`;
CREATE TABLE `classes` ( `id` int(11) NOT NULL AUTO_INCREMENT, `class_name` varchar(100) NOT NULL, `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `slug` varchar(50) DEFAULT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
INSERT INTO `classes` VALUES (1,'2wd Buggy','2018-04-24 19:56:45','2wd-buggy'),(2,'4wd buggy','2018-04-24 19:56:59','4wd-buggy'),(3,'4wd Stock buggy','2018-04-24 19:57:14','4wd-stock-buggy');
CREATE TABLE `events` ( `id` int(11) NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `about` text NOT NULL, `date` date DEFAULT NULL, `slug` varchar(100) DEFAULT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
INSERT INTO `events` VALUES (1,'Updated Event Again','Spring points series','2018-09-04','test-event-blast'),(2,'Event One','Some Test TESTING AND AGAIN AND AGAIN AGAIn Event','2018-03-23','event-one'),(3,'Summer Points Series','This Summer points series will have everyone excited. We look forward to seeing who wins!','2018-06-06','summer-points-series'),(4,'Some test event','Some About thing','2018-04-04','some-test-event'),(5,'angular','angular','2018-07-07','angular'),(6,'Winter Series','Brining the winter series back!','2018-09-09','winter-series'),(7,'Why is this wrong','Spring points series','2018-09-04','test-event-blast'),(8,'Event with classes','Test Event with classes','2018-07-03','event-with-classes'),(9,'this is the name','about','2017-08-08','name');
CREATE TABLE `users` ( `id` int(11) NOT NULL AUTO_INCREMENT, `first_name` varchar(50) NOT NULL, `last_name` varchar(50) NOT NULL, `email` varchar(150) NOT NULL, `phone_number` varchar(20) DEFAULT NULL, `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `slug` varchar(50) DEFAULT NULL, `admin` tinyint(1) DEFAULT '0', PRIMARY KEY (`id`), UNIQUE KEY `email` (`email`)) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
INSERT INTO `users` VALUES (1,'Mikayla','Ehlert','mehlert2@wisc.edu','12','2018-02-12 23:13:24',NULL,0),(2,'Eric','Jones','ejones@wisc.edu','1','2018-02-13 01:32:02','eric-jones',0),(3,'Nikkie','Jones','nikkie@jones.tech','1','2018-02-18 02:32:02','nikkie-jones',0),(4,'Lilly','Jones','lilly@update.com','1','2018-02-18 19:29:15','lilly-jones',0),(5,'Jeff','Johnson','jjohnson@gmail.com','1111111111','2018-02-24 05:04:29','jeff-johnson',0),(6,'Jordan','Jones','jordanalanjones@gmail.com','4148039887','2018-04-19 03:00:39','jordan-jones',1),(7,'Kevin','Huckstorf','someone@gmail.com','1','2018-04-18 23:59:28','kevin-huckstorf',0),(8,'Alex','Webb','someonenew@gmail.com','1','2018-04-19 00:04:41','alex-webb',0),(9,'Myles','Braun','jjones42@wisc.edu','1','2018-04-19 00:22:25','myles-braun',0);
CREATE TABLE `event_class` ( `event_id` int(12) NOT NULL, `class_id` int(11) NOT NULL, PRIMARY KEY (`event_id`,`class_id`), KEY `event_id` (`event_id`), KEY `event_class_fk_2` (`class_id`), CONSTRAINT `event_class_fk_1` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`), CONSTRAINT `event_class_fk_2` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO `event_class` VALUES (1,1),(1,2),(8,1),(8,2),(8,3),(9,1),(9,2),(9,3);
CREATE TABLE `user_event` ( `user_id` int(11) NOT NULL, `event_id` int(11) NOT NULL, PRIMARY KEY (`event_id`,`user_id`), KEY `event_id` (`event_id`), KEY `user_event_fk_1` (`user_id`), CONSTRAINT `user_event_fk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`), CONSTRAINT `user_event_fk_2` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO `user_event` VALUES (1,1),(2,1),(3,2);
