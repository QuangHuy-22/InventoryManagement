<template>
<div class="account-pages pt-sm-5">
<div class="container-content">
<div class="row justify-content-center" >
    <div class="col-md-8 col-lg-6 col-xl-5" style="padding: 55px;">
        <div class="card overflow-hidden">
            <div class="bg-soft-primary">
                <div class="form-row">
                    <div class="col-7"> 
                        <div class="text-login p-4">
                            <h3 class="pt-3">Login </h3>
                            <h5>Inventory Management</h5>
                            <p class="m-0">Welcome Back !</p>
                        </div>
                    </div>
                    <div class="col-5 align-self-end">
                        <img src="../assets/images/profile-img.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        <div class="card-body pt-3"> 
    <div class="p-2" style="padding:0px !important">
        <form 
        class="form-horizontal" 
        action="#"  
        @submit.prevent="handleSubmitLogin">
            <div class="form-group">
                <label for="username">UserName</label>
                <input 
                v-model="username"
                type="text" 
                class="form-control" 
                id="username" 
                placeholder="abc@email.com" style="font-size: 0.8125rem;">
            </div>

            <div class="form-group">
                <label for="userpassword">Password</label>
                <input 
                v-model="password"
                type="password" 
                class="form-control" 
                id="userpassword" 
                placeholder="******">
            </div>
            <div class="  mt-3" 
            >
                <!-- :class="username && password == null ? 'd-none' : 'btnPrimary btn-block waves-effect waves-light'" -->
                <v-btn 
                type="submit" 
                :disabled="buttonDisable"
                class="btnPrimary btn-block waves-effect waves-light"
                style="color:#fff; font-size: 13px; padding: 7.5px 12px;" 
                >Login
                </v-btn>
                
            </div>

            <div class="mt-4 text-center">
                <router-link to="/recover">
                <a class="text-muted"><b-icon icon="lock-fill"></b-icon> Forget Password ?</a>
                </router-link>
            </div>
<!-- ----------modal error-------->
<b-modal id="bv-modal-example-error-login" hide-footer hide-header >
<b-col class="iconLogout mb-2">
<b-icon icon="x-circle" class="iconsBox" style="color: red!important;"></b-icon>
</b-col>
<div class="d-block text-center" >
<span>{{ this.errorMessage }}</span>
</div>
<div class="buttonSubmitLogout">
<!-- <router-link to="/list-role"> -->
<b-button variant="primary" class="buttonOK mt-3" @click="$bvModal.hide('bv-modal-example-error-login')" >OK</b-button>
<!-- </router-link> -->
</div>
</b-modal>
<!-- ----------end modal error-------->

        </form>
    </div>

</div>
        </div>
        <div class="footer mt-5 text-center">
        <footer>
        <p>@ {{new Date().getFullYear()}} Inventory Management by HieuPV</p>
        
        </footer>
        </div>

    </div>
</div>
</div>
</div>
</template>

<script scoped>
import axios from "axios"
export default {
name:"Login",
props: {
    // email
},
    data(){
        return{
            username:"",
            password:"",
            token:"",
            email:"",
            BASE_URL: this.$store.getters.BASE_URL,
            dataPermission:[],
            errorMessage:"",
        }
    },
    methods:{
handleSubmitLogin(){
const headers = {
'Content-Type': 'application/json',
"User-Agent":"Web"
}
axios({
    method:'post',
    url:`${this.BASE_URL}/api/doLogin`,
    headers: {
        headers: headers
    },
    data:{
    userName: this.username,
    passWord: this.password
    }
    }).then((response)=>{
    const message = response.status
    const token = response.data.token
    const emailName = response.data.email
    const roleName = response.data.roleName
    const branchId = response.data.branchId
    const branchName = response.data.branchName
    const userName = response.data.userName
    const id = response.data.id
    
    
    if(message === 200){
        localStorage.setItem('token', token);
        localStorage.setItem('roleName', roleName);
        localStorage.setItem('email', emailName);
        localStorage.setItem('branchId', branchId);
        localStorage.setItem('branchName', branchName);
        localStorage.setItem('userName', userName);
        localStorage.setItem('userId', id);
        this.email = response.data.username
        this.dataPermission = response.data.listPermission
        this.$store.commit("SET_USERNAME", this.email)
            this.$router.push('/home-page')
    }
    })
    .catch((error) => {
        if (error.response.status) {
            this.$bvModal.show("bv-modal-example-error-login")
            this.errorMessage = error.response.data.message
        }
        return error.response;
    });
},
    },
    computed:{
        buttonDisable(){
            return this.username.length <=0 || this.password.length <= 0
        }
    }
}   
</script>

<style >

.account-pages{
    background-color:#f8f8fb;
}
.container-content{
    margin: 0px!important; 
    width:100%!important
}
.comp-login{
    font-family: Poppins,sans-serif;
    padding: 0px;
    margin: 0px;
    background-color:  #f8f8fb;
    font-family: Roboto;
}
.card{
    font-size: .8125rem;
    text-align: left;
    border: 0px !important;
}

.card-body {
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
min-height: 1px;
padding: 2.0rem 1.5rem 1.30rem 1.5rem !important;
}
.textPrimary {
    color: #556ee6 !important;
    padding-top: 6px !important;
    text-align: left;
    
}

.form-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
}
.btnPrimary{
        color: #fff;
        background-color: #556ee6 !important;
        border-color: #556ee6 !important;
        border-radius: .25rem;
        border: 0px !important;
        
        /* font-size: px */
}
.btnPrimary:hover{
    background-color: #0000e6 !important;
}
.bg-soft-primary{
    background-color: rgba(85,110,230,.25)!important;
}
.mdi-chevron-down::before {
    content: "\F0140";
}
.footer{
    color: rgb(73, 80, 87);
    font-size: 13px;
}
.text-muted{
    color: rgb(73, 80, 87);
}
.text-login{
    color: #556ee6;
}
.buttonOK{
    font-size: 13px;
    width: 100px;
}
</style>