<!-- Begin Edit Sourcing Modal -->
<div tabindex="-1" class="modal fade" id="edit-sourcing-modal" ref="edit_sourcing_modal" style="display: none;" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header pmd-modal-bordered">
                <a href="{{ url('/sourcing') }}" aria-hidden="true" class="close" onclick="return confirm('Are you sure you want to discard?');">x</a>
                <h2 class="pmd-card-title-text">Edit Sourcing</h2>
            </div>
            <div class="modal-body">
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillSourcing.kat }">
                    <label for="kat">Kategori</label>
                    <input type="text" class="mat-input form-control" name="kat" v-model="fillSourcing.kat">
                    <span v-if="formErrors['kat']" class="error text-danger">
                        @{{ formErrors['kat'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillSourcing.prio }">
                    <label for="prio">Priority</label>
                    <input type="text" class="mat-input form-control" name="prio" v-model="fillSourcing.prio">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillSourcing.type }">
                    <label for="type">Type</label>
                    <input type="text" class="mat-input form-control" name="type" v-model="fillSourcing.type">
                    <span v-if="formErrors['type']" class="error text-danger">
                        @{{ formErrors['type'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillSourcing.nama }">
                    <label for="nama">Nama</label>
                    <input type="text" class="mat-input form-control" name="nama" v-model="fillSourcing.nama">
                    <span v-if="formErrors['nama']" class="error text-danger">
                        @{{ formErrors['nama'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillSourcing.email }">
                    <label for="email">Email</label>
                    <input type="email" class="mat-input form-control" name="email" v-model="fillSourcing.email">
                    <span v-if="formErrors['email']" class="error text-danger">
                        @{{ formErrors['email'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillSourcing.country }">
                    <label for="country">Country</label>
                    <input type="text" class="mat-input form-control" name="country" v-model="fillSourcing.country">
                    <span v-if="formErrors['country']" class="error text-danger">
                        @{{ formErrors['country'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillSourcing.remarks }">
                    <label for="remarks">Remarks</label>
                    <input type="text" class="mat-input form-control" name="remarks" v-model="fillSourcing.remarks">
                    <span v-if="formErrors['remarks']" class="error text-danger">
                        @{{ formErrors['remarks'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillSourcing.telp }">
                    <label for="telp">Telepon</label>
                    <input type="text" class="mat-input form-control" name="telp" v-model="fillSourcing.telp">
                    <span v-if="formErrors['telp']" class="error text-danger">
                        @{{ formErrors['telp'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillSourcing.fax }">
                    <label for="fax">Fax</label>
                    <input type="text" class="mat-input form-control" name="fax" v-model="fillSourcing.fax">
                    <span v-if="formErrors['fax']" class="error text-danger">
                        @{{ formErrors['fax'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillSourcing.pic }">
                    <label for="pic">PIC</label>
                    <input type="text" class="mat-input form-control" name="pic" v-model="fillSourcing.pic">
                    <span v-if="formErrors['pic']" class="error text-danger">
                        @{{ formErrors['pic'][0] }}
                    </span>
                </div>
                <div class="pmd-modal-action">
                    <button class="btn pmd-btn-raised btn-primary" type="button" @click="updateSourcing()">Save changes</button>
                    <a href="{{ url('/sourcing') }}" class="btn btn-default" onclick="return confirm('Are you sure you want to discard?');">Discard</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Edit Sourcing Modal End -->