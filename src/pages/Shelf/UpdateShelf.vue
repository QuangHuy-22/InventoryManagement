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
    <h2 class="title-page">Update Shelf</h2>
    <div class="btn-group float-right">
        <form class="buttonLogout"  @submit.prevent="handleUpdate"  >
        <router-link to="/inventory/shelf">
        <b-button  
        id="show-btn" 
        style="font-size: 13px; margin-right: 5px;" variant="outline-primary" 
        v-b-modal.modal-center >
            Cancel</b-button>
            </router-link>
        <b-button  
        id="show-btn" 
        type="submit"
        style="font-size: 13px;" variant="outline-primary" 
        v-b-modal.modal-center >
        <b-icon icon="pencil-square" ></b-icon>
        Update</b-button>
        <div class="showLogout" >
        <b-modal id="bv-modal-example-3" hide-footer hide-header >
            <b-col class="iconLogout mb-2">
            <div class="mb-img mb-4">
                        <span><img src="@/assets/images/sussecc.svg" alt=""></span>
                    </div>
            </b-col>
        <div class="d-block text-center" >
        <h3 
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Update Successful!</h3>
        </div>
        <div class="buttonSubmitLogout">
            <router-link to="/inventory/shelf">
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
        <div class="col-sm-12">
            <div class="card-body">
                <h4 class="card-title mb-3" style="font-size: 15px;">Information Shelf</h4>
                <form class="needs-validation" >
            <div class="col-sm-6" >
                <div class="form-group form-erross">
                    <label for="validationCustom04">Branch Id</label>
                <b-select class="form-control select2"  v-model="dataShelf.branchId">
                    <option v-for="data in dataBranch" :key="data.id" :value="String(data.id)">{{data.name}}</option>
                </b-select>
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
                    v-model="dataShelf.name">
                    </v-text-field>
                </div>
                <div class="form-group form-erross">
                    <label for="validationCustom01">Description</label>
                    <v-text-field 
                    type="text" 
                    class="form-control" 
                    style="padding: 3px 0px!important;"
                    id="validationCustom01" 
                    placeholder="" 
                    value="" 
                    required
                    v-model="dataShelf.description">
                    </v-text-field>
                </div>
                <div class="form-group form-erross">
                    <label for="validationCustom01">Total</label>
                    <v-text-field 
                    type="text" 
                    class="form-control" 
                    style="padding: 3px 0px!important;"
                    id="validationCustom01" 
                    placeholder="" 
                    value="" 
                    v-model="dataShelf.total">
                    </v-text-field>
                </div>
                
                </div>
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
style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Error!</h3>
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
import { ShelfService } from "@/services/shelf.service.js";
import { BranchService } from "@/services/branch.service";
import index from '../../components/index.vue';
export default {
components: { index },
    name:"update-user",
    data(){
        return{
            idShelf: this.$route.params.id,
            dataCategory: {},
            token: localStorage.getItem("token"),
            errorMessage:"",
            BASE_URL: this.$store.getters.BASE_URL,
            dataBranch:{},
            dataShelf:{
            },
            search:{
            page:1,
            size:10
        }
        }
    },
    methods:{
            async handleUpdate(){
        try{
            const response = await ShelfService.update(this.token, this.dataShelf, this.idShelf)
            if(response.status == 200){
                this.$bvModal.show('bv-modal-example-3')
            }
            else if (response.status == 400) {
                this.$bvModal.show("bv-modal-example-error-update-user")
                this.errorMessage = response.data
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
            const response = await ShelfService.getDetail(this.token ,this.idShelf) 
            if (response.status == 200) {
                console.log(response);
                this.dataShelf = response.data
            }
        },
        async fetchDataBranch(){
    try {
        const response = await BranchService.getList(this.token, this.search)
        if (response.status == 200) {
            this.dataBranch = response.data.listData
            console.log();
        }
    }catch(error){
        console.log(error.response);
    }
    },
    },
    mounted() {
        this.fetchData()
    this.fetchDataBranch()
    
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
