<template>
  <q-layout view="lHh Lpr lFf bg-gradiente">
    <q-header elevated>
      <q-toolbar>
        <q-avatar class="col-lg-3 col-md-3 col-xs-6 q-pr-none" size="5rem">
            <q-img src="~assets/logo.svg"  class="cursor-pointer" @click="$router.push('/Main')" />
        </q-avatar>
        <q-toolbar-title class="q-pl-none text-weight-bold col-lg-6 col-md-5 col-sm-3 col-xs-none flex flex-center">
          <q-img src="~assets/chance_max.svg"  style="width: 600px; height: 94px"  class="cursor-pointer" @click="$router.push('/Main')" />
        </q-toolbar-title>
        <q-space />

        <!-- <div class="text-caption q-gutter-xl">
          <q-btn flat color="white" icon="analytics" to="/how-works" dense label="Como Funciona" />
          <q-btn flat color="white" icon="shopping_bag"  dense label="Planos" />
        </div> -->
        <div class="q-pl-xl">
          <q-btn  style="background: #D2F9E9;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);" class="text-black q-pa-md" push  @click="goTo"   label="Área de Membros" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { openURL } from 'quasar'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const $router = useRouter()
    function goTo () {
      openURL(process.env.APP)
    }
    return {
      $router,
      goTo
    }
  }
})
</script>
<style>
.font-text {
  font-family: 'Freshman';
  font-style: italic;
}
.bg-gradiente {
  background: linear-gradient(to right, #76BA99 , #4A6973, #090A17
);
}
</style>
