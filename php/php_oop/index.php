<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';

use App\Entity\Member;
use App\Entity\Book;
use App\Entity\Movie;
use App\Entity\Music;
use App\Entity\Loan;

$member = new Member("Nicolas", "Puissant", "nicolas.puissant@mail.com");

//$member->setFirstName("Nicolas");
//$member->setLastName("Puissant");
//$member->setEmail("nicolas.puissant@mail.com");

$member->setEmail("ui");

echo $member;

$book1 = new Book("Harry Potter", "JK Rowling", new DateTime('01/01/1998 12:00 PM'), 200);
$book2 = new Book("Vingt Mille Lieues sous les mers", "Jules Verne", new DateTime('01/01/1869 12:00 PM'), 865);
$movie1 = new Movie("Gladiator", "Ridley Scott", new DateTime('01/01/2000 12:00 PM'), 9300);
$music1 = new Music("Wonderwall", "Oasis", new DateTime('01/01/1995 12:00 PM'), 280);

$loan = new Loan($book1, $member);
$loan2 = new Loan($movie1, $member);
$loan3 = new Loan($music1, $member);

echo $loan->getDueDate()->format('d-m-Y');