'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
    }
  }
  Task.init({
    date: DataTypes.DATE,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'tasks',
    modelName: 'Task',
    timestamp: false
  });
  return Task;
};