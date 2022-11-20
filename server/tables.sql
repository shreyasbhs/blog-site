CREATE TABLE "User"(
    id SERIAL PRIMARY KEY NOT NULL ,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    passwd VARCHAR(255) NOT NULL,
    userstatus BOOLEAN NOT NULL,
    CONSTRAINT emial_unique UNIQUE (email)
    
);