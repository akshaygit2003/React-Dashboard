import React, { useState } from "react";
import { TbDragDrop } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  deleteTask,
  toggleTaskStatus,
  reorderTasks,
  editTask,
} from "../features/tasks/taskSlice";
import ConfirmationModal from "./ConfirmationModal";

import EditTaskModal from "./EditTaskModal"; // Import the EditTaskModal

const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    if (filter === "overdue") return new Date(task.dueDate) < new Date();
    return true;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleDeleteClick = (taskId) => {
    setTaskToDelete(taskId);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (taskToDelete !== null) {
      dispatch(deleteTask(taskToDelete));
      setTaskToDelete(null);
      setIsModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setTaskToDelete(null);
    setIsModalOpen(false);
  };

  const handleToggleStatus = (taskId) => {
    dispatch(toggleTaskStatus(taskId));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    dispatch(
      reorderTasks({
        sourceIndex: result.source.index,
        destinationIndex: result.destination.index,
      })
    );
  };

  const openEditModal = (task) => {
    setTaskToEdit(task);
    setIsEditModalOpen(true);
  };

  const saveEdit = (updatedTask) => {
    dispatch(editTask({ id: taskToEdit.id, updatedTask }));
    setTaskToEdit(null);
    setIsEditModalOpen(false);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {filteredTasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`p-4 rounded shadow ${
                        task.completed
                          ? "bg-green-600 hover:bg-green-500"
                          : "bg-gradient-to-r from-pink-500 to-indigo-500 ..."
                      }`}
                    >
                      <h3 className="text-white">{task.title}</h3>
                      <p className="text-gray-200">{task.description}</p>
                      <p className="text-gray-300">Due: {task.dueDate}</p>
                      <div className="flex gap-5 mt-2 ">
                        <button
                          onClick={() => handleToggleStatus(task.id)}
                          className="px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded border-b-2"
                        >
                          {task.completed
                            ? "Mark as Incomplete"
                            : "Mark as Complete"}
                        </button>
                        <button
                          onClick={() => openEditModal(task)} // Open edit modal
                          className="px-2 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded border-b-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(task.id)}
                          className="px-2 py-1 bg-red-600 hover:bg-red-500 text-white rounded border-b-2"
                        >
                          Delete
                        </button>
                        <TbDragDrop size={"30px"} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />
      <EditTaskModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        task={taskToEdit}
        onSave={saveEdit}
      />
    </>
  );
};

export default TaskList;
