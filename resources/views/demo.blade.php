@extends('layouts.app')

@section('content')
<div class="container">
    <div class="col-md-12">     
        <button data-target="#add-customer-modal"                              
            @if (Auth::user())
                data-toggle="modal" @click="showAddCustomerModal()" 
            @else 
                data-toggle="popover" data-content="Please, login or register to make changes"
            @endif  class="btn pmd-btn-raised btn-primary" type="button" >
            <span class="glyphicon glyphicon-user"></span> &nbsp;Add Customer
        </button>
        <h2>Customers</h2> 
        <div class="pmd-table-card pmd-card pmd-z-depth">
            <table class="table pmd-table customers-table" v-cloak>
                <thead>
                    <tr>
                      <th width="3%">ID</th>
                      <th width="9%">Kategori</th>
                      <th width="8%">Type</th>
                      <th width="8">Brand</th>
                      <th width="9%">Nama</th>
                      <th width="11%">Alamat</th>
                      <th width="9%">CP</th>
                      <th width="9%">Email</th>
                      <th width="9%">Telepon</th>
                      <th width="9%">Fax</th>
                      <th width="9%">Product</th>
                      <th colspan="2" width="7%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(customer, index) in customers">
                        <td class="text-center">@{{ index + 1 + (pagination.current_page - 1) * 10 }}.</td>
                        <td>            
                            <a class="avatar-list-img">
                                <img :src="'/img/customers/' + customer.image" class="avatar-40">
                            </a>
                        </td>
                        <td data-title="Name">@{{ customer.first_name }} @{{ customer.last_name }}</td>
                        <td data-title="Email">@{{ customer.email }}</td>
                        <td data-title="Created" class="silver-text"><span v-if="customer.created_at">@{{ customer.created_at | moment }}</span></td>
                        <td>
                            <button class="edit-modal btn btn-sm btn-warning pmd-btn-raised" 
                                @if (Auth::user()) 
                                    data-target="#edit-customer-modal" data-toggle="modal" data-toggle="tooltip" data-placement="top" title="Edit" @click="editCustomer(customer)"
                                @else 
                                    data-toggle="popover" data-content="Please, login or register to make changes" data-placement="top"
                                @endif >
                                <span class="glyphicon glyphicon-edit"></span>
                            </button>
                            <button class="edit-modal btn btn-sm btn-danger pmd-btn-raised" 
                                @if (Auth::user())
                                    data-toggle="tooltip" data-placement="top" title="Delete" @click="deleteCustomer(customer.id)"
                                @else
                                    data-toggle="popover" data-content="Please, login or register to make changes" data-placement="top"
                                @endif >
                                <span class="glyphicon glyphicon-trash"></span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <nav v-if="pagination.last_page > 1"  v-cloak>
            <ul class="pagination">
                <li v-if="pagination.current_page > 1">
                    <a href="#" aria-label="Previous" @click="changePage(pagination.current_page - 1)">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li v-for="page in pagesNumber" v-bind:class="[ page == isActived ? 'active' : '' ]">
                    <a href="#" @click="changePage(page)">
                        @{{ page }}
                    </a>
                </li>
                <li v-if="pagination.current_page < pagination.last_page">
                    <a href="#" aria-label="Next" @click="changePage(pagination.current_page + 1)">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>

    </div>

    @include('modals.add-customer-modal')     
    @include('modals.edit-customer-modal')    

</div>

@endsection