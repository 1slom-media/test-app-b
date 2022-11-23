CREATE DATABASE test_b;
\c test_b;

create extension pgcrypto;

CREATE TABLE IF NOT EXISTS users(
    user_id serial primary key,
    fulname varchar(64) not null,
    username varchar(32) not null,
    phone varchar(20) not null,
    password varchar(64) not null,
    region varchar(40) not null
);

CREATE TABLE IF NOT EXISTS universities(
    univer_id serial primary key,
    univer_name varchar(150) not null
);

CREATE TABLE IF NOT EXISTS sciences(
    science_id serial primary key,
    science varchar(30) not null
);

CREATE TABLE IF NOT EXISTS faculties(
    fac_id serial primary key,
    fac_name varchar(150) not null,
    grand_soni decimal(6,2) not null,
    kontrakt_soni decimal(6,2) not null,
    grand_score decimal(6,2) not null,
    kontrakt_score decimal(6,2) not null,
    blok1 int references sciences(science_id),
    blok2 int references sciences(science_id),
    univer_id int references universities(univer_id)
);

CREATE TABLE IF NOT EXISTS question(
    ques_id serial primary key,
    question text not null,
    answers text [],
    correct_answer varchar(350) not null,
    science_id int references sciences(science_id)
);


CREATE TABLE IF NOT EXISTS result(
    res_id serial primary key,
    user_id int references users(user_id),
    fac_id int references faculties(fac_id),
    blok1_score varchar(5),
    blok2_score varchar(5),
    total_score varchar(5),
    test_date DATE DEFAULT CURRENT_DATE
);

