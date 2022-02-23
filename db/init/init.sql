CREATE TABLE User (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    user_nm VARCHAR(255),
    password VARCHAR(255),
    role TINYINT,
    phone_num VARCHAR(255),
    parent_phone_num VARCHAR(255),
    profile_url VARCHAR(255),
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
    color INT,
    PRIMARY KEY(id)
);

CREATE TABLE Daily_Class (
    id INT NOT NULL AUTO_INCREMENT,
    subject_id INT NOT NULL,
    class_order TINYINT,
    start_time TIME,
    place VARCHAR(255),
    chapter VARCHAR(255),
    memo VARCHAR(255),
    noty VARCHAR(255),
    daily_feedback VARCHAR(255),
    daily_comment VARCHAR(255),
    homework VARCHAR(255),
    change_feedback BOOLEAN, 
    change_start_time TIME,
    PRIMARY KEY(id)
);


INSERT INTO User(email, user_nm, password, role, phone_num, parent_phone_num) VALUES("asdf1234@naver.com", "seunghwan_lee", "asdfasdfasdf", 1, "010-0000-0000", "010-0000-0000");
INSERT INTO User(email, user_nm, password, role, phone_num, parent_phone_num) VALUES("qwer5678@naver.com", "hwanseung_lee", "12341234", 1, "010-0000-0001", "010-0000-0000");


INSERT INTO Subject(subject_nm, salary, monthly_cnt, class_time, class_day, teacher_id, color) VALUES("수학", 400000, 8, "12:12:33", "2022-01-01", 1, 100);
INSERT INTO Subject(subject_nm, salary, monthly_cnt, class_time, class_day, teacher_id, color) VALUES("영어", 500000, 12,  "12:22:33", "2022-01-02", 1, 100);

INSERT INTO Daily_Class(subject_id, class_order, start_time, place, chapter, memo, noty, daily_feedback, daily_comment, homework) VALUES(1, 5, "12:12:12", "home", "aaaa", "bbbb", "noty", "feed_back", "comment", "homeworkd");
INSERT INTO Daily_Class(subject_id, class_order, start_time, place, chapter, memo, noty, daily_feedback, daily_comment, homework) VALUES(2, 6, "12:12:12", "home", "chapter", "memo", "noty", "feed_back", "comment", "homeworkd");

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;