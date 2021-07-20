<template>
  <div class="detail-user">
    <index />
    <div class="content-page">
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="box-title">
              <h2>Chi tiết USER</h2>
              <div class=" float-right">
                <router-link to="/management/list-user" class="btn btn-dark">
                  Quay lại
                </router-link>
              </div>
            </div>

            <!-- box-content -->
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-4">User/ {{ dataUser.fullName }}</h4>
                <form class="form-detail">
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-firstname-input"
                      class="col-sm-2 col-form-label"
                      >Họ và tên</label
                    >
                    <div class="col-sm-10">
                      <p class="form-control-plaintext">
                        {{ dataUser.fullName }}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-email-input"
                      class="col-sm-2 col-form-label"
                      >Email</label
                    >
                    <div class="col-sm-10">
                      <p class="form-control-plaintext">
                        {{ dataUser.username }}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-password-input"
                      class="col-sm-2 col-form-label"
                      >Số điện thoại</label
                    >
                    <div class="col-sm-10">
                      <p class="form-control-plaintext">
                        {{ dataUser.phoneNumber }}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-password-input"
                      class="col-sm-2 col-form-label"
                      >Vai trò</label
                    >
                    <div class="col-sm-10">
                      <p class="form-control-plaintext">
                        {{
                          dataUser.position == "BOD"
                            ? "Bod"
                            : dataUser.position == "TECHNICIAN"
                            ? "Kĩ thuật"
                            : dataUser.position == "OPERATOR"
                            ? "Vận hành"
                            : dataUser.position == "ACCOUNTANT"
                            ? "Kế toán"
                            : ""
                        }}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-password-input"
                      class="col-sm-2 col-form-label"
                      >Trạng thái</label
                    >
                    <div class="col-sm-10">
                      <span
                        :class="
                          dataUser.status == 'INACTIVE'
                            ? 'badge badge-pill badge-soft-danger'
                            : 'badge badge-pill badge-soft-success'
                        "
                        >
                        {{ dataUser.status == "INACTIVE" ? "Khóa" : "Hoạt động" }}
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/services/user.service";
import index from "../../components/index.vue";
export default {
  components: { index },
  name: "detail-user",
  data() {
    return {
      idUser: this.$route.params.id,
      token: localStorage.getItem("token"),
      dataUser: {},
    };
  },

  created () {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      try {
        const response = await UserService.getDetail(this.token, this.idUser);
        if (response.status == 200) {
          this.dataUser = response.data;
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>

<style scoped>
.content-page {
  background-color: #ffff;
  padding-left: 230px;
}
.main-content {
  background-color: #f8f8fb !important;
  padding: 20px;
  margin-top: 70px !important;
}
.card-title {
  font-size: 15px !important;
}
.form-control-plaintext {
  font-size: 13px;
  padding: 0px !important;
}
.col-sm-10 {
  padding: 7px 0px;
}
@media (max-width: 576px) {
  .content-page,
  .container-sm {
    max-width: 540px;
    padding-left: 0px !important;
  }
  #sidebar-menu {
    display: none !important;
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
