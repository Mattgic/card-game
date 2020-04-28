import React from 'react';
import Backend from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd';
import './App.css';
import Board from './components/board/board';

function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <Board />
      </DndProvider>
    </div>
  );
}

export default App;
