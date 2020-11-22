import React, { useState } from 'react';
import './App.css';
import EnhancedTable, { TableData } from './table/TableView';
import { flat } from './data/flat';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { nested } from './data/nested';
import { deep } from './data/deep';

// interface Props {
//   title: string
//   rows: TableData[]
//   handleMove: (path: string, toPath: string, position: number) => void
//   onDragEnd: (result: object) => void
// }

function App() {

  const [name, setName] = useState("Flat")
  const [rows, setRows] = useState<TableData[]>(flat)

  const handleMove = (path: string, toPath: string, position: number) => {
    console.log("Task moved", { path, toPath, position })
  }

  const onDragEnd = (result: any) => {
    try {
      const items = Array.from(rows);
      const prevIndex = result.draggableId;
      const prevValue = items[prevIndex];
      let prevPath = prevValue.path;
      let toPath = '';
      items.splice(prevIndex, 1);
      items.splice(result.destination.index, 0, prevValue);
      if (name === 'Flat') {
        toPath = '/cl';
      }
      else if (name === 'Nested') {
        if (items[result.destination.index - 1]) {
          toPath = items[result.destination.index - 1].path;
          items[result.destination.index].path = toPath;
        }
      }
      else if (name === 'Deep') {
        if (items[result.destination.index - 1]) {
          toPath = items[result.destination.index - 1].path;
          items[result.destination.index].path = toPath;
        }
      }
      handleMove(prevPath, toPath, result.destination.index);
      setRows([...items])
    } catch (error) {
      // console.log(error)
    }
  }

  return (
    <div className="App">
      <Paper>
        <Button onClick={() => {
          setName("Flat")
          setRows(flat)
        }}
          variant="outlined" color="primary">
          Flat
        </Button>
        <Button onClick={() => {
          setName("Nested")
          setRows(nested)
        }}
          variant="outlined" color="primary">
          Nested
        </Button>
        <Button onClick={() => {
          setName("Deep")
          setRows(deep)
        }}
          variant="outlined" color="primary">
          Deep
        </Button>
      </Paper>
      <EnhancedTable title={name} rows={rows} handleMove={handleMove} onDragEnd={onDragEnd} />
    </div>
  );
}

export default App;
