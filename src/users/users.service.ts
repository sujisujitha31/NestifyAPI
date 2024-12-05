import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { "id": 1, "name": "Sujitha", "email": "sujitha1999@gmail.com", "role": "ADMIN" },
        { "id": 2, "name": "Rahul", "email": "rahul2020@gmail.com", "role": "INTERN" },
        { "id": 3, "name": "Priya", "email": "priya.kumar@gmail.com", "role": "ADMIN" },
        { "id": 4, "name": "Arun", "email": "arun_dev@gmail.com", "role": "INTERN" },
        { "id": 5, "name": "Meera", "email": "meera123@gmail.com", "role": "ADMIN" },
        { "id": 6, "name": "Vikram", "email": "vikram45@gmail.com", "role": "INTERN" },
        { "id": 7, "name": "Divya", "email": "divya.m@gmail.com", "role": "ADMIN" },
        { "id": 8, "name": "Kiran", "email": "kiran_xyz@gmail.com", "role": "INTERN" },
        { "id": 9, "name": "Sneha", "email": "sneha.abc@gmail.com", "role": "ADMIN" },
        { "id": 10, "name": "Ravi", "email": "ravi99@gmail.com", "role": "INTERN" }
    ];

    findAll(role?: "ADMIN" | "INTERN" | "ENGINEER") {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }

    findOne(id: number) {

        console.log("user filtered");
        const user = this.users.filter(user => {
            console.log(user.id);
            if (user.id === id)
            return user;


        });
        console.log("i am gonna return this user");
        return user
    }

    create(user: { name: string, email: string, role: "ADMIN" | "INTERN" | "ENGINEER" }) {
        const highestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = { "id": highestId[0].id + 1, ...user }
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updateUser: { name?: string, email?: string, role?: "ADMIN" | "INTERN" | "ENGINEER" }) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUser }
            }
            return user
        })
        return this.findOne(id)
    }

    deleteUser(id: number) {
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
}
