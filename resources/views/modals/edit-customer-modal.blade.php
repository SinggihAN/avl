<!-- Begin Edit Customer Modal -->
<div tabindex="-1" class="modal fade" id="edit-customer-modal" ref="edit_customer_modal" style="display: none;" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header pmd-modal-bordered">
                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                <h2 class="pmd-card-title-text">Edit Customer</h2>
            </div>
            <div class="modal-body">
                <div>
                    <img v-if="fillCustomer.image" :src="'/img/customers/' + fillCustomer.image" class="avatar-80">
                </div><br>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillCustomer.first_name }">
                    <label for="first_name">First Name</label>
                    <input type="text" class="mat-input form-control" name="first_name" v-model="fillCustomer.first_name">
                    <span v-if="formErrors['first_name']" class="error text-danger">
                        @{{ formErrors['first_name'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillCustomer.last_name }">
                    <label for="last_name">Last Name</label>
                    <input type="text" class="mat-input form-control" name="last_name" v-model="fillCustomer.last_name">
                    <span v-if="formErrors['last_name']" class="error text-danger">
                        @{{ formErrors['last_name'][0] }}
                    </span>
                </div>
                <div class="form-group pmd-textfield pmd-textfield-floating-label" v-bind:class="{ 'pmd-textfield-floating-label-completed': fillCustomer.email }">
                    <label for="email">Email Address</label>
                    <input type="text" class="mat-input form-control" name="email" v-model="fillCustomer.email">
                </div>
                <div class="pmd-modal-action">
                    <button class="btn pmd-btn-raised btn-primary" type="button" @click="updateCustomer()">Save changes</button>
                    <button data-dismiss="modal"  class="btn btn-default" type="button">Discard</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Edit Customer Modal End -->