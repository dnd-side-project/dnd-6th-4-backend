import { UserRequestDto } from '../dto/user-request.dto';


/**
 * TODO : mysql 도커 컴포즈 추가 후, 엔티티 수정 바랍니다.
 */
export class User {
    private id: number;
    private email: string;
    private name: string;

    constructor(userReq: UserRequestDto) {
        this.id = userReq.getId();
        this.email = userReq.getEmail();
        this.name = userReq.getName();
    }

    getId(): number {
        return this.id;
    }

    getEmail(): string {
        return this.email;
    }

    getName(): string {
        return this.name;
    }
}