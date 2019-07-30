<?php

/**
 * gets all tweets from a certain dateTime
 *
 * @param \PDO $pdo PDO connection object
 * @returns \SplFixedArray SplFixedArray of tweets found or null if not found
 * @throws \PDOException when MySQL related error occurs
 * @throws \TypeError when variables are not the correct data type
 **/

public static function getTweetByDate(\PDO $pdo, DateTime $tweetDate) : \SplFixedArray {

	//create dates for midnight of the date and midnight of the next day
	//did not get
	$startDateString = $tweetDate ->format('Y-m-d') . '00:00:00';
	$startDate = new DateTime($startDateString);
	$endDate = new DateTime($startDateString);
	$endDate -> add(new DateInterval('P1D'));

	//create query template
	$query = "SELECT tweetId, tweetProfileId, tweetContent, tweetDate FROM tweet WHERE tweetDate >= :startDate AND tweetDate < :endDate";

	//bind the beginning and end dates to the place holder in the template
	//did not get
	$parameters = [
		'startDate' => $startDate -> format("Y-m-d H:i:s.u"),
		'endDate' => $endDate -> format("Y:-m-d H:i:s.u"),
	];
	$statement ->execute($parameters);

	//builds tweet array
	$tweets = new \SplFixedArray($statement -> rowCount());
	$statement->setFetchMode(\PDO::FETCH_ASSOC);
	while(($row = $statement->fetch()) !== false) {
		try {
				$tweet = new Tweet($row["tweetId"], $row["tweetProfileId"], $row["tweetContent"], $row["tweetDate"]);
				$tweets[$tweets->key()] = $tweet;
				$tweets->next();
		} catch(\Exception $exception) {
			throw(new \PDOException($exception->getMessage(), 0, $exception));
		}
	}
	return($tweets);
}



