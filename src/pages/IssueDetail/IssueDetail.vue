<template>
<div>
<index />
<div class="content-page">
    <div class="main-content">
    <div class="addUser">
        <h4 class="font-size-18">Issue Detail List</h4>
    </div>

    <div class="searchInput colorTable">
        <div class="col-lg-12">
        <form @submit.prevent="submitForm">
        <div class="box-fillter" style="padding: 2px 14px 2px 14px;">
            <div class="form-row">
            <div class="col-md-3 col-sm-4">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Imei"
                    v-model.trim="search.imei"
                />
                </div>
            </div>

            <div class="col-md-3 col-sm-4">
                <div class="bf-detail">
                <input
                    type="text"
                    style="font-size: 13px;"
                    class="form-control"
                    placeholder="Issue Code"
                    v-model.trim="search.issueCode"
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
                    placeholder="Product Info"
                    v-model.trim="search.productInfo"
                />
                </div>
            </div>
            <div class="col-md-3 col-sm-4" v-if="roleName == 'ADMIN'">
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
                <button
                    @click="exportExcel()"
                    class="button-filter btn btn-success"
                    style="font-size: 13px; margin-right: 5px; color:white;"
                    >
                    <b-icon icon="file-earmark-excel"></b-icon>
                    </button>
                </div>
            </div>
            </div>
        </div>
        </form>
        </div>
    </div>

    <div class="page-content">
        <div class="card colorTable">
        <div class="card-body">
            <div class="table-responsive">
            <table class="table table-striped table-bordered mb-0">
                <thead>
                <tr>
                    <th style="text-align: center">No.</th>
                    <th> Issue Code</th>
                    <th>Product Name</th>
                    <th>imei</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="(issue, index) in dataIssue" :key="index">
                    <td style="text-align: center">
                    {{ search.size * (search.page - 1) + index + 1}}
                    </td>
                    <td>{{ issue.issueCode }}</td>
                    <td>{{ issue.productName }}</td>
                    <td>{{ issue.imei }}</td>
                    <td class="price">{{ issue.price }}</td>
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
                        <b-dropdown-item @click="$bvModal.show(String(issue.id))">
                            Delete
                        </b-dropdown-item>

                        <!-- ----modal delete role------- -->
                        <div class="showDelete" >
                        <b-modal :id="String(issue.id)" hide-footer hide-header   >
                        <b-col class="iconLogout mb-2">
                        <b-icon icon="exclamation-triangle" class="iconsBox" style="color: red!important;"></b-icon>
                        </b-col>
                        <div class="d-block text-center" >
                        <h3 style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Do you want to delete {{ issue.code }}?</h3>
                        </div>
                        <div class="buttonSubmitLogout">
                        <button class="buttonYes mt-3"  @click="deleteData(issue.id)" style="font-size: 13px;">Confirm</button>
                        <button class="buttonNo mt-3" @click="$bvModal.hide(issue.id)" style="font-size: 13px;">Cancel</button>
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

        </div>
        </div>
    </div>
    </div>
    <div class="showAddUser" >
        <b-modal id="bv-modal-example-3" hide-footer hide-header >
            <b-col class="iconLogout mb-2">
            <div class="mb-img mb-4">
                        <span><img src="@/assets/images/sussecc.svg" alt=""></span>
                    </div>
            </b-col>
        <div class="d-block text-center" >
        <h3 
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Adding Successful</h3>
        </div>
        <div class="buttonSubmitLogout">
        <button class="buttonOK mt-3" @click="$bvModal.hide('bv-modal-example-3')"  style="font-size: 13px;">OK</button>
        </div>
        </b-modal>
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
    <footer-content />
</div>

</div>
</template>

<script>
import index from "../../components/index.vue";
import FooterContent from "../../components/FooterContent.vue";
import { IssueDetailService } from "@/services/issueDetail.service";
import { BranchService } from "@/services/branch.service.js";
import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
export default {
components: { index, FooterContent, },
mixins: [prepareQueryParamsMixin],
name: "issue",
data() {
return {
    token: localStorage.getItem("token"),
    userName: localStorage.getItem("userName"),
    dataIssue: [],
    dateRange: {
    from: null,
    to: null
    },
    search: {
    page: 1,
    size: 5,
    branchId: localStorage.getItem("branchId"),
    },
    dataBranch:{},
    checkBranchId: localStorage.getItem("branchId"),
    pagination: {
    total: 0
    },
    numberSize:[3 , 5, 10 , 15],
    errorMessage:"",
    roleName: localStorage.getItem("roleName"),
};
},
created() {
this.fetchData();
this.fetchDataBranch();
},
methods: {
async fetchData() {
    try {
    const response = await IssueDetailService.getList(this.token, this.search);
    if (response.status === 200) {
        this.dataIssue = response.data.listData;
        this.pagination.total = response.data.count
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
async deleteData(idIssue){
        const response = await IssueDetailService.delete(this.token, idIssue)
        if (response.status == 200) {
            this.fetchData()
            this.$bvModal.hide(String(idIssue))
        }else{
            this.errorMessage = response.data
            this.$bvModal.hide(String(idIssue))
            this.$bvModal.show("bv-modal-example-error-add-user")
        }
    },
    async exportExcel () {
    try { 
    await IssueDetailService.exportExcel(this.token,this.search)
    } catch (error) {
    console.log(error)
    }
},
submitForm () {
    this.pagination.page = 0
    this.fetchData()
},

clearSearch () {
    this.search = {
    page: 1,
    size: 20,
    branchId:localStorage.getItem("branchId"), 
    }
    this.fetchData()
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
    path: '/inventory/issue-detail',
    query: this.useInUrlQueryPropList
    })
    this.fetchData()
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
background: linear-gradient(to right, #778899 , #DCDCDC );
/* padding: 5px; */
margin-top: 70px !important;
}
.box-fillter{
  background: linear-gradient(to right, #F0F8FF , #FFFAF0 );
  width: 100%;
}
.colorTable{
    background: linear-gradient(to right, #F0F8FF , #FFFAF0 );
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
.card {
box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%) !important;
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
