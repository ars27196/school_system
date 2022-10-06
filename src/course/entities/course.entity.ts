import { StudentCourse } from "src/student_course/entities/student_course.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    courseId: number

    @Column()
    courseName: string

    @Column()
    courseDecription: string

    @Column()
    creditHour: number

    @OneToMany(type=>StudentCourse, (stuCurs:StudentCourse)=>stuCurs.courseId)
    
    student:StudentCourse
}
