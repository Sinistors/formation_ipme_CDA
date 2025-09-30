<?php
namespace App\Trait;

trait Saving
{
    private \DateTime $createdAt;
    private ?\DateTime $updatedAt;
    public function save(): void
    {
        $this->updatedAt = new \DateTime();
        echo "Saved !\n";
    }
    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt): void
    {
        $this->createdAt = $createdAt;
    }

    public function getUpdatedAt(): \DateTime
    {
        if ($this->updatedAt === null)
        {
            return $this->createdAt;
        }
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTime $updatedAt): void
    {
        $this->updatedAt = $updatedAt;
    }
}