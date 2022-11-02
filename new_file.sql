CREATE TABLE `Employees` (
  `employee_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `status` boolean NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `skill_id` int,
  `grade_id` int
);

CREATE TABLE `Skills` (
  `skill_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(255) NOT NULL
);

CREATE TABLE `Grades` (
  `grade_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `grade_name` varchar(255) NOT NULL,
  `grade` int NOT NULL
);

CREATE TABLE `Members` (
  `member_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `employee_id` int,
  `project_id` int,
  `datetime_start` timestamp,
  `datetime_end` timestamp
);

CREATE TABLE `Projects` (
  `project_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) NOT NULL,
  `project_leader_id` int NOT NULL,
  `team_lead_id` int NOT NULL
);

CREATE TABLE `Vacancies` (
  `vacancy_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `requienments` varchar(255) NOT NULL,
  `member_id` int,
  `creator_id` int
);

CREATE TABLE `Skills_With_Grades` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `skill_id` int,
  `skill_grade` int NOT NULL
);

CREATE TABLE `Employees_Skills_With_Grades` (
  `Employees_id` int,
  `Skills_With_Grades_skill_id` int
);

ALTER TABLE `Employees` AUTO_INCREMENT = 10001;
ALTER TABLE `Skills` AUTO_INCREMENT = 10001;
ALTER TABLE `Members` AUTO_INCREMENT = 10001;
ALTER TABLE `Projects` AUTO_INCREMENT = 10001;
ALTER TABLE `Vacancies` AUTO_INCREMENT = 10001;


ALTER TABLE `Skills_With_Grades` ADD FOREIGN KEY (`skill_id`) REFERENCES `Skills` (`skill_id`);

ALTER TABLE `Employees_Skills_With_Grades` ADD FOREIGN KEY (`Skills_With_Grades_skill_id`) REFERENCES `Skills_With_Grades` (`id`);

ALTER TABLE `Employees` ADD FOREIGN KEY (`grade_id`) REFERENCES `Grades` (`grade_id`);

ALTER TABLE `Employees_Skills_With_Grades` ADD FOREIGN KEY (`Employees_id`) REFERENCES `Employees` (`employee_id`);

ALTER TABLE `Vacancies` ADD FOREIGN KEY (`member_id`) REFERENCES `Members` (`member_id`);

ALTER TABLE `Members` ADD FOREIGN KEY (`project_id`) REFERENCES `Projects` (`project_id`);