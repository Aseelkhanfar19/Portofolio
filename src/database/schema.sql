CREATE TABLE users (
    user_id UUID PRIMARY KEY ,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(300) NOT NULL UNIQUE,
    fisrt_name VARCHAR(120) NOT NULL ,
    last_name VARCHAR(120) NOT NULL ,
    password_hash TEXT NOT NULL 
);

CREATE TABLE projects(
    project_id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    project_name VARCHAR(255) NOT NULL,
    details TEXT ,
    photo_url TEXT ,
    start_date DATE NOT NULL ,
    finished_date DATE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,  --TIMESTAMPTZ more flexible to all times zone while TIMESTAMP not
    project_status VARCHAR(50) CHECK (project_status IN ('In Progress','Ended','Declined')),
    features TEXT,
    single_project BOOLEAN NOT NULL,
    pinned BOOLEAN,

    CONSTRAINT fk_user_project FOREIGN KEY(user_id) REFERENCES users(user_id) 
);








-- get all created tables in DB 
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_type = 'BASE TABLE';

