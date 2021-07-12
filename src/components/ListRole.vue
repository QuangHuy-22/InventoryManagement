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
        <div class="btn-group float-right" >
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
            v-model.trim="search.name"
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
                <th>No.</th>
                <th>Id</th>
                <th>Role Name</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
<tr v-for="(dataRoles, itemObjKey) in dataRole" :key="dataRoles.id" >
<td > {{ search.size * (search.page - 1) + itemObjKey + 1 }}</td>
<td >{{ dataRoles.id}}</td>
<td >{{ dataRoles.roleName }}</td>
<td >{{ dataRoles.description}}</td>
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
</div>
</div>
<footer-content />
</div>
    </div>
</template>

<script>
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
        dataRole: {},
        findRoleName:"",
        dataFindRole:{},
        listFindRole:false,
        listRole:true,
        errorFind:"",
        DATA_PERMISSION:localStorage.getItem('permission'),
        
        search: {
            page: 1,
            size: 10,
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
            this.dataRole = response.data.listData
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
    submitForm () {
        // this.pagination.page = 1
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