<template>
  
    <Grid/>    

    <div class="grid gap-4 font-medium lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 font-fa mt-4">
        <Wallet/>   
        <Orders/>
        <BestSellingProducts/>
    </div>


    <div class="font-fa mt-4  grid font-medium lg:grid-cols-4 grid-cols-1 gap-4 ">
    
      <productmanagement/>
      <InventoryManagement/>
      <SalesStatus/>
      <SalesNumber/>

    </div>



</template>
<script>
import Grid from "./GridTop/grid.vue";
import Wallet from "./Wallet/wallet.vue";
import Orders from "./Orders/orders.vue";
import BestSellingProducts from "./BestSellingProducts/bestsellingproducts.vue";
import productmanagement from "./Pm/productmanagement.vue";
import InventoryManagement from "./InventoryManagement/inventorymanagement.vue";
import SalesStatus from "./SalesStatus/salesstatus.vue";
import SalesNumber from "./SalesNumber/salesnumber.vue";
export default {
  components: {
    Grid,
    Wallet,
    Orders,
    BestSellingProducts,
    productmanagement,
    InventoryManagement,
    SalesStatus,
    SalesNumber
  },





}
</script>