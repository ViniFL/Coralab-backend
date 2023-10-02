import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task')
export class Task {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public title: string;

    @Column()
    public description: string;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }

    get getId(): number {
        return this.id;
    }

    get getTitle(): string {
        return this.title;
    }

    get getDescription(): string {
        return this.description;
    }
}
