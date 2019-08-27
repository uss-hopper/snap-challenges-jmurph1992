ALTER DATABASE jmurphy33 CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS Task (
   taskId BINARY(20) NOT NULL ,
   taskTitle VARCHAR(225) NOT NULL ,
   taskStartDate DATETIME NULL ,
   taskDueDate DATETIME NULL ,
   taskStatus VARCHAR(64) NOT NULL,
   taskPriority VARCHAR(64) NOT NULL ,
   taskDescription VARCHAR(256) NULL ,

   PRIMARY KEY (taskId)
);

SELECT tweet.tweetContent, profile.profileAtHandle
FROM tweet
INNER JOIN 'like' ON tweet.tweetId = like.likeTweetId
INNER JOIN profile ON like.likeProfileId = profile.profileId
WHERE tweet.tweetId = '0536faef082b454e9d444cdbe7887d7a';

# 1. Write a create table statement for this table.  The table is named Task.
# 	+-----------------+--------------+------+-----+---------+-------+
# 	| Field           | Type         | Null | Key | Default | Extra |
# 	+-----------------+--------------+------+-----+---------+-------+
# 	| taskId          | binary(20)   | NO   | PRI | NULL    |       |
# 	| taskTitle       | varchar(255) | NO   |     | NULL    |       |
# 	| taskStartDate   | datetime     | YES  |     | NULL    |       |
# 	| taskDueDate     | datetime     | YES  |     | NULL    |       |
# 	| taskStatus      | varchar(64)  | NO   |     | NULL    |       |
# 	| taskPriority    | varchar(64)  | NO   |     | NULL    |       |
# 	| taskDescription | varchar(256) | YES  |     | NULL    |       |
# 	+-----------------+--------------+------+-----+---------+-------+
# (Hint: you can use the desc command to check your work)
# 	2. For the DDL described in the Data Design Project overview, create an SQL SELECT statement that gets me the following information for the Tweet with the (hexified) id 0536faef082b454e9d444cdbe7887d7a.
# tweetContent
# profileAtHandle of all users who have liked the Tweet