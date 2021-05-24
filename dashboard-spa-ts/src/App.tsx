import React from 'react';
import './App.scss';

import BasicLayout from "./layouts";
import Kanban from "./pages/Kanban";

function App() {
  return (
      <BasicLayout>
          <Kanban />
      </BasicLayout>
  );
}

export default App;