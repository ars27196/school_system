import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configType from './orm.config';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { StudentCourseModule } from './student_course/student_course.module';

@Module({
  imports: [TypeOrmModule.forRoot(configType),StudentModule, CourseModule, StudentCourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
