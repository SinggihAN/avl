<!-- Begin Add NTrade Modal -->
<div tabindex="-1" class="modal fade" id="add-ntrade-modal" ref="add_ntrade_modal" style="display: none;" aria-hidden="true">
    <div class="modal-dialog" @keydown.enter="createNTrade()">
        <div class="modal-content">
            <div class="modal-header pmd-modal-bordered">
                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                <h2 class="pmd-card-title-text">Add Data Non Trade</h2>
            </div>
            <div class="modal-body">
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="kat">Kategori</label>
                    <input type="text" class="mat-input form-control" name="kat" v-model="newNTrade.kat">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="type">Type</label>
                    <input type="text" class="mat-input form-control" name="type" v-model="newNTrade.type">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="brand">Brand</label>
                    <input type="text" class="mat-input form-control" name="brand" v-model="newNTrade.brand">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="nama">Nama</label>
                    <input type="text" class="mat-input form-control" name="nama" v-model="newNTrade.nama">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="alamat">Alamat</label>
                    <textarea class="mat-input form-control" name="alamat" v-model="newNTrade.alamat"></textarea>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="cp">CP</label>
                    <input type="text" class="mat-input form-control" name="cp" v-model="newNTrade.cp">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="email">Email</label>
                    <input type="email" class="mat-input form-control" name="email" v-model="newNTrade.email">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="telp">Telepon</label>
                    <input type="text" class="mat-input form-control" name="telp" v-model="newNTrade.telp">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="fax">Fax</label>
                    <input type="text" class="mat-input form-control" name="fax" v-model="newNTrade.fax">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                    <label for="product">Product</label>
                    <input type="text" class="mat-input form-control" name="product" v-model="newNTrade.product">
                </div>
                <div class="pmd-modal-action">
                    <button class="btn pmd-btn-raised btn-primary" type="button" @click="createNTrade()">Submit</button>
                    <button data-dismiss="modal" class="btn btn-default" type="button">Discard</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Add NTrade Modal End data-dismiss="modal"  -->
