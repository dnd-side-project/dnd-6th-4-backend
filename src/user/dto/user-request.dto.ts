export class UserRequestDto {
    private id: number;
    private email: string;
    private name: string;
    private teacher: boolean;
    private alarm: boolean;
    private feedbackAlarm: boolean;
    private commentAlarm: boolean;
    private school: string;
    private number: number;
    private parentNumber: number;
    constructor(obj) {
        this.id = obj.id;
        this.email = obj.email;
        this.name = obj.name;
        this.teacher = obj.teacher;
        this.alarm = obj.alarm;
        this.feedbackAlarm = obj.feedbackAlarm;
        this.commentAlarm = obj.commentAlarm;
        this.school = obj.school;
        this.number = obj.number;
        this.parentNumber = obj.parentNumber;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getName() {
        return this.name;
    }
}