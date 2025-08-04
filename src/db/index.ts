import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import * as schema from './schema'

const connection = await mysql.createConnection({
  uri: process.env.DATABASE_URL as string,
})

const db = drizzle({
  client: connection,
  schema,
  casing: 'snake_case',
})
