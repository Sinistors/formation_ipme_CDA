<?php
namespace App\Entity;
enum Status
{
    case PENDING;
    case RETURNED;
    case RETURNEDLATE;
    case LATE;
}
class Loan
{
    private \DateTime $borrowedAt;
    private ?\DateTime $returnedAt;
    private Member $member;
    private Media $media;

    public function __construct(Media $media, Member $member)
    {
        $this->borrowedAt = new \DateTime('now');
        $this->media = $media;
        $this->member = $member;
    }

    public function getDueDate(): \DateTime
    {
        $dueDate = (clone $this->borrowedAt)->modify('+2 weeks');

        return $dueDate;
    }

    public function isExpired(): bool
    {
        $now = new \DateTime();
        return $now > $this->getDueDate();
    }

    public function getStatus(): Status
    {
        if ($this->returnedAt === null)
        {
            if ($this->isExpired())
            {
                return Status::LATE;
            }
            else
            {
                return Status::PENDING;
            }
        }
        else
        {
            if ($this->returnedAt > $this->getDueDate())
            {
                return Status::RETURNEDLATE;
            }
            else
            {
                return Status::RETURNED;
            }
        }
    }

    public function getBorrowedAt(): \DateTime
    {
        return $this->borrowedAt;
    }

    public function setBorrowedAt(\DateTime $borrowedAt): void
    {
        $this->borrowedAt = $borrowedAt;
    }

    public function getReturnedAt(): ?\DateTime
    {
        return $this->returnedAt;
    }

    public function setReturnedAt(?\DateTime $returnedAt): void
    {
        $this->returnedAt = $returnedAt;
    }

    public function getMember(): Member
    {
        return $this->member;
    }

    public function setMember(Member $member): void
    {
        $this->member = $member;
    }

    public function getMedia(): Media
    {
        return $this->media;
    }

    public function setMedia(Media $media): void
    {
        $this->media = $media;
    }

}