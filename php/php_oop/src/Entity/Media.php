<?php
namespace App\Entity;
use App\Interface\IDetail;
use App\Interface\ISaveable;
use App\Trait\Saving;

abstract class Media implements IDetail, ISaveable, \JsonSerializable
{
    protected string $title;
    protected \DateTime $publishedAt;

    use Saving;

    public function __construct(string $title, \DateTime $publishedAt)
    {
        $this->title = $title;
        $this->publishedAt = $publishedAt;
        $this->createdAt = new \DateTime();
    }

    public function getDetails(): string
    {
        return "Titre : ".$this->title." sorti le ".$this->publishedAt->format("d/m/Y");
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

    public function jsonSerialize(): mixed
    {
        return json_encode($this);
    }
}