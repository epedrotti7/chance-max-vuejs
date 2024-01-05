<template>
  <div id="plans" class="row fit justify-center q-py-lg">
    <div class="col-4 text-center text-bold text-h4">
       <div class="tlt-plans " style="font-family: 'Freshman';font-style: normal;color: #3E5650;" >Planos</div>
    </div>
    <div class="row col-12 q-gutter-xs justify-center q-ma-lg">
      <q-card @click="goTo(2)" class="zoom cursor-pointer  col-lg-3 col-md-3 col-xl-3 col-sm-8 col-xs-8 rounded-borders shadow-24 q-ma-md">
        <q-card-section>
          <div class="text-h6 text-center">Trimestral</div>
          <div class="text-subtitle2 text-center">por</div>
        </q-card-section>
        <q-card-section class="q-pt-none text-center">
          R$ 99,90
        </q-card-section>
      </q-card>
      <q-card @click="goTo(3)" class="zoom cursor-pointer  col-lg-3 col-md-3 col-xl-3 col-sm-8 col-xs-8 rounded-borders shadow-24 q-ma-md">
        <q-card-section>
          <div class="text-h6 text-center">Semestral</div>
          <div class="text-subtitle2 text-center">por</div>
        </q-card-section>
        <q-card-section class="q-pt-none text-center">
          R$ 179,90
        </q-card-section>
      </q-card>
      <q-card  class="zoom cursor-pointer  col-lg-3 col-md-3 col-xl-3 col-sm-8 col-xs-8 rounded-borders shadow-24 q-ma-md">
        <q-card-section>
          <div class="text-h6 text-center">Mensal</div>
          <div class="text-subtitle2 text-center">por</div>
        </q-card-section>
        <q-card-section @click="goTo(1)" class="q-pt-none text-center">
          R$ 39,90
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  // name: 'ComponentName',
  setup () {
    const $router = useRouter()
    function goTo (id) {
      $router.push({ path: '/checkout', query: { id } })
    }
    return {
      goTo
    }
  }
}
</script>
<style>
.zoom:hover{
  transform: scale(1.1);
  transition: all ease 500ms;
}
.zoom{
  background: linear-gradient(180deg, #F5F5F5 0%, #D2F9E9 100%);
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
border-radius: 20px;
font-family: 'Freshman';
font-style: normal;
color: #3E5650;
}
.tlt-plans {
  background: #F5F5F5;
backdrop-filter: blur(17px);
font-family: 'Freshman';
font-style: normal;
color: #3E5650;
border-radius: 50px;
}
</style>
