<template>
<footer class="footer" >
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                {{new Date().getFullYear()}} © Inventory Management.
            </div>
            <div class="col-sm-6">
                <div class="text-sm-right d-none d-sm-block">
                    Design & Develop by HieuPV
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {
name:"footer-content",
components:{
},
data(){
    return{
    }
},
}
</script>

<style>
.footer{
color: #74788d; 
background: linear-gradient(to right, #F0F8FF , #FFFAF0 );
border-radius: 5px;
box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%) !important;
}
</style>