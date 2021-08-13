<template>
<div class="update-user" style="">
<index />
<div class="content-page">
    <div class="main-content">
    <div class="page-content">
        <div class="container-fluid">
        <!-- InstanceBeginEditable name="EditRegion1" -->

        <!-- box-title -->
        <div class="box-title box-title-fix">
            <h2 class="title-page">Update User</h2>
            <div class="btn-group float-right">
            <form class="buttonLogout" @submit.prevent="handleUpdateUser">
                <router-link to="/home-page" v-if="userId == idUser">
                <b-button
                    id="show-btn"
                    style="font-size: 13px; margin-right: 5px;"
                    variant="outline-primary"
                    v-b-modal.modal-center
                >
                    Cancel</b-button
                >
                </router-link>
                <router-link to="/management/list-user" v-if="userId != idUser">
                <b-button
                    id="show-btn"
                    style="font-size: 13px; margin-right: 5px;"
                    variant="outline-primary"
                    v-b-modal.modal-center
                >
                    Cancel</b-button
                >
                </router-link>
                <b-button
                id="show-btn"
                type="submit"
                style="font-size: 13px;"
                variant="outline-primary"
                v-b-modal.modal-center
                >
                <b-icon icon="pencil-square"></b-icon>
                Update</b-button
                >
                <div class="showLogout">
                <b-modal id="bv-modal-example-3" hide-footer hide-header>
                    <b-col class="iconLogout mb-2">
                    <div class="mb-img mb-4">
                        <span
                        ><img src="@/assets/images/sussecc.svg" alt=""
                        /></span>
                    </div>
                    </b-col>
                    <div class="d-block text-center">
                    <h3
                        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;"
                    >
                        Update Successful!
                    </h3>
                    </div>
                    <div class="buttonSubmitLogout">
                    <router-link to="/home-page" v-if="userId == idUser">
                        <button
                        class="buttonOK mt-3"
                        style="font-size: 13px;"
                        >
                        OK
                        </button>
                    </router-link>
                    <router-link to="/management/list-user" v-if="userId != idUser">
                        <button
                        class="buttonOK mt-3"
                        style="font-size: 13px;"
                        >
                        OK
                        </button>
                    </router-link>
                    <!-- <button class="buttonNo mt-3" @click="$bvModal.hide('bv-modal-example')" style="font-size: 13px;" >Không</button> -->
                    </div>
                </b-modal>
                </div>
            </form>
            </div>
        </div>

        <!-- box-content -->
        <div class="card form-fix">
            <div class="row">
            <div class="col-sm-6">
                <div class="card-body">
                <h4 class="card-title mb-3" style="font-size: 15px;">
                    Information User
                </h4>
                <form class="needs-validation" novalidate>
                    <div class="form-group">
                    <label for="validationCustom01">Name</label>
                    <v-text-field
                        type="text"
                        class="form-control"
                        style="font-size: 13px; padding: 0px 5px;"
                        placeholder=""
                        v-model="dataUser.name"
                        required
                    >
                    </v-text-field>
                    <div class="invalid-feedback">
                        Please provide a valid city.
                    </div>
                    </div>
                    <div class="form-row">
                    <div class="col-md-6">
                        <div class="form-group" style="margin-top: 4px;">
                        <label for="validationCustom01">User Name</label>
                        <input
                            type="text"
                            class="form-control"
                            style="font-size: 13px; padding: 0px 5px;"
                            disabled="disabled"
                            placeholder=""
                            v-model="dataUser.userName"
                            required
                        />
                        <div class="invalid-feedback">
                            Please provide a valid city.
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                        <label for="validationCustom02"
                            >Email</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            style="font-size: 13px; padding: 0px 5px;"
                            disabled="disabled"
                            placeholder=""
                            v-model="dataUser.email"
                            required
                        />
                        <div class="invalid-feedback">
                            Please provide a valid city.
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="form-group">
                    <label for="validationCustom01">Phone</label>
                    <v-text-field
                        type="text"
                        class="form-control"
                        style="font-size: 13px; padding: 0px 5px;"
                        placeholder=""
                        v-model="dataUser.phone"
                        required
                    >
                    </v-text-field>
                    <div class="invalid-feedback">
                        Please provide a valid city.
                    </div>
                    </div>
                    <div class="form-group">
                    <label for="validationCustom04">Branch Id</label>
                <b-select class="form-control select2"  v-model="dataUser.branchId" :disabled="disabledRole">
                    <option v-for="data in dataBranch" :key="data.id" :value="data.id">{{data.name}}</option>
                </b-select>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        <!-- Modal Cập nhật -->
        <!-- ----------modal error-------->
        <b-modal
            id="bv-modal-example-error-update-user"
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
            <h3
                style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;"
            >
                Error!
            </h3>
            <span>{{ this.errorMessage }}</span>
            </div>
            <div class="buttonSubmitLogout">
            <!-- <router-link to="/list-role"> -->
            <button
                class="buttonOK mt-3"
                @click="$bvModal.hide('bv-modal-example-error-update-user')"
                style="font-size: 13px;"
            >
                OK
            </button>
            <!-- </router-link> -->
            </div>
        </b-modal>
        <!-- ----------end modal error-------->
        </div>
    </div>
    <!-- End Page-content -->
    </div>
    <!-- end main content-->
</div>
</div>
</template>

<script>
import { UserService } from "@/services/user.service";
import index from "../../components/index.vue";
import { required } from "vuelidate/lib/validators";
import { BranchService } from "@/services/branch.service";
export default {
components: { index },
name: "update-user",
data() {
return {
    idUser: this.$route.params.id,
    dataUser: {},
    token: localStorage.getItem("token"),
    roleName: localStorage.getItem("roleName"),
    userId: localStorage.getItem("userId"),
    fullName: "",
    username: "",
    errorMessage: "",
    phoneNumber: "",
    position: "",
    regName: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý ]+$/,
    regPhone: /(059|099|058|056|092|078|076|077|079|070|093|090|089|082|081|085|084|083|088|094|091|039|038|037|036|035|034|033|032|098|097|096|086)+([0-9]{7})\b/,
    userCheck: this.$store.getters.USERNAME,
    BASE_URL: this.$store.getters.BASE_URL,
    search:{
        page:1,
        size:20
    },
    dataBranch:{},
};
},
validations: {
fullName: { required },
phoneNumber: { required },
username: { required },
},
methods: {
async handleUpdateUser() {
    try {
    const response = await UserService.update(
        this.token,
        this.dataUser,
        this.idUser
    );
    if (response.status == 200) {
        this.$bvModal.show("bv-modal-example-3");
    } else if (response.status == 400) {
        this.$bvModal.show("bv-modal-example-error-update-user");
        this.errorMessage = response.data;
    } else this.$bvModal.show("bv-modal-example-error-update-user");
    } catch (error) {
    return error.response;
    }
},
async fetchData() {
    const response = await UserService.getDetail(this.token, this.idUser);
    if (response.status == 200) {
    this.dataUser = response.data;
    }
},
   async fetchDataBranch(){
    try {
        const response = await BranchService.getList(this.token, this.search)
        if (response.status == 200) {
            this.dataBranch = response.data.listData
        }
    }catch(error){
        console.log(error.response);
    }
    },
},
computed: {
phoneErrors() {
    const errors = [];
    if (!this.$v.phoneNumber) return errors;
    return this.phoneNumber == ""
    ? "Bắt buộc điền SĐT"
    : this.regPhone.test(this.phoneNumber)
    ? ""
    : "SĐT chưa hợp lệ";
},
nameErrors() {
    const errors = [];
    if (!this.$v.fullName) return errors;
    return this.fullName == ""
    ? "Bắt buộc điền họ và tên"
    : this.regName.test(this.fullName)
    ? ""
    : "Họ và tên không được có kí tự và số";
},
disabledRole(){
    return !this.roleName.includes("ADMIN")
}
},
mounted() {
this.fetchData();
this.fetchDataBranch()
},
};
</script>

<style>
.theme--light.v-messages {
color: #d8000c !important;
}
.v-messages {
color: #d8000c !important;
}
.content-page {
background-color: #ffff;
padding-left: 230px;
}
.main-content {
background-color: #f8f8fb !important;
padding: 20px;
margin-top: 70px !important;
}
.buttonOK {
color: #fff;
background-color: #008bf4 !important;
border-color: #008bf4 !important;
min-width: 110px;
margin: 8px;
padding-top: 7.5px;
padding-bottom: 7.5px;
border-radius: 0.25rem;
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
.title-page {
font-size: 12px !important;
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
