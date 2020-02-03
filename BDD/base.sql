SHOW DATABASES;
USE blogger;
SHOW TABLES;
SELECT * FROM user;
DESCRIBE roles;
-- Pour ajouter des valeurs dans une table
INSERT INTO roles(name) VALUES('User');
SELECT name FROM roles;
SELECT role_id, name, 1+1 AS result FROM roles;
-- Pour actualiser un élément de la table
UPDATE roles SET name="Contributor" WHERE role_id=3;
DESCRIBE user;
-- Pour insérer plusieurs valeurs dans une table
INSERT INTO user(email, firstname, lastname, `password`) VALUES ('yennefer@kermorhen.org', 'Yennefer', 'De Venderberg', 'purpleRa1n');
-- Pour supprimer une ligne de la table
DELETE FROM `user` WHERE `user`.`user_id` = 3;
-- TRUNCATE TABLE user; permet de vider la table user et FOREIGN_KEYS_CHECKS=0 permet de m'assurer que les clés externes sont vides

-- Pour lier deux tables, plutôt utiliser le JOIN que le WHERE
SELECT u.user_id, u.email, GROUP_CONCAT(r.`name`) AS Roles
FROM `user` AS u 
JOIN user_has_roles AS ur ON u.user_id = ur.user_id
JOIN roles AS r ON ur.role_id = r.role_id
GROUP BY u.user_id;
