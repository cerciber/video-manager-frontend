import React from 'react';
import './Table.css';

function Table({ headers, data, onClickRow }) {
  return (
    <div className="table">
      <div className="table__header">
        {headers.map((header, index) => (
          <div
            key={index}
            className={`table__header-cell ${header.center ? 'centered' : ''}`}
            style={{ flexGrow: header.flexGrow }} 
          >
            {header.component}
          </div>
        ))}
      </div>
      <div>
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="table__row" onClick={() => onClickRow && onClickRow(rowIndex)}>
            {headers.map((header, headerIndex) => (
              <div
                key={headerIndex}
                className={`table__cell ${header.center ? 'centered' : ''}`}
                style={{ flexGrow: header.flexGrow }} 
              >
                {row[header.field]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;