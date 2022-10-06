import { Module } from '@nestjs/common';
import { StudentCourseService } from './student_course.service';
import { StudentCourseController } from './student_course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCourse } from './entities/student_course.entity';

@Module({
  imports:[TypeOrmModule.forFeature([StudentCourse])],
  controllers: [StudentCourseController],
  providers: [StudentCourseService]
})
export class StudentCourseModule {}
