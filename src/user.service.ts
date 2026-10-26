import { Body, Injectable } from '@nestjs/common';

export type User = {
  id?: number;
  name: String;
  age: number;
  admin: number;
};

@Injectable()
export class UserService {
  idIncrement = 1;

  users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  addUser(newUser: User) {
    newUser.id = this.idIncrement++;
    this.idIncrement += 1;

    this.users.push(newUser);

    return newUser;
  }

  editUser(id: number, newData: User) {
    const user = this.users.find((user) => {
      return (user.id = id);
    });

    this.users.filter((u) => u.id != newData.id);

    const userEdited: User = {
      name: newData.name,
      age: newData.age,
      admin: newData.admin,
    };

    this.users.push(userEdited);

    return userEdited;
  }
}
