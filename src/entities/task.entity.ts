import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task')
export class Task {

    @PrimaryGeneratedColumn()
    private id!: number;

    @Column()
    private title: string;

    @Column()
    private description: string;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }
}

