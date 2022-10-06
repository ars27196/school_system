import { Course } from "src/course/entities/course.entity";
import { Student } from "src/student/entities/student.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StudentCourse {
    @PrimaryGeneratedColumn()
    id:number
    
    @ManyToOne(type=>Student, (stu:Student)=>stu.studentId)
    studentId:number
    
    @ManyToOne(type=>Course, course=> course.courseId)
    @JoinColumn({name:"student_id"})
    courseId:number

}

