import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentCourseDto } from './dto/create-student_course.dto';
import { UpdateStudentCourseDto } from './dto/update-student_course.dto';
import { StudentCourse } from './entities/student_course.entity';

@Injectable()
export class StudentCourseService {

  constructor(@InjectRepository(StudentCourse) private readonly repo:Repository<StudentCourse>){}

  create(createStudentCourseDto: CreateStudentCourseDto) {
    return 'This action adds a new studentCourse';
  }

  findAll() {
    return this.repo.find({relations:{courseId:true, studentId:true}});
  }

  findOne(id: number) {
    return `This action returns a #${id} studentCourse`;
  }

  update(id: number, updateStudentCourseDto: UpdateStudentCourseDto) {
    return `This action updates a #${id} studentCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentCourse`;
  }

  assignCourseToStudent(dto:CreateStudentCourseDto){
    return this.repo.insert(dto);
  }
}
