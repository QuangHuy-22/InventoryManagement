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
        <h2>Create VAT</h2>
        <div class="btn-group float-right">
        <form class="buttonAddUser"  @submit.prevent="handleAddVAT">
        <router-link to="/management/supplier" class="btn btn-dark" style="font-size: 13px;"> Cancel</router-link>
        <router-link to="/produc-info/create-produc-info">
        </router-link>
        <div class="btn btn-dark"  style="font-size: 13px;margin-left: 5px;" @click="Reset()"> Reset</div>
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target=".Risk_Permission_Update" style="font-size: 13px;margin-left: 5px;">Submit</button>
        <div class="showAddUser" >
        <b-modal id="bv-modal-example-3" hide-footer hide-header >
            <b-col class="iconLogout mb-2">
            <div class="mb-img mb-4">
                        <span><img src="@/assets/images/sussecc.svg" alt=""></span>
                    </div>
            </b-col>
        <div class="d-block text-center" >
        <h3 
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Adding Successful</h3>
        </div>
        <div class="buttonSubmitLogout">
            <router-link to="/inventory/list-vat">
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
            <h4 class="card-title mb-3">Information VAT</h4>
            <form class="needs-validation" >
            <div class="col-sm-6" >
                <div class="form-group form-erross">
                    <label for="validationCustom01">Code</label>
                    <v-text-field 
                    type="text" 
                    class="form-control" 
                    style="padding: 3px 0px!important;"
                    id="validationCustom01" 
                    placeholder="" 
                    value="" 
                    required
                    v-model="dataVAT.code">
                    </v-text-field>
                </div>
                <div class="form-group form-erross">
                    <label for="validationCustom01">TAX</label>
                    <v-text-field 
                    type="text" 
                    class="form-control" 
                    style="padding: 3px 0px!important;"
                    id="validationCustom01"
                    placeholder="" 
                    value="" 
                    required
                    v-model="dataVAT.tax">
                    </v-text-field>
                </div>
                <div class="form-group form-erross">
                    <label for="validationCustom01">Percent %</label>
                    <v-text-field 
                    type="number" 
                    class="form-control" 
                    style="padding: 3px 0px!important;"
                    id="validationCustom01" 
                    placeholder="" 
                    v-model="dataVAT.percent">
                    </v-text-field>
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
import index from '../../components/index.vue'
import { VATService } from "@/services/vat.service.js";
export default {
name:"create-VAT",
components: { 
    index,
},
    data(){
        return{
            token: localStorage.getItem("token"),
            dataVAT:{
                code:'',
                tax:'',
                percent:0,
                branchId: localStorage.getItem("branchId"),
                userName: localStorage.getItem("userName")
            },
            errorMessage:"",
            idSupplier: this.$route.params.id,
        }
    },
    methods:{
    async handleAddVAT(){
        console.log(this.dataVAT.percent);
        try {
            const response = await VATService.createVAT(this.token,this.idSupplier, this.dataVAT)
            console.log(response);
            if(response.status == 200){
                this.$bvModal.show("bv-modal-example-3")
            }
            if (response.status == 400) {
                this.$bvModal.show('bv-modal-example-error-add-user')
                this.errorMessage = response.data
            }
        } catch (error) {
            return error
        }
    },
    Reset(){
        this.dataVAT={
                code:'',
                tax:'',
                percent:0,
                branchId: localStorage.getItem("branchId"),
                userName: localStorage.getItem("userName")
            }
    },
    },
    mounted() {
},
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