import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    private _id!: number;

	@Column({ type: "varchar", length: 100 })
    private _name: string;

    @Column({ type: "varchar", length: 100, unique: true })
    private _email: string;

    @Column({ type: "text" })
    private _password: string;

    constructor(name: string, email: string, password: string) {
        this._name = name;
        this._email = email;
        this._password = password;
    } 

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}