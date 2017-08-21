require('./bootstrap');
require('./jquery.dataTables.js');
require('./responsive.bootstrap.js');
//Propeller  Customised Javascript code 
$(document).ready(function() {
	var exampleDatatable = $('#example').DataTable({
		responsive: {
			details: {
				type: 'column',
				target: 'tr'
			}
		},
		columnDefs: [ {
			className: 'control',
			orderable: false,
			targets:   1
		} ],
		order: [ 1, 'asc' ],
		bFilter: true,
		bLengthChange: true,
		pagingType: "simple",
		"paging": true,
		"searching": true,
		"language": {
			"info": " _START_ - _END_ of _TOTAL_ ",
			"sLengthMenu": "<span class='custom-select-title'>Rows per page:</span> <span class='custom-select'> _MENU_ </span>",
			"sSearch": "",
			"sSearchPlaceholder": "Search",
			"paginate": {
				"sNext": " ",
				"sPrevious": " "
			},
		},
		dom:
			"<'pmd-card-title'<'data-table-responsive pull-left'><'search-paper pmd-textfield'f>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'pmd-card-footer' <'pmd-datatable-pagination' l i p>>",
	});
	
	/// Select value
	$('.custom-select-info').hide();
	
	$(".data-table-responsive").html('<h2 class="pmd-card-title-text">Responsive Data table</h2>');
	$(".custom-select-action").html('<button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">delete</i></button><button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">more_vert</i></button>');
		
} );