<?php
namespace App\Entity;
class Media
{
    protected string $title;
    protected \DateTime $publishedAt;

    public function __construct(string $title, \DateTime $publishedAt)
    {
        $this->title = $title;
        $this->publishedAt = $publishedAt;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function getPublishedAt(): \DateTime
    {
        return $this->publishedAt;
    }

    public function setPublishedAt(\DateTime $publishedAt): void
    {
        $this->publishedAt = $publishedAt;
    }
}