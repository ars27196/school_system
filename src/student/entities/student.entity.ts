import { Course } from "src/course/entities/course.entity";
import { StudentCourse } from "src/student_course/entities/student_course.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    studentId: number

    @Column()
    studentName: string
    

    @Column()
    studentSemester: string

    @OneToMany(()=>StudentCourse, (stu_cors: StudentCourse)=>stu_cors.studentId)
    course:StudentCourse
}
