import { useSellersStore } from "~/store/sellersStore";
export default defineNuxtRouteMiddleware(async (to, from) => {
    
    if(process.client == true){
        const sellerStore = useSellersStore();
        const result = await sellerStore.isAuthSeller()
        if(result != false) {
            if(to.path == '/account/set-password'){
                if(result.password == null) {
                    return true;
                }else{
                    window.location.href = '/account/registration'
                }
            }

            if(to.path == '/account/registration'){
                if(result.complete_info_status == 0) {
                    return true;
                }else{
                    window.location.href = '/'
                }
            }
    
            return true
        }else{
            window.location.href = '/account/signin'
        }
    }
  })