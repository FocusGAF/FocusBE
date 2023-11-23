const Task = require("../models/taskSchema");
const Board = require("../models/boardSchema");
const Project = require("../models/projectSchema");

const taskPreRemove = async (next) => {
  try {
    console.log(`Task "${this.name}" removed`);
    next();
  } catch (error) {
    next(error);
  }
};

const boardPreRemove = async (next) => {
  try {
    for (const taskId of this.tasks) {
      await Task.findByIdAndRemove(taskId);
    }

    console.log(`Board "${this.name}" removed`);
    next();
  } catch (error) {
    next(error);
  }
};

const projectPreRemove = async (next) => {
  try {
    for (const boardId of this.springs) {
      await Board.findByIdAndRemove(boardId);
    }
    console.log(`Project "${this.name}" removed`);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { taskPreRemove, boardPreRemove, projectPreRemove };
