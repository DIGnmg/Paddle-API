DROP DATABASE IF EXISTS paddle;
CREATE DATABASE paddle;
Query OK, 1 row affected (0.18 sec)

CREATE DATABASE paddle;
ERROR 1007 (HY000): Can't create database 'paddle'; database exists

CREATE DATABASE IF NOT EXISTS paddle;
Query OK, 1 row affected, 1 warning (0.01 sec)

SHOW WARNINGS;
+-------+------+----------------------------------------------+
| Level | Code | Message                                      |
+-------+------+----------------------------------------------+
| Note  | 1007 | Can't create database 'paddle'; database exists |
+-------+------+----------------------------------------------+