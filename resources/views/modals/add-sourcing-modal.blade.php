<!-- Begin Add Sourcing Modal -->
<div tabindex="-1" class="modal fade" id="add-sourcing-modal" ref="add_sourcing_modal" style="display: none;" aria-hidden="true">
    <div class="modal-dialog" @keydown.enter="createSourcing()">
        <div class="modal-content">
            <div class="modal-header pmd-modal-bordered">
                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                <h2 class="pmd-card-title-text">Add Data Sourcing</h2>
            </div>
            <div class="modal-body">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="kat">Kategori</label>
                    <input type="text" class="mat-input form-control" name="kat" v-model="newSourcing.kat">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="prio">Priority</label>
                    <input type="text" class="mat-input form-control" name="prio" v-model="newSourcing.prio">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="type">Type</label>
                    <input type="text" class="mat-input form-control" name="type" v-model="newSourcing.type">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="nama">Nama</label>
                    <input type="text" class="mat-input form-control" name="nama" v-model="newSourcing.nama">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="email">Email</label>
                    <input type="email" class="mat-input form-control" name="email" v-model="newSourcing.email">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="country">Country</label>
                    <input type="text" class="mat-input form-control" name="country" v-model="newSourcing.country">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="remarks">Remarks</label>
                    <input type="text" class="mat-input form-control" name="remarks" v-model="newSourcing.remarks">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="telp">Telepon</label>
                    <input type="text" class="mat-input form-control" name="telp" v-model="newSourcing.telp">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="fax">Fax</label>
                    <input type="text" class="mat-input form-control" name="fax" v-model="newSourcing.fax">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="pic">PIC</label>
                    <input type="text" class="mat-input form-control" name="pic" v-model="newSourcing.pic">
                </div>
                <div class="pmd-modal-action">
                    <button class="btn pmd-btn-raised btn-primary" type="button" @click="createSourcing()">Submit</button>
                    <button data-dismiss="modal" class="btn btn-default" type="button">Discard</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Add Sourcing Modal End data-dismiss="modal"  -->
