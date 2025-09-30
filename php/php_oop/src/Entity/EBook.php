<?php
namespace App\Entity;
use DateTime;

class EBook extends Media
{
    private string $author;
    private int $pageNb;
    public function __construct(string $title, string $author, DateTime $publishedAt, int $pageNb, private string $url)
    {
        parent::__construct($title, $publishedAt);
        $this->author = $author;
        $this->pageNb = $pageNb;
    }

    public function getUrl(): string
    {
        return $this->url;
    }

    public function setUrl(string $url): void
    {
        $this->url = $url;
    }

    public function isLong()
    {
        return $this->pageNb >= 300;
    }
    public function getPageNb(): int
    {
        return $this->pageNb;
    }

    public function setPageNb(int $pageNb): void
    {
        $this->pageNb = $pageNb;
    }

    public function getAuthor(): string
    {
        return $this->author;
    }

    public function setAuthor(string $author): void
    {
        $this->author = $author;
    }
}