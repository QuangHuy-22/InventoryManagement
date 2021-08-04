<template>
<div class="homePages">
<index />
<div class="content-page">
    <div class="menu-content">
    <div class="main-content">
        <div class="page-content">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
            <div
                class="page-title-box d-flex align-items-center justify-content-between"
            >
                <h4 class="mb-0 font-size-18">Product Done - Back Detail</h4>
            </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-xl-12">
            <div class="row">
                <div @click="fetchDataDone" class="col-md-6">
                <div class="card mini-stats-wid">
                    <div class="card-body" id="text-media">
                    <div class="media">
                        <div class="titleNew media-body">
                        <p class="titleNew font-weight-medium">
                            Product Detail Done
                        </p>
                        <h4 class="mb-0 new">{{ dataCountStatus.DETAIL_DONE }}</h4>
                        </div>
                        <div class="bg-primary" style=" border-radius: 50%;">
                        <v-avatar>
                            <v-icon large class="icon-media">
                            mdi-folder
                            </v-icon>
                        </v-avatar>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div @click="fetchDataBack" class="col-md-6">
                <div class="card mini-stats-wid">
                    <div class="card-body" id="text-media">
                    <div class="media">
                        <div class="titleProcessing media-body">
                        <p class="titleProcessing font-weight-medium">
                            Product Detail Back
                        </p>
                        <h4 class="mb-0 processing">
                            {{ dataCountStatus.DETAIL_BACK }}
                        </h4>
                        </div>
                        <div class="bg-primary" style=" border-radius: 50%;">
                        <v-avatar>
                            <v-icon large class="icon-media">
                            mdi-file
                            </v-icon>
                        </v-avatar>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <!-- end row -->
        </div>
        </div>
        <!-- end row -->
    <div class="searchInput colorTable">
        <div class="col-lg-12" style="padding:0px;">
        <form @submit.prevent="submitForm">
        <div class="box-fillter" style="padding: 2px 14px 2px 14px;">
            <div class="form-row">
            <div class="col-md-3 col-sm-4">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Product Info"
                    v-model.trim="search.productInfo"
                />
                </div>
            </div>

            <div class="col-md-3 col-sm-4">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Price Total From"
                    v-model.trim="search.priceTotalFrom"
                />
                </div>
            </div>
            
            <div class="col-md-3 col-sm-4">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Price Total To"
                    v-model.trim="search.priceTotalTo"
                />
                </div>
            </div>
            <div class="col-md-3 col-sm-4">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Product Status List Code"
                    v-model.trim="search.productStatusListCode"
                />
                </div>
            </div>
            <div class="col-md-3 col-sm-3" v-if="checkBranchId = 99">
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
            
            <div class="btn-fillter">
                <div class="bf-detail" style="margin-top: 16px">
                <button
                    @click.prevent="submitForm"
                    class="btn btn-info"
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
                <div
                    @click="exportExcel()"
                    class="button-filter btn btn-success"
                    style="font-size: 13px; margin-right: 5px; color:white;"
                    >
                    <b-icon icon="file-earmark-excel"></b-icon>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </form>
        </div>
    </div>

        <div class="row">
        <div class="col-lg-12">
            <div class="card">
            <div class="card-body" style="padding: 8px">
                <div class="table-responsive">
                <table class="table table-centered table-nowrap mb-0">
                    <thead class="thead-light">
                    <tr style="font-size: 12px;white-space: nowrap;">
                        <th>No.</th>
                        <th>Product Info</th>
                        <th>Product Status List Code</th>
                        <th>Price One</th>
                        <th>Price Total</th>
                        <th>Qty</th>
                        <th>Qty Rest</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        style="font-size: 12px"
                        v-for="(data, index) in dataProduct"
                        :key="index"
                    >
                        <td style="text-align: center">
                        {{ index + 1 }}
                        </td>
                        <td>
                        {{ data.productInfo }}
                        </td>
                        <td>{{ data.productStatusListCode }}</td>
                        <td class="price">{{ data.priceOne }}</td>
                        <td class="price">{{ data.priceTotal }}</td>
                        <td>
                        {{ data.qty }}
                        </td>
                        <td>
                        {{ data.qtyRest }}
                        </td>
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
                            <div style="font-size: 13px;"  v-if="roleName == 'ADMIN' || roleName == 'MANAGER'">
                            <b-dropdown-item @click="$bvModal.show(String(data.id))" >
                                Delete
                            </b-dropdown-item>

                            <!-- ----modal delete role------- -->
                        <div class="showDelete" >
                        <b-modal :id="(String(data.id))" hide-footer hide-header   >
                        <b-col class="iconLogout mb-2">
                        <b-icon icon="exclamation-triangle" class="iconsBox" style="color: red!important;"></b-icon>
                        </b-col>
                        <div class="d-block text-center" >
                        <h3 style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Do you want to delete {{ data.code }}?</h3>
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
                <b-pagination
                    v-model="params.page"
                    :total-rows="pagination.total"
                    :per-page="params.size"
                    first-text="First"
                    prev-text="Previous"
                    next-text="Next"
                    last-text="Last"
                    class="pagination mt-4"
                ></b-pagination>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <!-- End Page-content -->

    <!-- All Modal -->

    <!-- ----------modal error-------->
<b-modal id="bv-modal-example-error-add-user" hide-footer hide-header >
<b-col class="iconLogout mb-2">
<b-icon icon="x-circle" class="iconsBox" style="color: red!important;"></b-icon>
</b-col>
<div class="d-block text-center" >
<span>{{ this.errorMessage }}</span>
</div>
<div class="buttonSubmitLogout">
<button class="buttonOK mt-3" @click="$bvModal.hide('bv-modal-example-error-add-user')"  style="font-size: 13px;">OK</button>
</div>
</b-modal>
<!-- ----------end modal error-------->
    <!-- end modal -->
    </div>
    <footer-content />
</div>
</div>
</template>

<script>
import Index from "../../components/index.vue";
import FooterContent from "../../components/FooterContent.vue";
import { ProducService } from "@/services/product.service";
import { BranchService } from "@/services/branch.service.js";
import prepareQueryParamsMixin from "../../mixins/prepareQueryParamsMixin";
export default {
name: "product",
mixins: [prepareQueryParamsMixin],
components: {
Index,
FooterContent,
},
data() {
return {
    dataProduct: [],
    dataCountStatus:[],
    params: {
    page: 1,
    size: 10,
    },
    pagination: {
    total: 0,
    },
    search: {
        page:1,
        size:20,
        type:1,
        branchId:localStorage.getItem("branchId"), 
    },
    dataBranch:{},
    checkBranchId: localStorage.getItem("branchId"),
    email: localStorage.getItem("email"),
    DATA_PERMISSION: localStorage.getItem("permission"),
    reasonTransfer: "",
    total: {
    new: "",
    process: "",
    done: "",
    },
    description: "",
    token: localStorage.getItem("token"),
    emailHome: localStorage.getItem("email"),
    errorMessage:"",
    roleName:  localStorage.getItem('roleName'),
};
},
// validations: {
//               reasonTransfer: { required },
//       },

created() {
this.search.type = 1;
this.fetchData();
this.fetchDataCountStatus()
this.fetchDataBranch();
},

methods: {
fetchDataDone() {
    this.search.type = 1;
    // this.params.page = 1;
    this.fetchData();
    this.fetchDataCountStatus()
},

fetchDataBack() {
    this.search.type = 2;
    // this.params.page = 1;
    this.fetchData();
    this.fetchDataCountStatus()
},

async fetchData() {
    try {
    const response = await ProducService.getListStatusDetail(this.token, this.search);
    if (response.status === 200) {
        this.dataProduct = response.data.listData;
    }
    } catch (error) {
    console.log(error);
    }
},
async fetchDataBranch() {
    const response = await BranchService.getList(this.token, this.search);
    if (response.status == 200) {
        this.dataBranch = response.data.listData;
    }
},
async fetchDataCountStatus() {
    try {
    const response = await ProducService.getCountStatus(this.token);
    if (response.status === 200) {
        this.dataCountStatus = response.data;
    }
    } catch (error) {
    console.log(error);
    }
},
async deleteData(idProductStatusDetail){
        const response = await ProducService.delete(this.token, idProductStatusDetail)
        if (response.status == 200) {
            this.fetchData()
            this.$bvModal.hide(idProductStatusDetail)
        }
        else{
            this.errorMessage = response.data.message
            this.$bvModal.hide(idProductStatusDetail)
            this.$bvModal.show("bv-modal-example-error-add-user")
        }
    },
    submitForm() {
    this.pagination.page = 1;
    this.fetchData();
},
async exportExcel () {
    try { 
    await ProducService.exportExcel(this.token,this.search)
    } catch (error) {
    console.log(error)
    }
},
    clearSearch() {
    this.search = {
    page:1,
    size:20,
    type:1,
    branchId:localStorage.getItem("branchId"), 
    };
    this.fetchData();
},
},

computed: {
useInUrlQueryPropList() {
    return this.prepareQueryParamsMixin({
    page: this.params.page,
    });
},
buttonDisable() {
    return this.reasonTransfer.length <= 5;
},
},

watch: {
"params.page": function() {
    this.$router.push({
    path: "/inventory/product-status-detail",
    query: this.useInUrlQueryPropList,
    });
    this.fetchData();
    this.getListHome();
    this.fetchDataCountStatus();
},
},
};
</script>

<style scoped>
.content-page {
background-color: #ffff;
padding-left: 230px;
}
.main-content {
background: linear-gradient(to right, #778899 , #DCDCDC );
/* padding: 20px; */
margin-top: 70px !important;
}
.nav {
background-color: #fff;
}
.pagination {
justify-content: flex-end !important;
}
.tabs {
margin: 0px !important;
background-color: #fff;
}
.titleNew {
color: #008bf4 !important;
}
.titleProcessing {
color: #fcb63e !important;
}
.titleDone {
color: #3bb54a !important;
}
.form-find {
display: flex;
}
.btn-fillter {
margin-top: 12px;
}

#example-input {
font-size: 13px;
}
.new {
font-size: 20px;
}
.processing {
font-size: 20px;
}
.done {
font-size: 20px;
}
.router {
color: black !important;
}
.rules {
display: block;
color: #cf232a;
}
#text-media {
padding: 15px 25px 15px 30px !important;
}
.icon-media {
color: #fff;
font-size: 25px !important;
background-color: #556ee6;
}
#text-media:hover {
border-bottom: 2px solid #556ee6;
transition: all 0.1s ease-in;
}
.icon-media:active {
color: red;
}
.current {
/* background:#D3D3D3; */
border-bottom: 2px solid #556ee6 !important;
}
.card {
box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%) !important;
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
