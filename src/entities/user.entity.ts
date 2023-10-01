import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    private id!: number;

	@Column({ type: "varchar", length: 100 })
    private name: string;

    @Column({ type: "varchar", length: 100, unique: true })
    private email: string;

    @Column({ type: "text" })
    private password: string;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    } 
}