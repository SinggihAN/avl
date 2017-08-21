<!-- Begin Edit NTrade Modal -->
<div tabindex="-1" class="modal fade" id="edit-ntrade-modal" ref="edit_ntrade_modal" style="display: none;" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header pmd-modal-bordered">
                <a href="{{ url('/ntrade') }}" aria-hidden="true" class="close" onclick="return confirm('Are you sure you want to discard?');">x</a>
                <h2 class="pmd-card-title-text">Edit NTrade</h2>
            </div>
            <div class="modal-body">
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillNTrade.kat }">
                    <label for="kat">Kategori</label>
                    <input type="text" class="mat-input form-control" name="kat" v-model="fillNTrade.kat">
                    <span v-if="formErrors['kat']" class="error text-danger">
                        @{{ formErrors['kat'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillNTrade.type }">
                    <label for="type">Type</label>
                    <input type="text" class="mat-input form-control" name="type" v-model="fillNTrade.type">
                    <span v-if="formErrors['type']" class="error text-danger">
                        @{{ formErrors['type'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillNTrade.brand }">
                    <label for="brand">Brand</label>
                    <input type="text" class="mat-input form-control" name="brand" v-model="fillNTrade.brand">
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillNTrade.nama }">
                    <label for="nama">Nama</label>
                    <input type="text" class="mat-input form-control" name="nama" v-model="fillNTrade.nama">
                    <span v-if="formErrors['nama']" class="error text-danger">
                        @{{ formErrors['nama'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillNTrade.alamat }">
                    <label for="alamat">Alamat</label>
                    <textarea class="mat-input form-control" name="alamat" v-model="fillNTrade.alamat"></textarea>
                    <span v-if="formErrors['alamat']" class="error text-danger">
                        @{{ formErrors['alamat'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillNTrade.cp }">
                    <label for="cp">CP</label>
                    <input type="text" class="mat-input form-control" name="cp" v-model="fillNTrade.cp">
                    <span v-if="formErrors['cp']" class="error text-danger">
                        @{{ formErrors['cp'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillNTrade.email }">
                    <label for="email">Email</label>
                    <input type="email" class="mat-input form-control" name="email" v-model="fillNTrade.email">
                    <span v-if="formErrors['email']" class="error text-danger">
                        @{{ formErrors['email'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillNTrade.telp }">
                    <label for="telp">Telepon</label>
                    <input type="text" class="mat-input form-control" name="telp" v-model="fillNTrade.telp">
                    <span v-if="formErrors['telp']" class="error text-danger">
                        @{{ formErrors['telp'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillNTrade.fax }">
                    <label for="fax">Fax</label>
                    <input type="text" class="mat-input form-control" name="fax" v-model="fillNTrade.fax">
                    <span v-if="formErrors['fax']" class="error text-danger">
                        @{{ formErrors['fax'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillNTrade.product }">
                    <label for="product">Product</label>
                    <input type="text" class="mat-input form-control" name="product" v-model="fillNTrade.product">
                    <span v-if="formErrors['product']" class="error text-danger">
                        @{{ formErrors['product'][0] }}
                    </span>
                </div>
                <div class="pmd-modal-action">
                    <button class="btn pmd-btn-raised btn-primary" type="button" @click="updateNTrade()">Save changes</button>
                    <a href="{{ url('/ntrade') }}" class="btn btn-default" onclick="return confirm('Are you sure you want to discard?');">Discard</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Edit NTrade Modal End -->