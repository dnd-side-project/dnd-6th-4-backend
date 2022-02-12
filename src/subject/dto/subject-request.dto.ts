export class SubjectDto {
    private id: number;
    private teacherId: number;
    private name: string;
    private salary: number;
    private time: Date;
    private day: string;
    private studentId_1: number;
    private studentId_2: number;
    private studentId_3: number;

    constructor(obj) {
        this.id = obj.id;
        this.teacherId = obj.teacherId;
        this.name = obj.name;
        this.salary = obj.salary;
        this.time = new Date();
        this.day = obj.day;
        this.studentId_1 = obj.studentId_1;
        this.studentId_2 = obj.studentId_2;
        this.studentId_3 = obj.studentId_3;
    }

    getId() {
        return this.id;
    }

    getTeacherId() {
        return this.teacherId;
    }

    getName() {
        return this.name;
    }
}