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
        <h2>Role Management</h2>
        <router-link to="/management/list-role/add-role" >
        <div class="btn-group float-right" >
            <Button type="submit" class="btn btn-outline-primary" style="font-size: 13px;background-color: #EBF6FF;" data-toggle="modal" data-target=".Risk_QL-User_add"><b-icon icon="plus-circle" ></b-icon> Add Role</button>
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
            placeholder="Role Name"
            v-model.trim="search.name"
            >
        </div>
    </div>

    <div class="col-md-4 col-sm-4">
                <div class="btn-fillter">
                <div class="bf-detail" >
                <button
                    @click.prevent="submitForm"
                    class="btn btn-success"
                    style="font-size: 13px; margin-right: 5px; color:white;"
                >
                    <b-icon icon="search"></b-icon>
                </button>
                <button
                    @click="handleUnFind"
                    class="btn btn-dark"
                    style="font-size: 13px; margin-right: 5px;"
                >
                    <b-icon icon="x-circle" ></b-icon>
                </button>
                </div>
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
                <th>Role Name</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
<tr v-for="(dataRoles, itemObjKey) in dataRole" :key="dataRoles.id" >
<td > {{ search.size * (search.page - 1) + itemObjKey + 1 }}</td>
<td >{{ dataRoles.roleName }}</td>
<td >{{ dataRoles.description}}</td>
<!-- <td>ba chấm</td> -->
<td >
        <b-dropdown right text="" variant="none" class="three-dot" no-caret>
        <template #button-content>
        <b-icon icon="three-dots-vertical" ></b-icon>
            </template>
            <div style="font-size: 13px;">
        <b-dropdown-item @click="detail(dataRoles.id)">
            Detail
        </b-dropdown-item>
        <!-- <b-dropdown-item @click="update(dataRoles.id)">
            Update
        </b-dropdown-item> -->
        <b-dropdown-item  @click="$bvModal.show(String(dataRoles.id))"  >
            Delete
            </b-dropdown-item>
        </div>
        <!-- ----modal delete role------- -->
        <div class="showDelete" >
        <b-modal :id="(String(dataRoles.id))" hide-footer hide-header   >
        <b-col class="iconLogout mb-2">
        <b-icon icon="exclamation-triangle" class="iconsBox" style="color: red!important;"></b-icon>
        </b-col>
        <div class="d-block text-center" >
        <h3 style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Do you want to delete {{ dataRoles.roleName }}?</h3>
        </div>
        <div class="buttonSubmitLogout">
        <button class="buttonYes mt-3"  @click="deleteData(dataRoles.id)" style="font-size: 13px;">Confirm</button>
        <button class="buttonNo mt-3" @click="$bvModal.hide(String(dataRoles.id))" style="font-size: 13px;">Cancel</button>
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
    <div class="d-flex">
    <div v-for="number in numberSize" :key="number" @click="changeSize(number)"><span class="numberSize" >{{number}}</span></div>
    </div>
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
            size: 5,
        },
        pagination: {
            total: 0
        },
        numberSize:[3 , 5, 10 , 15],
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
            this.pagination.total = response.data.count
        }
    }catch(error){
        console.log(error.response);
    }
    },
    async deleteData(idRole){
        const response = await RoleService.delete(this.token, idRole)
        if (response.status == 200) {
            this.fetchData()
            this.$bvModal.hide(idRole)
        }
    },
    detail(id) {
        this.$router.push({ name: "DetailRole", params: { id: id } });
    },
    update(id) {
        this.$router.push({ name: "UpdateRole", params: { id: id } });
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
    changeSize(number){
    this.search = {
    page: this.search.page,
    size: number,
    };
    this.fetchData();
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
            path: '/management/list-role',
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
.numberSize{
padding: 0px 10px 0px 10px;
color:#A52A2A;
cursor: pointer;
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