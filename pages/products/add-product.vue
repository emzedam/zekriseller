<template>
    <div class="wrapper overflow-x-hidden bg-white">
  <MenuRight/>
  <div :class="NavMenu == true ? 'lg:mr-0 mr-0' : 'lg:mr-72 mr-0'"
    class="flex flex-col  min-h-screen transition-all duration-500 ease-in-out">
    <Header/>
    <main class="pt-20">
         <div class="mx-auto py-4 px-5">
        <AddProduct />
        </div>
    </main>
        <Footer/>
      </div>
    </div>
  </template>
  <script>
  import MenuRight from "@/components/MenuRight/menu.vue";
  import AddProduct from "@/components/Products/AddProduct.vue";
  import CollapseTransition from "@/plugins/CollapseTransition.vue";
  import Header from "@/components/Header/header.vue";
  import Footer from "@/components/Footer/footer.vue";
  
  export default {
    components: {
      CollapseTransition,
      AddProduct,
      Header,
      Footer,
      MenuRight
    },
  
    data() {
      return {
        NavMenu: false,

      }
    },
  

  
  
  
  }
  </script>