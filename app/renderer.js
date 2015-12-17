import $ from 'jquery';

export class Renderer {
	renderGrid(headers, labels, data, title) {
		var table = document.createElement('table');
		var caption = document.createElement('caption');
		caption.appendChild(document.createTextNode(title));
		table.appendChild(caption);
		table.className = 'table table-condensed';
		var tableHeader = document.createElement('thead');
		var tableHeaderRow = document.createElement('tr');
		tableHeader.appendChild(tableHeaderRow);
		tableHeaderRow.appendChild(document.createElement('th')); // empty cell to offset row labels
		table.appendChild(tableHeader);
		headers.forEach(header => {
			var headerCell = document.createElement('th');
			var headerText = document.createTextNode(header);
			headerCell.appendChild(headerText);
			tableHeaderRow.appendChild(headerCell);
		});
		var tableBody = document.createElement('tbody');
		table.appendChild(tableBody);
		for (var row = 0; row < data.length; row++) {
			var tableRow = document.createElement('tr');
			var rowData = data[row];
			var rowLabel = document.createElement('td');
			var labelTxt = document.createTextNode(labels[row]);
			rowLabel.appendChild(labelTxt);
			rowLabel.className = 'tableHeader';
			tableRow.appendChild(rowLabel);
			rowData.forEach(rd => {
				var td = document.createElement('td');
				var tdtxt = document.createTextNode(rd);
				td.appendChild(tdtxt);
				tableRow.appendChild(td);
			});
			tableBody.appendChild(tableRow);
		}
		return table;
	}
}