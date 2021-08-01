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
    <h2 class="title-page">Update ProductInfo</h2>
    <div class="btn-group float-right">
        <form class="buttonLogout"  @submit.prevent="handleUpdate"  >
        <router-link to="/product/product-info">
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
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Adding Successful!</h3>
        </div>
        <div class="buttonSubmitLogout">
            <router-link to="/product/product-info">
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
                <h4 class="card-title mb-3" style="font-size: 15px;">Information Product Info</h4>
                <form
                    class="needs-validation"
                    enctype="multipart/form-data"
                >
                    <div class="col-sm-6">
                    <div class="form-group form-erross">
                        <label for="validationCustom04">Category</label>
                        <b-select
                        class="form-control select2"
                        v-model="dataProducInfo.categoryId"
                        >
                        <option
                            v-for="data in dataCategory"
                            :key="data.id"
                            :value="data.id"
                            >{{ data.name }}</option
                        >
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
                        v-model="dataProducInfo.name"
                        >
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
                        v-model="dataProducInfo.description"
                        >
                        </v-text-field>
                    </div>
                    <div class="form-group form-erross">
                        <img  :src="dataProducInfo.imgUrl" />
                    </div>
                    <form ref="uploadForm" @submit.prevent="submit">
                    <input
                    type="file"
                    ref="uploadImage"
                    @change="onFileChange"
                    class="inputfile"
                    id="file"
                    />
                    <label for="file">Chọn ảnh</label>
                    </form>
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
import axios from "axios"
import { CategoryService } from "@/services/category.service.js";
import { ProducInfoService } from "@/services/producInfo.service.js";
import index from '../../components/index.vue';
export default {
components: { index },
    name:"update-user",
    data(){
        return{
            idProductInfo: this.$route.params.id,
            dataCategory: {},
            token: localStorage.getItem("token"),
            errorMessage:"",
            BASE_URL: this.$store.getters.BASE_URL,
            dataProducInfo:{},
            search: {
                page: 1,
                size:20
            },
        }
    },
    methods:{
            async handleUpdate(){
                this.formData = new FormData();
    if ( this.File == null) {
        this.formData.append("name", this.dataProducInfo.name,);
        this.formData.append("description", this.dataProducInfo.description,);
        this.formData.append("categoryId", this.dataProducInfo.categoryId,);
        } else {
        this.formData.append("image", this.File);
        this.formData.append("name", this.dataProducInfo.name,);
        this.formData.append("description", this.dataProducInfo.description,);
        this.formData.append("categoryId", this.dataProducInfo.categoryId,);
        }
    axios({
    method: "put",
    url: `http://localhost:8090/api/products-info/edit/${this.idProductInfo}`,
    headers: {
        headers:{ 
            "Access-Control-Allow-Origin": "*",
        },
        AuthToken: this.token,
    },
    data: this.formData
    })
    .then((response) => {
        if (response.status == 200) {
        this.$bvModal.show("bv-modal-example-3") 
        }
    })
    .catch((error) => {
        this.errorMessage = error.response.data
        this.$bvModal.show("bv-modal-example-error-add-user")
    });
        },
        onFileChange(e) {
    const fileUp = e.target.files[0];
    this.url = URL.createObjectURL(fileUp);
    let file = this.$refs.uploadImage.files[0];
    this.File = file;
},
createImage(file) {
    var reader = new FileReader();
    var vm = this;

    reader.onload = (e) => {
    vm.image = e.target.result;
    };
    reader.readAsDataURL(file);
},
    async fetchDataCategory(){
            const response = await CategoryService.getList(this.token ,this.search) 
            if (response.status == 200) {
                console.log(response);
                this.dataCategory = response.data.listData
            }
        },
    async fetchData(){
            const response = await ProducInfoService.getDetail(this.token ,this.idProductInfo) 
            if (response.status == 200) {
                console.log(response);
                this.dataProducInfo = response.data
            }
        }
    },
    mounted() {
        this.fetchDataCategory()
        this.fetchData()

    
},
};
</script>

<style scoped>
.theme--light.v-messages{
    color: #D8000C!important;
}
img{
    width: 150px;
    height: 150px;
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
