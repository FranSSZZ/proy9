<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230809165749 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE dpersonales (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) NOT NULL, n_contacto VARCHAR(255) NOT NULL, mail VARCHAR(255) NOT NULL, direccion VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE experiencia (id INT AUTO_INCREMENT NOT NULL, años VARCHAR(255) NOT NULL, organizacion VARCHAR(255) NOT NULL, cargo VARCHAR(255) NOT NULL, responsabilidades VARCHAR(1000) NOT NULL, img VARCHAR(1000) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE formacion (id INT AUTO_INCREMENT NOT NULL, año VARCHAR(255) NOT NULL, nombre VARCHAR(255) NOT NULL, lugar VARCHAR(255) NOT NULL, descripcion VARCHAR(1500) NOT NULL, duracion VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE dpersonales');
        $this->addSql('DROP TABLE experiencia');
        $this->addSql('DROP TABLE formacion');
    }
}
