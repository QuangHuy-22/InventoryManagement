<template>
    <div>
        <index />
    <div class="content-page">
    <div class="main-content">
<div class="page-content">
<!-- <div class="container-fluid"> -->
    <!-- box-title -->
    <div class="box-title box-title-fix" style="font-size:12px">
        <h2 class="name-page">Thêm mới nhóm quyền</h2>
        <div class="btn-group float-right">
            <form class="buttonAddUser" @submit.prevent="handleAddRole" >
        <router-link to="/list-role" class="btn btn-secondary" style="font-size: 12px;">Hủy</router-link>
        <button type="submit" class="btn btn-primary" style="font-size: 13px;margin-left: 5px;">Thêm mới</button>
        <div class="showAddUser" >
        <b-modal id="bv-modal-example-add-role" hide-footer hide-header >
            <b-col class="iconLogout mb-2">
            <div class="mb-img mb-4">
                        <span><img src="../assets/images/sussecc.svg" alt=""></span>
                    </div>
            </b-col>
        <div class="d-block text-center" >
        <h3 
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Thêm mới thông tin thành công</h3>
        </div>
        <div class="buttonSubmitLogout">
            <router-link to="/list-role">
        <button class="buttonOK mt-3"  style="font-size: 13px;">OK</button>
        </router-link>
        </div>
        </b-modal>
        <b-modal id="bv-modal-example-error-add-role" hide-footer hide-header >
            <b-col class="iconLogout mb-2">
    <b-icon icon="x-circle" class="iconsBox" style="color: red!important;"></b-icon>
    </b-col>
        <div class="d-block text-center" >
            <h5>Thêm mới thất bại</h5>
        <span>{{ this.errorMessage }}</span>
        </div>
        <div class="buttonSubmitLogout">
            <!-- <router-link to="/list-role"> -->
        <button class="buttonOK mt-3" @click="$bvModal.hide('bv-modal-example-error-add-role')"  style="font-size: 13px;">OK</button>
        <!-- </router-link> -->
        </div>
        </b-modal>
        </div>
        </form>
        </div>
    </div>
    
    <!-- box-content -->

<div class="cardAdd form-fix">
<div class="row">
    <div class="col-sm-12">
        <div class="card-body" >
    <div class="col-sm-6">
<form class="needs-validation" >
    <div class="form-group">
        <label for="validationCustom01" style="display: flex;">Tên nhóm quyền <p style="color: red;">*</p></label>
        <v-text-field 
        type="text" 
        class="form-control" 
        style="padding: 3px 0px!important;"
        id="validationCustom01" 
        v-model="name"
        placeholder="" 
        value="" 
        required 
        >
        </v-text-field>
        <div class="invalid-feedback">
            Please provide a valid city.
        </div>
    </div>
    <div class="form-group">
        <label for="validationCustom01" style="display: flex;">Mô tả<p style="color: red;">*</p></label>
        <v-text-field 
        type="text" 
        class="form-control" 
        style="padding: 3px 0px!important;"
        id="validationCustom01" 
        v-model="description"
        placeholder="" 
        value="" 
        required 
        >
        </v-text-field>
        <div class="invalid-feedback">
            Please provide a valid city.
        </div>
    </div>
</form>
</div>



<!-- ---------end check box all--------->

    </div>
        </div>
    </div>
<!-- </div> -->
</div>
    <!-- Modal Thêm mới -->
</div>
</div>
</div>
</div>
    <!-- </div> -->
</template>

<script>
import index from '../components/index.vue'
import { RoleService } from "@/services/role.service";
export default {
components: { index },
    name:"add-role",
    data(){
        return{
        name:"",
        description:"",
        token: localStorage.getItem("token"),
        errorMessage:"",
        
        }
        },
        
        methods:{
        async handleAddRole(){
            const data = {
            name: this.name,
            description: this.description,
            }
            try{
                const response = await  RoleService.createRole(this.token, data)
                if (response.status == 200) {
                    this.$bvModal.show("bv-modal-example-add-role")
                }
                else if (response.status == 400) {
                this.$bvModal.show("bv-modal-example-error-add-role")
                this.errorMessage = response.data.message
            }
            else(
            this.$bvModal.show("bv-modal-example-error-add-role")
            )

            }
        catch(error){
        console.log(error);
        }
        },
        async fetchData(){
    try {
        const response = await RoleService.getGroupPermisstion(this.token)
        if (response.status == 200) {
            this.dataGroupPermiss = response.data
            this.dataUser = response.data[0].listPermission
            this.dataApp =  response.data[1].listPermission
            this.dataRole = response.data[2].listPermission
            this.dataTrans = response.data[3].listPermission
        }
    }catch(error){
        console.log(error.response);
    }
    },
    },
    mounted() {
    this.fetchData()
},
    }

</script>

<style scoped>
.content-page{
    background-color: #ffff!important; 
    padding-left:230px!important;
    
}
.main-content{
    background-color: #F8F8FB!important;
    padding:20px!important;
    margin-top: 70px!important;
}
.card-body{
    background-color: #fff;
}
.allSelect{
        display: flex;
    width: 1000px;
    justify-content: space-between;
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