import 'dotenv/config';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Client } from './entities/client.entity';
import { Contact } from './entities/contact.entity';
import { InitialMigration1682969513660 } from './migrations/1682969513660-InitialMigration';

const dataSourceConfig = (): DataSourceOptions => {
  return {
    type: "postgres",
    url: process.env.DB_URL,
    host: process.env.DB_HOST,
    port: parseInt(process.env.PORT),
    database: process.env.DB,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    synchronize: false,
    logging: true,
    entities: [Client,Contact],
    migrations: [InitialMigration1682969513660],
  };
};
export const AppDataSource = new DataSource(dataSourceConfig());