<?php
namespace App\Entity;
class Member
{
    private string $firstName;
    private string $lastName;
    private string $email;


    public function __construct(string $firstName, string $lastName, string $email)
    {
        $this->setFirstName($firstName);
        $this->setLastName($lastName);
        $this->setEmail($email);
    }

    public function getFullname(): string
    {
        return $this->firstName . " " . strtoupper($this->lastName);
    }

    public function __toString(): string
    {
        return "Nom : " . $this->lastName . "\nPrénom : " . $this->firstName . "\nemail : " . $this->email;
    }

    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): void
    {
        $this->firstName = $firstName;
    }

    public function getLastName(): string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): void
    {
        $this->lastName = $lastName;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): void
    {
        if (preg_match('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/', $email))
        {
            $this->email = $email;
        }
    }
}