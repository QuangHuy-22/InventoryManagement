import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../pages/Login.vue'
import HomePage from '../pages/HomePage.vue'
import ListUser from "../pages/user/ListUser.vue"
import AddUser from "../pages/user/AddUser.vue"
import UpdateUser from "../pages/user/UpdateUser.vue"
import DetailUser from "../pages/user/DetailUser.vue"
import Recover from "../components/Recover.vue"
import Verify from "../components/Verify.vue"
import ChangePassword from "../components/ChangePassword.vue"
import ChangePasswordVerify from "../components/ChangePasswordVerify.vue"
import ListRole from "../components/ListRole.vue"
import AddRole from "../components/AddRole.vue"
import AssignRole from "../pages/user/AssignRole.vue"
import UpdateRole from "../components/UpdateRole.vue"
import ListRisk from "../pages/risk/ListRisk.vue"
import RiskDetail from "../pages/risk/RiskDetail.vue"
import NotFound from "../pages/NotFound.vue"
import Lineness from "../components/Liveness.vue"
import Readiness from "../components/Readiness.vue"
import index from "../components/index.vue"
import ListCategory from "../pages/Category/ListCategory"
import CreateCategory from "../pages/Category/CreateCategory"
import CreateProductInfo from "../pages/ProductInfo/CreateProductInfo.vue"
import ProductInfo from "../pages/ProductInfo/ProductInfo.vue"
import Customer from "../pages/Customer/Customer.vue"
import CreateCustomer from "../pages/Customer/CreateCustomer.vue"
import CustomerDetail from "../pages/Customer/CustomerDetail.vue"
import Supplier from "../pages/Supplier/Supplier.vue"
import CreateVAT from "../pages/VAT/CreateVAT.vue"
import VAT from "../pages/VAT/VAT.vue"
import VATDetail from "../pages/VAT/VATDetail.vue"
import CreateVATDetail from "../pages/VAT/CreateVATDetail.vue"
import ListVATCode from "../pages/VAT/ListVATCode.vue"
import Product from "../pages/Product/Product.vue"
import CreateProductDetail from "../pages/Product/CreateProductDetail.vue"
import Issue from "../pages/Issue/Issue.vue"
import CreateIssueDetail from "../pages/Issue/CreateIssueDetail.vue"
// import health from "./health.js"


Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Đăng nhập',
        component: Login,
        meta: {
            title: " Đăng nhập | Risk Manegement",
        }
    },
    {
        path: '/',
        name: 'Home',
        component: Home

    },
    {
        path: '/home-page',
        name: 'Trang chủ',
        component: HomePage,
        meta: {
            title: " List User | Risk Manegement",
        }
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        meta: {
            title: " List User | Risk Manegement",
        }
    },
    {
        path: '/list-user',
        name: 'Danh sách User',
        component: ListUser,
    },
    {
        path: '/list-user/add-user',
        name: 'Thêm mới User',
        component: AddUser,

    },
    {
        path: '/list-user/update-user/:id',
        name: 'Cập nhật User',
        component: UpdateUser,
    },
    {
        path: '/list-user/detail-user/:id',
        name: 'Chi Tiết User',
        component: DetailUser,
    },
    {
        path: '/recover',
        name: 'Quên mật khẩu',
        component: Recover,
    },
    {
        path: '/verify',
        name: 'Xác thực Email',
        component: Verify,
    },
    {
        path: '/change-password',
        name: 'Đổi mật khẩu',
        component: ChangePassword,
    },
    {
        path: '/change-password-verify',
        name: 'Đổi mật khẩu xác thực',
        component: ChangePasswordVerify,
    },
    {
        path: '/list-role',
        name: 'Danh sách nhóm quyền',
        component: ListRole,
    },
    {
        path: '/list-role/add-role',
        name: 'Thêm mới nhóm quyền',
        component: AddRole,
    },
    {
        path: '/list-user/assign-role/:id',
        name: 'Gán nhóm quyền',
        component: AssignRole,
    },
    {
        path: '/list-role/update-role/:code',
        name: 'Cập nhật nhóm quyền',
        component: UpdateRole,
    },
    {
        path: '/list-risk',
        name: 'Danh sách giao dịch',
        component: ListRisk,
    },
    {
        path: '/list-risk/detail',
        name: 'Chi tiết giao dịch',
        component: RiskDetail,
    },
    {
        path: '/actuator/liveness',
        name: 'Lineness',
        component: Lineness,
    },
    {
        path: '/product/category',
        name: 'Category',
        component: ListCategory,
    },
    {
        path: '/product/product-info/create-product-info',
        name: 'CreateProductInfo',
        component: CreateProductInfo,
    },
    {
        path: '/product/product-info',
        name: 'ProductInfo',
        component: ProductInfo,
    },
    {
        path: '/product/category/create-category',
        name: 'Create Category',
        component: CreateCategory,
    },
    {
        path: '/customer',
        name: 'Customer',
        component: Customer,
    },
    {
        path: '/customer/create-customer',
        name: 'CreateCustomer',
        component: CreateCustomer,
    },
    {
        path: '/supplier',
        name: 'Supplier',
        component: Supplier,
    },
    {
        path: '/supplier/create-vat/:id',
        name: 'CreateVAT',
        component: CreateVAT,
    },
    {
        path: '/inventory/vat/create-vat-detail/:id',
        name: 'CreateVATDetail',
        component: CreateVATDetail,
    },
    {
        path: '/inventory/vat/vat-code/:code',
        name: 'ListVATCode',
        component: ListVATCode,
    },
    {
        path: '/inventory/vat',
        name: 'VAT',
        component: VAT,
    },
    {
        path: '/inventory/vat-detail',
        name: 'VATDetail',
        component: VATDetail,
    },
    {
        path: '/product-back-done',
        name: 'Product',
        component: Product,
    },
    {
        path: '/issue',
        name: 'Issue',
        component: Issue,
    },
    {
        path: '/issue/add-issue-detail/:id',
        name: 'CreateIssueDetail',
        component: CreateIssueDetail,
    },
    {
        path: '/product/add-product-detail/:id',
        name: 'CreateProductDetail',
        component: CreateProductDetail,
    },
    {
        path: '/customer/detail-customer/:id',
        name: 'CustomerDetail',
        component: CustomerDetail,
    },
    {
        path: '/actuator/readiness',
        name: 'Readiness',
        component: Readiness,
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    path: '*',
    component: NotFound,
    routes
})
router.beforeEach((to, from, next) => {
        if (to.name !== 'Đăng nhập' && localStorage.getItem('token') == null && to.name !== 'Quên mật khẩu' && to.name !== 'Xác thực Email') next({ name: 'Đăng nhập' })
        else next()
    })
    // exports.health = function(req, res, next) {
    //   return res.sendStatus(200);
    // }
export default router