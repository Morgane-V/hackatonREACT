<?php

namespace App\Entity;

use App\Repository\PostRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 */
class Post
{
  /**
   * @ORM\Id()
   * @ORM\GeneratedValue()
   * @ORM\Column(type="integer")
   */
  private $id;

  /**
   * @ORM\Column(type="text")
   */
  private $content;

  /**
   * @ORM\Column(type="datetime")
   */
  private $createdAt;

  /**
   * @ORM\OneToMany(targetEntity=Comment::class, mappedBy="post")
   */
  private $comments;

  /**
   * @ORM\Column(type="blob")
   */
  private $picture;

  /**
   * @ORM\Column(type="integer")
   */
  private $size;

  /**
   * @ORM\Column(type="integer")
   */
  private $weight;

  /**
   * @ORM\Column(type="string", length=255)
   */
  private $username;

  /**
   * @ORM\Column(type="string", length=255)
   */
  private $lastname;

  /**
   * @ORM\ManyToOne(targetEntity=Fish::class, inversedBy="post")
   */
  private $fish;

  public function __construct()
  {
    $this->comments = new ArrayCollection();
    $this->Fish = new ArrayCollection();
  }

  public function getId(): ?int
  {
    return $this->id;
  }

  public function getContent(): ?string
  {
    return $this->content;
  }

  public function setContent(string $content): self
  {
    $this->content = $content;

    return $this;
  }

  public function getCreatedAt(): ?\DateTimeInterface
  {
    return $this->createdAt;
  }

  public function setCreatedAt(\DateTimeInterface $createdAt): self
  {
    $this->createdAt = $createdAt;

    return $this;
  }

  /**
   * @return Collection|Comment[]
   */
  public function getComments(): Collection
  {
    return $this->comments;
  }

  public function addComment(Comment $comment): self
  {
    if (!$this->comments->contains($comment)) {
      $this->comments[] = $comment;
      $comment->setPost($this);
    }

    return $this;
  }

  public function removeComment(Comment $comment): self
  {
    if ($this->comments->contains($comment)) {
      $this->comments->removeElement($comment);
      // set the owning side to null (unless already changed)
      if ($comment->getPost() === $this) {
        $comment->setPost(null);
      }
    }

    return $this;
  }

  /**
   * @return Collection|Fish[]
   */
  public function getFish(): Collection
  {
    return $this->Fish;
  }

  public function addFish(Fish $Fish): self
  {
    if (!$this->Fish->contains($Fish)) {
      $this->Fish[] = $Fish;
      $Fish->setPost($this);
    }

    return $this;
  }

  public function removeFish(Fish $Fish): self
  {
    if ($this->Fish->contains($Fish)) {
      $this->Fish->removeElement($Fish);
      // set the owning side to null (unless already changed)
      if ($Fish->getPost() === $this) {
        $Fish->setPost(null);
      }
    }

    return $this;
  }

  public function getPicture()
  {
    return $this->picture;
  }

  public function setPicture($picture): self
  {
    $this->picture = $picture;

    return $this;
  }

  public function getSize(): ?int
  {
    return $this->size;
  }

  public function setSize(int $size): self
  {
    $this->size = $size;

    return $this;
  }

  public function getWeight(): ?int
  {
    return $this->weight;
  }

  public function setWeight(int $weight): self
  {
    $this->weight = $weight;

    return $this;
  }

  public function getUsername(): ?string
  {
    return $this->username;
  }

  public function setUsername(string $username): self
  {
    $this->username = $username;

    return $this;
  }

  public function getLastname(): ?string
  {
    return $this->lastname;
  }

  public function setLastname(string $lastname): self
  {
    $this->lastname = $lastname;

    return $this;
  }

  public function setFish(?Fish $fish): self
  {
      $this->fish = $fish;

      return $this;
  }
}
