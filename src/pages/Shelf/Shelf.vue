<template>
<div>
<index />
<div class="content-page">
    <div class="main-content">
    <div class="addUser">
        <h4 class="font-size-18">Shelf List</h4>
        <router-link to="/inventory/shelf/create-shelf"
        v-if="roleName.includes('ADMIN')  || roleName.includes('MANAGER')">
        <div
            class="btn-group float-right"
        >
            <button
            type="submit"
            class="btn btn-outline-primary"
            style="font-size: 13px;background-color: #EBF6FF;"
            data-toggle="modal"
            data-target=".Risk_QL-User_add"
            >
            <b-icon icon="plus-circle"></b-icon> Add Shelf
            </button>
        </div>
        </router-link>
    </div>

    <div class="searchInput">
        <div class="col-lg-12">
        <form @submit.prevent="submitForm">
        <div class="box-fillter" style="">
            <div class="form-row">
            <div class="col-md-3 col-sm-3">
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
            <div class="col-md-3 col-sm-3">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Qty From"
                    v-model.trim="search.qtyFrom"
                />
                </div>
            </div>
            <div class="col-md-3 col-sm-3">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Qty To"
                    v-model.trim="search.qtyTo"
                />
                </div>
            </div>
            <div class="col-md-3 col-sm-3">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Qty Rest From"
                    v-model.trim="search.qtyRestFrom"
                />
                </div>
            </div>
            <div class="col-md-3 col-sm-3">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Qty Rest To"
                    v-model.trim="search.qtyRestTo"
                />
                </div>
            </div>
            <div class="col-md-3 col-sm-3" v-if="roleName == 'ADMIN'">
                <div class="bf-detail">
                <b-select
                class="form-control select2"
                v-model="search.branchId"
                >
                <option
                    v-for="data in dataBranch"
                    :key="data.id"
                    :value="data.id"
                    >{{ data.name }}</option
                >
                </b-select>
                </div>
            </div>

            <div class="col-md-3 col-sm-4" >
                <div class="btn-fillter">
                <div class="bf-detail">
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
        <div class="card colorChange">
        <div class="card-body">
            <div class="table-responsive">
            <table class="table table-striped table-bordered mb-0">
                <thead>
                <tr>
                    <th style="text-align: center">No.</th>
                    <th>Name</th>
                    <th>description</th>
                    <th>total</th>
                    <th>qty</th>
                    <th>qty Rest</th>
                    <th>branchName</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="(data, index) in dataProductDetail" :key="index">
                    <td style="text-align: center">
                    {{  search.size * (search.page - 1) + index + 1 }}
                    </td>
                    <td>{{ data.name }}</td>
                    <td>{{ data.description }}</td>
                    <td>{{ data.total }}</td>
                    <td>{{ data.qty }}</td>
                    <td>{{ data.qtyRest }}</td>
                    <td>{{ data.branchName }}</td>
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
                        <div style="font-size: 13px;">
                        <b-dropdown-item @click="detail(data.id)">
                            Detail
                        </b-dropdown-item>
                        <b-dropdown-item @click="update(data.id)"  v-if="roleName.includes('ADMIN')  || roleName.includes('MANAGER')">
                            Edit
                        </b-dropdown-item>
                        <b-dropdown-item @click="$bvModal.show(String(data.id))"  v-if="roleName.includes('ADMIN')  || roleName.includes('MANAGER')">
                            Delete
                        </b-dropdown-item>
                        <!-- ----modal delete role------- -->
                        <div class="showDelete" >
                        <b-modal :id="(String(data.id))" hide-footer hide-header   >
                        <b-col class="iconLogout mb-2">
                        <b-icon icon="exclamation-triangle" class="iconsBox" style="color: red!important;"></b-icon>
                        </b-col>
                        <div class="d-block text-center" >
                        <h3 style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Do you want to delete {{ data.name }}?</h3>
                        </div>
                        <div class="buttonSubmitLogout">
                        <button class="buttonYes mt-3"  @click="deleteData(data.id)" style="font-size: 13px;">Confirm</button>
                        <button class="buttonNo mt-3" @click="$bvModal.hide(String(data.id))" style="font-size: 13px;">Cancel</button>
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
            <div class="d-flex">
            <div v-for="number in numberSize" :key="number" @click="changeSize(number)"><span class="numberSize" >{{number}}</span></div>
            </div>
            <b-pagination
                v-model="search.page"
                :total-rows="pagination.total"
                :per-page="search.size"
                first-text="First"
                prev-text="Previous"
                next-text="Next"
                last-text="Last"
                class="pagination mt-4"
            ></b-pagination>
            </div>

             <!-- ----------modal error-------->
        <b-modal
            id="bv-modal-example-error-add-user"
            hide-footer
            hide-header
        >
            <b-col class="iconLogout mb-2">
            <b-icon
                icon="x-circle"
                class="iconsBox"
                style="color: red!important;"
            ></b-icon>
            </b-col>
            <div class="d-block text-center">
            <span>{{ this.errorMessage }}</span>
            </div>
            <div class="buttonSubmitLogout">
            <button
                class="buttonOK mt-3"
                @click="$bvModal.hide('bv-modal-example-error-add-user')"
                style="font-size: 13px;"
            >
                OK
            </button>
            </div>
        </b-modal>
        </div>
        </div>
    </div>
    </div>

    <footer-content />
</div>

</div>
</template>

<script>
import index from "../../components/index.vue";
import FooterContent from "../../components/FooterContent.vue";
import { ShelfService } from "@/services/shelf.service.js";
import { BranchService } from "@/services/branch.service.js";
import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
export default {
components: { index, FooterContent },
mixins: [prepareQueryParamsMixin],
name: "shelf",
data() {
return {
    token: localStorage.getItem("token"),
    dataProductDetail:[],
    search: {
    page: 1,
    size: 5,
    branchId:localStorage.getItem("branchId"), 
    },
    checkBranchId: localStorage.getItem("branchId"),
    dataBranch:{},
    pagination: {
    total: 0,
    },
    roleName:  localStorage.getItem('roleName'),
    numberSize:[3 , 5, 10 , 15],
    errorMessage:""
};
},
mounted() {
this.fetchData();
this.fetchDataBranch();
},
methods: {
async fetchData() {
    try {
    const response = await ShelfService.getList(this.token, this.search);
    if (response.status == 200) {
        this.dataProductDetail = response.data.listData;
        this.pagination.total = response.data.count;
    }
    console.log(response);
    } catch (error) {
    console.log(error.response);
    }
},
async fetchDataBranch() {
    const response = await BranchService.getList(this.token, this.search);
    if (response.status == 200) {
        this.dataBranch = response.data.listData;
    }
},
update(id) {
        this.$router.push({ name: "UpdateShelf", params: { id: id } });
    },
detail(id) {
        this.$router.push({ name: "DetailShelf", params: { id: id } });
    },
submitForm() {
    this.pagination.page = 1;
    this.fetchData();
},
async deleteData(idShelf){
        const response = await ShelfService.delete(this.token, idShelf)
        if (response.status == 200) {
            this.fetchData()
            this.$bvModal.hide(String(idShelf))
        }else{
            this.errorMessage = response.data
            this.$bvModal.hide(String(idShelf))
            this.$bvModal.show("bv-modal-example-error-add-user")
        }
},
clearSearch() {
    this.search = {
    page: 1,
    size: 20,
    };
    this.fetchData();
},
changeSize(number){
    this.search = {
    page: this.search.page,
    size: number,
    branchId: localStorage.getItem("branchId"),
    };
    this.fetchData();
},
},
computed: {
useInUrlQueryPropList () {
    return this.prepareQueryParamsMixin({
    page: this.search.page
    })
}
},

watch: {
'search.page': function () {
    this.$router.push({
    path: '/inventory/shelf',
    query: this.useInUrlQueryPropList
    })
    this.fetchData()
}
},
};
</script>

<style scoped>
.content-page {
background-color: #ffff;
padding-left: 230px !important;
}
.main-content {
background: linear-gradient(to right, #778899 , #DCDCDC );
margin-top: 70px !important;
}
.list-groups {
margin: 50px;
}
.user-only {
display: flex !important;
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
.colorChange {
  background: linear-gradient(to right, #F0F8FF , #FFFAF0 );
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
cursor: pointer;
border-radius: 3px;
}
.addUser {
text-align: center;
display: flex;
justify-content: space-between;
font-family: Roboto;
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
border-collapse: collapse;
}
.table th {
text-transform: uppercase;
text-align: left;
background: #f8f9fa;
color: black;
min-width: 30px;
padding-left: 5px !important;
}

.table td {
padding: 5px !important;
text-align: left;
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
.numberSize{
padding: 0px 10px 0px 10px;
color:#A52A2A;
cursor: pointer;
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
