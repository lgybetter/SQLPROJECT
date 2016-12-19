import mysql from 'mysql'
import config from '../config'
import Base from './base'
class User extends Base{
  constructor() {
    super()
    this.create = `CREATE TABLE Users(
      id       INT              NOT NULL auto_increment,
      name     VARCHAR (20)     NOT NULL unique,
      age      INT              NOT NULL,
      created  timestamp        NOT NULL default current_timestamp,
      address  CHAR (25)        NOT NULL,
      PRIMARY  KEY (id)
    );`
    this.insert = 'INSERT INTO Users (name, age, address) VALUES (?, ?, ?)'
    this.update = 'UPDATE Users SET address=?, where id=?'
    this.delete = 'DELETE FROM Users where id=?'
    this.queryAll = 'SELECT * from Users'
    this.queryById = 'SELECT * from Users where id=?'
  }
  async createTable() {
    try {
      return await this.queryDB(await this.createConnection, this.create, null)
    } catch (error) {
      console.log(error)
    }
  }
  async insertUser(name, age, address) {
    try {
      return await this.queryDB(await this.createConnection, this.insert, [name, age, address])
    } catch (error) {
      console.log(error)
    }
  }
  async deleteUser(id) {
    try {
      return await this.queryDB(await this.createConnection, this.delete, id)
    } catch (error) {
      console.log(error)
    }
  }
  async updateUser(address) {
    try {
      return await this.queryDB(await this.createConnection, this.update, address)
    } catch (error) {
      console.log(error)
    }
  }
  async queryAllUsers() {
    try {
      return await this.queryDB(await this.createConnection, this.queryAll, null)
    } catch (error) {
      console.log(error)
    }
  }
  async queryUserById(id) {
    try {
      return await this.queryDB(await this.createConnection, this.queryById, id)
    } catch (error) {
      console.log(error)
    }
  }
}
export default User