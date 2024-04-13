import api from '~/axios'
import { useCookies } from "vue3-cookies";
const cookies = process.client == true ? useCookies().cookies : null;


const state = () => ({
    loading: true,
    authSeller: null
})

const actions = {
    async isAuthSeller() {
        
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            const result = await api.get("/sellers/me" , config)
            if(result.status == 200){
                if(result.data){
                    this.authSeller = result.data
                    return result.data
                }else{
                    return false
                }
            }else {
                return false
            }
        }else{
            return false
        }
        
    },
    async sendSellerLoginOtp(data) {
        const result = await api.post("/sellers/otp" , data)
        if(result.status == 200){
            if(result.data){
                return result.data
            }
        }else {
            return false
        }
    },
    async doSellerSignIn(data) {
        const result = await api.post("/sellers/signin" , data)
        if(result.status == 200){
            if(result.data){
                return result.data
            }
        }else {
            return false
        }
    },
    async change_seller_password(data) {
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            const result = await api.post("/sellers/change-password" , data , config)
            if(result.status == 200){
                if(result.data){
                    return result.data
                }
            }else {
                return false
            }
        }else{
            return false
        }
    },
    async load_states_list(){
        const result = await api.get("/sellers/registration/geocoding/states-list")
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },
    async load_cities_list(data){
        const result = await api.post("/sellers/registration/geocoding/cities-list" , {
            state_name: data.state_name
        })
        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
    },
    async get_videos_list() {
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            const result = await api.get("/sellers/registration/learning/get-list" , {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if(result.status == 200){
                if(result.data){
                    return result.data
                }else{
                    return {
                        "message": "failed"
                    }
                }
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return false
        }
    },
    async get_seller_questions_list() {
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            const result = await api.get("/sellers/registration/questions/get-list" , {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if(result.status == 200){
                if(result.data){
                    return result.data
                }else{
                    return {
                        "message": "failed"
                    }
                }
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return false
        }
    },
    async register_seller(data) {
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            const result = await api.post("/sellers/registration/save-request" , data , {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if(result.status == 200){
                if(result.data){
                    return result.data
                }else{
                    return {
                        "message": "failed"
                    }
                }
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return false
        }
    },
    async change_seller_fullname(data){
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            const result = await api.post("/sellers/profile/owner-information/change-fullname" , data , {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if(result.status == 200){
                if(result.data){
                    return result.data
                }else{
                    return {
                        "message": "failed"
                    }
                }
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return false
        }
    },
    async do_change_seller_mobile(data){
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            const result = await api.post("/sellers/profile/owner-information/change-mobile" , data , {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if(result.status == 200){
                if(result.data){
                    return result.data
                }else{
                    return {
                        "message": "failed"
                    }
                }
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return false
        }
    },
    async do_seller_verify_mobile(data){
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            let result;
            if(data.state == 'core_mobile'){
                result = await api.post("/sellers/profile/owner-information/verify-mobile" , data , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })
            }else{
                result = await api.post("/sellers/profile/owner-information/verify-declare-mobile" , data , {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })
            }
            if(result.status == 200){
                if(result.data){
                    return result.data
                }else{
                    return {
                        "message": "failed"
                    }
                }
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return false
        }
    },
    async change_profile_seller_password(data) {
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            const result = await api.post("/sellers/profile/owner-information/change-password" , data , {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if(result.status == 200){
                if(result.data){
                    return result.data
                }else{
                    return {
                        "message": "failed"
                    }
                }
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return false
        }
    },
    async change_seller_national_code(data) {
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            const result = await api.post("/sellers/profile/owner-information/change-nationalcode" , data , {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if(result.status == 200){
                if(result.data){
                    return result.data
                }else{
                    return {
                        "message": "failed"
                    }
                }
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return false
        }
    },
    async change_seller_email(data) {
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            const result = await api.post("/sellers/profile/owner-information/change-email" , data , {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if(result.status == 200){
                if(result.data){
                    return result.data
                }else{
                    return {
                        "message": "failed"
                    }
                }
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return false
        }
    },
    async get_seller_addresses() {
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            const result = await api.get("/sellers/profile/address/get-list" , {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if(result.status == 200){
                if(result.data){
                    return result.data
                }else{
                    return {
                        "message": "failed"
                    }
                }
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return false
        }
    },
    async store_seller_address(data) {
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            const result = await api.post("/sellers/profile/address/save" , data , {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if(result.status == 200){
                if(result.data){
                    return result.data
                }else{
                    return {
                        "message": "failed"
                    }
                }
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return false
        }
    },
    async edit_seller_address(data) {
        let token = cookies.get("seller-token") || "";
        if(token != ""){
            const result = await api.post("/sellers/profile/address/edit" , data , {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if(result.status == 200){
                if(result.data){
                    return result.data
                }else{
                    return {
                        "message": "failed"
                    }
                }
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return false
        }
    }
}

const getters = {

}

export const useSellersStore = defineStore({
    id: "sellers-store",
    state: state,
    actions: actions,
    getters: getters
})