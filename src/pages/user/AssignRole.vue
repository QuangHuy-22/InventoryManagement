<template>
<div class="authorized-role">
    <index />
<div class="content-page">
<div class="main-content">
<div class="page-content">
<div class="container-fluid" style="padding-right: 35px;">
<!-- InstanceBeginEditable name="EditRegion1" -->

<!-- box-title -->
<div class="box-title">
<h2>Gán nhóm quyền</h2>
<div class=" float-right">
<form action="#" @submit.prevent="handleAssignRole">
    <router-link to="/management/list-user">
<a class="btn btn-dark"  style="font-size: 13px;"> Hủy </a>
</router-link>
<button style="margin-left: 5px;font-size: 13px;" type="submit" class="btn btn-primary" data-toggle="modal" >Cập nhật
</button>
</form>
<b-modal id="bv-modal-example-assign" hide-footer hide-header >
            <b-col class="iconLogout mb-2">
            <div class="mb-img mb-4">
                        <span><img src="../../assets/images/sussecc.svg" alt=""></span>
                    </div>
            </b-col>
        <div class="d-block text-center" >
        <h3 
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Cập nhật thông tin thành công</h3>
        </div>
        <div class="buttonSubmitLogout">
            <router-link to="/management/list-user" >
        <button  class="buttonOK mt-3"  style="font-size: 13px;">OK</button>
        </router-link>
        <!-- <button class="buttonNo mt-3" @click="$bvModal.hide('bv-modal-example')" style="font-size: 13px;" >Không</button> -->
        </div>
        </b-modal>
</div>
</div>

<!-- box-content -->
<div class="row">
<div class="col-sm-12">
<div class="card">
<div class="card-body">
<form class="needs-validation" novalidate>
<div class="col-md-6" style="padding: 0px;">
<div class="form-group" >
    <label for="validationCustom01">Tên đăng nhập</label>
    <input type="text" class="form-control" style="font-size: 13px; padding: 0px 5px;" disabled="disabled" placeholder="" v-model="username" required>
    <div class="invalid-feedback">
        Please provide a valid city.
    </div>
</div>
</div>

<div class="form-group form-erross">                                                                                                  
    <label for="validationCustom01">Khai báo quyền <span class="text-danger"><sup>*</sup></span></label>
    <div class="form-row">
        <div class="col-sm-3" v-for="datas in dataRole" :key="datas.id">
            <div class="form-group" style="padding:0px;">
                <div class="custom-control custom-checkbox" >
                    <input type="checkbox" :id="datas.id" :value="datas.code" v-model="listCodeRole" >
                    <label style="padding-left:7px;" for="invalidCheck">{{datas.name}}</label>
                </div>
            </div>
        </div>
    </div>
</div>
    <!-- ------------end all role---------- -->
</form>
</div>
</div>

</div>
</div>
</div> <!-- container-fluid -->
</div>

</div>
</div>
</div>
</template>

<script>
import { UserService } from "@/services/user.service";
import { RoleService } from "@/services/role.service";
import axios from 'axios'
import index from '../../components/index.vue'
export default {
components: { index },
    data(){
        return{
            idUser: this.$route.params.id,
            token: localStorage.getItem("token"),
            username:"",
            dataUser:{},
            BASE_URL: this.$store.getters.BASE_URL,
            dataRole:{},
            assignRole:[],
            listPermissions:[],
            listCodeRole:[],
            roleName:""
        }
    },
        methods:{
            handleAssignRole(){
                const data = {
                listPermissions: [],
                rolesCodeList: this.listCodeRole
                }
                const headers =  {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "User-Agent": "Web",
                Authorization: `Bearer ${this.token}`,
                }
                
            axios({
                method:'put',
                url:`${this.BASE_URL}/api/users/edit-user/${this.idUser}/change-role`,
                headers: headers,
                data: data
            })
            .then((response) => {
                if (response.status == 200) {
                    this.$bvModal.show("bv-modal-example-assign")
                }
            })
            .catch((error) => {
                alert(error.response.data.message)
                return error.response;
            });
            },
            async fetchDataUser(){
                    const response = await UserService.getDetail(this.token ,this.idUser) 
                    if (response.status == 200) {
                        this.dataUser = response.data;
                        this.username = response.data.username
                        this.listCodeRole = response.data.rolesCodeList
                    }
                },
            async fetchDataRole(){
            try {
                const response = await RoleService.getList(this.token, this.roleName)
                if (response.status == 200) {
                    this.dataRole = response.data.data;
                if (this.rolesCodeList == this.dataRole) {
                    return 'checked'
                }
                }
            }catch(error){
                console.log(error.response);
            }
            },
        },
    mounted() {
    this.fetchDataUser()
    this.fetchDataRole()
},
}
</script>

<style scoped>
.content-page{
    background-color: #ffff; 
    padding-left:230px
    
}
.main-content{
    background-color: #F8F8FB!important;
    padding:20px;
    margin-top: 70px!important;
}
.col-sm-3{
    padding: 0px!important;
}
</style>