<template>
<div class="detail-user">
<index />
<div class="content-page">
    <div class="main-content">
    <div class="page-content">
        <div class="container-fluid">
        <div class="box-title">
            <h2>Detail User</h2>
            <div class=" float-right">
            <router-link to="/management/list-user" class="btn btn-dark" style="font-size: 13px;" v-if="userId != idDetail">
                Cancel
            </router-link>
            <router-link to="/home-page" class="btn btn-dark" style="font-size: 13px;" v-if="userId == idDetail">
                Cancel
            </router-link>
            <button
            v-if="userId == idDetail"
            @click="updateProfile"
            style="margin-left:5px; font-size: 13px;"
            class="btn btn-outline-primary"> <b-icon icon="pencil-square"></b-icon> Update Profile</button>
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
                    >User Name</label
                >
                <div class="col-sm-10">
                    <p class="form-control-plaintext">
                    {{ dataDetail.userName }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-email-input"
                    class="col-sm-2 col-form-label"
                    >Email</label
                >
                <div class="col-sm-10">
                    <p class="form-control-plaintext">
                    {{ dataDetail.email }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-email-input"
                    class="col-sm-2 col-form-label"
                    >Phone</label
                >
                <div class="col-sm-10">
                    <p class="form-control-plaintext">
                    {{ dataDetail.phone }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-email-input"
                    class="col-sm-2 col-form-label"
                    >Role Name</label
                >
                <div class="col-sm-10">
                    <p class="form-control-plaintext" v-for="role in dataDetail.roleName" :key="role">
                    {{ role }}
                    </p>
                </div>
                </div>
                <div class="form-group row mb-0">
                <label
                    for="horizontal-password-input"
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
import { UserService } from "@/services/user.service";
import index from "../../components/index.vue";
export default {
components: { index, },
name: "detail-user",
data() {
return {
    idDetail: this.$route.params.id,
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("userId"),
    dataDetail: {},
};
},

created () {
this.fetchData();
},

methods: {
async fetchData() {
    try {
    const response = await UserService.getDetail(this.token, this.idDetail);
    if (response.status == 200) {
        this.dataDetail = response.data;
    }
    } catch (error) {
    return error
    }
},
updateProfile() {
        this.$router.push({ name: "UpdateUser", params: { id: this.userId } });
    },
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
