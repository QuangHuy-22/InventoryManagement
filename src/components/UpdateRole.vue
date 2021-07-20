<template>
  <div class="update-role">
    <index />
    <div class="content-page">
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid" style="padding-right: 35px;">
            <!-- InstanceBeginEditable name="EditRegion1" -->

            <!-- box-title -->
            <div class="box-title">
              <h2 class="name-page">Cập nhật mới nhóm quyền</h2>
              <div class=" float-right">
                <!-- <a href="#" class="btn btn-outline-primary" data-toggle="modal" data-target=".Risk_QL-User_edit"><i class='bx bxs-edit'></i> Cập nhật</a> -->
                <form action="#" @submit.prevent="handleAddRole">
                  <router-link to="/management/list-role" class="btn btn-dark">
                    Hủy bỏ
                  </router-link>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target=".Risk_Permission_Update"
                    style="margin-left: 5px;"
                  >
                    Cập nhật
                  </button>
                </form>
              </div>
            </div>

            <!-- box-content -->
            <div class="card">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card-body">
                    <div class="needs-validation" novalidate>
                      <div class="form-group">
                        <label for="validationCustom01"
                          >Mã nhóm quyền
                          <span class="text-danger"><sup>*</sup></span></label
                        >
                        <input
                          type="text"
                          style="font-size: 13px;"
                          class="form-control"
                          id="validationCustom01"
                          :placeholder="this.codeRole"
                          value=""
                          required
                          disabled=""
                        />
                        <span class="icon-form text-danger"
                          ><i class="bx bx-x"></i
                        ></span>
                      </div>
                      <div class="form-group">
                        <label for="validationCustom01"
                          >Tên nhóm quyền
                          <span class="text-danger"><sup>*</sup></span></label
                        >
                        <input
                          type="text"
                          style="font-size: 13px;"
                          class="form-control"
                          id="validationCustom01"
                          v-model="nameDescription"
                          required
                        />
                        <span class="icon-form text-success"
                          ><i class="bx bx-check"></i
                        ></span>
                      </div>
                      <div class="form-group">
                        <label for="validationCustom01"
                          >Mô tả
                          <span class="text-danger"><sup>*</sup></span></label
                        >
                        <input
                          type="text"
                          style="font-size: 13px;"
                          class="form-control"
                          id="validationCustom01"
                          v-model="descrip"
                          required
                        />
                        <span class="icon-form text-success"
                          ><i class="bx bx-check"></i
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Modal Cập nhật -->
                <b-modal
                  id="bv-modal-example-update-role"
                  hide-footer
                  hide-header
                >
                  <b-col class="iconLogout mb-2">
                    <div class="mb-img mb-4">
                      <span
                        ><img src="../assets/images/sussecc.svg" alt=""
                      /></span>
                    </div>
                  </b-col>
                  <div class="d-block text-center">
                    <h3
                      style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;"
                    >
                      Cập nhật nhóm quyền thành công
                    </h3>
                  </div>
                  <div class="buttonSubmitLogout">
                    <router-link to="/management/list-role">
                      <button class="buttonOK mt-3" style="font-size: 13px;">
                        OK
                      </button>
                    </router-link>
                  </div>
                </b-modal>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-3" style="font-size: 15px;">
                  Khai báo quyền
                </h4>

                <!-- ---------  check box all--------->

                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <!-- ----------check box user---------->

                      <div class="col-sm-3">
                        <div class="form-group">
                          <div class="checkAllUser">
                              <label for="name">Quản lí User</label>
                            <div
                              v-for="dataUsers in dataUser"
                              :key="dataUsers.id"
                            >
                              <div >
                                <div class="custom-control custom-checkbox" >
                                    <input type="checkbox" :id="dataUsers.id" :value="dataUsers.code" v-model="codePermissionUser.listPermission" >
                                    <label style="padding-left:7px;margin-bottom: 0px ;" for="invalidCheck">{{dataUsers.name}}</label>
                                </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!----------end check box user---------- -->

                      <!-- -- ----------check box app---------- -->
                      <div class="col-sm-3">
                        <div class="form-group">
                          <div class="checkAllApp">
                              <label for="name"
                                >Quyền ứng dụng quản lý App</label
                              >
                            <div
                              v-for="dataApps in dataApp"
                              :key="dataApps.id"
                            >
                              <div>
                                <div class="custom-control custom-checkbox" >
                                    <input type="checkbox" :id="dataApps.id" :value="dataApps.code" v-model="codePermissionApp.listPermission" >
                                    <label style="padding-left:7px;margin-bottom: 0px ;" for="invalidCheck">{{dataApps.name}}</label>
                                </div>
                            </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                      <!-- ----------end check box app----------  -->

                      <!-- ----------check box role---------- -->

                      <div class="col-sm-3">
                        <div class="form-group">
                          <div class="checkAllRole">
                              <label for="name">Quản lí phân quyền</label>
                            <div
                              v-for="dataRoles in dataRole"
                              :key="dataRoles.id"
                            >
                              <div >
                                <div class="custom-control custom-checkbox" >
                                    <input type="checkbox" :id="dataRoles.id" :value="dataRoles.code" v-model="codePermissionRole.listPermission" >
                                    <label style="padding-left:7px;margin-bottom: 0px ;" for="invalidCheck">{{dataRoles.name}}</label>
                                </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- ----------end check box role------------>
                      <!-- ---------- check box trans------------>

                      <!-- ----------end check box trans------------>
                      <div class="col-sm-3">
                        <div class="form-group">
                          <div class="checkAllTrans">
                              <label for="name">Quản lí giao dịch</label>
                            <div
                              v-for="dataTranss in dataTrans"
                              :key="dataTranss.id"
                            >
                              <div class="">
                                <div class="custom-control custom-checkbox" >
                                    <input type="checkbox" :id="dataTranss.id" :value="dataTranss.code" v-model="codePermissionTrans.listPermission" >
                                    <label style="padding-left:7px;margin-bottom: 0px ;" for="invalidCheck">{{dataTranss.name}}</label>
                                </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- ----------end check box trans------------>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- InstanceEndEditable -->
          </div>
          <!-- container-fluid -->
        </div>
        <!-- End Page-content -->
      </div>
    </div>
  </div>
</template>

<script>
import { RoleService } from "@/services/role.service";
import axios from "axios";
import index from "../components/index.vue";
export default {
  components: { index },
  name: "update-role",
  data() {
    return {
      selectedApp: [],
      dataPermission: {},
      selected: [],
      indeterminate: false,
      elementCheck: [],
      codeName: "",
      nameDescription: "",
      description: "",
      dataGroupPermiss: {},
      codePermissionUser: {},
      codePermissionApp: {},
      codePermissionRole: {},
      codePermissionTrans: {},
      idPermission: "",
      checkBoxPermission: [],
      codeRole: this.$route.params.code,
      token: localStorage.getItem("token"),
      BASE_URL: this.$store.getters.BASE_URL,
      dataUser: {},
      dataApp: {},
      dataRole: {},
      dataTrans: {},
      selectRole: [],
      selectApp: [],
      selectUser: [],
      selectAll: [],
      selectTrans: [],
      descrip: "",
    };
  },
  beforeCreate() {
    this.getDataCheckbox();
    this.getDataRole();
    this.getData();
  },
  methods: {
    handleAddRole() {
      const allPermission = this.codePermissionUser.listPermission.concat(
        this.codePermissionApp.listPermission.concat(
          this.codePermissionRole.listPermission.concat(
            this.codePermissionTrans.listPermission
          )
        )
      );
      const data = {
        codePermissions: allPermission,
        id: this.idPermission,
        name: this.nameDescription,
        description: this.descrip,
      };
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "Web",
      };
      axios({
        method: "put",
        url: `${this.BASE_URL}/api/roles`,
        headers: {
          headers,
          Authorization: `Bearer ${this.token}`,
        },
        data: data,
      })
        .then((response) => {
          if (response.status == 200) {
            this.$bvModal.show("bv-modal-example-update-role");
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
          return error.response;
        });
    },
    //dữ liệu của tất cả checkbox
    
// get dữ liệu đã có của role ( permisstion)
    async fetchDataRole() {
      try{
        const response = await RoleService.getPermisstionOfRole(this.token, this.codeRole)
          if (response.status == 200) {
            this.codePermissionApp = response.data[0];
            this.codePermissionTrans = response.data[1];
            this.codePermissionRole = response.data[2];
            this.codePermissionUser = response.data[3];
          }
      } catch(error){
          return error.response;
        }
    },
    //giữ liệu của role (teeb, mô tả ...)
    async fetchData() {
      try{
        const response = await RoleService.getDetailRole(this.token, this.codeRole)
        if (response.status == 200) {
            (this.codeName = response.data.code),
              (this.nameDescription = response.data.name);
            this.idPermission = response.data.id;
            this.descrip = response.data.description;
          }
      }catch(error){
          return error.response;
        }
    },
    async fetchDataCheckbox() {
      try{
        const response = await RoleService.getDataCheckbox(this.token)
        if (response.status == 200) {
            this.dataGroupPermiss = response.data;
            this.dataUser = response.data[0].listPermission;
            this.dataApp = response.data[1].listPermission;
            this.dataRole = response.data[2].listPermission;
            this.dataTrans = response.data[3].listPermission;
          }
      }
      catch(error) {
          return error.response;
        }
    },
  },
  mounted() {
    this.fetchData();
    this.fetchDataRole();
    this.fetchDataCheckbox();
  },
  // computed: {
  //   selectAllApp: {
  //     get() {
  //       return this.dataApp
  //         ? this.codePermissionApp.listPermission.length == this.dataApp.length
  //         : false;
  //     },
  //     set(value) {
  //       var selectApp = [];
  //       if (value) {
  //         this.dataApp.forEach((app) => {
  //           selectApp.push(app.code);
  //         });
  //       }
  //       this.codePermissionApp.listPermission = selectApp;
  //     },
  //   },
  //   selectAllRole: {
  //     get() {
  //       return this.dataRole
  //         ? this.codePermissionRole.listPermission.length ==
  //             this.dataRole.length
  //         : false;
  //     },
  //     set(value) {
  //       var selectRole = [];
  //       if (value) {
  //         this.dataRole.forEach((role) => {
  //           selectRole.push(role.code);
  //         });
  //       }
  //       this.codePermissionRole.listPermission = selectRole;
  //     },
  //   },
  //   selectAllTrans: {
  //     get() {
  //       return this.dataTrans
  //         ? this.codePermissionTrans.listPermission.length ==
  //             this.dataTrans.length
  //         : false;
  //     },
  //     set(value) {
  //       var selectTrans = [];
  //       if (value) {
  //         this.dataTrans.forEach((app) => {
  //           selectTrans.push(app.code);
  //         });
  //       }
  //       this.codePermissionTrans.listPermission = selectTrans;
  //     },
  //   },
  //   selectAllUser: {
  //     get() {
  //       return this.dataUser
  //         ? this.codePermissionUser.listPermission.length ==
  //             this.dataUser.length
  //         : false;
  //     },
  //     set(value) {
  //       var selectUser = [];
  //       if (value) {
  //         this.dataUser.forEach((user) => {
  //           selectUser.push(user.code);
  //         });
  //       }
  //       this.codePermissionUser.listPermission = selectUser;
  //     },
  //   },
  // },
};
</script>

<style scoped>
.content-page {
  background-color: #ffff;
  padding-left: 230px !important;
}
.main-content {
  background-color: #f8f8fb !important;
  padding: 20px;
  margin-top: 70px !important;
}
.update-role {
  font-size: 13px;
}
.btn {
  font-size: 13px;
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
  .name-page,
  .btn {
    font-size: 9px;
  }
}
@media (min-width: 768px) {
  #sidebar-menu {
    display: none !important;
  }
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
