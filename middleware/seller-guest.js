import { useSellersStore } from "~/store/sellersStore";
export default defineNuxtRouteMiddleware(async (to, from) => {
    
    if(process.client == true){
        const sellerStore = useSellersStore();
        const result = await sellerStore.isAuthSeller()
        if(result == false) {
            return true
        }else{
            if(result.password == null) {
                window.location.href = '/account/set-password'
            }else if(result.complete_info_status == 0){
                window.location.href = '/account/registration'
            }else{
                window.location.href = '/'
            }
        }
    }
  })