<template>
    <div class="wrapper overflow-x-hidden bg-white">
  <ProfileSidebar/>
  <div :class="NavMenu == true ? 'lg:mr-0 mr-0' : 'lg:mr-72 mr-0'"
    class="flex flex-col  min-h-screen transition-all duration-500 ease-in-out ">
    <Header/>
    <main class="pt-20">
         <div class="mx-auto py-4 px-5">
          <div class="lg:col-span-8">
            <ContractStatus/>
          </div>
        </div>
    </main>
    <Footer/>
      </div>
    </div>
  </template>
  <script>
  import ProfileSidebar from "@/components/ProfileSidebar/ProfileSidebar.vue";
  import ContractStatus from "@/components/Profile/ContractStatus.vue";
  import Header from "@/components/Header/header.vue";
  import Footer from "@/components/Footer/footer.vue";
  
  export default {
    components: {
      Header,
      Footer,
      ProfileSidebar,
      ContractStatus
     },
  
    data() {
      return {
        NavMenu: false,
  
      }
    },
  }
  </script>