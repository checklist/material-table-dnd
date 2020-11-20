import React, { useState } from 'react';
import './App.css';
import EnhancedTable, { TableData } from './table/TableView';
import { flat } from './data/flat';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { nested } from './data/nested';
import { deep } from './data/deep';

function App() {

  const [name, setName] = useState("Deep")
  const [rows, setRows] = useState<TableData[]>(deep)

  const handleMove = (path: string, toPath: string, position: number) => {
    console.log("Task moved", { path, toPath, position })
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
      <EnhancedTable title={name} rows={rows} handleMove={handleMove} />
    </div>
  );
}

export default App;
