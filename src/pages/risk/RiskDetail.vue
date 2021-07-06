<template>
  <div class="detail-user">
    <Index />
    <div class="content-page">
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="box-title">
              <h2>Chi tiết giao dịch</h2>
              <div class="float-right">
                <button @click="$router.go(-1)" class="btn btn-secondary">
                  Quay lại
                </button>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <form class="form-detail">
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-firstname-input"
                      class="col-sm-2 col-form-label"
                      >Tên khách hàng</label
                    >
                    <div class="col-sm-10">
                      <p class="form-control-plaintext">
                        {{ dataTransaction.customerName }}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-email-input"
                      class="col-sm-2 col-form-label"
                      >Thời gian giao dịch</label
                    >
                    <div class="col-sm-10">
                      <span>
                        {{ dataTransaction.transactionTime | formatDateTime }}
                      </span>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-password-input"
                      class="col-sm-2 col-form-label"
                      >Loại giao dịch</label
                    >
                    <div class="col-sm-10">
                      <p class="form-control-plaintext">
                        {{ dataTransaction.methodName }}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-password-input"
                      class="col-sm-2 col-form-label"
                      >Số điện thoại khách hàng</label
                    >
                    <div class="col-sm-10">
                      <p class="form-control-plaintext">
                        {{ dataTransaction.customerIdf }}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-password-input"
                      class="col-sm-2 col-form-label"
                      >Số tiền</label
                    >
                    <div class="col-sm-10">
                      <p class="form-control-plaintext">
                        {{ dataTransaction.amount | formatCurrency }}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-password-input"
                      class="col-sm-2 col-form-label"
                      >Mã giao dịch</label
                    >
                    <div class="col-sm-10">
                      <p class="form-control-plaintext">
                        {{ dataTransaction.transactionCode }}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-password-input"
                      class="col-sm-2 col-form-label"
                      >Loại rủi ro</label
                    >
                    <div class="col-sm-10">
                      <span
                        style="display: block;"
                        v-for="(rule, index) in dataTransaction.rulesDescription"
                        :key="index"
                      >
                        {{ rule }}
                      </span>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-password-input"
                      class="col-sm-2 col-form-label"
                      >Người xử lý rủi ro</label
                    >
                    <div class="col-sm-10">
                      <p class="form-control-plaintext">
                        {{ dataTransaction.nrmUsername }}
                      </p>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label
                      for="horizontal-password-input"
                      class="col-sm-2 col-form-label"
                      >Trạng thái xử lý</label
                    >
                    <div class="col-sm-10">
                      <p class="form-control-plaintext status">
                        <span
                          v-if="dataTransaction.statusAction === 'NEW'"
                          class="badge badge-pill badge-soft-primary"
                        >
                          Chờ xử lý
                        </span>
                        <span
                          v-if="dataTransaction.statusAction === 'DONE'"
                          class="badge badge-pill badge-soft-success"
                        >
                          Đã xử lý
                        </span>
                        <span
                          v-if="dataTransaction.statusAction === 'PROCESSING'"
                          class="badge badge-pill badge-soft-danger"
                        >
                          Đang xử lý
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div v-if="dataTransaction.statusAction === 'PROCESSING'" class="form-group row mb-0">
                    <div class="btn-new col-sm-10 ">
                      <b-button
                        v-if="dataTransaction.nrmUsername === email"
                        @click="changeNew"
                        variant="outline-warning"
                      >Chuyển đổi</b-button>

                      <!-- Modal xác nhận chuyển đổi giao dịch -->
                      <b-modal id="bv-modal-confirm-set-new" hide-footer hide-header>
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
                            @click="setNew(dataTransaction.transactionCode)"
                            style="font-size: 13px;"
                          >
                            OK
                          </button>
                          <button
                            class="buttonOK mt-3"
                            @click="$bvModal.hide('bv-modal-confirm-set-new')"
                            style="font-size: 13px;"
                          >
                            Hủy
                          </button>
                        </div>
                      </b-modal>
                      <!-- End modal xác nhận chuyển đổi giao dịch -->

                      <b-button
                        v-if="dataTransaction.nrmUsername === email"
                        @click="setDone(dataTransaction.transactionCode)"
                        variant="outline-primary"
                        class="change-process"
                      >Hoàn tất</b-button>
                    </div>
                  </div>
                  <div v-if="dataTransaction.statusAction === 'NEW'" class="form-group row mb-0">
                    <div class="btn-new col-sm-10 ">
                      <b-button @click="$router.go(-1)">Hủy</b-button>
                      <b-button
                      @click="setProcessing(dataTransaction.transactionCode)"
                        variant="outline-primary"
                        class="change-process" 
                      >Nhận Xử Lý</b-button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

  </div>
</template>

<script>
import Index from '../../components/index.vue';
import { TransactionService } from "@/services/transaction.service";

export default {
  components: {
    Index,
  },

  data() {
    return {
      dataTransaction: {},
      code: this.$route.query.code,
      email: localStorage.getItem('email'),
      DATA_PERMISSION: localStorage.getItem("permission"),
      reasonTransfer: ''
    };
  },

  created () {
    this.fetchData()
  },

  methods: {
    async fetchData () {
      try {
        // const code = this.$route.query.code
        const response = await TransactionService.getDetailByCode(this.code)
        if (response.status === 200) {
          this.dataTransaction = response.data
        }
      } catch (error) {
        console.log(error)
      }
    },
    
    async setDone () {
      try {
        const response = await TransactionService.setProcessed(this.email, this.code)
        if (response.status === 200) {
          this.$bvModal.show('bv-modal-set-processed-done')
          this.fetchData()
        }
      } catch (error) {
        console.log(error)
      }
    },

    async setProcessing () {
      try {
        const response = await TransactionService.setProcessing(this.email, this.code)
        console.log(response)
        if (response.status === 200) {
          this.$bvModal.show('bv-modal-set-processing-done')
          this.fetchData()
        }
      } catch (error) {
        console.log(error)
      }
    },

    changeNew () {
      this.$bvModal.show('bv-modal-confirm-set-new')
    },

    async setNew (transactionCode) {
      try {
        const body = {
          nrmUsername: this.email,
          reasonTransfer: this.reasonTransfer
        }
        const response = await TransactionService.transfer(transactionCode, body)
        if (response.status === 200) {
          this.$bvModal.hide('bv-modal-confirm-set-new')
          this.$bvModal.show('bv-modal-set-new-done')
          this.fetchData()
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
};
</script>

<style>
.content-page {
  background-color: #ffff;
  padding-left: 230px !important;
}
.main-content {
  background-color: #f8f8fb !important;
  padding: 20px;
  margin-top: 70px !important;
}
.form-control-plaintext {
  font-size: 13px !important;
  padding: 0px !important;
}
.col-sm-10 {
  padding: 7px 0px;
}
.status {
  color: #fcb63e;
}
.btn-new {
  text-align: end;
}
.change-process {
  margin-left: 5px;
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
