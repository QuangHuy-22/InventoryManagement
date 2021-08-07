<template>
<div>
<index />
<div class="content-page">
    <div class="main-content">
    <div class="addUser">
        <h4 class="font-size-18">Product Detail List</h4>
        <router-link to="/product/product-detail/create-product-detail">
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
            <b-icon icon="plus-circle"></b-icon> Add Product Detail
            </button>
        </div>
        </router-link>
    </div>
    <div class="row">
            <div class="col-xl-12">
            <div class="row">
                <div @click="fetchDataValid" class="col-md-6">
                <div class="card mini-stats-wid">
                    <div class="card-body" id="text-media">
                    <div class="media">
                        <div class="titleNew media-body">
                        <p class="titleNew font-weight-medium">
                            VALID
                        </p>
                        <h4 class="mb-0 new">{{ dataCount.VALID }}</h4>
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
                <div @click="fetchDataInvalid" class="col-md-6">
                <div class="card mini-stats-wid">
                    <div class="card-body" id="text-media">
                    <div class="media">
                        <div class="titleProcessing media-body">
                        <p class="titleProcessing font-weight-medium">
                            INVALID
                        </p>
                        <h4 class="mb-0 new">{{ dataCount.INVALID }}</h4>
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
        </div>
    <div class="searchInput">
        <div class="col-lg-12">
        <form @submit.prevent="submitForm">
        <div class="box-fillter" style="">
            <div class="form-row">
            <div class="col-md-4 col-sm-3">
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
            <div class="col-md-4 col-sm-3">
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

            <div class="col-md-4 col-sm-4" >
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
                    <th>Name </th>
                    <th>Image</th>
                    <th>supplier </th>
                    <th>category </th>
                    <th>imei</th>
                    <th>shelf </th>
                    <th>price In</th>
                    <th>price out</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="(data, index) in dataProductDetail" :key="index">
                    <td style="text-align: center">
                    {{ index + 1 }}
                    </td>
                    <td>{{ data.productName }}</td>
                    <td><img  :src="data.imgUrl" /></td>
                    <td>{{ data.supplierName }}</td>
                    <td>{{ data.categoryName }}</td>
                    <td>{{ data.imei }}</td>
                    <td>{{ data.shelfName }}</td>
                    <td class="price">{{ data.priceIn }}</td>
                    <td class="price">{{ data.priceOut }}</td>
                    <td>{{ data.status }}</td>
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
                        <b-dropdown-item @click="update(data.id)">
                            Edit
                        </b-dropdown-item>
                        <b-dropdown-item @click="$bvModal.show(String(data.id))">
                            Delete
                        </b-dropdown-item>

                                        <!-- ----modal delete role------- -->
                        <div class="showDelete" >
                        <b-modal :id="(String(data.id))" hide-footer hide-header   >
                        <b-col class="iconLogout mb-2">
                        <b-icon icon="exclamation-triangle" class="iconsBox" style="color: red!important;"></b-icon>
                        </b-col>
                        <div class="d-block text-center" >
                        <h3 style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Do you want to delete {{ data.productName }}?</h3>
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

            <!-- <div class="overflow-auto">
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
        </div> -->
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
import { ProducDetailService } from "@/services/productDetail.service.js";

export default {
components: { index, FooterContent },
name: "list-vat-detail",
data() {
return {
    token: localStorage.getItem("token"),
    dataProductDetail:[],
    search: {
    page: 1,
    size: 20,
    status:"VALID"
    },
    pagination: {
    total: 20,
    },
    dataCount:{}
};
},
mounted() {
this.fetchData();
this.fetchDataCountStatus();
},
methods: {
async fetchData() {
    try {
    const response = await ProducDetailService.getList(this.token, this.search);
    if (response.status == 200) {
        this.dataProductDetail = response.data.listData;
        this.pagination.total = response.data.total;
    }
    console.log(response);
    } catch (error) {
    console.log(error.response);
    }
},
async deleteData(idProductDetail){
        const response = await ProducDetailService.delete(this.token, idProductDetail)
        if (response.status == 200) {
            this.fetchData()
            this.$bvModal.hide(idProductDetail)
        }
    },
    async fetchDataCountStatus() {
    try {
    const response = await ProducDetailService.getCount(this.token);
    if (response.status === 200) {
        this.dataCount = response.data;
    }
    } catch (error) {
    console.log(error);
    }
},
    fetchDataValid(){
    this.search.status = "VALID";
    this.fetchData();
    },
    fetchDataInvalid(){
    this.search.status = "INVALID";
    this.fetchData();
    },
    detail(id) {
        this.$router.push({ name: "DetailProductDetail", params: { id: id } });
    },
    update(id) {
        this.$router.push({ name: "UpdateProductDetail", params: { id: id } });
    },
submitForm() {
    this.pagination.page = 1;
    this.fetchData();
},

clearSearch() {
    this.search = {
    page: 1,
    size: 20,
    status:"VALID"
    };
    this.fetchData();
},
},
"search.page": function() {
this.$router.push({
    path: "/product/product-detail",
    query: this.useInUrlQueryPropList,
});
this.fetchData();
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
.titleNew {
color: #008bf4 !important;
}
.titleProcessing {
color: #fcb63e !important;
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
.icon-media {
color: #fff;
font-size: 25px !important;
background-color: #556ee6;
}
#text-media:hover {
border-bottom: 2px solid #556ee6;
transition: all 0.1s ease-in;
}
.three-dot {
border: 0.1px solid #f2f2f2;
border-radius: 4px;
}
.pagination {
justify-content: flex-end !important;
}
img{
    height: 120px;
    width: 120px;
}
.price{
    font-size: 16px;
    color: #1E90FF;
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
