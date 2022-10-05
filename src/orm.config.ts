import { DataSourceOptions } from "typeorm";
 
const configType: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'school',
    entities: [__dirname+'/**/*.entity{.js,.ts}'],
    synchronize: true,
  };

  export default configType;