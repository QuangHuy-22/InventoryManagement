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
import DetailRole from "../components/DetailRole.vue"
import ListRisk from "../pages/risk/ListRisk.vue"
import RiskDetail from "../pages/risk/RiskDetail.vue"
import NotFound from "../pages/NotFound.vue"
import Lineness from "../components/Liveness.vue"
import Readiness from "../components/Readiness.vue"
import index from "../components/index.vue"
import ListCategory from "../pages/Category/ListCategory"
import CreateCategory from "../pages/Category/CreateCategory"
import UpdateCategory from "../pages/Category/UpdateCategory"
import DetailCategory from "../pages/Category/DetailCategory"
import CreateProductInfo from "../pages/ProductInfo/CreateProductInfo.vue"
import UpdateProductInfo from "../pages/ProductInfo/UpdateProductInfo.vue"
import DetailProductInfo from "../pages/ProductInfo/DetailProductInfo.vue"
import ProductInfo from "../pages/ProductInfo/ProductInfo.vue"
import ProductDetail from "../pages/ProductDetail/ProductDetail.vue"
import CreateProductDetail from "../pages/ProductDetail/CreateProductDetail.vue"
import UpdateProductDetail from "../pages/ProductDetail/UpdateProductDetail.vue"
import DetailProductDetail from "../pages/ProductDetail/DetailProductDetail.vue"
import Customer from "../pages/Customer/Customer.vue"
import CreateCustomer from "../pages/Customer/CreateCustomer.vue"
import CustomerDetail from "../pages/Customer/CustomerDetail.vue"
import UpdateCustomer from "../pages/Customer/UpdateCustomer.vue"
import Supplier from "../pages/Supplier/Supplier.vue"
import CreateSupplier from "../pages/Supplier/CreateSupplier.vue"
import UpdateSupplier from "../pages/Supplier/UpdateSupplier.vue"
import DetailSupplier from "../pages/Supplier/DetailSupplier.vue"
import CreateVAT from "../pages/VAT/CreateVAT.vue"
import DetailVAT from "../pages/VAT/DetailVAT.vue"
import VAT from "../pages/VAT/VAT.vue"
import VATDetail from "../pages/VAT/VATDetail.vue"
import CreateVATDetail from "../pages/VAT/CreateVATDetail.vue"
import ListVATCode from "../pages/VAT/ListVATCode.vue"
import ProductStatusList from "../pages/Product/ProductStatusList.vue"
import ListProductDetailCode from "../pages/Product/ListProductDetailCode.vue"
import DetailProductStatus from "../pages/Product/DetailProductStatus.vue"
import ProductStatusDetailList from "../pages/Product/ProductStatusDetailList.vue"
import CreateProductStatusDetail from "../pages/Product/CreateProductStatusDetail.vue"
import Issue from "../pages/Issue/Issue.vue"
import ListIssueCode from "../pages/Issue/ListIssueCode.vue"
import IssueDetail from "../pages/IssueDetail/IssueDetail.vue"
import CreateIssueDetail from "../pages/Issue/CreateIssueDetail.vue"
import CreateIssue from "../pages/Issue/CreateIssue.vue"
import DetailIssue from "../pages/Issue/DetailIssue.vue"
import Shelf from "../pages/Shelf/Shelf.vue"
import UpdateShelf from "../pages/Shelf/UpdateShelf.vue"
import DetailShelf from "../pages/Shelf/DetailShelf.vue"
import CreateShelf from "../pages/Shelf/CreateShelf.vue"
import Branch from "../pages/Branch/Branch.vue"
import CreateBranch from "../pages/Branch/CreateBranch.vue"
import UpdateBranch from "../pages/Branch/UpdateBranch.vue"
import DetailBranch from "../pages/Branch/DetailBranch.vue"
// import health from "./health.js"


Vue.use(VueRouter)

const routes = [{
            // path: "/home-page",
            // component: index,
            // redirect: "/home-page",
            // children: [{
            path: '/login',
            name: '????ng nh???p',
            component: Login,
            meta: {
                title: " ????ng nh???p | Risk Manegement",
            }
        },
        {
            path: '/',
            name: 'Home',
            component: Home

        },
        {
            path: '/home-page',
            name: 'Trang ch???',
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
            name: 'Danh s??ch User',
            component: ListUser,
        },
        {
            path: '/management/list-user/add-user',
            name: 'Th??m m???i User',
            component: AddUser,

        },
        {
            path: '/management/list-user/update-user/:id',
            name: 'UpdateUser',
            component: UpdateUser,
        },
        {
            path: '/management/list-user/detail-user/:id',
            name: 'DetailUser',
            component: DetailUser,
        },
        {
            path: '/recover',
            name: 'Qu??n m???t kh???u',
            component: Recover,
        },
        {
            path: '/verify',
            name: 'X??c th???c Email',
            component: Verify,
        },
        {
            path: '/change-password',
            name: '?????i m???t kh???u',
            component: ChangePassword,
        },
        {
            path: '/change-password-verify',
            name: '?????i m???t kh???u x??c th???c',
            component: ChangePasswordVerify,
        },
        {
            path: '/management/list-role',
            name: 'Danh s??ch nh??m quy???n',
            component: ListRole,
        },
        {
            path: '/management/list-role/add-role',
            name: 'Th??m m???i nh??m quy???n',
            component: AddRole,
        },
        {
            path: '/management/list-user/assign-role/:id',
            name: 'AssignRole',
            component: AssignRole,
        },
        {
            path: '/management/list-role/update-role/:id',
            name: 'UpdateRole',
            component: UpdateRole,
        },
        {
            path: '/management/list-role/detail-role/:id',
            name: 'DetailRole',
            component: DetailRole,
        },
        {
            path: '/list-risk',
            name: 'Danh s??ch giao d???ch',
            component: ListRisk,
        },
        {
            path: '/list-risk/detail',
            name: 'Chi ti???t giao d???ch',
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
            path: '/product/category/detail-category/:id',
            name: 'DetailCategory',
            component: DetailCategory,
        },
        {
            path: '/product/product-info/update-product-info/:id',
            name: 'UpdateProductInfo',
            component: UpdateProductInfo,
        },
        {
            path: '/product/product-info/detail-product-info/:id',
            name: 'DetailProductInfo',
            component: DetailProductInfo,
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
            path: '/product/product-detail/detail-product-detail/:id',
            name: 'DetailProductDetail',
            component: DetailProductDetail,
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
            path: '/management/supplier/detail-supplier/:id',
            name: 'DetailSupplier',
            component: DetailSupplier,
        },
        {
            path: '/management/supplier/create-vat/:id',
            name: 'CreateVAT',
            component: CreateVAT,
        },
        {
            path: '/inventory/list-vat/detail-vat/:id',
            name: 'DetailVAT',
            component: DetailVAT,
        },
        {
            path: '/inventory/list-vat/create-vat-detail/:id',
            name: 'CreateVATDetail',
            component: CreateVATDetail,
        },
        {
            path: '/inventory/list-vat/vat-code/:code',
            name: 'ListVATCode',
            component: ListVATCode,
        },
        {
            path: '/inventory/list-vat',
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
            path: '/inventory/shelf/detail-shelf/:id',
            name: 'DetailShelf',
            component: DetailShelf,
        },
        {
            path: '/inventory/vat-detail',
            name: 'VATDetail',
            component: VATDetail,
        },
        {
            path: '/inventory/list-product-status',
            name: 'Product',
            component: ProductStatusList,
        },
        {
            path: '/inventory/list-product-status/product-status-code/:code',
            name: 'ListProductDetailCode',
            component: ListProductDetailCode,
        },
        {
            path: '/inventory/product-detail-status',
            name: 'Product Status Detail',
            component: ProductStatusDetailList,
        },
        {
            path: '/inventory/list-product-status/detail-product-status/:id',
            name: 'DetailProductStatus',
            component: DetailProductStatus,
        },
        {
            path: '/inventory/list-issue',
            name: 'Issue',
            component: Issue,
        },
        {
            path: '/inventory/list-issue/issue-code/:code',
            name: 'ListIssueCode',
            component: ListIssueCode,
        },
        {
            path: '/inventory/issue-detail',
            name: 'IssueDetail',
            component: IssueDetail,
        },
        {
            path: '/inventory/list-issue/create-issue',
            name: 'CreateIssue',
            component: CreateIssue,
        },
        {
            path: '/inventory/list-issue/detail-issue/:id',
            name: 'DetailIssue',
            component: DetailIssue,
        },
        {
            path: '/inventory/list-issue/add-issue-detail/:id',
            name: 'CreateIssueDetail',
            component: CreateIssueDetail,
        },
        {
            path: '/inventory/list-product-status/add-product-status-detail/:id',
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
            path: '/management/branch/detail-branch/:id',
            name: 'DetailBranch',
            component: DetailBranch,
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
    if (to.name !== '????ng nh???p' && localStorage.getItem('token') == null && to.name !== 'Qu??n m???t kh???u' && to.name !== 'X??c th???c Email') next({ name: '????ng nh???p' })
    else next()
})
export default router