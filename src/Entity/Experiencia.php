<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ExperienciaRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ExperienciaRepository::class)]
#[ApiResource]
class Experiencia
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $años = null;

    #[ORM\Column(length: 255)]
    private ?string $organizacion = null;

    #[ORM\Column(length: 255)]
    private ?string $cargo = null;

    #[ORM\Column(length: 1000)]
    private ?string $responsabilidades = null;

    #[ORM\Column(length: 1000)]
    private ?string $img = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAños(): ?string
    {
        return $this->años;
    }

    public function setAños(string $años): static
    {
        $this->años = $años;

        return $this;
    }

    public function getOrganizacion(): ?string
    {
        return $this->organizacion;
    }

    public function setOrganizacion(string $organizacion): static
    {
        $this->organizacion = $organizacion;

        return $this;
    }

    public function getCargo(): ?string
    {
        return $this->cargo;
    }

    public function setCargo(string $cargo): static
    {
        $this->cargo = $cargo;

        return $this;
    }

    public function getResponsabilidades(): ?string
    {
        return $this->responsabilidades;
    }

    public function setResponsabilidades(string $responsabilidades): static
    {
        $this->responsabilidades = $responsabilidades;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(string $img): static
    {
        $this->img = $img;

        return $this;
    }
}
