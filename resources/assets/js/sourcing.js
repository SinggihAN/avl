require('./bootstrap');
require('./jquery.dataTables.js');
require('./responsive.bootstrap.js');
window.moment = require('moment');

window.Vue = require('vue');
const sourcing = new Vue({
    el: '#sourcing',

    data: {
        sourcings : [],
        newSourcing : { 'kat':'', 'prio':'', 'type':'' , 'nama':'', 'email':'', 'country':'', 'remarks':'', 'telp':'', 'fax':'', 'pic':'' },
        fillSourcing : { 'kat':'', 'prio':'', 'type':'', 'nama':'', 'email':'', 'country':'', 'remarks':'', 'telp':'', 'fax':'', 'pic':'' },
        
        pagination: {
            total: 0,
            per_page: 10,
            from: 1,
            to: 0,
            current_page: 1,
        },
        offset: 4,
        formErrors: {},
        formErrorsUpdate: {},
    },

    computed: {
        isActived: function() {
            return this.pagination.current_page;
        },

        pagesNumber: function() {
            if (!this.pagination.to) {
                return [];
            }
            var from = this.pagination.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }
            var to = from + (this.offset * 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }
            var pagesArray = [];
            while (from <= to) {
                pagesArray.push(from);
                from++;
            }
            return pagesArray;
        }
    },

    mounted() {
        this.$nextTick(function() {
          this.getVueSourcings().then((response) => {
            // do what you need to do
          }).then(() => {
                $('#tblsourcing').DataTable({
                    "scrollX": true,
                    order: [ 0, 'asc' ],
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
                
                $(".data-table-responsive").html('<h2 class="pmd-card-title-text">Data Sourcing</h2>');
                $(".custom-select-action").html('<button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">delete</i></button><button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">more_vert</i></button>');
          })
        })
    },

    methods: {
        showAddSourcingModal: function() {
            this.newSourcing.kat = '';
            this.newSourcing.prio = '';
            this.newSourcing.type = '';
            this.newSourcing.nama = '';
            this.newSourcing.email = '';
            this.newSourcing.country = '';
            this.newSourcing.remarks = '';
            this.newSourcing.telp = '';
            this.newSourcing.fax = '';
            this.newSourcing.pic = '';
            this.formErrors = '';
        },      

        getVueSourcings: function(page) {
            var that = this;
            return axios.get('api/sourcings?page='+page).then(function (response) {
                that.sourcings = response.data.data.data;
                that.pagination = response.data.pagination;

                that.$nextTick(function() {
                    $('[data-toggle="popover"]').popover();
                })
            });
        },

        createSourcing: function() {                 
            var input = this.newSourcing;
            var that = this;
            axios.post('api/sourcings', input).then(function (response) {
                that.getVueSourcings();
                toastr.options = {
                  "timeOut": "2000",
                },
                toastr.success('Sourcing Added Successfully');
                $(that.$refs.add_sourcing_modal).on("hidden.bs.modal", that.hideAddSourcingModal());
            })
            .catch(function (error) {
                that.formErrors = error.response.data;
                toastr.options = {
                  "timeOut": "2000",
                },
                toastr.error('Oops! Fill in the required fields!');
            });
        },

        hideAddSourcingModal: function() {
            $(this.$refs.add_sourcing_modal).modal('hide');
        },

        editSourcing: function(sourcing) {
            this.fillSourcing = sourcing;
            this.formErrors = '';
        },

        updateSourcing: function() {
            var input = this.fillSourcing;
            var id = this.fillSourcing.id;
            var that = this;
            axios.patch('api/sourcing/' + id, input).then(function (response) {
                that.getVueSourcings();
                toastr.options = {
                  "timeOut": "2000",
                },
                toastr.success('Sourcing Updated Successfully');
                $(that.$refs.add_sourcing_modal).on("hidden.bs.modal", that.hideEditSourcingModal());
            })
            .catch(function (error) {
                that.formErrors = error.response.data;
                toastr.options = {
                  "timeOut": "2000",
                },
                toastr.error('Oops! Fill in the required fields!');
            });
        },

        hideEditSourcingModal: function() {
            $(this.$refs.edit_sourcing_modal).modal('hide');
        },

        deleteSourcing: function(id) {
            this.sourcings = this.sourcings.filter(function (item) {
                return item.id != id;
            });
            var that = this;
            axios.delete('api/sourcing/' + id).then(function (response) {
                that.getVueSourcings();
                toastr.options = {
                  "timeOut": "2000",
                },
                toastr.warning('Sourcing Deleted Successfully');
            });
        },


        changePage: function(page) {
            this.pagination.current_page = page;
            this.getVueSourcings(page);
        },

        moment: function (date) {
            return moment(date);
        },

        date: function (date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
        },

    },

    filters: {
        moment: function (date) {
            return moment(date).format('L');
        }
    },
    
});


