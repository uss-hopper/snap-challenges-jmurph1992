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