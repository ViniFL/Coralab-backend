import { Injectable } from "@nestjs/common";
import { User } from "src/entities/user.entity";

@Injectable()
export class UserService {
    private users: User[] = [];
}