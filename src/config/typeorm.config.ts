import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig:TypeOrmModuleOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'pw12345678',
    database: 'sellernest',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize : true,
    autoLoadEntities: true
};