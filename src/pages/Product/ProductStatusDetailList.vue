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

        <div class="row">
        <div class="col-lg-12">
            <div class="card">
            <div class="card-body" style="padding: 8px">
                <div class="table-responsive">
                <table class="table table-centered table-nowrap mb-0">
                    <thead class="thead-light">
                    <tr style="font-size: 12px;white-space: nowrap;">
                        <th>No.</th>
                        <th>Id</th>
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
                        <td>{{ data.id }}</td>
                        <td>
                        {{ data.productInfo }}
                        </td>
                        <td>{{ data.productStatusListCode }}</td>
                        <td>{{ data.priceOne }}</td>
                        <td>{{ data.priceTotal }}</td>
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
                            <div style="font-size: 13px;">
                            <b-dropdown-item >
                                Delete
                            </b-dropdown-item>
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

    <!-- Modal nhận giao dịch thành công -->
    <b-modal id="bv-modal-set-processing-done" hide-footer hide-header>
        <b-col class="iconLogout mb-2">
        <div class="mb-img mb-4">
            <span><img src="../../assets/images/sussecc.svg" alt=""/></span>
        </div>
        </b-col>
        <div class="d-block text-center">
        <h3
            style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;"
        >
            Nhận xử lý giao dịch thành công
        </h3>
        </div>
        <div class="buttonSubmitLogout">
        <button
            class="buttonOK mt-3"
            style="font-size: 13px;"
            @click="$bvModal.hide('bv-modal-set-processing-done')"
        >
            OK
        </button>
        </div>
    </b-modal>
    <!-- End modal nhận giao dịch thành công -->

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
        type:1
    },
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
};
},
// validations: {
//               reasonTransfer: { required },
//       },

created() {
this.search.type = 1;
this.fetchData();
this.fetchDataCountStatus()
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
