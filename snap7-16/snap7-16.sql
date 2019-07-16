ALTER DATABASE jmurphy33 CHARACTER SET utf8 COLLATE utf8_unicode_ci;

DROP TABLE IF EXISTS Task;

CREATE TABLE Task (
   taskId BINARY(20) NOT NULL ,
   taskTitle VARCHAR(225) NOT NULL ,
   taskStarDate DATETIME NULL ,
   taskDueDate DATETIME NULL ,
   taskStatus VARCHAR(64) NOT NULL,
   taskPriority VARCHAR(64) NOT NULL ,
   taskDescription VARCHAR(256) NULL ,

   PRIMARY KEY (taskId)
);

SELECT likeProfileId, tweetContent FROM `like`, tweet WHERE tweetId = UNHEX(0536faef082b454e9d444cdbe7887d7a);