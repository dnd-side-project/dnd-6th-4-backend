CREATE TABLE User (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    user_nm VARCHAR(255),
    password VARCHAR(255),
    role TINYINT,
    phone_num VARCHAR(255), 
    PRIMARY KEY(id)
);

CREATE TABLE Subject (
    id INT NOT NULL AUTO_INCREMENT,
    subject_nm VARCHAR(255) NOT NULL,
    salary INT,
    monthly_cnt INT,
    class_time TIME,
    class_day DATE,
    teacher_id INT,
    student_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE Daily_Class (
    id INT NOT NULL AUTO_INCREMENT,
    subject_id INT NOT NULL,
    class_order TINYINT,
    start_time TIME,
    end_time TIME,
    place VARCHAR(255),
    chapter VARCHAR(255),
    memo VARCHAR(255),
    noty VARCHAR(255),
    daily_feedback VARCHAR(255),
    daily_comment VARCHAR(255),
    homework VARCHAR(255),
    PRIMARY KEY(id)
);


INSERT INTO User(email, user_nm, password, role, phone_num) VALUES("asdf1234@naver.com", "seunghwan_lee", "asdfasdfasdf", 1, "010-0000-0000");
INSERT INTO User(email, user_nm, password, role, phone_num) VALUES("qwer5678@naver.com", "hwanseung_lee", "12341234", 1, "010-0000-0001");


INSERT INTO Subject(subject_nm, salary, monthly_cnt, class_time, class_day, teacher_id) VALUES("수학", 400000, 8, "12:12:33", "2022-01-01", 1);
INSERT INTO Subject(subject_nm, salary, monthly_cnt, class_time, class_day, teacher_id) VALUES("영어", 500000, 12,  "12:22:33", "2022-01-02", 1);

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;