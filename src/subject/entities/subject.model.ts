import { SubjectDto } from '../dto/subject-request.dto';

/**
 * TODO : mysql 도커 컴포즈 추가 후, 엔티티 수정 바랍니다.
 */
export class Subject {
    private id: number;
    private teacherId: number;
    private name: string;

    constructor(subjectReq: SubjectDto) {
        this.id = subjectReq.getId();
        this.teacherId = subjectReq.getTeacherId();
        this.name = subjectReq.getName();
    }

    getId() {
        return this.id;
    }

    getTeacherId() {
        return this.getTeacherId();
    }

    getSubjectName() {
        return this.name;
    }
}