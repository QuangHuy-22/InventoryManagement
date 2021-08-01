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
import UpdateCategory from "../pages/Category/UpdateCategory"
import CreateProductInfo from "../pages/ProductInfo/CreateProductInfo.vue"
import UpdateProductInfo from "../pages/ProductInfo/UpdateProductInfo.vue"
import ProductInfo from "../pages/ProductInfo/ProductInfo.vue"
import ProductDetail from "../pages/ProductDetail/ProductDetail.vue"
import CreateProductDetail from "../pages/ProductDetail/CreateProductDetail.vue"
import UpdateProductDetail from "../pages/ProductDetail/UpdateProductDetail.vue"
import Customer from "../pages/Customer/Customer.vue"
import CreateCustomer from "../pages/Customer/CreateCustomer.vue"
import CustomerDetail from "../pages/Customer/CustomerDetail.vue"
import UpdateCustomer from "../pages/Customer/UpdateCustomer.vue"
import Supplier from "../pages/Supplier/Supplier.vue"
import CreateSupplier from "../pages/Supplier/CreateSupplier.vue"
import UpdateSupplier from "../pages/Supplier/UpdateSupplier.vue"
import CreateVAT from "../pages/VAT/CreateVAT.vue"
import VAT from "../pages/VAT/VAT.vue"
import VATDetail from "../pages/VAT/VATDetail.vue"
import CreateVATDetail from "../pages/VAT/CreateVATDetail.vue"
import ListVATCode from "../pages/VAT/ListVATCode.vue"
import ProductStatusList from "../pages/Product/ProductStatusList.vue"
import ProductStatusDetailList from "../pages/Product/ProductStatusDetailList.vue"
import CreateProductStatusDetail from "../pages/Product/CreateProductStatusDetail.vue"
import Issue from "../pages/Issue/Issue.vue"
import IssueDetail from "../pages/IssueDetail/IssueDetail.vue"
import CreateIssueDetail from "../pages/Issue/CreateIssueDetail.vue"
import CreateIssue from "../pages/Issue/CreateIssue.vue"
import Shelf from "../pages/Shelf/Shelf.vue"
import UpdateShelf from "../pages/Shelf/UpdateShelf.vue"
import CreateShelf from "../pages/Shelf/CreateShelf.vue"
import Branch from "../pages/Branch/Branch.vue"
import CreateBranch from "../pages/Branch/CreateBranch.vue"
import UpdateBranch from "../pages/Branch/UpdateBranch.vue"
// import health from "./health.js"


Vue.use(VueRouter)

const routes = [{
            // path: "/home-page",
            // component: index,
            // redirect: "/home-page",
            // children: [{
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
            path: '/management/list-user',
            name: 'Danh sách User',
            component: ListUser,
        },
        {
            path: '/management/list-user/add-user',
            name: 'Thêm mới User',
            component: AddUser,

        },
        {
            path: '/management/list-user/update-user/:id',
            name: 'Cập nhật User',
            component: UpdateUser,
        },
        {
            path: '/management/list-user/detail-user/:id',
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
            path: '/management/list-role',
            name: 'Danh sách nhóm quyền',
            component: ListRole,
        },
        {
            path: '/management/list-role/add-role',
            name: 'Thêm mới nhóm quyền',
            component: AddRole,
        },
        {
            path: '/management/list-user/assign-role/:id',
            name: 'Gán nhóm quyền',
            component: AssignRole,
        },
        {
            path: '/management/list-role/update-role/:code',
            name: 'UpdateRole',
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
            path: '/product/category/update-category/:id',
            name: 'UpdateCategory',
            component: UpdateCategory,
        },
        {
            path: '/product/product-info/update-product-info/:id',
            name: 'UpdateProductInfo',
            component: UpdateProductInfo,
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
            path: '/product/product-detail',
            name: 'ProductDetail',
            component: ProductDetail,
        },
        {
            path: '/product/product-detail/create-product-detail',
            name: 'CreateProductDetail',
            component: CreateProductDetail,
        },
        {
            path: '/product/product-detail/update-product-detail/:id',
            name: 'UpdateProductDetail',
            component: UpdateProductDetail,
        },
        {
            path: '/product/category/create-category',
            name: 'Create Category',
            component: CreateCategory,
        },
        {
            path: '/management/customer',
            name: 'Customer',
            component: Customer,
        },
        {
            path: '/management/customer/create-customer',
            name: 'CreateCustomer',
            component: CreateCustomer,
        },
        {
            path: '/management/customer/update-customer/:id',
            name: 'UpdateCustomer',
            component: UpdateCustomer,
        },
        {
            path: '/management/supplier',
            name: 'Supplier',
            component: Supplier,
        },
        {
            path: '/management/supplier/create-supplier',
            name: 'CreateSupplier',
            component: CreateSupplier,
        },
        {
            path: '/management/supplier/update-supplier/:id',
            name: 'UpdateSupplier',
            component: UpdateSupplier,
        },
        {
            path: '/management/supplier/create-vat/:id',
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
            path: '/inventory/shelf',
            name: 'Shelf',
            component: Shelf,
        },
        {
            path: '/inventory/shelf/update-shelf/:id',
            name: 'UpdateShelf',
            component: UpdateShelf,
        },
        {
            path: '/inventory/shelf/create-shelf',
            name: 'CreateShelf',
            component: CreateShelf,
        },
        {
            path: '/inventory/vat-detail',
            name: 'VATDetail',
            component: VATDetail,
        },
        {
            path: '/inventory/product-status',
            name: 'Product',
            component: ProductStatusList,
        },
        {
            path: '/inventory/product-detail-status',
            name: 'Product Status Detail',
            component: ProductStatusDetailList,
        },
        {
            path: '/inventory/issue',
            name: 'Issue',
            component: Issue,
        },
        {
            path: '/inventory/issue-detail',
            name: 'IssueDetail',
            component: IssueDetail,
        },
        {
            path: '/inventory/issue/create-issue',
            name: 'CreateIssue',
            component: CreateIssue,
        },
        {
            path: '/inventory/issue/add-issue-detail/:id',
            name: 'CreateIssueDetail',
            component: CreateIssueDetail,
        },
        {
            path: '/inventory/product-status/add-product-status-detail/:id',
            name: 'CreateProductStatusDetail',
            component: CreateProductStatusDetail,
        },
        {
            path: '/management/customer/detail-customer/:id',
            name: 'CustomerDetail',
            component: CustomerDetail,
        },
        {
            path: '/actuator/readiness',
            name: 'Readiness',
            component: Readiness,
        },
        {
            path: '/management/branch',
            name: 'Branch',
            component: Branch,
        },
        {
            path: '/management/branch/update-branch/:id',
            name: 'UpdateBranch',
            component: UpdateBranch,
        },
        {
            path: '/management/branch/create-branch',
            name: 'CreateBranch',
            component: CreateBranch,
        },
        {
            path: '*',
            component: NotFound
        },

    ]
    // }]

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
export default router