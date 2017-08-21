@extends('layouts.app')

@section('content')
<div class="container-fluid" id="ntrade">
    <!-- Title -->
    <h1 class="section-title" id="services">
        <span>&nbsp;</span>
    </h1><!-- End Title -->
    
    <div class="col-md-12">  
        @if (Auth::user()->role == 'admin')
        <div class="row">
            <div class="pull-left">
                <h2>&nbsp;</h2> 
            </div>
            <div class="pull-right"> 
            <button data-target="#add-ntrade-modal"                              
                @if (Auth::user())
                    data-toggle="modal" @click="showAddNTradeModal()" 
                @else 
                    data-toggle="popover" data-content="Please, login or register to make changes"
                @endif  class="btn pmd-btn-raised btn-primary" type="button" >
                <span class="glyphicon glyphicon-plus"></span> &nbsp;Add Data
            </button></div>  
        </div>
        @else
        @endif
        <div class="row">
            <div class="pmd-table-card pmd-card pmd-z-depth table-hover">
                <table id="tblntrade" class="table pmd-table customers-table" v-cloak>
                    <thead>
                        <tr>
                          <th width="3%">No</th>
                          <th width="9%">Kategori</th>
                          <th width="6%">Type</th>
                          <th width="8">Brand</th>
                          <th width="11%">Nama</th>
                          <th width="12%">Alamat</th>
                          <th width="7%">CP</th>
                          <th width="9%">Email</th>
                          <th width="9%">Telepon</th>
                          <th width="8%">Fax</th>
                          <th width="9%">Product</th>
                          @if (Auth::user()->role == 'admin')
                          <th width="9%" class="text-center">Action</th>
                          @else
                          @endif
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(ntrade, index) in ntrades">
                            <td class="text-center">@{{ index + 1 + (pagination.current_page - 1) * 10 }}.</td>
                            <td data-title="Kategori">@{{ ntrade.kat }}</td>
                            <td data-title="Type">@{{ ntrade.type }}</td>
                            <td data-title="Brand">@{{ ntrade.brand }}</td>
                            <td data-title="Nama">@{{ ntrade.nama }}</td>
                            <td data-title="Alamat">@{{ ntrade.alamat }}</td>
                            <td data-title="CP">@{{ ntrade.cp }}</td>
                            <td data-title="Email">@{{ ntrade.email }}</td>
                            <td data-title="Telepon">@{{ ntrade.telp }}</td>
                            <td data-title="Fax">@{{ ntrade.fax }}</td>
                            <td data-title="Product">@{{ ntrade.product }}</td>
                            @if (Auth::user()->role == 'admin')
                            <td>
                                <button class="edit-modal btn btn-sm btn-warning pmd-btn-raised" 
                                    @if (Auth::user()) 
                                        data-target="#edit-ntrade-modal" data-toggle="modal" data-toggle="tooltip" data-placement="top" data-backdrop="static" data-keyboard="false" title="Edit" @click="editNTrade(ntrade)"
                                    @else 
                                        data-toggle="popover" data-content="Please, login or register to make changes" data-placement="top"
                                    @endif >
                                    <span class="glyphicon glyphicon-edit"></span>
                                </button>
                                <button class="edit-modal btn btn-sm btn-danger pmd-btn-raised" 
                                    @if (Auth::user())
                                        data-toggle="tooltip" data-placement="top" title="Delete" @click="deleteNTrade(ntrade.id)"
                                    @else
                                        data-toggle="popover" data-content="Please, login or register to make changes" data-placement="top"
                                    @endif >
                                    <span class="glyphicon glyphicon-trash"></span>
                                </button>
                            </td>
                            @else
                            @endif
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

    </div>

    @include('modals.add-ntrade-modal')     
    @include('modals.edit-ntrade-modal')  

</div>
@endsection