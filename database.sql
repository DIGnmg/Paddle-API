CREATE DATABASE IF NOT EXISTS paddle;

CREATE TABLE IF NOT EXISTS paddle.player (
    player_id int(5) NOT NULL AUTO_INCREMENT,
    first_name varchar(50) DEFAULT NULL,
    last_name varchar(250) DEFAULT NULL,
    number_of_matches int(5) DEFAULT NULL,
    total_losses int(5) DEFAULT NULL,
    total_wins int(5) DEFAULT NULL,
    rank int(5) DEFAULT NULL,
    date_created DATE DEFAULT NULL,
    PRIMARY KEY(player_id)
    );

CREATE SCHEMA paddle AUTHORIZATION admin
      DEFAULT CHARACTER SET INFORMATION_SCHEMA.LATIN1
  CREATE DOMAIN paddle_domain AS CHAR(3)
  CREATE TABLE player (dept paddle_domain, name1 CHAR(10))
  CREATE TABLE match (empname CHAR(20), dept paddle_domain)
  CREATE TABLE game (empname CHAR(20), dept paddle_domain)
  GRANT SELECT ON department TO paddle;