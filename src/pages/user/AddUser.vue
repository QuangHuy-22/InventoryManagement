<template>
<div class="add-user">
<index />
<div class="content-page">
    <div class="main-content">
<div class="page-content">
<div class="container-fluid">
<!-- InstanceBeginEditable name="EditRegion1" -->
    <!-- box-title -->
    <div class="box-title box-title-fix">
        <h2>Thêm mới USER</h2>
        <div class="btn-group float-right">
        <form class="buttonAddUser" @submit.prevent="handleAddUser" >
        <router-link to="/list-user" class="btn btn-secondary" style="font-size: 13px;"> Hủy</router-link>
        <button @click="submit" type="submit" class="btn btn-primary" data-toggle="modal" data-target=".Risk_Permission_Update" style="font-size: 13px;margin-left: 5px;">Thêm mới</button>
        <div class="showAddUser" >
        <b-modal id="bv-modal-example-3" hide-footer hide-header >
            <b-col class="iconLogout mb-2">
            <div class="mb-img mb-4">
                        <span><img src="@/assets/images/sussecc.svg" alt=""></span>
                    </div>
            </b-col>
        <div class="d-block text-center" >
        <h3 
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Thêm mới thông tin thành công</h3>
        <span>{{fullName}}</span>
        <span style="display: block;word-break: break-word;">{{username}}</span>
        </div>
        <div class="buttonSubmitLogout">
            <router-link to="/list-user">
        <button class="buttonOK mt-3"  style="font-size: 13px;">OK</button>
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
    <div class="col-sm-12">
        <div class="card-body">
            <h4 class="card-title mb-3">Thông tin nhân viên</h4>
            <form class="needs-validation" >
            <div class="col-sm-6" >
                <div class="form-group form-erross">
                    <label for="validationCustom01">User Name</label>
                    <v-text-field 
                    type="text" 
                    class="form-control" 
                    style="padding: 3px 0px!important;"
                    id="validationCustom01" 
                    placeholder="" 
                    value="" 
                    required 
                    v-model="dataUser.userName">
                    </v-text-field>
                </div>
                <div class="form-group">
                <label for="validationCustom01">Password</label>
                <v-text-field 
                class="form-control"
                style="padding: 1px 0px!important; font-size: 14px; padding-bottom: 0px!important; "
                id="validationCustom01" 
                placeholder="******" 
                @click:append="show1 = !show1"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                value="" 
                required 
                v-model="dataUser.password">
                </v-text-field>
                <div class="invalid-feedback">
                Please provide a valid city.
                </div>
                </div>
                <div class="form-group form-erross">
                    <label for="validationCustom01">Name</label>
                    <v-text-field 
                    type="text" 
                    class="form-control" 
                    style="padding: 3px 0px!important;"
                    id="validationCustom01" 
                    placeholder="" 
                    value="" 
                    required 
                    v-model="dataUser.name">
                    </v-text-field>
                    <!-- <div class="invalid-feedback">
                        Please provide a valid city.
                    </div> -->
                </div>
                <div class="form-row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="validationCustom01">Email</label>
                            <v-text-field 
                            type="email" 
                            class="form-control"
                            style="padding: 3px 0px!important;"
                            id="validationCustom01" 
                            :error-messages="emailErrors"
                            placeholder="" 
                            value="" 
                            required 
                            v-model="dataUser.email">
                            </v-text-field>
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="validationCustom02">Số điện thoại</label>
                            <v-text-field 
                            type="text" 
                            class="form-control" 
                            style="padding: 3px 0px!important;"
                            id="validationCustom02" 
                            :error-messages="phoneErrors"
                            placeholder="" 
                            value="" 
                            required 
                            v-model="dataUser.phone">
                            </v-text-field>
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                    </div>
                </div>
                <label for="validationCustom04">Branch Id</label>
                <b-select class="form-control select2"  v-model="dataUser.branchId">
                    <option v-for="data in dataBranch" :key="data.id" :value="data.id">{{data.name}}</option>
                </b-select>
                </div>
                <div class="form-group form-erross">
                <label for="validationCustom01">Khai báo quyền <span class="text-danger"><sup>*</sup></span></label>
                <div class="form-row">
                <div class="col-sm-3" v-for="datas in dataRole" :key="datas.id"  >
                <div class="form-group" >
                <div class="custom-control custom-checkbox" >
                    <input type="checkbox"  required :id="datas.id" :value="datas.id" v-model="dataUser.roles" >
                    <label style="padding-left:7px;" for="invalidCheck">{{datas.roleName}}</label>
                </div>
                </div>
                </div>
                </div>
                </div>
            </form>
        </div>
    </div>
</div>
        
</div>
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
</div>
</div>
</div>
</div>
</div>
</template>

<script>
import { RoleService } from "@/services/role.service";
import { UserService } from "@/services/user.service";
import { BranchService } from "@/services/branch.service";
import index from '../../components/index.vue'
import { required, } from "vuelidate/lib/validators";
export default {
name:"add-user",
components: { 
    index,
},
    data(){
        return{
        value:"",
        password:"",
        fullName:"",
        username:"",
        phoneNumber:"",
        position: "",
        errorMessage:"",
        token : localStorage.getItem('token'),
        BASE_URL: this.$store.getters.BASE_URL,
        error:"",
        dataUser: {
            roles:[]
        },
        reg: /^[\w-._+%]+@(mpos|vimo|nextpay|gmail)\.vn|.com$/,
        reg1: /^[\w-._+%]+@(peacesoft)\.net$/,
        regName: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý ]+$/,
        regPhone:/(059|099|058|056|092|078|076|077|079|070|093|090|089|082|081|085|084|083|088|094|091|039|038|037|036|035|034|033|032|098|097|096|086)+([0-9]{7})\b/,
        // showAdd: false
        dataRole:{},
        dataBranch:{},
        listCodeRole:[],
        show1: false,
        search:{
            page:1,
            size:10
        }
        }
    },
    validations: {
            
                fullName: { required },
                phoneNumber: { required },
                username: { required },
                position: { required },
            
        },
    methods:{
        acceptNumber() {
    var x = this.phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    this.phoneNumber = !x[2] ? x[1] : x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '');
    },
    submit() {
    this.$v.$touch()
    },
        async handleAddUser(){
        try{
            const response = await UserService.createUser(this.token, this.dataUser)
            if (response.status == 200) {
                this.$bvModal.show("bv-modal-example-3")
                this.dataUser = response.data;
                console.log(response.status);
            }
            else if (response.status == 400) {
                if (response.data.message == "" ) {
                    this.errorMessage = "Bạn phải điền đủ thông tin"
                }
                else{
                    this.errorMessage = response.data
                }
                this.$bvModal.show("bv-modal-example-error-add-user")
            }
            else{

                this.$bvModal.show("bv-modal-example-error-add-user")
            }
            }
        catch(error){
            return error.response;
        }
    },
    async fetchDataRole(){
    try {
        const response = await RoleService.getList(this.token, this.search)
        if (response.status == 200) {
            this.dataRole = response.data.listData
        }
    }catch(error){
        console.log(error.response);
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
    mounted() {
    this.fetchDataRole()
    this.fetchDataBranch()
},
    computed:{
        emailErrors() {
    const errors = [];
    if (!this.$v.username.$dirty) return errors;
    return this.username == ""
        ? "Email bắt buộc nhập"
        : this.reg.test(this.username) || this.reg1.test(this.username)
        ? ""
        : "E-mail sai định dạng";
    },
        nameErrors() {
    const errors = [];
    if (!this.$v.fullName.$dirty) return errors;
    return this.fullName == ""
        ? "Họ và Tên bắt buộc nhập"
        : this.regName.test(this.fullName)
        ? ""
        : "Họ và tên không được có kí tự và số";
    },
        phoneErrors() {
    const errors = [];
    if (!this.$v.phoneNumber.$dirty) return errors;
        return this.phoneNumber == "" ? "SĐT bắt buộc nhập" : this.regPhone.test(this.phoneNumber.replace(/ +/g, "")) ? "" : "SĐT chưa hợp lệ";
    },
        positonErrors() {
    const errors = [];
    if (!this.$v.position.$dirty) return errors;
        return this.position == "" ? "Trường thông tin không được để trống" : ""
    },
    }
}
</script>
<style  scoped>
.content-page{
    background-color: #ffff!important; 
    padding-left:230px!important;
    
}
.main-content{
    background-color: #F8F8FB!important;
    padding:20px!important;
    margin-top: 70px!important;
}
.add-user{
    background-color: #F8F8FB;
}
.page-content{
box-sizing:border-box;
color: rgb(73, 80, 87);
display: block;
font-family: roboto;
font-size: 13px;
font-weight: 400;
line-height :19.5px;
text-align: left;
text-size-adjust: 100%;
width: 1093px;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
width: 100%;
}
.cardAdd{
    background-color: white;
}
.modal-body{
    padding: 0px!important;
}
.buttonOK{
    color: #fff;
    background-color: #008BF4!important;
    border-color: #008BF4!important;
    min-width: 110px;
    margin: 8px;
    padding-top: 7.5px;
    padding-bottom: 7.5px;
    border-radius: .25rem
}
.buttonAdd{
font-size: 13px!important;
color: #008BF4!important;
border: 1px solid #008BF4!important;
padding: 7px!important;
text-transform: none!important;
font-weight: normal!important;
}
.buttonAdd:hover{
    color: #fff!important;
    background-color: #008BF4!important;
}
@media (max-width: 576px) {
.content-page,
.container-sm {
max-width: 540px;
padding-left: 0px!important;
}
#sidebar-menu{
display: none!important;;
}
.name-page, 
.btn{
    font-size: 10px;
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