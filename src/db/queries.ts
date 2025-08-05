import type { NewTodo } from '@/types'
import { desc, eq } from 'drizzle-orm'
import { db } from '@/db'
import { todos } from './schema'

export const insertTodo = async (todo: NewTodo) => {
  const result = await db.insert(todos).values(todo)

  return result
}

export const getTodosByUserId = async (userId: string) => {
  const todoList = await db
    .select()
    .from(todos)
    .where(eq(todos.userId, userId))
    .orderBy(desc(todos.createdAt))

  return todoList
}
