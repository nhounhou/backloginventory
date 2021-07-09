DROP DATABASE IF EXISTS nrcbacklog;
-- Creates the "blogger" database --
CREATE DATABASE nrcbacklog;

use nrcbacklog;

create table pallet(
	id int not null auto_increment primary key,
    name varchar(15),
    comment varchar(100),
    location varchar(10)
);