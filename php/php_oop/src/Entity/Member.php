<?php
namespace App\Entity;
use App\Interface\ISaveable;
use App\Trait\Saving;

class Member implements ISaveable, \JsonSerializable
{
    private string $firstName;
    private string $lastName;
    private string $email;
    private array $loans = [];

    use Saving;


    public function __construct(string $firstName, string $lastName, string $email)
    {
        $this->setFirstName($firstName);
        $this->setLastName($lastName);
        $this->setEmail($email);
        $this->createdAt = new \DateTime();
    }


    public function getFullname(): string
    {
        return $this->firstName . " " . strtoupper($this->lastName);
    }

    public function __toString(): string
    {
        return "Nom : " . $this->lastName . "\nPrénom : " . $this->firstName . "\nemail : " . $this->email;
    }

    public function loanMedia(Media $media): Loan
    {
        $loan = new Loan($media, $this);
        $this->loans[] = $loan;
        return $loan;
    }

    public function returnMedia(Media $media): Loan | null
    {
        foreach ($this->loans as $i => $loan)
        {
            if ($loan->getMedia() == $media)
            {
                $loan->setReturnedAt(new \DateTime());
                return array_splice($this->loans, $i, 1)[0];
            }
        }
        return null;
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

    public function jsonSerialize(): mixed
    {
        return json_encode($this);
    }
}