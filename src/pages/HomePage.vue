<template>
<div class="homePages">
  <index />
  <div class="content-page">
      <div class="menu-content">
        <div class="main-content">
          <div class="page-content">
            <div class="page-text">
              <div class="">
              <article>
                <div>
                  <readiness />
                </div>
              </article>
              </div>
              <div class="x-block d-md-flex justify-content-between" style="margin-top:270px">
                <div class="flex-item card">
                <router-link to="/product/product-info">
                  <a class="link-wrapper">
                    <div><img src="../assets/images/product-info.webp" alt="" ></div>
                    <div class="card-body">
                      <h3>Product Info</h3>
                    </div>
                  </a>
                  </router-link>
                </div>
                <div class="flex-item card">
                  <router-link to="/inventory/list-vat">
                  <a class="link-wrapper">
                    <div><img src="../assets/images/VAT.jpg" ></div>
                    <div class="card-body">
                      <h3>Vat</h3>
                    </div>
                  </a>
                  </router-link>
                </div>
                <div class="flex-item card">
                  <router-link to="/product/product-detail">
                  <a class="link-wrapper">
                    <div><img src="../assets/images/product-detail.jpg" ></div>
                    <div class="card-body">
                      <h3>Product Detail</h3>
                    </div>
                  </a>
                  </router-link>
                </div>
                <div class="flex-item card">
                  <router-link to="/management/customer">
                  <a class="link-wrapper">
                    <div><img src="../assets/images/customer.jpg" ></div>
                    <div class="card-body">
                      <h3>Customer</h3>
                    </div>
                  </a>
                  </router-link>
                </div>
              </div>
            </div>
        </div>
      </div>
      <footer-content />
    </div>
  </div>
</div>
</template>

<script>
import FooterContent from "../components/FooterContent.vue";
import Readiness from "../components/Readiness.vue"
import index from '../components/index.vue'
export default {
  components: { index, FooterContent, Readiness },
  name: "home-page",
  data() {
    
  return {
  }
  },
}

</script>

<style scoped>
.main-content{
  background: linear-gradient(to right, #F0F8FF , #FFFAF0 );
}
article{
  display: flex;
}
.jumrobo{
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    padding: 32px;
    margin-bottom: 32px;
    display: flex;
}
h2{
  font-family:Georgia, 'Times New Roman', Times, serif;
}
p{
  font-family: monospace;
  word-wrap: break-word;
}
.link-wrapper{
  display: block;
  overflow: hidden;
  text-decoration: none;
  color: #1abc9c;
    
}
a{
      background-color: transparent;
}
.card{
  display: block;
  overflow: hidden;
  color: #1abc9c;
  padding: 2px;
}
h3{
  font-family: monospace;
}
.flex-item{
  border: 1px solid rgba(0,0,0,.125)!important;
}
.flex-item:hover{
  border: 2px solid #1abc9c!important;
}
.t1{
      position: absolute;
    display: block;
    height: 77%;
    width: 100%;
    left: 0px;
    top: 0px;
    transform: translate3d(0%, 0%, 0px);
    transform-style: preserve-3d;
    backface-visibility: hidden;

}
.t2{
      position: relative;
    display: block;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    transform: translate3d(0.221354%, 4.17928%, 0px);
    transform-style: preserve-3d;
    backface-visibility: hidden;
}
.t3{
      position: relative;
    display: block;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    transform: translate3d(-0.369792%, 6.30677%, 0px);
    transform-style: preserve-3d;
    backface-visibility: hidden;
}
img{
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
      text-align: center;
      height: 250px;
      width: 250px;
}
</style>
