// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Calendar from './components/DatePicker';
// import TaskList from './components/TaskList';
// import AddTask from './components/AddTask';

// const App = () => {
//   const [selectedDay, setSelectedDay] = useState(null);
//   const formattedDay = selectedDay ? selectedDay.toISOString().split('T')[0] : '';

//   return (
//     <div>
//       <h1>Daily Planner</h1>
//       <Calendar selectedDay={selectedDay} onDateChange={setSelectedDay} />
//       {formattedDay && (
//         <>
//           <AddTask day={formattedDay} />
//           <TaskList day={formattedDay} />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Calendar from './components/DatePicker';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const formattedDay = selectedDay ? selectedDay.toISOString().split('T')[0] : '';

  return (
    <div>
      <h1>Daily Planner</h1>
      <Calendar selectedDay={selectedDay} onDateChange={setSelectedDay} />
      {formattedDay && (
        <>
          <AddTask day={formattedDay} />
          <TaskList selectedDay={formattedDay} />
        </>
      )}
    </div>
  );
};

export default App;

