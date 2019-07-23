<?php

/**
 *creates an object for person and enters the first and last names.
 *
 *author Justin Murphy <j.murphy33@cnm.edu>
 **/

class person {

	private $firstName;

	private $lastName;

	public function __construct(string $newFirstName, string $newLastName){
		$this ->setFirstName($newFirstName);
		$this ->setLastName($newLastName);
	}

	//Accessor for first name

	public function getFirstName() : string {
		return ($this->firstName);
	}

	//Mutator for first name
	public function setFirstName(string $newFirstName) : void {
		$this->firstName = $newFirstName;
	}

	//Accessor for last name

	public function getLastName() : string {
		return ($this->lastName);
	}

	//Mutator for last name
	public function setLastName(string $newLastName) : void {
		$this->lastName = $newLastName;
	}

	public function fullName() : void {
		echo ($this->firstName . $this->lastName);
	}
}

$human = new person("Justin", "Murphy");
$human -> fullName();