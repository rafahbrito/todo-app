import crypto from 'node:crypto'

export default class Task {
  readonly id: string
  readonly title: string
  readonly createdAt: Date
  constructor(id: string, title: string, createdAt: Date) {
    this.id = id
    this.title = title
    this.createdAt = createdAt
  }

  static create(title: string): Task {
    const taskId = crypto.randomUUID()
    return new Task(taskId, title, new Date())
  }
}
