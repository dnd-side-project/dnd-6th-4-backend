import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { User } from './entities/user.model';
import { UserRequestDto } from './dto/user-request.dto';

@Injectable()
export class UserService {

    private repository: User[];
    constructor() { }

    findAll(): User[] {
        return this.repository;
    }


    findByEmail(email: string): User | null {
        for (let i = 0; i < this.repository.length; i++) {
            if (this.repository[i].getEmail() !== email) continue;
            return this.repository[i];
        }
        return null;
    }

    addUser(userDto: UserRequestDto): void {
        const user = new User(userDto);
        this.repository.push(user);
    }

    removeByEmail(email: string): boolean {
        for (let i = 0; i < this.repository.length; i++) {
            if (this.repository[i].getEmail() === email) {
                this.repository.splice(i, 1);
            }
        }
        return false;
    }
}