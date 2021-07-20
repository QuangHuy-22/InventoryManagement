<template>
  <div class="homePages">
    <index />
    <div class="content-page">
      <div class="menu-content">
        <div class="main-content">
          <div class="page-content">
            <!-- <div class="container-fluid"> -->

            <!-- start page title -->
            <div class="row">
              <div class="col-12">
                <div
                  class="page-title-box d-flex align-items-center justify-content-between"
                >
                  <h4 class="mb-0 font-size-18">Danh sách giao dịch rủi ro</h4>
                </div>
              </div>
            </div>
            <!-- end page title -->

            <div class="searchInput colorChange" style="margin: 0px; margin-bottom: 12px;">
              <div class="col-lg-12">
              <form class="form-find" @submit.prevent="submitForm">
                <div class="box-fillter">
                  <div class="form">
                    <div class="row">              
                      <div class="col-md col-sm-3">
                        <div class="bf-detail">
                          <Select2
                            v-model="search.transactionType"
                            :options="dataTransactionType"
                            placeholder="Loại giao dịch"
                          >
                          </Select2>
                        </div>
                      </div>
                      <div class="col-md col-sm-3">
                        <div class="bf-detail">
                          <Select2
                            v-model="search.riskType"
                            :options="dataRiskType"
                            placeholder="Loại rủi ro"
                          >
                          </Select2>
                        </div>
                      </div>
                      <div class="col-md col-sm-3">
                        <div class="bf-detail">
                          <Select2
                            v-model="search.nrmUsername"
                            :options="dataUsername"
                            placeholder="Người xử lý"
                          >
                          </Select2>
                        </div>
                      </div>
                      <div class="col-md col-sm-3">
                        <div class="bf-detail">
                          <input 
                            type="text"
                            style="font-size: 13px;" 
                            class="form-control" 
                            placeholder="Mã giao dịch"
                            v-model="search.transactionId"
                          >
                        </div>
                      </div>
                      <div class="col-md col-sm-3 ">
                        <div class="bf-detail">
                          <b-input-group class="mb-3">
                            <b-form-input
                              id="example-input"
                              class="form-control"
                              v-model="search.dateFrom"
                              type="text"
                              placeholder="Từ ngày"
                              autocomplete="off"
                            ></b-form-input>
                            <b-input-group-append>
                              <b-form-datepicker
                                v-model="search.dateFrom"
                                class="date"
                                button-only
                                right
                                locale="vi-VN"
                                style="height: 34px;"
                                aria-controls="example-input"
                              ></b-form-datepicker>
                            </b-input-group-append>
                          </b-input-group>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md col-sm-3">
                        <div class="bf-detail">
                          <Select2
                            v-model="search.typeOfApp"
                            :options="dataAppType"
                            placeholder="Loại App"
                          >
                          </Select2>
                        </div>
                      </div>
                      <div class="col-md col-sm-3">
                        <div class="bf-detail">
                          <Select2
                            v-model="search.statusAction"
                            :options="dataStatus"
                            placeholder="Trạng thái"
                          >
                          </Select2>
                        </div>
                      </div>
                      <div class="col-md col-sm-3">
                        <div class="bf-detail">
                          <input 
                            type="text"
                            style="font-size: 13px;" 
                            class="form-control" 
                            placeholder="Họ và tên"
                            v-model.trim="search.customerName"
                          >
                        </div>
                      </div>
                      <div class="col-md col-sm-3">
                        <div class="bf-detail">
                          <input 
                            type="text"
                            style="font-size: 13px;" 
                            class="form-control" 
                            placeholder="Số điện thoại"
                            v-model.trim="search.phoneNumber"
                          >
                        </div>
                      </div>
                      <div class="col-md col-sm-3">
                        <div class="bf-detail">
                          <b-input-group class="mb-3">
                            <b-form-input
                              id="example-input"
                              class="form-control"
                              v-model="search.dateTo"
                              type="text"
                              placeholder="Đến ngày"
                              autocomplete="off"
                            ></b-form-input>
                            <b-input-group-append>
                              <b-form-datepicker
                                v-model="search.dateTo"
                                class="date"
                                button-only
                                right
                                locale="vi-VN"
                                style="height: 34px;"
                                aria-controls="example-input"
                              ></b-form-datepicker>
                            </b-input-group-append>
                          </b-input-group>
                        </div>
                      </div>
                    </div>
                      
                  </div>

                  <div class="btn-fillter">
                    <div class="bf-detail">
                      <button
                        @click.prevent="submitForm"
                        class="button-filter btn btn-info"
                      >
                        Lọc
                      </button>
                      <button
                        @click="clearSearch"
                        class="button-filter btn btn-dark"
                      >
                        Bỏ lọc
                      </button>
                      <button
                        @click="exportExcel()"
                        class="button-filter btn btn-success"
                      >
                        Xuất Excel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="card colorChange">
                  <div class="card-body" style="padding: 8px!important;">
                    <h4 class="card-title mb-4">
                      Tổng giao dịch: {{ this.pagination.total }}
                    </h4>
                    <div class="table-responsive">
                      <table class="table table-centered table-nowrap mb-0">
                        <thead class="thead-light">
                          <tr style="font-size: 12px;white-space: nowrap;">
                            <th>STT</th>
                            <th>Thời gian</th>
                            <th>App</th>
                            <th>Giao dịch</th>
                            <th>Mã Giao Dịch</th>
                            <th>Khách Hàng</th>
                            <th>Số tiền</th>
                            <th>Loại Rủi Ro</th>
                            <th>Trạng thái</th>
                            <th style="padding:0px; margin:0px">Người xử lý</th>
                            <th>Thao tác</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr
                            style="font-size: 12px"
                            v-for="(transaction, index) in dataTransactions"
                            :key="index"
                          >
                            <td style="text-align: center">
                              {{ params.size * (params.page - 1) + index + 1 }}
                            </td>
                            <td>
                              <span>
                                {{ transaction.transactionTime | formatDateTime }}
                              </span>
                            </td>
                            <td>Vimo</td>
                            <td>{{ transaction.methodName }}</td>
                            <td>{{ transaction.transactionCode }}</td>
                            <td>
                              <span>Tên: {{ transaction.customerName }}</span>
                              <span style="display: block">
                                SĐT: {{ transaction.customerIdf }}
                              </span>
                            </td>
                            <td>
                              {{ transaction.amount | formatCurrency }}
                            </td>
                            <td v-if="transaction.rulesDescription"
                              class="rules"
                            >
                              <span
                                v-for="(rule, index) in transaction.rulesDescription"
                                :key="index"
                              >
                                {{ rule }}
                              </span>
                            </td>
                            <td>
                              <span
                                v-if="transaction.statusAction === 'NEW'"
                                class="badge badge-pill badge-soft-primary"
                              >
                                Chờ xử lý
                              </span>
                              <span
                                v-if="transaction.statusAction === 'DONE'"
                                class="badge badge-pill badge-soft-success"
                              >
                                Đã xử lý
                              </span>
                              <span
                                v-if="transaction.statusAction === 'PROCESSING'"
                                class="badge badge-pill badge-soft-danger"
                              >
                                Đang xử lý
                              </span>
                            </td>
                            <td>{{ transaction.nrmUsername }}</td>
                            <td>
                              <b-dropdown
                                right
                                text=""
                                variant="none"
                                class="three-dot"
                                no-caret
                              >
                                <template #button-content>
                                  <b-icon icon="three-dots-vertical"></b-icon>
                                </template>
                                <div style="font-size: 13px;">
                                  <router-link
                                    v-if="DATA_PERMISSION.includes('VIEW_DETAIL_TRAN')"
                                    class="dropdown-item"
                                    :to="`/list-risk/detail?code=${transaction.transactionCode}`"
                                  >
                                    Chi tiết
                                  </router-link>
                                  <b-dropdown-item
                                    v-if="transaction.statusAction === 'NEW'"
                                    @click="setProcessing(transaction.transactionCode)"
                                  >
                                    Nhận giao dịch
                                  </b-dropdown-item>
                                  <b-dropdown-item
                                    v-if="transaction.statusAction === 'PROCESSING' && transaction.nrmUsername === email"
                                    @click="setDone(transaction.transactionCode)"
                                  >
                                    Hoàn tất
                                  </b-dropdown-item>
                                  <b-dropdown-item
                                    v-if="transaction.statusAction === 'PROCESSING' && transaction.nrmUsername === email"
                                    @click="changeNew(transaction.transactionCode)"
                                  >
                                    Chuyển đổi
                                  </b-dropdown-item>
                                  <!-- --------- modal xác nhận chuyển đổi -------->
                                  <b-modal
                                    :id="transaction.transactionCode"
                                    hide-footer
                                    hide-header
                                  >
                                    <b-col class="iconLogout mb-2"> </b-col>
                                    <div class="d-block text-center">
                                      <h3
                                        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;"
                                      >
                                        Nhập lý do chuyển đổi
                                      </h3>
                                      <div>
                                        <b-card>
                                          <b-input v-model="reasonTransfer" />
                                        </b-card>
                                      </div>
                                    </div>
                                    <div class="buttonSubmitLogout">
                                      <button
                                        class="buttonOK mt-3"
                                        @click="setNew(transaction.transactionCode)"
                                        style="font-size: 13px;"
                                      >
                                        OK
                                      </button>
                                      <button
                                        class="buttonOK mt-3"
                                        @click="$bvModal.hide(transaction.transactionCode)"
                                        style="font-size: 13px;"
                                      >
                                        Hủy
                                      </button>
                                    </div>
                                  </b-modal>
                                  <!-- --------- end modal xác nhận chuyển đổi -------->
                                </div>
                              </b-dropdown>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- end table-responsive -->
                    <div class="overflow-auto">
                      <b-pagination
                        v-model="params.page"
                        :total-rows="pagination.total"
                        :per-page="params.size"
                        first-text="First"
                        prev-text="Previous"
                        next-text="Next"
                        last-text="Last"
                        class="pagination mt-4"
                      ></b-pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- All Modal -->
          <!-- Modal permission-->
          <b-modal id="bv-modal-example-error-permission" hide-footer hide-header>
            <b-col class="iconLogout mb-2">
              <b-icon
                icon="x-circle"
                class="iconsBox"
                style="color: red!important;"
              ></b-icon>
            </b-col>
            <div class="d-block text-center">
              <h3
                style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;"
              >
                Bạn không có quyền truy cập
              </h3>
            </div>
            <div class="buttonSubmitLogout">
              <button
                class="buttonOK mt-3"
                @click="$bvModal.hide('bv-modal-example-error-permission')"
                style="font-size: 13px;"
              >
                OK
              </button>
            </div>
          </b-modal>
          <!-- End modal permission-->
          
          <!-- Modal nhận giao dịch thành công -->
          <b-modal id="bv-modal-set-processing-done" hide-footer hide-header>
            <b-col class="iconLogout mb-2">
              <div class="mb-img mb-4">
                <span><img src="../../assets/images/sussecc.svg" alt=""/></span>
              </div>
            </b-col>
            <div class="d-block text-center">
              <h3
                style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;"
              >
                Nhận xử lý giao dịch thành công
              </h3>
            </div>
            <div class="buttonSubmitLogout">
              <button
                class="buttonOK mt-3"
                style="font-size: 13px;"
                @click="$bvModal.hide('bv-modal-set-processing-done')"
              >
                OK
              </button>
            </div>
          </b-modal>
          <!-- End modal nhận giao dịch thành công -->

          <!-- Modal hoàn tất giao dịch thành công -->
          <b-modal id="bv-modal-set-processed-done" hide-footer hide-header>
            <b-col class="iconLogout mb-2">
              <div class="mb-img mb-4">
                <span><img src="../../assets/images/sussecc.svg" alt=""/></span>
              </div>
            </b-col>
            <div class="d-block text-center">
              <h3
                style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;"
              >
                Hoàn tất giao dịch thành công
              </h3>
            </div>
            <div class="buttonSubmitLogout">
              <button
                class="buttonOK mt-3"
                style="font-size: 13px;"
                @click="$bvModal.hide('bv-modal-set-processed-done')"
              >
                OK
              </button>
            </div>
          </b-modal>
          <!-- End modal hoàn tất giao dịch thành công -->

          <!-- Modal chuyển đổi giao dịch thành công -->
          <b-modal id="bv-modal-set-new-done" hide-footer hide-header>
            <b-col class="iconLogout mb-2">
              <div class="mb-img mb-4">
                <span><img src="../../assets/images/sussecc.svg" alt=""/></span>
              </div>
            </b-col>
            <div class="d-block text-center">
              <h3
                style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;"
              >
                Chuyển đổi thành công
              </h3>
            </div>
            <div class="buttonSubmitLogout">
              <button
                class="buttonOK mt-3"
                style="font-size: 13px;"
                @click="$bvModal.hide('bv-modal-set-new-done')"
              >
                OK
              </button>
            </div>
          </b-modal>
          <!-- End modal chuyển đổi giao dịch thành công -->

          <!-- end modal -->
        </div>
        <footer-content />
      </div>
    </div>
  </div>
</template>

<script>
import FooterContent from "../../components/FooterContent.vue";
import Index from "../../components/index.vue";
import { TransactionService } from "@/services/transaction.service";
import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
import Select2 from 'v-select2-component';

export default {
  name: "list-risk",
  mixins: [prepareQueryParamsMixin],
  components: {
    Index,
    FooterContent,
    Select2
  },

  data() {
    return {
      dataTransactions: [],
      params: {
        page: 1,
        size: 10,
      },
      pagination: {
        total: 0,
      },
      search: {
        customerName: '',
        dateFrom: null,
        dateTo: null,
        nrmUsername: '',
        phoneNumber: '',
        riskType: '',
        statusAction: '',
        transactionId: '',
        transactionType: '',
        typeOfApp: ''
      },
      dataTransactionType: [],
      dataRiskType: [],
      dataUsername: [],
      dataAppType: [],
      dataStatus: [],

      DATA_PERMISSION: localStorage.getItem("permission"),
      email: localStorage.getItem("email"),
      reasonTransfer: ''
    };
  },
  
  created () {
    this.fetchData();
    this.getDataSearch()
  },

  methods: {
    async fetchData () {
      try {
        if (!this.search.dateFrom) delete this.search.dateFrom
        if (!this.search.dateTo) delete this.search.dateTo

        const response = await TransactionService.getList(this.params, this.search);
        if (response.status === 200) {
          this.dataTransactions = response.data.riskTransList;
          this.pagination.total = response.data.total;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getDataSearch () {
      try {
        const response = await TransactionService.getDataSearch()
        if (response.status === 200) {
          this.dataTransactionType = response.data.transactionType
          this.dataRiskType = response.data.riskType
          this.dataUsername = response.data.nrmUsername
          this.dataAppType = response.data.appType
          this.dataStatus = response.data.status
        }
      } catch (error) {
        console.log(error)
      }
    },

    submitForm () {
      this.fetchData()
    },

    clearSearch () {
      this.params = {
        page: 1,
        size: 10
      },
      this.search = {}
    },

    async exportExcel () {
      try { 
        await TransactionService.exportExcel(this.search)
      } catch (error) {
        console.log(error)
      }
    },

    async setProcessing (transactionCode) {
      if (this.DATA_PERMISSION.includes('PROCESSING_RISK')) {
        try {
          const response = await TransactionService.setProcessing(this.email, transactionCode)
          if (response.status === 200) {
            this.$bvModal.show('bv-modal-set-processing-done')
            this.fetchData()
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        this.$bvModal.show("bv-modal-example-error-permission")
      }
    },

    async setDone (transactionCode) {
      if (this.DATA_PERMISSION.includes('DONE_RISK')) {
        try {
          const response = await TransactionService.setProcessed(this.email, transactionCode)
          if (response.status === 200) {
            this.$bvModal.show('bv-modal-set-processed-done')
            this.fetchData()
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        this.$bvModal.show("bv-modal-example-error-permission")
      }
    },

    changeNew (transactionCode) {
      if (this.DATA_PERMISSION.includes('PROCESSING_RISK')) {
        this.$bvModal.show(transactionCode)
      } else {
        this.$bvModal.show("bv-modal-example-error-permission")
      }
    },

    async setNew (transactionCode) {
      try {
        const body = {
          nrmUsername: this.email,
          reasonTransfer: this.reasonTransfer
        }
        const response = await TransactionService.transfer(transactionCode, body)
        if (response.status === 200) {
          this.$bvModal.hide(transactionCode)
          this.$bvModal.show('bv-modal-set-new-done')
          this.fetchData()
        }
      } catch (error) {
        console.log(error)
      }
    }
  },

  computed: {
    useInUrlQueryPropList () {
      return this.prepareQueryParamsMixin({
        page: this.params.page
      })
    }
  },

  watch: {
    "params.page": function() {
      this.$router.push({
        path: '/list-risk',
        query: this.useInUrlQueryPropList
      })
      this.fetchData();
    },
  },
};
</script>

<style scoped>
.content-page {
  background-color: #ffff;
  padding-left: 230px;
}
.main-content {
  background-color: #ffff;
  /* padding:20px; */
  margin-top: 70px !important;
}
.colorChange {
  background: linear-gradient(to right, #F0F8FF , #FFFAF0 );
}
.box-fillter {
  background: linear-gradient(to right, #F0F8FF , #FFFAF0 );
}
.nav {
  background-color: #fff;
}
.pagination {
  justify-content: flex-end !important;
}
.tabs {
  margin: 0px !important;
  background-color: #fff;
}
.titleNew {
  color: #008bf4;
}
.titleProcessing {
  color: #fcb63e;
}
.titleDone {
  color: #3bb54a;
}
.form-find {
  display: flex;
}
.rules {
  display: block;
  color: #cf232a;
}
.option {
  color: #495057;
}
#example-input {
  font-size: 13px;
}
.bf-detail {
  margin: 0px;
}
.col-md {
  padding: 0px 12px 0px 12px;
}
.form-find {
  display: flex;
}
.button-filter {
  font-size: 13px;
  margin-bottom: 5px;
  color: #fff;
  min-width: 63px;
  margin-right: 5px !important;
  white-space: nowrap;
}
.box-fillter {
  padding: 20px;
  width: 100%;
}
.rules {
  display: block;
  color: #cf232a;
}
.option {
  color: #495057;
}
#example-input {
  font-size: 13px;
}
.bf-detail {
  margin: 0px;
}
.col-md {
  padding: 0px 12px 0px 12px;
}
@media (max-width: 576px) {
  .content-page,
  .container-sm {
    max-width: 540px;
    padding: 0px !important;
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
