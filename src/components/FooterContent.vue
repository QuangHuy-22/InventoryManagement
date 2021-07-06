<template>
<footer class="footer" style=" color: #74788d;background-color: #f2f2f5;">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                {{new Date().getFullYear()}} © Risk.
            </div>
            <div class="col-sm-6">
                <div class="text-sm-right d-none d-sm-block">
                    Design & Develop by Nextpay
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
.buttonOK{
    font-size: 13px;
    width: 100px;
}
</style>