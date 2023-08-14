import React, { useState, useEffect } from 'react';
import FormulaParser from 'formula-parser';

const ExcelClone = () => {
  const [rowCount, setRowCount] = useState(3);
  const [colCount, setColCount] = useState(3);
  const [data, setData] = useState(generateInitialData(rowCount, colCount));
  const [previousData, setPreviousData] = useState(data);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCol, setSelectedCol] = useState(null);
  const [formula, setFormula] = useState('');

  const formulaParser = new FormulaParser();

  function generateInitialData(rows, cols) {
    const initialData = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push('');
      }
      initialData.push(row);
    }

    return initialData;
  }

  useEffect(() => {
    setPreviousData(data);
  }, [data]);

  const handleCellChange = (event, rowIndex, colIndex) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = event.target.value;
    setData(newData);
  };

  const handleRowCountChange = (event) => {
    const newRowCount = parseInt(event.target.value, 10);
    setRowCount(newRowCount);
    const newData = [...data];

    while (newData.length < newRowCount) {
      const newRow = Array(colCount).fill('');
      newData.push(newRow);
    }

    while (newData.length > newRowCount) {
      newData.pop();
    }

    setData(newData);
    setPreviousData(newData);
  };

  const handleColCountChange = (event) => {
    const newColCount = parseInt(event.target.value, 10);
    setColCount(newColCount);
    const newData = data.map((row) => {
      const newRow = [...row];
      while (newRow.length < newColCount) {
        newRow.push('');
      }
      while (newRow.length > newColCount) {
        newRow.pop();
      }
      return newRow;
    });
    setData(newData);
    setPreviousData(newData);
  };

  const handleFormulaChange = (event) => {
    setFormula(event.target.value);
  };

  const applyFormula = () => {
    if (selectedCol !== null && formula !== '') {
      const newData = [...data];

      for (let i = 0; i < newData.length; i++) {
        try {
          const expression = formula.replace(/Row/g, `${i + 1}`);
          const value = formulaParser.parse(expression).evaluate();
          newData[i][selectedCol] = value.toString();
        } catch (error) {
          newData[i][selectedCol] = '#ERROR';
        }
      }

      setData(newData);
    }
  };

  const handleRowSelection = (rowIndex) => {
    setSelectedRow(rowIndex);
    setSelectedCol(null);
  };

  const handleColumnSelection = (colIndex) => {
    setSelectedCol(colIndex);
    setSelectedRow(null);
  };

  const handleUndo = () => {
    setData(previousData);
  };

  return (
    <div className="p-4 bg-gray-900 text-white">
    <div className="flex flex-wrap items-center mb-4">
      <div className="mr-4 mb-2">
        <label htmlFor="rowCount" className="mr-2">
          Row Count:
        </label>
        <input
          id="rowCount"
          type="number"
          min="1"
          value={rowCount}
          onChange={handleRowCountChange}
          className="bg-gray-800 text-white px-2 py-1 rounded focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="colCount" className="mr-2">
          Column Count:
        </label>
        <input
          id="colCount"
          type="number"
          min="1"
          value={colCount}
          onChange={handleColCountChange}
          className="bg-gray-800 text-white px-2 py-1 rounded focus:outline-none"
        />
      </div>
    </div>
    <div className="mb-4">
      <label htmlFor="selectedRow" className="mr-2">
        Selected Row:
      </label>
      <input
        id="selectedRow"
        type="number"
        min="0"
        max={rowCount - 1}
        value={selectedRow !== null ? selectedRow : ''}
        onChange={(event) => handleRowSelection(parseInt(event.target.value, 10))}
        className="bg-gray-800 text-white px-2 py-1 rounded focus:outline-none"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="selectedCol" className="mr-2">
        Selected Column:
      </label>
      <input
        id="selectedCol"
        type="number"
        min="0"
        max={colCount - 1}
        value={selectedCol !== null ? selectedCol : ''}
        onChange={(event) => handleColumnSelection(parseInt(event.target.value, 10))}
        className="bg-gray-800 text-white px-2 py-1 rounded focus:outline-none"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="formula" className="mr-2">
        Formula:
      </label>
      <input
        id="formula"
        type="text"
        value={formula}
        onChange={handleFormulaChange}
        className="bg-gray-800 text-white px-2 py-1 rounded focus:outline-none"
      />
      <button
        onClick={applyFormula}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        Apply Formula
      </button>
      <button
        onClick={handleUndo}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        Undo
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="border-collapse border border-gray-700">
        <thead>
          <tr>
            <th className="px-4 py-2"></th>
            {[...Array(colCount)].map((_, colIndex) => (
              <th
                key={colIndex}
                className={`px-4 py-2 ${
                  colIndex === selectedCol ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'
                }`}
                onClick={() => handleColumnSelection(colIndex)}
              >
                {String.fromCharCode(65 + colIndex)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex === selectedRow ? 'bg-blue-500' : ''}
              onClick={() => handleRowSelection(rowIndex)}
            >
              <td className="px-4 py-2 bg-gray-800 text-white">{rowIndex + 1}</td>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="px-4 py-2 border border-gray-700">
                  <input
                    type="text"
                    className="w-full bg-gray-800 text-white px-2 py-1 rounded focus:outline-none"
                    value={cell}
                    onChange={(event) => handleCellChange(event, rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default ExcelClone;
