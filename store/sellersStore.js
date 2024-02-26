import api from '~/axios'
import { useCookies } from "vue3-cookies";
const cookies = process.client == true ? useCookies().cookies : null;


const state = () => ({
    loading: true,
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
        const result = await api.get("/sellers/geocoding/states-list")
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
        const result = await api.post("/sellers/geocoding/cities-list" , {
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
            const result = await api.get("/sellers/learning/get-list" , {
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
            const result = await api.get("/sellers/questions/get-list" , {
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