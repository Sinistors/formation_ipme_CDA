<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';

use App\Entity\Member;
use App\Entity\Book;
use App\Entity\EBook;
use App\Entity\Movie;
use App\Entity\Music;
use App\Entity\Loan;
use App\Interface\ISaveable;

$member = new Member("Nicolas", "Puissant", "nicolas.puissant@mail.com");

$member->setEmail("ui");

echo $member;

$book1 = new Book("Harry Potter", "JK Rowling", new DateTime('01/01/1998 12:00 PM'), 200);
$ebook = new EBook("Vingt Mille Lieues sous les mers", "Jules Verne", new DateTime('01/01/1869 12:00 PM'), 865, "www.amazon.com");
$movie1 = new Movie("Gladiator", "Ridley Scott", new DateTime('01/01/2000 12:00 PM'), 9300);
$music1 = new Music("Wonderwall", "Oasis", new DateTime('01/01/1995 12:00 PM'), 280);

echo $music1->getDetails();
$loan = $member->loanMedia($book1);
$loan2 = $member->loanMedia($movie1);
$loan3 = $member->loanMedia($music1);
$loan4 = $member->loanMedia($ebook);

$member->save();
$book1->save();

echo "\n Due at : ".$loan->getDueDate()->format('d-m-Y')."\n";

$member->returnMedia($movie1);

function saveItem(ISaveable $item): void
{
    $item->save();
}

saveItem($ebook);

echo $movie1->jsonSerialize();
