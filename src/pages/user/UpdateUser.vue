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
    <h2 class="title-page">Cập nhật User</h2>
    <div class="btn-group float-right">
        <form class="buttonLogout"  @submit.prevent="handleUpdateUser"  >
        <router-link to="/list-user">
        <b-button  
        id="show-btn" 
        style="font-size: 13px; margin-right: 5px;" variant="outline-primary" 
        v-b-modal.modal-center >
            Hủy</b-button>
            </router-link>
        <b-button  
        id="show-btn" 
        type="submit"
        style="font-size: 13px;" variant="outline-primary" 
        v-b-modal.modal-center >
        <b-icon icon="pencil-square" ></b-icon>
        Cập nhật</b-button>
        <div class="showLogout" >
        <b-modal id="bv-modal-example-3" hide-footer hide-header >
            <b-col class="iconLogout mb-2">
            <div class="mb-img mb-4">
                        <span><img src="@/assets/images/sussecc.svg" alt=""></span>
                    </div>
            </b-col>
        <div class="d-block text-center" >
        <h3 
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Cập nhật thông tin thành công</h3>
        </div>
        <div class="buttonSubmitLogout">
            <router-link :to=" this.userCheck == this.username ?  '/' : '/list-user' " >
        <button  class="buttonOK mt-3"  style="font-size: 13px;">OK</button>
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
                <h4 class="card-title mb-3" style="font-size: 15px;">Thông tin nhân viên</h4>
                <form class="needs-validation" novalidate  >
                    <div class="form-group">
                        <label for="validationCustom01">Họ và tên</label>
                        <v-text-field 
                        type="text" 
                        class="form-control" 
                        style="font-size: 13px; padding: 0px 5px;"
                        :error-messages="nameErrors" 
                        placeholder="" 
                        v-model="fullName" 
                        required >
                        </v-text-field>
                        <div class="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6">
                            <div class="form-group" style="margin-top: 4px;">
                                <label for="validationCustom01">Email</label>
                                <input type="text" class="form-control" style="font-size: 13px; padding: 0px 5px;" disabled="disabled" placeholder="" v-model="username" required>
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
                                style="font-size: 13px; padding: 0px 5px;"  
                                placeholder="" 
                                v-model="phoneNumber" 
                                :error-messages="phoneErrors"
                                required>
                                </v-text-field>
                                <div class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                        </div>
                    </div>
                    <label for="validationCustom04">Vai trò</label>
                    <b-select class="form-control select2" style="font-size: 13px;" v-model="position">
                        <option value="OPERATOR">Vận hành</option>
                        <option value="ACCOUNTANT">Kế toán</option>
                        <option value="TECHNICIAN">Kĩ Thuật</option>
                        <option value="BOD">BOD</option>
                    </b-select>
                </form>
            </div>
        </div>
    </div>
            
</div>
<!-- Modal Cập nhật -->
    <!-- ----------modal error-------->
<b-modal id="bv-modal-example-error-update-user" hide-footer hide-header >
<b-col class="iconLogout mb-2">
<b-icon icon="x-circle" class="iconsBox" style="color: red!important;"></b-icon>
</b-col>
<div class="d-block text-center" >
<h3 
style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Thất bại</h3>
<span>{{ this.errorMessage }}</span>
</div>
<div class="buttonSubmitLogout">
<!-- <router-link to="/list-role"> -->
<button class="buttonOK mt-3" @click="$bvModal.hide('bv-modal-example-error-update-user')"  style="font-size: 13px;">OK</button>
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
import index from '../../components/index.vue';
import { required, } from "vuelidate/lib/validators";
export default {
components: { index },
    name:"update-user",
    data(){
        return{
            idUser: this.$route.params.id,
            dataUser: {},
            token: localStorage.getItem("token"),
            fullName: "",
            username: "",
            errorMessage:"",
            phoneNumber: "",
            position:"",
            regName: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý ]+$/,
            regPhone:/(059|099|058|056|092|078|076|077|079|070|093|090|089|082|081|085|084|083|088|094|091|039|038|037|036|035|034|033|032|098|097|096|086)+([0-9]{7})\b/,
            userCheck: this.$store.getters.USERNAME,
            BASE_URL: this.$store.getters.BASE_URL,
        }
    },
    validations: {
            
                fullName: { required },
                phoneNumber: { required },
                username: { required },
            
        },
    methods:{
            async handleUpdateUser(){
                const data = {
                fullName: this.fullName,
                phoneNumber: this.phoneNumber,
                position: this.position,
                rolesNameList:[],
                username: this.username
        }
        try{
            const response = await UserService.updateUser(this.token, data, this.idUser)
            if(response.status == 200){
                this.$bvModal.show('bv-modal-example-3')
            }
            else if (response.status == 400) {
                this.$bvModal.show("bv-modal-example-error-update-user")
                this.errorMessage = response.data.message
            }
            else(
            this.$bvModal.show("bv-modal-example-error-update-user")
            )
        }
        catch(error){
            return error.response;
        }
        },
    async fetchData(){
            const response = await UserService.getDetail(this.token ,this.idUser) 
            if (response.status == 200) {
                this.dataUser = response.data;
        this.fullName = response.data.fullName
        this.username = response.data.username
        this.phoneNumber = response.data.phoneNumber
        this.position = response.data.position
            }
        }
    },
    computed:{
    phoneErrors() {
    const errors = [];
    if (!this.$v.phoneNumber) return errors;
        return this.phoneNumber == "" ? "Bắt buộc điền SĐT" : this.regPhone.test(this.phoneNumber) ? "" : "SĐT chưa hợp lệ";
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
    },
    mounted() {
        this.fetchData()

    
},
};
</script>

<style>
.theme--light.v-messages{
    color: #D8000C!important;
}
.v-messages {
    color: #D8000C!important;
}
.content-page{
    background-color: #ffff; 
    padding-left:230px
    
}
.main-content{
    background-color: #F8F8FB!important;
    padding:20px;
    margin-top: 70px!important;
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
@media (max-width: 576px) {
.content-page,
.container-sm {
max-width: 540px;
padding-left: 0px!important;
}
#sidebar-menu{
display: none!important;;
}
.title-page{
    font-size: 12px!important;
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
