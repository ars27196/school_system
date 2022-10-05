import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configType from './orm.config';
import { StudentModule } from './student/student.module';

@Module({
  imports: [TypeOrmModule.forRoot(configType),StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
