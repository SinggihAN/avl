@extends('layouts.app')

@section('content')
<div class="container-fluid" id="sourcing">
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
            <button data-target="#add-sourcing-modal"                              
                @if (Auth::user())
                    data-toggle="modal" @click="showAddSourcingModal()" 
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
                <table id="tblsourcing" class="table pmd-table customers-table" v-cloak>
                    <thead>
                        <tr>
                          <th width="3%">No</th>
                          <th width="10%">Kategori</th>
                          <th width="3%">Priority</th>
                          <th width="3%">Type</th>
                          <th width="10%">Nama</th>
                          <th width="13%">Email</th>
                          <th width="9%">Country</th>
                          <th width="10%">Remarks</th>
                          <th width="10%">Telepon</th>
                          <th width="9%">Fax</th>
                          <th width="10%">PIC</th>
                          @if (Auth::user()->role == 'admin')
                          <th width="10%" class="text-center">Action</th>
                          @else
                          @endif
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(sourcing, index) in sourcings">
                            <td class="text-center">@{{ index + 1 + (pagination.current_page - 1) * 10 }}.</td>
                            <td data-title="Kategori">@{{ sourcing.kat }}</td>
                            <td data-title="Prio">@{{ sourcing.prio }}</td>
                            <td data-title="Type">@{{ sourcing.type }}</td>
                            <td data-title="Nama">@{{ sourcing.nama }}</td>
                            <td data-title="Email">@{{ sourcing.email }}</td>
                            <td data-title="Country">@{{ sourcing.country }}</td>
                            <td data-title="Remarks">@{{ sourcing.remarks }}</td>
                            <td data-title="Telepon">@{{ sourcing.telp }}</td>
                            <td data-title="Fax">@{{ sourcing.fax }}</td>
                            <td data-title="PIC">@{{ sourcing.pic }}</td>
                            @if (Auth::user()->role == 'admin')
                            <td>
                                <button class="edit-modal btn btn-sm btn-warning pmd-btn-raised" 
                                    @if (Auth::user()) 
                                        data-target="#edit-sourcing-modal" data-toggle="modal" data-toggle="tooltip" data-placement="top" data-backdrop="static" data-keyboard="false" title="Edit" @click="editSourcing(sourcing)"
                                    @else 
                                        data-toggle="popover" data-content="Please, login or register to make changes" data-placement="top"
                                    @endif >
                                    <span class="glyphicon glyphicon-edit"></span>
                                </button>
                                <button class="edit-modal btn btn-sm btn-danger pmd-btn-raised" 
                                    @if (Auth::user())
                                        data-toggle="tooltip" data-placement="top" title="Delete" @click="deleteSourcing(sourcing.id)"
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
        </div>

    </div>
    @include('modals.add-sourcing-modal')     
    @include('modals.edit-sourcing-modal')  

</div>
@endsection
