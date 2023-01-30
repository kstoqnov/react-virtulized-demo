import { useState } from "react";
import { dataTable } from "../data";

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const limit = 20;
  const rowHeight = 36;
  const startNode = Math.floor(scrollTop / rowHeight);

  const visibleRows = dataTable.slice(startNode, startNode + limit);
  const startRowHide = scrollTop + rowHeight;
  const endRowHide = dataTable.length * rowHeight - startRowHide;

  return (
    <div className="App">
      <h1> H1 title </h1>
      <h2>H2 title </h2>

      <h3>You've scrolled {scrollTop} px</h3>

      <div
        onScroll={(e) => {
          setScrollTop(e.currentTarget.scrollTop);
        }}
        style={{ height: 500, overflow: "auto" }}
      >
        <table style={{ borderCollapse: "collapse" }}>
          <thead>This is table head </thead>
          <tbody>
            <tr style={{ height: startRowHide }}></tr>
            {visibleRows.map((row, index) => {
              return (
                <tr style={{ height: rowHeight }} key={index}>
                  {row.map((col, index) => {
                    return (
                      <td
                        key={index}
                        style={{ padding: 8, border: "1px solid #ccc" }}
                      >
                        {col}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            <tr style={{ height: endRowHide }}></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
