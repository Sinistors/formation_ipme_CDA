<?php
namespace App\Interface;

interface ISaveable
{
    public function save(): void;
    public function getCreatedAt(): \DateTime;
    public function setCreatedAt(\DateTime $createdAt): void;
    public function getUpdatedAt(): \DateTime;
    public function setUpdatedAt(\DateTime $updatedAt): void;
}