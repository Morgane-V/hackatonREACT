<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200728124058 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE fish ADD post_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE fish ADD CONSTRAINT FK_3F7444334B89032C FOREIGN KEY (post_id) REFERENCES post (id)');
        $this->addSql('CREATE INDEX IDX_3F7444334B89032C ON fish (post_id)');
        $this->addSql('ALTER TABLE post DROP fish_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE fish DROP FOREIGN KEY FK_3F7444334B89032C');
        $this->addSql('DROP INDEX IDX_3F7444334B89032C ON fish');
        $this->addSql('ALTER TABLE fish DROP post_id');
        $this->addSql('ALTER TABLE post ADD fish_id INT NOT NULL');
    }
}
