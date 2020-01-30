$(document).ready(function () {
    var availableDateTable = $('#availableDateTable').DataTable({
        "processing": true, // for show progress bar
        "serverSide": true, // for process server side
        "filter": true, // this is for disable filter (search box)
        "orderMulti": false, // for disable multiple column at once
        "ordering": false,
        "ajax": "dates.txt",

        "columns": [
            {
                "data": "fromDate",
                "class": "text-center pt-3 availableDate",
            },
            {
                "data": "toDate",
                "class": "text-center pt-3 availableDate",
            },
            {
                "data": null,
                "className": 'details-control',
                "orderable": false,
                "defaultContent": ''
            },
            {
                "autoWidth": true,
                render: function (row) {
                    return `
                        <ul class="m-0 p-0 d-flex justify-content-center">
                            <li class=" list-group mr-2">
                                <a onclick="editDate(this)" class='edit-date-btn btn text-primary btn-sm'><i class='fa fa-edit'></i></a>
                            </li>
                            <li class="list-group">
                                <a onclick="deleteDate(this)" class="delete-date-btn btn text-danger btn-sm"><i class="fa fa-trash"></i></a>
                            </li>
                            <li class="list-group">
                                <a onclick="saveDate(this)" class="save-date-btn btn text-success btn-sm"><i class="fas fa-check"></i></a>
                            </li>
                        </ul>`;
                }
            }
        ],
        "order": [
            [1, 'asc']
        ],
        language: {
            paginate: {
                next: `<i style="color: #007BFF;" class="fas fa-arrow-right"></i>`,
                previous: `<i style="color: #007BFF;" class="fas fa-arrow-left"></i>`,
            }
        }
    });

//#region row Details
var detailRows = [];


$('#availableDateTable tbody').on('click',
    'tr td.details-control',
    function () {

        var tr = $(this).closest('tr');
        var row = availableDateTable.row(tr);
        var idx = $.inArray(tr.attr('id'), detailRows);

        if (row.child.isShown()) {
            tr.removeClass('details');
            row.child.hide();
            tr.removeClass('shown');
            // Remove from the 'open' array
            detailRows.splice(idx, 1);
        } else {
            tr.addClass('shown');
            tr.addClass('details');
            row.child(format3(row.data())).show();

            // Add to the 'open' array
            if (idx === -1) {
                detailRows.push(tr.attr('id'));
            }
        }
});

$('#btn-show-all-children').on('click',
    function () {
        // Enumerate all rows
        routeTable.rows().every(function () {
            // If row has details collapsed
            if (!this.child.isShown()) {
                // Open this row
                this.child(format3(this.data())).show();
                $(this.node()).addClass('shown');
            }
        });
});

$('#btn-hide-all-children').on('click',
    function () {
        // Enumerate all rows
        routeTable.rows().every(function () {
            // If row has details expanded
            if (this.child.isShown()) {
                // Collapse row details
                this.child.hide();
                $(this.node()).removeClass('shown');
            }
        });
});

availableDateTable.on('draw',
    function () {
        $.each(detailRows,
            function (i, id) {
                $('#' + id + ' td.details-control').trigger('click');
            });
});
//#endregion
});

function format3(row) {
    var card = `<div>
                    <h4 class="header-title text-center header-title p-2">Available Date Info</h4>`,
        cardEnd = `</div>`,
        dateInfoTextarea = `<textarea disabled class='dateInfoTextarea' rows='2' style="width: 100%; background-color: #F2F2F2;" >`,
        dateInfoTextareaEnd = `</textarea>`;

    dateInfoTextarea+=`${row.dateInfo}`;
    dateInfoTextarea += dateInfoTextareaEnd;
    card += dateInfoTextarea;
    card += cardEnd;
    return card;
}
