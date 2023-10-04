import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  createUser(name: string, email: string, password: string): User {
    const newUser = new User(name, email, password);
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, name: string, email: string, password: string): User | undefined {
    const userToUpdate = this.users.find(user => user.id === id);
    if (userToUpdate) {
      userToUpdate.name = name;
      userToUpdate.email = email;
      userToUpdate.password = password;
      return userToUpdate;
    }
    return undefined;
  }

  deleteUser(id: number): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
