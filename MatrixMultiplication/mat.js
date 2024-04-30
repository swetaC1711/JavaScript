function addRow(matrixId) {
  var matrix = document.getElementById(matrixId);
  var rowCount = matrix.rows.length;
  var cellCount = matrix.rows[0].cells.length;

  var newRow = matrix.insertRow(rowCount);

  for (var i = 0; i < cellCount; i++) {
      var cell = newRow.insertCell(i);
      cell.innerHTML = "<input type='number' value='0'>";
  }
}

function addColumn(matrixId) {
  var matrix = document.getElementById(matrixId);
  var rowCount = matrix.rows.length;
  var cellCount = matrix.rows[0].cells.length;

  for (var i = 0; i < rowCount; i++) {
      var newRow = matrix.rows[i];
      var cell = newRow.insertCell(cellCount);
      cell.innerHTML = "<input type='number' value='0'>";
  }
}
function deleteRow(matrixId) {
  var matrix = document.getElementById(matrixId);
  var rowCount = matrix.rows.length;
  if (rowCount > 1) {
      matrix.deleteRow(rowCount - 1);
  }
}

function deleteColumn(matrixId) {
  var matrix = document.getElementById(matrixId);
  var rowCount = matrix.rows.length;
  var cellCount = matrix.rows[0].cells.length;
  if (cellCount > 1) {
      for (var i = 0; i < rowCount; i++) {
          matrix.rows[i].deleteCell(cellCount - 1);
      }
  }
}


function multiply() {
  var matrix1 = getMatrixValues("matrix1");
  var matrix2 = getMatrixValues("matrix2");
  var result = multiplyMatrices(matrix1, matrix2);
  displayResult(result);
}

function getMatrixValues(matrixId) {
  var matrix = document.getElementById(matrixId);
  var rowCount = matrix.rows.length;
  var cellCount = matrix.rows[0].cells.length;
  var values = [];

  for (var i = 0; i < rowCount; i++) {
      values[i] = [];
      for (var j = 0; j < cellCount; j++) {
          values[i][j] = parseInt(matrix.rows[i].cells[j].querySelector('input').value);
      }
  }
  return values;
}

function multiplyMatrices(matrix1, matrix2) {
  var result = [];
  for (var i = 0; i < matrix1.length; i++) {
      result[i] = [];
      for (var j = 0; j < matrix2[0].length; j++) {
          var sum = 0;
          for (var k = 0; k < matrix1[0].length; k++) {
              sum += matrix1[i][k] * matrix2[k][j];
          }
          result[i][j] = sum;
      }
  }
  return result;
}

function displayResult(result) {
  var resultContainer = document.getElementById("resultTable");
  resultContainer.innerHTML = ""; // Clear previous result

  // Create a new table element
  var table = document.createElement("table");
  table.classList.add("result-table");

  // Populate the table with result values
  for (var i = 0; i < result.length; i++) {
      var row = document.createElement("tr");
      for (var j = 0; j < result[i].length; j++) {
          var cell = document.createElement("td");
          cell.textContent = result[i][j];
          row.appendChild(cell);
      }
      table.appendChild(row);
  }

  // Append the table to the result container
  resultContainer.appendChild(table);
}
