<template>
<div class="detail-user">
<index />
<div class="content-page">
    <div class="main-content">
    <div class="page-content">
        <div class="container-fluid">
        <div class="box-title">
            <h2>Detail Shelf</h2>
            <div class=" float-right">
            <router-link to="/inventory/shelf" class="btn btn-dark">
                Cancel
            </router-link>
            </div>
        </div>

        <!-- box-content -->
        <div class="card">
            <div class="card-body">
            <h4 class="card-title mb-4">Name/ {{ dataDetail.name }}</h4>
            <form class="form-detail">
                <div class="form-group row mb-0">
                <label
                    for="horizontal-firstname-input"
                    class="col-sm-2 col-form-label"
                    >ID</label
                >
                <div class="col-sm-10">
                    <p class="form-control-plaintext">
                    {{ dataDetail.id }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-email-input"
                    class="col-sm-2 col-form-label"
                    >Name</label
                >
                <div class="col-sm-10">
                    <p class="form-control-plaintext">
                    {{ dataDetail.name }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-email-input"
                    class="col-sm-2 col-form-label"
                    >Branch Name</label
                >
                <div class="col-sm-10">
                    <p class="form-control-plaintext">
                    {{ dataDetail.branchName }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-email-input"
                    class="col-sm-2 col-form-label"
                    >Qty</label
                >
                <div class="col-sm-10">
                    <p class="form-control-plaintext">
                    {{ dataDetail.qty }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-email-input"
                    class="col-sm-2 col-form-label"
                    >Qty Rest</label
                >
                <div class="col-sm-10">
                    <p class="form-control-plaintext">
                    {{ dataDetail.qtyRest }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-email-input"
                    class="col-sm-2 col-form-label"
                    >Total</label
                >
                <div class="col-sm-10">
                    <p class="form-control-plaintext">
                    {{ dataDetail.total }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-password-input"
                    class="col-sm-2 col-form-label"
                    >Description</label
                >
                <div class="col-sm-10">
                    <p class="form-control-plaintext">
                    {{ dataDetail.description }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-password-input"
                    class="col-sm-2 col-form-label"
                    >Create Date</label
                >
                <div class="col-sm-10">
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
                <div class="col-sm-10">
                    <p class="form-control-plaintext">
                    {{ dataDetail.updateDate }}
                    </p>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</div>
</template>

<script>
import { ShelfService } from "@/services/shelf.service.js";
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
    const response = await ShelfService.getDetail(this.token, this.idDetail);
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
