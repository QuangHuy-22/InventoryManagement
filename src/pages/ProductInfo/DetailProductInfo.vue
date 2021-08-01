<template>
<div class="detail-user">
<index />
<div class="content-page">
    <div class="main-content">
    <div class="page-content">
        <div class="container-fluid">
        <div class="box-title">
            <h2>Detail Product Info</h2>
            <div class=" float-right">
            <router-link to="/product/product-info" class="btn btn-dark">
                Cancel
            </router-link>
            </div>
        </div>

        <!-- box-content -->
        <div class="card">
            <div class="card-body">
            <h4 class="card-title mb-4">Category Name/ {{ dataDetail.categoryName }}</h4>
            <div class="col-lg-12" style="display:flex">
            <div class="col-lg-6">
            <form class="form-detail">
                <div class="form-group row mb-0">
                <label
                    for="horizontal-firstname-input"
                    class="col-sm-2 col-form-label"
                    >ID</label
                >
                <div class="col-sm-5">
                    <p class="form-control-plaintext">
                    {{ dataDetail.categoryId }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-email-input"
                    class="col-sm-2 col-form-label"
                    >Name</label
                >
                <div class="col-sm-5">
                    <p class="form-control-plaintext">
                    {{ dataDetail.name }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-password-input"
                    class="col-sm-2 col-form-label"
                    >Description</label
                >
                <div class="col-sm-5">
                    <p class="form-control-plaintext">
                    {{ dataDetail.description }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-password-input"
                    class="col-sm-2 col-form-label"
                    >Price In</label
                >
                <div class="col-sm-5">
                    <p class="form-control-plaintext">
                    {{ dataDetail.priceIn }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-password-input"
                    class="col-sm-2 col-form-label"
                    >Price Out</label
                >
                <div class="col-sm-5">
                    <p class="form-control-plaintext">
                    {{ dataDetail.priceOut }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-password-input"
                    class="col-sm-2 col-form-label"
                    >Qty</label
                >
                <div class="col-sm-5">
                    <p class="form-control-plaintext">
                    {{ dataDetail.qty }}
                    </p>
                </div>
                </div>
                
                <div class="form-group row mb-0">
                <label
                    for="horizontal-password-input"
                    class="col-sm-2 col-form-label"
                    >Create Date</label
                >
                <div class="col-sm-5">
                    <p class="form-control-plaintext">
                    {{ dataDetail.createDate }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-password-input"
                    class="col-sm-2 col-form-label"
                    >Update Date</label
                >
                <div class="col-sm-5">
                    <p class="form-control-plaintext">
                    {{ dataDetail.updateDate }}
                    </p>
                </div>
                </div>
            </form>
            </div>
            <div class="col-lg-6">
                <div class="form-group row mb-0">
                <img  :src="dataDetail.imgUrl" />
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</div>
</template>

<script>
import { ProducInfoService } from "@/services/producInfo.service.js";
import index from "../../components/index.vue";
export default {
components: { index, },
name: "detail-user",
data() {
return {
    idDetail: this.$route.params.id,
    token: localStorage.getItem("token"),
    dataDetail: {},
};
},

created () {
this.fetchData();
},

methods: {
async fetchData() {
    try {
    const response = await ProducInfoService.getDetail(this.token, this.idDetail);
    if (response.status == 200) {
        this.dataDetail = response.data;
    }
    } catch (error) {
    return error
    }
}
}
};
</script>

<style scoped>
.content-page {
background-color: #ffff;
padding-left: 230px;
}
.main-content {
background-color: #f8f8fb !important;
padding: 20px;
margin-top: 70px !important;
}
.card-title {
font-size: 15px !important;
}
.form-control-plaintext {
font-size: 13px;
padding: 0px !important;
}
.col-sm-10 {
padding: 7px 0px;
}
img{
    width: 300px;
    height: 300px;
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
