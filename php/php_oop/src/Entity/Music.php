<?php
namespace App\Entity;

class Music extends Media
{
    private string $artist;
    private int $timeInSec;

    public function __construct(string $title, string $artist, \DateTime $publishedAt, int $timeInSec)
    {
        parent::__construct($title, $publishedAt);
        $this->artist = $artist;
        $this->timeInSec = $timeInSec;
    }

    public function getArtist(): string
    {
        return $this->artist;
    }

    public function setArtist(string $artist): void
    {
        $this->artist = $artist;
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
