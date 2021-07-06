<template>
    <div class="list-role">
        <index />
        <div class="content-page">
            <div class="main-content">
<div class="page-content">
<!-- <div class="container-fluid"> -->
    <!-- InstanceBeginEditable name="EditRegion1" -->
    <!-- box-title -->
    <div class="box-title">
        <h2>Quản lý nhóm quyền</h2>
        <router-link to="/list-role/add-role" >
        <div class="btn-group float-right" :class=" this.DATA_PERMISSION.includes('ADD_ROLE') ? '' : 'd-none'" >
            <Button type="submit" class="btn btn-outline-primary" style="font-size: 13px;background-color: #EBF6FF;" data-toggle="modal" data-target=".Risk_QL-User_add"><b-icon icon="plus-circle" ></b-icon> Thêm mới</button>
        </div>
    </router-link>
    </div>
    <!-- box-fillter -->
    <form action="#" @submit.prevent="submitForm"> 
    <div class="box-fillter mb-3">
    <div class="form-row">
    <div class="col-md-2 col-sm-4">
        <div class="bf-detail">
            <input 
            type="text" 
            class="form-control" 
            id="formrow-firstname-input" 
            placeholder="Tên nhóm quyền"
            v-model.trim="search.roleName"
            >
        </div>
    </div>

    <div class="btn-fillter" style="margin-top: 12px;">
    <div class="bf-detail">
    <v-btn 
    type="submit" 
    class="btn btn-info"  
    style="font-size: 13px; margin-right: 5px; color:white;"
    >Lọc</v-btn>
    <v-btn type="button" class="btn btn-gray" @click="handleUnFind" style="font-size: 13px; margin-right: 5px;color:white;background-color: gray;">Bỏ lọc</v-btn>
    <v-btn type="button" class="btn btn-success" style="font-size: 13px; margin-right: 5px;color: white;"><b-icon icon="file-earmark-excel"  ></b-icon></v-btn>
    </div>
    </div>
    </div>
    </div>
    </form>
    <!-- box-content -->
<div class="card"  >
<div class="card-body">
<div class="table-responsive">
    <table class="table table-striped table-bordered mb-0" v-show="listRole">
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên nhóm quyền</th>
                <th>Mã nhóm quyền</th>
                <th>Mô tả</th>
                <th>Thao tác</th>
            </tr>
        </thead>
        <tbody>
<tr v-for="(dataRoles, itemObjKey) in dataRole" :key="dataRoles.id" >
<td :class="dataRoles.draft == true ? 'text-danger' : ''"> {{ search.size * (search.page - 1) + itemObjKey + 1 }}</td>
<td :class="dataRoles.draft == true ? 'text-danger' : ''">{{ dataRoles.name}}</td>
<td :class="dataRoles.draft == true ? 'text-danger' : ''">{{ dataRoles.code }}</td>
<td :class="dataRoles.draft == true ? 'text-danger' : ''">{{ dataRoles.description}}</td>
<!-- <td>ba chấm</td> -->
<td >
        <b-dropdown right text="" variant="none" class="three-dot" no-caret>
        <template #button-content>
        <b-icon icon="three-dots-vertical" ></b-icon>
            </template>
            <div style="font-size: 13px;">
        <b-dropdown-item @click="update(dataRoles.code)">
            <!-- :class=" this.DATA_PERMISSION.includes() ? '' : 'd-none'" -->
            Cập nhật
        </b-dropdown-item>
        <b-dropdown-item  @click="showDelete(dataRoles.id)"  >
            <!-- :class=" this.DATA_PERMISSION.includes('DELETE_ROLE') ? '' : 'd-none'" -->
            Xóa
            </b-dropdown-item>
        </div>
        <!-- ----modal delete role------- -->
        <div class="showDelete" >
<b-modal :id="dataRoles.id" hide-footer hide-header   >
    <b-col class="iconLogout mb-2">
    <b-icon icon="exclamation-triangle" class="iconsBox" style="color: red!important;"></b-icon>
    </b-col>
<div class="d-block text-center" >
<h3 style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Bạn có chắc chắn muốn xóa nhóm quyền không?</h3>
</div>
<div class="buttonSubmitLogout">
<button class="buttonYes mt-3"  @click="deleteRole(dataRoles.id)" style="font-size: 13px;">Đồng ý</button>
<button class="buttonNo mt-3" @click="$bvModal.hide(dataRoles.id)" style="font-size: 13px;" >Bỏ qua</button>
</div>
</b-modal>
</div>
        <!-- ----end modal delete role------- -->
        </b-dropdown>
    </td>
</tr>
</tbody>
    </table>
</div>
<!-- Modal Cập nhật -->
<!-- ----- table find role---- -->

<!-- -----end table find role---- -->
<nav aria-label="Page navigation example" class="mt-3">
    <div class="pagination justify-content-end mb-0">
        <div class="overflow-auto">
                    <b-pagination
                    v-model="search.page"
                    :total-rows="pagination.total"
                    :per-page="search.size"
                    first-text="First"
                    prev-text="Previous"
                    next-text="Next"
                    last-text="Last"
                    class="pagination mt-4"
                    ></b-pagination>
                </div>
    </div>
</nav>

</div>
</div>
    <!-- InstanceEndEditable -->
<!-- </div> container-fluid -->
<!-- -----------modal permission------- -->
<b-modal id="bv-modal-example-error-permission" hide-footer hide-header >
<b-col class="iconLogout mb-2">
<b-icon icon="x-circle" class="iconsBox" style="color: red!important;"></b-icon>
</b-col>
<div class="d-block text-center" >
<h3 
style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Bạn không có quyền truy cập</h3>
</div>
<div class="buttonSubmitLogout">
<!-- <router-link to="/list-role"> -->
<button class="buttonOK mt-3" @click="$bvModal.hide('bv-modal-example-error-permission')"  style="font-size: 13px;">OK</button>
<!-- </router-link> -->
</div>
</b-modal>
<!-- -----------end modal permission------- -->
</div>
</div>
<footer-content />
</div>
    </div>
</template>

<script>
import axios from 'axios'
import index from '../components/index.vue'
import FooterContent from '../components/FooterContent.vue'
import { RoleService } from "@/services/role.service";
import prepareQueryParamsMixin from '../mixins/prepareQueryParamsMixin'

export default {
components: { index, FooterContent },
    name:"list-role",
    mixins: [prepareQueryParamsMixin],
    data(){
        return{
        token: localStorage.getItem("token"),
        BASE_TOKEN_RISK: this.$store.getters.BASE_TOKEN_RISK,
        BASE_URL_RISK: this.$store.getters.BASE_URL_RISK,
        dataRole: {},
        BASE_URL: this.$store.getters.BASE_URL,
        findRoleName:"",
        dataFindRole:{},
        listFindRole:false,
        listRole:true,
        errorFind:"",
        DATA_PERMISSION:localStorage.getItem('permission'),
        
        search: {
            page: 1,
            size: 10,
            roleName:''
        },
        pagination: {
            total: 20
        },
        }
    },
    mounted() {
    this.fetchData()
},
methods:{
    async fetchData(){
    try {
        const response = await RoleService.getList(this.token, this.search)
        if (response.status == 200) {
            this.dataRole = response.data.data
            this.pagination.total = response.data.total
            console.log(response);
        }
    }catch(error){
        console.log(error.response);
    }
    },
    handleUnFind(){
        this.search = {
        page: 1,
        size: 10
    }
    this.fetchData()
    },
    showDelete(id){
        if (this.DATA_PERMISSION.includes("DELETE_ROLE")) {
            this.$bvModal.show(id)
        }
        else this.$bvModal.show("bv-modal-example-error-permission")
    },
    findRole(){
        const headers =  {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "Web",
        }
        axios({
            method:'get',
            url:`${this.BASE_URL}/api/roles/${this.findRoleName}`,
            headers:{
                headers,
                Authorization:`Bearer ${this.token}`
            },
        })
    .then((response) => {
        if (response.status == 200) {
            this.dataFindRole = response.data
            this.listFindRole = true
            this.listRole = false
        }
    })
    .catch((error) => {
        if (error.response) {
            this.errorFind = error.response.data.message
            this.$bvModal.show("bv-modal-example-find-role")
        }
        return error.response;
    });
    },
    async deleteRole(roleId){
        const response = await RoleService.deleteRole(roleId, this.token)
        if (response.status == 200) {
            this.fetchData()
            this.$bvModal.hide(roleId)
        }
    },

    update(code){
        if (this.DATA_PERMISSION.includes("UPDATE_ROLE")) {
            this.$router.push({ name:'Cập nhật nhóm quyền', params:{ code: code }})
        }
        else this.$bvModal.show("bv-modal-example-error-permission")
    },
    submitForm () {
        this.pagination.page = 1
        this.fetchData()
    },
}, 

    computed: {
        useInUrlQueryPropList () {
            return this.prepareQueryParamsMixin({
                page: this.search.page
            })
        }
    },
    watch: {
    'search.page': function () {
        this.$router.push({
            path: '/list-role',
            query: this.useInUrlQueryPropList
        })
        this.fetchData()
    }
    },
}
</script>

<style scoped>
.box-fillter{
box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%) !important;
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
@media (max-width: 576px) {
.content-page,
.container-sm {
max-width: 540px;
padding-left: 0px!important;
}
#sidebar-menu{
display: none!important;;
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