<template class="container">
<div class="home pages">
    <b-navbar class="header" fixed="top">
<header id="page-topbar">
<div class="navbar-header">
<div class="d-flex">
    <!-- LOGO -->
    <div class="navbar-brand-box">

        <router-link to="/home-page" class="logo logo-light">
            <span class="logo-sm" v-show="logo">
                <!-- <img src="../assets/images/your-logo.png" alt="" height="" > -->
            </span>
            <span class="logo-lg" v-show="logoRisk">
                <img src="../assets/images/your-logo.png" alt="" height="50" width="150">
            </span>
        </router-link>
    </div>
<!-- show-sidebar -->
<div >
    <!-- show-sidebar -->
    <div class="listChange">
<b-button  @click="clickSidebar" v-b-toggle.sidebar-border variant="none"><b-icon icon="list" class="" style="color: white; font-size: 25px;" ></b-icon></b-button>
    </div>
</div>
<!-- show-sidebar -->
    <!-- App Search-->
    <form class="app-search d-none d-lg-block ">
        <div class="position-relative d-flex">
            <!-- <b-icon icon="search"></b-icon> -->
            <input type="text" class="find form-control" placeholder="Search..." >
            
        </div>
    </form>
</div>
<div class="d-flex">
    <div class="dropdown d-inline-block d-lg-none ml-2">
        <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <b-icon icon="search" ></b-icon>
        </button>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
            aria-labelledby="page-header-search-dropdown">
            <form class="p-3">
                <div class="form-group m-0">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="submit"><b-icon icon="search" ></b-icon></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="dropdown d-inline-block">
        <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown "
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: #fff;">
            <span style="margin-right:10px;font-weight: initial;"> {{ branch }}</span>
            <b-dropdown right text="" variant="none" no-caret>
                <template #button-content>
            <img class="rounded-circle header-profile-user" style="" src="../assets/images/users/avatar-dev.jpg"
                alt="Header Avatar">
            <span class="name-nav d-none d-xl-inline-block ml-1" key="t-henry">{{userName}}</span>
            <b-icon icon="chevron-down" class="buttonDrops" ></b-icon>
                </template>
            <b-dropdown-item >
            <router-link to="/change-password" style="color: black!important;">
                Change Password
            </router-link>
                </b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
        <form class="buttonLogout" >
        <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')" style="font-size: 13px;" variant="danger" v-b-modal.modal-center >
            <b-icon icon="power" ></b-icon>
            Logout</b-button>
        <div class="showLogout" >
        <b-modal id="bv-modal-example" hide-footer hide-header   >
            <b-col class="iconLogout mb-2">
            <b-icon icon="box-arrow-left" class="iconsBox"></b-icon>
            </b-col>
        <div class="d-block text-center" >
        <h3 
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Do you want to logout?</h3>
        </div>
        <div class="buttonSubmitLogout">
        <button class="buttonYes mt-3"  @click="handleSubmitLogout" style="font-size: 13px;">Confirm</button>
        <button class="buttonNo mt-3" @click="$bvModal.hide('bv-modal-example')" style="font-size: 13px;" >Cancel</button>
        </div>
        </b-modal>
        </div>
        </form>
            </b-dropdown>
        </button>
    </div>
</div>

</div>
</header>
    <div class="side-bar" >
    <!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">

<div data-simplebar class="h-100">

<!--- Sidemenu -->
<div id="sidebar-menu">
    <!-- Left Menu Start -->
<div id="sidebar-menu">
    <!-- Left Menu Start -->
    <ul class="metismenu list-unstyled" id="side-menu">
        <div class="sidebar-container" style="margin-top: 80px; ">
            <!-- -------Product------- -->
            <div>
            <!-- Using modifiers -->
            <div>
            <b-button  v-b-toggle.collapse-2 id="toggle-sidebar" class="m-1" ><div class="content-sidebar" style="padding: 0px">
                <li class="text-sidebar">
                <b-icon icon="phone-vibrate" style="padding-right: 25px;"></b-icon>
                <span key="t-calendar">Product</span>
            </li>
            </div>
            </b-button >
            </div>
            <!-- Element to collapse -->
            <b-collapse id="collapse-2" class="content-sidebar-menu">
                <!-- ----category---- -->
            <div class="content-sidebar">
            <router-link to="/product/category" style="color: #474D52;">
                <li>
                <b-icon icon="calculator-fill" style="padding-right: 25px; color: #474D52;"></b-icon>
                <span key="t-calendar">Category</span>
            </li>
            </router-link>
            </div>
            <!-- ------product info------- -->
            <div class="content-sidebar" >
                <router-link to='/product/product-info' style="color: #474D52;">
                        <li>
                <b-icon icon="phone" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Product Info</span>
                </li>
                </router-link>
            </div>
            <!-- ------------Product detail----------- -->
            <div class="content-sidebar" >
                <router-link to='/product/product-detail' style="color: #474D52;">
                        <li>
                <b-icon icon="telephone" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Product Detail</span>
                </li>
                </router-link>
            </div>
            </b-collapse>
            </div>
            <!-- -------End Product------- -->

            <!-- -------Inventory------- -->
            <div>
            <!-- Using modifiers -->
            <div>
        <b-button  v-b-toggle.collapse-3 id="toggle-sidebar" class="m-1"><div class="content-sidebar" style="padding: 0px">
                <li class="text-sidebar">
                <b-icon icon="graph-up" style="padding-right: 25px"></b-icon>
                <span key="t-calendar">Inventory</span>
            </li>
            </div>
            </b-button >
            </div>
            <!-- Element to collapse -->
            <b-collapse id="collapse-3" class="content-sidebar-menu">
                <!-- ----VAT---- -->
                <div class="content-sidebar" >
                <router-link to='/inventory/vat' style="color: #474D52;">
                        <li>
                <b-icon icon="card-checklist" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">VAT</span>
                </li>
                </router-link>
                </div>
                <!-- --------Vat Detail--------- -->
                <div class="content-sidebar" >
                <router-link to='/inventory/vat-detail' style="color: #474D52;">
                        <li>
                <b-icon icon="card-list" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">VAT Detail</span>
                </li>
                </router-link>
                </div>
                <!-- ----------Product----------- -->
                <div class="content-sidebar">
                <router-link to='/inventory/product-status' style="color: #474D52;">
                        <li>
                <b-icon icon="calculator" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Product Status</span>
                </li>
                </router-link>
                </div>
                <div class="content-sidebar" >
                <router-link to='/inventory/product-detail-status' style="color: #474D52;">
                        <li>
                <b-icon icon="calculator" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Product Status Detail</span>
                </li>
                </router-link>
                </div>
                <!-- -----------Issue--------- -->
                <div class="content-sidebar" >
                <router-link to='/inventory/issue' style="color: #474D52;">
                        <li>
                <b-icon icon="calendar3-event" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Issue</span>
                </li>
                </router-link>
                </div>
                <!-- -----------Issue Detail--------- -->
                <div class="content-sidebar" >
                <router-link to='/inventory/issue-detail' style="color: #474D52;">
                        <li>
                <b-icon icon="calendar3-event" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Issue Detail</span>
                </li>
                </router-link>
                </div>
                <!-- -----------Shelf--------- -->
                <div class="content-sidebar" >
                <router-link to='/inventory/shelf' style="color: #474D52;">
                        <li>
                <b-icon icon="calendar3-event" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Shelf</span>
                </li>
                </router-link>
                </div>
            </b-collapse>
            </div>
            <!-- -------End Inventory------- -->
            
            <!-- -------Management------- -->
            <div>
            <!-- Using modifiers -->
            <div>
            <b-button  v-b-toggle.collapse-4 id="toggle-sidebar" class="m-1"><div class="content-sidebar" style="padding: 0px">
                <li class="text-sidebar">
                <b-icon icon="bag-dash" style="padding-right: 25px;"></b-icon>
                <span key="t-calendar">Management</span>
            </li>
            </div>
            </b-button >
            </div>
            <!-- Element to collapse -->
            <b-collapse id="collapse-4" class="content-sidebar-menu">
                <!-- ----Branch---- -->
                <div class="content-sidebar"  v-if="roleName == 'ADMIN'" >
                <router-link to='/management/branch' style="color: #474D52;">
                        <li>
                <b-icon icon="person-circle" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Branch</span>
                </li>
                </router-link>
                </div>
                <!-- -------Role------ -->
                <div class="content-sidebar"  v-if="roleName == 'ADMIN'" >
                <router-link to='/management/list-role' style="color: #474D52;">
                        <li>
                <b-icon icon="diagram3" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Role</span>
                </li>
                </router-link>
                </div> 
                <!-- ---------User---------  -->
                <div class="content-sidebar"  v-if="roleName == 'ADMIN' || roleName == 'MANAGER'" >
                <router-link to='/management/list-user' style="color: #474D52;">
                        <li>
                <b-icon icon="person-square" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">User</span>
                </li>
                </router-link>
            </div>
                <!-- ----Customer---- -->
                <div class="content-sidebar" >
                <router-link to='/management/customer' style="color: #474D52;">
                        <li>
                <b-icon icon="person-circle" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Customer</span>
                </li>
                </router-link>
                </div>
                <!-- -------Supplier------- -->
                <div class="content-sidebar" >
                <router-link to='/management/supplier' style="color: #474D52;">
                        <li>
                <b-icon icon="cart-plus" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Supplier</span>
                </li>
                </router-link>
                </div>
            </b-collapse>
            </div>
            <!-- -------End Management------- -->
            
        </div>
        
        
    </ul>
</div>
</div>
        <!-- Sidebar -->
    </div>
</div>
<!-- Left Sidebar End -->
</div>
</b-navbar>
</div>
</template>

<script>
import axios from "axios"
import { uuid } from 'vue-uuid'
export default {
    name:"index",
    components:{
    },
    data(){
        return{
        showLogout : false,
        token : localStorage.getItem('token'),
        emailName: localStorage.getItem('email'),
        userName: localStorage.getItem('userName'),
        branch: localStorage.getItem('branchName'),
        userCheck: this.$store.getters.USERNAME,
        BASE_URL: this.$store.getters.BASE_URL,
        BASE_URL_NOTIFY: this.$store.getters.BASE_URL_NOTIFY,
        BASE_TOKEN_NOTIFY: this.$store.getters.BASE_TOKEN_NOTIFY,
        roleName:  localStorage.getItem('roleName'),
        logo:false,
        logoRisk:true,
        user: this.$store.getters.USERNAME,
        checkNotify: localStorage.getItem("isPushNotificationsEnabled"),
        playerId: localStorage.getItem('playerId'),
        // playerId: "17473597-9afb-4033-b707-0358133d9e81",
        numNotify:"",
        dataNotification:{},
        currentPage: 1,
        uuid: uuid.v1(), 
        pagination:{
            size: 5,
            total:0
        },
        }
    },
    methods:{
        clickSidebar(){
            if (this.logo==false) {
                this.logo =true,
                this.logoRisk = false
            }
            else{
                this.logo =false,
                this.logoRisk = true
            }
        },
        handleLogout(){
            this.showLogout = true
        },
        handleNo(){
            this.showLogout = false
            this.$router.push({ path: '/' })
        },
        handleSubmitLogout(){
            console.log(this.token)
            axios({
                method:'get',
                url:`${this.BASE_URL}/api/logout`,
            }).then((response)=>{
                if(response.status == 200){
                    this.$router.push({ path: '/login' })
                    localStorage.removeItem('token')
                }
            }).catch((error)=>{
                console.log(error.response.data.message)
                return error.response;
            })
        },

    },
    mounted(){
    }
}
</script>

<style >
.container{
    width: 100%;
    position: absolute;
    margin-top: 70px;   
}
.page-topbar{
        position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1002;
    box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
}
.navbar-header{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin: 0 auto;
    height: 70px;
    padding: 0 calc(24px / 2) 0 0;
    font-family: Roboto;    
    background-color: #2a3042;
    background: linear-gradient(to right, #2a3042 , #778899 );
    position: absolute;
    width: 100%;
}
.metismenu li{
    list-style: none;
}
.navbar-brand-box{
    padding: 0 1.5rem;
    text-align: center;
    width: 250px;
}
.rounded-circle{
    background-color: rgba(255,255,255,.25);
    height: 36px;
    width: 36px;
    padding: 3px;
    border-radius: 50%!important;
}
.img{
    vertical-align: middle;
    border-style: none;
}
.side-bar{
width: 250px;
border-right: 2px solid black;
height: 100%;
position: absolute;
color: #474D52;
font-size: var(--f14);
}
.icons-person{
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: center;
    text-align: center;
}
.title-user{
list-style-type: none;
margin: 0;
padding-left: 15px;
}
.app-search{
    border: none;
    height: 38px;
    padding-left: 40px;
    padding-right: 20px;
    box-shadow: none;
    border-radius: 30px;
    /* background-color: rgba(243,243,249,.07);
    color: #fff; */
}
.app-search .form-control{
    display: block;
    width: 100%;
    padding: .47rem .75rem;
    font-size: .8125rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    background: linear-gradient(to right, #F0F8FF , #FFFAF0 );
    color: #fff;
    border-radius: 30px;
    box-shadow: none;
    border: none;
    height: 38px;
    padding-left: 40px;
    padding-right: 20px;
}
.find{
    margin-top: 6px;
    padding: 0px;
}
.name-nav{
    margin-left: .25rem!important;
    color: #fff;
    font-size: 13px;
}
.header-item {
    color: #e9ecef;
}
.header{
    width: 100%; 
    padding: 0px!important
}
.logout{
    color: rgb(240, 60, 60);
        display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}
.logout:hover{
    background-color:#F8F8FF;
    color: red;
}
.content-sidebar{
    width: 200px!important;
    padding: 20px;
    padding-top: 10px;
    cursor: pointer;
        transition: all .4s;
}
.buttonSubmitLogout{
    justify-content: space-between!important;
    text-align: center!important;
    min-width: 110px!important;

}
.buttonDrops{
    color: white;
    margin: 3px;
    font-size: 10px!important;
}
.buttonLogout{
    text-align: center;
    color: #f46a6a!important;
}
.buttonLogout:hover{
    color: red!important;
}
.buttonYes{
    color: #fff;
    background-color: #34c38f!important;
    border-color: #34c38f!important;
    min-width: 110px;
    margin: 8px;
    padding-top: 7.5px;
    padding-bottom: 7.5px;
    border-radius: .25rem
}
.buttonNo{
    color: #fff;
    background-color: #74788d;
    border-color: #74788d;
    min-width: 110px;
    margin: 8px;
    padding-top: 7.5px;
    padding-bottom: 7.5px;
    border-radius: .25rem
}
.showLogout{
    font-family: Roboto;
}
.iconLogout{
    text-align: center;
}
.list-notify{
    width: 320px;
    margin-left:-70px; 
}
.iconsBox{
    background-color: #eff2f7!important;
    height: 65px;
    width: 65px;
    padding: 19px;
    border-radius: 50%!important;
    color: #556ee6!important;
}
.bi-check2-circle{
    font-size: 15x;
    color: #008BF4;
}
.icon-check-notify:hover  .bi-check2-circle{
    color: #3BB54A;
}
/* .dropdown-item{
    padding: 3px;
    text-align: center;
} */
.notify:hover{
background-color:#d7d9db;
}
#title-notify{
display:flex;
justify-content: space-between;
color: #6c757d;
font-size:13px
}
.time-notify{
display:flex;
justify-content: space-between;
}
.rule-notify{
    color: red;
}
.code-notify{
    display:flex;
}
.title-rule{
    white-space: nowrap;
}
.btn-secondary {
    color: red;
    background-color: #ffff!important;
    border-color: #ffff!important;
    text-align: start;
}
.btn-secondary:hover{
    background-color: #DCDCDC!important;
}
.text-sidebar{
    text-align: start;
}
.content-sidebar{
    color: #474D52;
    border-radius: 5px;
    padding-bottom: 10px;
}
.content-sidebar:hover{
    background-color: #DCDCDC!important;
}
.content-sidebar-menu{
    padding-left: 10px;
}
.price{
    font-size: 16px;
    color: #1E90FF;
}
@media (max-width: 576px) {
.container,
.container-sm {
max-width: 540px;
}
.name-router{
    font-size: 13px;
}
#sidebar-menu{
display: none!important;;
}
.navbar-brand-box{
    display: none!important;
}
.list-notify{
    width: 230px;
}
} 

@media (min-width: 768px) {
#sidebar-border{
    display: none;
}
} 
@media (min-width: 992px) {
.container,
.container-lg,
.container-md,
.container-sm {
max-width: 960px;
}
#sidebar-border{
    display: none;
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
#sidebar-border{
    display: none;
}
.listChange{
    display: none;
}
}
.b-sidebar {
    width: 200px!important;
}
.content-menu{
    text-align: center;
    background-color: #2a3042;
    width: 200px;
}
.b-sidebar-header{
    background-color: #2a3042 ;
}
.bi-x{
    color: #fff;
}

</style>