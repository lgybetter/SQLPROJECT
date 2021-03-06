import mysql from 'mysql'
import config from '../config'
import Base from './base'

class OrderDetail extends Base {
  constructor() {
    super()
    this.create = `CREATE TABLE IF NOT EXISTS OrderDetails(
      bookId   INT              NOT NULL,
      orderId  INT              NOT NULL,
      num      INT              NOT NULL,
      count    FLOAT            NOT NULL,
      PRIMARY  KEY (bookId, orderId),
      foreign  KEY (orderId)    references orders(id)  on delete cascade  on update cascade,
      foreign  KEY (bookId)     references books(id)   on delete cascade  on update cascade
    )`
    this.insert = `INSERT INTO OrderDetails(
      bookId,
      orderId,
      num,
      count
    ) VALUES(?, ?, ?, ?)`
    this.update = `UPDATE OrderDetails SET 
                    num=?,
                    count=?
                    where orderId=? and bookId=?
                  `
    this.delete = 'DELETE FROM OrderDetails where bookId=? and orderId=?'
    this.queryById = 'SELETE * FROM OrderDetails where bookId=? and orderId=?'
    this.queryAll = 'SELETE * FROM OrderDetails'
  }
  async createTable() {
    try {
      return await this.queryDB(await this.createConnection(), this.create, null)
    } catch (error) {
      throw error
    }
  }
  async insertOrderDetail(bookId, orderId, num, count) {
    try {
      return await this.queryDB(await this.createConnection(), this.insert, [bookId, orderId, num, count])
    } catch (error) {
      throw error
    }
  }
  async updateOrderDetail(num, count, orderId, bookId) {
    try {
      return await tihs.queryDB(await this.createConnection(), tihs.update, [num, count, orderId, bookId])
    } catch (error) {
      throw error
    }
  }
  async deleteOrderDetail(orderId, bookId) {
    try {
      return await this.queryDB(await this.createConnection(), this.delete, [orderId, bookId])
    } catch (error) {
      throw error
    }
  }
  async queryOrderDetailById(orderId, bookId) {
    try {
      return await this.queryDB(await this.createConnection(), this.queryById, [orderId, bookId])
    } catch (error) {
      throw error
    }
  }
  async queryAllOrderDetails() {
    try {
      return await this.queryDB(await this.createConnection(), this.queryAll, null)
    } catch (error) {
      throw error
    }
  }
}

export default OrderDetail