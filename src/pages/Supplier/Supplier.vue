<template>
<div>
<index />
<div class="content-page">
    <div class="main-content">
    <div class="addUser">
        <h4 class="font-size-18">Supplier List</h4>
        <router-link to="/management/supplier/create-supplier"  v-if="roleName == 'ADMIN' || roleName == 'MANAGER'">
        <div
            class="btn-group float-right"
        >
            <button
            type="submit"
            class="btn btn-outline-primary"
            style="font-size: 13px;background-color: #EBF6FF;"
            data-toggle="modal"
            data-target=".Risk_QL-User_add"
            ><b-icon icon="plus-circle"></b-icon> Add Supplier</button
            >
        </div>
        </router-link>
    </div>

    <div class="searchInput">
        <div class="col-lg-12">
        <form @submit.prevent="submitForm">
        <div class="box-fillter" style="padding: 2px 14px 2px 14px;">
            <div class="form-row">
            <div class="col-md-2 col-sm-4">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Name"
                    v-model.trim="search.name"
                />
                </div>
            </div>

            <div class="col-md-2 col-sm-4">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Address"
                    v-model.trim="search.address"
                />
                </div>
            </div>
            
            <div class="col-md-2 col-sm-4">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Phone"
                    v-model.trim="search.phone"
                />
                </div>
            </div>
            
            <div class="col-md-4 col-sm-4">
                <div class="btn-fillter">
                <div class="bf-detail" >
                <button
                    @click.prevent="submitForm"
                    class="btn btn-success"
                    style="font-size: 13px; margin-right: 5px; color:white;"
                >
                    <b-icon icon="search"></b-icon>
                </button>
                <button
                    @click="clearSearch"
                    class="btn btn-dark"
                    style="font-size: 13px; margin-right: 5px;"
                >
                    <b-icon icon="x-circle" ></b-icon>
                </button>
                </div>
            </div>
            </div>
            </div>
        </div>
        </form>
        </div>
    </div>

    <div class="page-content">
        <div class="card">
        <div class="card-body">
            <div class="table-responsive">
            <table class="table table-striped table-bordered mb-0">
                <thead>
                <tr>
                    <th style="text-align: center">No.</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Thao tác</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="(suppliers, index) in dataSupplier" :key="index">
                    <td style="text-align: center">
                    {{index + 1}}
                    </td>
                    <td>{{ suppliers.name }}</td>
                    <td>{{ suppliers.address }}</td>
                    <td>{{ suppliers.phone }}</td>
                    <td>
                    <b-dropdown
                        right
                        text=""
                        variant="none"
                        class="three-dot"
                        no-caret
                    >
                        <template #button-content>
                        <b-icon icon="three-dots-vertical"></b-icon>
                        </template>
                        <div style="font-size: 13px;" >
                        <b-dropdown-item @click="detail(suppliers.id)">
                            Detail
                        </b-dropdown-item>
                        <b-dropdown-item @click="update(suppliers.id)"  v-if="roleName == 'ADMIN' || roleName == 'MANAGER'">
                            Edit
                        </b-dropdown-item>
                        <b-dropdown-item @click="$bvModal.show(String(suppliers.id))"  v-if="roleName == 'ADMIN' || roleName == 'MANAGER'" >
                            Delete
                        </b-dropdown-item>
                        <b-dropdown-item  @click="createVAT( suppliers.id)"  v-if="roleName == 'ADMIN' || roleName == 'MANAGER'">
                            Create VAT
                        </b-dropdown-item>

                        <!-- ----modal delete role------- -->
                        <div class="showDelete" >
                        <b-modal :id="(String(suppliers.id))" hide-footer hide-header   >
                        <b-col class="iconLogout mb-2">
                        <b-icon icon="exclamation-triangle" class="iconsBox" style="color: red!important;"></b-icon>
                        </b-col>
                        <div class="d-block text-center" >
                        <h3 style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Do you want to delete {{ suppliers.code }}?</h3>
                        </div>
                        <div class="buttonSubmitLogout">
                        <button class="buttonYes mt-3"  @click="deleteData(suppliers.id)" style="font-size: 13px;">Confirm</button>
                        <button class="buttonNo mt-3" @click="$bvModal.hide(String(suppliers.id))" style="font-size: 13px;">Cancel</button>
                        </div>
                        </b-modal>
                        </div>
                        <!-- ----end modal delete role------- -->
                        </div>
                    </b-dropdown>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>

            <div class="overflow-auto">
            </div>

        </div>
        </div>
    </div>
    </div>

    <footer-content />
</div>

<!-- -----------modal permission------- -->
<b-modal id="bv-modal-example-error-permission" hide-footer hide-header>
    <b-col class="iconLogout mb-2">
    <b-icon
        icon="x-circle"
        class="iconsBox"
        style="color: red!important;"
    ></b-icon>
    </b-col>
    <div class="d-block text-center">
    <h3
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;"
    >
        Bạn không có quyền truy cập
    </h3>
    </div>
    <div class="buttonSubmitLogout">
    <button
        class="buttonOK mt-3"
        @click="$bvModal.hide('bv-modal-example-error-permission')"
        style="font-size: 13px;"
    >
        OK
    </button>
    </div>
</b-modal>
<!-- -----------end modal permission------- -->
</div>
</template>

<script>
import index from "../../components/index.vue";
import FooterContent from "../../components/FooterContent.vue";
import { SupplierService } from "@/services/supplier.service";

export default {
components: { index, FooterContent, },
name: "supplier",
data() {
return {
    token: localStorage.getItem("token"),
    dataSupplier: [],
    dateRange: {
    from: null,
    to: null
    },
    search: {
    page: 1,
    size: 10
    },
    pagination: {
    total: 20
    },
    roleName:  localStorage.getItem('roleName'),
};
},
created() {
this.fetchData();
},
methods: {
async fetchData() {
    try {
    const response = await SupplierService.getList(this.token, this.search);
    if (response.status === 200) {
        this.dataSupplier = response.data.listData;
        this.pagination.total = response.data.total
    }
    } catch (error) {
    console.log(error);
    }
},
createVAT(supplierId){
this.$router.push({ name: "CreateVAT", params: { id: supplierId } });
},
async deleteData(idSupplier){
        const response = await SupplierService.delete(this.token, idSupplier)
        if (response.status == 200) {
            this.fetchData()
            this.$bvModal.hide(idSupplier)
        }
},
update(id) {
        this.$router.push({ name: "UpdateSupplier", params: { id: id } });
    },
detail(id) {
        this.$router.push({ name: "DetailSupplier", params: { id: id } });
    },
submitForm () {
    this.pagination.page = 0
    this.fetchData()
},

clearSearch () {
    this.dateRange.from = null
    this.dateRange.to = null
    this.search = {
    page: 1,
    size: 10
    }
    this.fetchData()
}
},

computed: {
useInUrlQueryPropList () {
    return this.prepareQueryParamsMixin({
    page: this.search.page
    })
}
},

};
</script>

<style scoped>
/* .listUser{
margin: 0px;
padding: 0px ;
font-size: 13px;
} */
.content-page {
background-color: #ffff;
padding-left: 230px !important;
}
.main-content {
background-color: #f8f8fb !important;
/* padding: 5px; */
margin-top: 70px !important;
}
.list-groups {
margin: 50px;
}
.user-only {
display: flex !important;
/* align-items: flex-start!important; */
justify-content: space-between;
padding: 0px !important;
}
.container {
margin-left: 200px !important;
background-color: #f8f8fb;
}

.searchInput {
display: flex;
background-color: white;
/* margin: 0 13px 8px 15px; */
margin-bottom: 24px;
}
.broadUser {
margin: 0 20px 10px 20px;
background-color: white;
padding: 10px;
}

.buttonUnfilter {
background-color: #74788d; /* Green */
border: none;
color: white;
height: 41px !important;
margin-top: 15px !important;
padding: 0px;
width: 72px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
border-radius: 3px;
font-size: 13px;
}
.buttonExcel {
background-color: #3bb54a; /* Green */
border: none;
color: white;
height: 41px !important;
margin-top: 15px !important;
padding: 0px;
width: 72px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
cursor: pointer;
border-radius: 3px;
font-size: 13px;
}
.buttonUnLock {
background-color: #4caf50; /* Green */
border: none;
color: white;
padding: 7px 12px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
border-radius: 3px;
}
.buttonLock {
background-color: #f44336; /* Red*/
border: none;
color: white;
padding: 7px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
border-radius: 3px;
}
.buttonFix {
background-color: #3a3737; /* Green */
border: none;
color: white;
padding: 7px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
border-radius: 3px;
}
.buttonSearch {
padding: 0 30px 0 30px;
margin: 16px;
}
.list-user-auth {
display: flex;
}
.buttonAdd {
background-color: #008bf4; /* Green */
border: none;
color: white;
padding: 7px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
/* margin: 4px 2px; */
cursor: pointer;
border-radius: 3px;
}
.addUser {
text-align: center;
display: flex;
justify-content: space-between;
/* margin: 10px; */
font-family: Roboto;
/* padding-bottom: 10px;
padding-left: 12px;
padding-right: 12px;
margin: 0 10px 0 10px; */
}
.addUser h4 {
margin-top: 12px;
margin-bottom: 12px;
}
.bf-detail {
padding: 0px;
}
.user-auth {
margin: 10px;
}
.table {
font-family: "Open Sans", sans-serif;
/* width: 750px; */
border-collapse: collapse;
/* border: 3px solid #44475C; */
/* margin: 10px 10px 0 10px; */
}
.table th {
text-transform: uppercase;
text-align: left;
background: #f8f9fa;
color: black;
/* padding: 8px; */
min-width: 30px;
padding-left: 5px !important;
}

.table td {
padding: 5px !important;
text-align: left;
/* border-right: 2px solid #707070; */
}
.table td:last-child {
border-right: none;
}
.table tbody tr:nth-child(2n) td {
background: #f8f9fa;
}
.three-dot {
border: 0.1px solid #f2f2f2;
border-radius: 4px;
}
.pagination {
justify-content: flex-end !important;
}
@media (max-width: 576px) {
.content-page,
.container-sm {
max-width: 540px;
padding-left: 0px !important;
}
#sidebar-menu {
display: none !important;
}
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
.container,
.container-lg,
.container-md,
.container-sm {
max-width: 960px;
}
}
@media (min-width: 1200px) {
.container,
.container-lg,
.container-md,
.container-sm,
.container-xl {
max-width: 1140px;
}
}
</style>
