import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/taskActions';

const initialState = {
  tasksByDay: {} // Structure : { "2024-11-05": [{ id, text }, ...] }
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { day, task } = action.payload;

      // Si le jour n'existe pas encore dans tasksByDay, créez un nouveau tableau pour ce jour
      const tasksForDay = state.tasksByDay[day] || [];

      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: [...tasksForDay, task] // Ajoute la tâche au tableau de tâches du jour
        }
      };
    }

    case EDIT_TASK: {
      const { day, taskId, updatedTask } = action.payload;

      // Met à jour la tâche spécifique pour le jour donné
      const tasksForDay = state.tasksByDay[day] || [];
      const updatedTasks = tasksForDay.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      );

      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: updatedTasks
        }
      };
    }

    case DELETE_TASK: {
      const { day, taskId } = action.payload;

      // Supprime la tâche du jour donné
      const tasksForDay = state.tasksByDay[day] || [];
      const updatedTasks = tasksForDay.filter((task) => task.id !== taskId);

      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: updatedTasks
        }
      };
    }

    default:
      return state;
  }
};

export default taskReducer;
