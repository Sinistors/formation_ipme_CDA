<?php
namespace App\Entity;

class Movie extends Media
{
    private string $director;
    private int $timeInSec;

    public function __construct(string $title, string $director, \DateTime $publishedAt, int $timeInSec)
    {
        parent::__construct($title, $publishedAt);
        $this->director = $director;
        $this->timeInSec = $timeInSec;
    }

    public function getDirector(): string
    {
        return $this->director;
    }

    public function setDirector(string $director): void
    {
        $this->director = $director;
    }

    public function getTimeInSec(): int
    {
        return $this->timeInSec;
    }

    public function setTimeInSec(int $timeInSec): void
    {
        $this->timeInSec = $timeInSec;
    }
}
