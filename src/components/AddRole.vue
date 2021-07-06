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
    <div class="form-group">
        <label for="validationCustom01" style="display: flex;">Khai báo quyền <p style="color: red;">*</p></label>
    </div>
    <div class="form-group">
        <label for="validationCustom01" >Quyền sử dụng</label>
    </div>
</form>
</div>



<div class="card">
<div class="card-body">
<div class="row">
    <!-- ----------check box user---------->

    <div class="col-sm-3">
    <div class="form-group">
    <div class="checkAllUser">
    <b-form-checkbox 
    type="checkbox" 
    style="margin: 3px 6px 0px 0px!important;" 
    v-model="selectAllUser"
    >
    <label for="name">Quản lí User</label>
    </b-form-checkbox>
    <div style="display: flex; padding-left:20px"  v-for="dataUsers in dataUser" :key="dataUsers.id">
    <b-form-checkbox 
    type="checkbox" 
    style="margin: 3px 6px 0px 0px!important;" 
    :value="dataUsers.code" 
    v-model="selectUser"
    >
    <label for="name">{{dataUsers.name}}</label>
    </b-form-checkbox>
    </div>
    </div>
        </div>
    </div>
<!----------end check box user---------- -->

<!-- -- ----------check box app---------- -->
    <div class="col-sm-3">
        <div class="form-group">
            <div class="checkAllApp">
    <b-form-checkbox 
    type="checkbox" 
    style="margin: 3px 6px 0px 0px!important;" 
    v-model="selectAllApp"
    >
    <label for="name">Quyền ứng dụng quản lý App</label>
    </b-form-checkbox>
    <div style="display: flex; padding-left:20px"  v-for="dataApps in dataApp" :key="dataApps.id">
    <b-form-checkbox 
    type="checkbox" 
    style="margin: 3px 6px 0px 0px!important;" 
    :value="dataApps.code" 
    v-model="selectApp"
    >
    <label for="name">{{dataApps.name}}</label>
    </b-form-checkbox>
    </div>
    </div>
        </div>
    </div>
<!-- ----------end check box app----------  -->

<!-- ----------check box role---------- -->

    <div class="col-sm-3">
        <div class="form-group">
            <div class="checkAllRole">
    <b-form-checkbox 
    type="checkbox" 
    style="margin: 3px 6px 0px 0px!important;" 
    v-model="selectAllRole"
    >
    <label for="name">Quản lí phân quyền</label>
    </b-form-checkbox>
    <div style="display: flex; padding-left:20px"  v-for="dataRoles in dataRole" :key="dataRoles.id">
    <b-form-checkbox 
    type="checkbox" 
    style="margin: 3px 6px 0px 0px!important;" 
    :value="dataRoles.code"
    v-model="selectRole"
    >
    <label for="name">{{dataRoles.name}}</label>
    </b-form-checkbox>
    </div>
    </div>
        </div>
    </div>
    <!-- ----------end check box role------------>
    <!-- ---------- check box trans------------>

    <!-- ----------end check box trans------------>
        <div class="col-sm-3">
        <div class="form-group">
        <div class="checkAllTrans">
    <b-form-checkbox 
    type="checkbox" 
    style="margin: 3px 6px 0px 0px!important;" 
    v-model="selectAllTrans"
    >
    <label for="name">Quản lí phân quyền</label>
    </b-form-checkbox>
    <div style="display: flex; padding-left:20px"  v-for="dataTranss in dataTrans" :key="dataTranss.id">
    <b-form-checkbox 
    type="checkbox" 
    style="margin: 3px 6px 0px 0px!important;" 
    :value="dataTranss.code"
    v-model="selectTrans"
    >
    <label for="name">{{dataTranss.name}}</label>
    </b-form-checkbox>
    </div>
    </div>
        </div>
    </div>
        <!-- ----------end check box trans------------>

</div>
        
        
</div>
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
        code:"",
        name:"",
        description:"",
        dataPermission:{},
        selected:[],
        userIds: [],
        token: localStorage.getItem("token"),
        BASE_URL: this.$store.getters.BASE_URL,
        errorMessage:"",
        codePermissions:[],
        elementCheck:[],
        checkBoxPermission:[],
        elementCode:[],
        dataGroupPermiss:{},
        dataUser:{},
        dataApp:{},
        dataRole:{},
        dataTrans:{},
        selectRole:[],
        selectTrans:[],
        selectApp:[],
        selectUser:[],
        selectAll:[],
        
        }
        },
    computed:{
        selectAllTrans:{
            get:function () {
                return this.dataTrans ? this.selectTrans.length == this.dataTrans.length : false;
            },
            set: function (value) {
                var selectTrans = []
                if (value) {
                    this.dataTrans.forEach((role) => {
                        selectTrans.push(role.code)
                    });
                }
                this.selectTrans = selectTrans;
            }
        },
        selectAllRole:{
            get:function () {
                return this.dataRole ? this.selectRole.length == this.dataRole.length : false;
            },
            set: function (value) {
                var selectRole = []
                if (value) {
                    this.dataRole.forEach((role) => {
                        selectRole.push(role.code)
                    });
                }
                this.selectRole = selectRole;
            }
        },
        selectAllApp:{
            get:function () {
                return this.dataApp ? this.selectApp.length == this.dataApp.length : false;
            },
            set: function (value) {
                var selectApp = []
                if (value) {
                    this.dataApp.forEach((app) => {
                        selectApp.push(app.code)
                    });
                }
                this.selectApp = selectApp;
            }
        },
        selectAllUser:{
            get:function () {
                return this.dataUser ? this.selectUser.length == this.dataUser.length : false;
            },
            set: function (value) {
                var selectUser = []
                if (value) {
                    this.dataUser.forEach((user) => {
                        selectUser.push(user.code)
                    });
                }
                this.selectUser = selectUser;
            }
        }
    },
        
        methods:{
        async handleAddRole(){
            const allPermission = this.selectRole.concat(this.selectUser.concat(this.selectApp.concat(this.selectTrans)))
            const data = {
            name: this.name,
            description: this.description,
            codePermissions: allPermission
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