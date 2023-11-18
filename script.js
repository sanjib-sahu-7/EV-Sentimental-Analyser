$(document).ready(function () {
    // Enable DataTables for the table with id 'locationTable'
    $('#locationTable').DataTable();

    // You can customize DataTables options as needed
    // For example, to change the page length to 5:
    $('#locationTable').DataTable({
        "pageLength": 5
    });
});
