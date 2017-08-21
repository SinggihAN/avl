require('./bootstrap');
require('./jquery.dataTables.js');
require('./responsive.bootstrap.js');
window.moment = require('moment');

window.Vue = require('vue');

const ntrade = new Vue({
    el: '#ntrade',

    data: {
        ntrades : [],
        newNTrade : { 'kat':'', 'type':'', 'brand':'' , 'nama':'', 'alamat':'', 'cp':'', 'email':'', 'telp':'', 'fax':'', 'product':'' },
        fillNTrade : { 'kat':'', 'type':'', 'brand':'', 'nama':'', 'alamat':'', 'cp':'', 'email':'', 'telp':'', 'fax':'', 'product':'' },
        
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
          this.getVueNTrades().then((response) => {
            // do what you need to do
          }).then(() => {
                $('#tblntrade').DataTable({
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
                
                $(".data-table-responsive").html('<h2 class="pmd-card-title-text">Data Non Trade</h2>');
                $(".custom-select-action").html('<button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">delete</i></button><button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">more_vert</i></button>');
          })
        })
    },

    methods: {
        showAddNTradeModal: function() {
            this.newNTrade.kat = '';
            this.newNTrade.type = '';
            this.newNTrade.brand = '';
            this.newNTrade.nama = '';
            this.newNTrade.alamat = '';
            this.newNTrade.cp = '';
            this.newNTrade.email = '';
            this.newNTrade.telp = '';
            this.newNTrade.fax = '';
            this.newNTrade.product = '';
            this.formErrors = '';
        },  

        getVueNTrades: function(page) {
            var that = this;
            return axios.get('api/ntrades?page='+page).then(function (response) {
                that.ntrades = response.data.data.data;
                that.pagination = response.data.pagination;

                that.$nextTick(function() {
                    $('[data-toggle="popover"]').popover();
                })
            });
        },

        createNTrade: function() {                 
            var input = this.newNTrade;
            var that = this;
            axios.post('api/ntrades', input).then(function (response) {
                that.getVueNTrades();
                toastr.options = {
                  "timeOut": "2000",
                },
                toastr.success('NTrade Added Successfully');
                $(that.$refs.add_ntrade_modal).on("hidden.bs.modal", that.hideAddNTradeModal());
            })
            .catch(function (error) {
                that.formErrors = error.response.data;
                toastr.options = {
                  "timeOut": "2000",
                },
                toastr.error('Oops! Fill in the required fields!');
            });
        },

        hideAddNTradeModal: function() {
            $(this.$refs.add_ntrade_modal).modal('hide');
        },

        editNTrade: function(ntrade) {
            this.fillNTrade = ntrade;
            this.formErrors = '';
        },

        updateNTrade: function() {
            var input = this.fillNTrade;
            var id = this.fillNTrade.id;
            var that = this;
            axios.patch('api/ntrade/' + id, input).then(function (response) {
                that.getVueNTrades();
                toastr.options = {
                  "timeOut": "2000",
                },
                toastr.success('NTrade Updated Successfully');
                $(that.$refs.add_ntrade_modal).on("hidden.bs.modal", that.hideEditNTradeModal());
            })
            .catch(function (error) {
                that.formErrors = error.response.data;
                toastr.options = {
                  "timeOut": "2000",
                },
                toastr.error('Oops! Fill in the required fields!');
            });
        },

        hideEditNTradeModal: function() {
            $(this.$refs.edit_ntrade_modal).modal('hide');
        },

        deleteNTrade: function(id) {
            this.ntrades = this.ntrades.filter(function (item) {
                return item.id != id;
            });
            var that = this;
            axios.delete('api/ntrade/' + id).then(function (response) {
                that.getVueNTrades();
                toastr.options = {
                  "timeOut": "2000",
                },
                toastr.warning('NTrade Deleted Successfully');
            });
        },

        changePage: function(page) {
            this.pagination.current_page = page;
            this.getVueNTrades(page);
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


