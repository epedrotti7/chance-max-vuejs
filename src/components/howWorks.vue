<template>
  <div class="row fit  q-py-lg">
    <div class="col-12 text-center text-bold">
      <div class=" " style="font-family: 'Freshman';font-style: normal;color: #FFFFFF;" >Mercados</div>
      <div class=" " style="font-family: 'Freshman';font-style: normal;color: #FFFFFF;" >de</div>
    </div>
    <div class="row col-12 q-gutter-xs justify-center">
      <div class="col-lg-3 col-md-3 col-xl-3 col-sm-none col-xs-none  q-ma-md q-pr-lg  col-sm-6 col-xs-6">
          <q-img
            class="rounded-borders"
            src="~assets/mercados-81.svg"
          />
      </div>
      <div class="col-lg-4 col-md-4 col-xl-4 col-sm-none col-xs-none  q-ma-md q-pl-xs">
         <q-card-section style="font-family: 'Helvetica';font-style: normal;color: #D2F9E9;" class="q-pt-xl text-center">
          Vitória/Empate/Derrota
        </q-card-section>
        <q-card-section style="font-family: 'Helvetica';font-style: normal;color: #92D3B9;" class="q-pt-xl text-center">
          Escanteios
        </q-card-section>
         <q-card-section style="font-family: 'Helvetica';font-style: normal;color: #68E4B1;" class="q-pt-xl text-center">
          Gols
        </q-card-section>
      </div>
        <q-card-section class="col-lg-3 col-md-3 col-xl-3 col-sm-12 col-xs-12 q-ma-lg q-py-lg">
          <q-img
          class="rounded-borders col-6"
          src="~assets/trazendo_pra_vc.svg"
        />
        </q-card-section>
    </div>
    <div class="row col-12  q-pt-xl">
      <q-card-section class="q-pl-md col-lg-5 col-md-5 col-xl-5 col-sm-12 col-xs-12 ">
        <q-img
          src="~assets/nossas_tecnologias.svg"
        />
      </q-card-section>
      <q-card-section class="q-pl-xl col-lg-5 col-md-5 col-xl-5 col-sm-12 col-xs-12">
        <q-img
          src="~assets/section_2.svg"
        />
      </q-card-section>
    </div>
    <div class="row col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 q-pl-xl">
        <q-card-section class="col-lg-8 col-xl-8 col-md-8 col-sm-10 col-xs-10">
        <q-img
          src="~assets/dados_atualizados_1.svg"
        />
      </q-card-section>
      <q-card-section class="col-lg-8 col-xl-8 col-md-8 col-sm-10 col-xs-10">
        <q-img
          src="~assets/dados_atualizados_2.svg"
        />
      </q-card-section>
      <q-card-section class="col-lg-8 col-xl-8 col-md-8 col-sm-10 col-xs-10">
        <q-img
          src="~assets/dados_atualizados.svg"
        />
      </q-card-section>
    </div>
    <div class="col-lg-6 col-md-6 col-xl-6 q-pl-xl col-sm-6 col-xs-6  col-sm-11 col-xs-11">
      <q-card-section class="q-pl-xl">
        <q-img
          src="~assets/ball2.svg"
        />
      </q-card-section>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup () {
    return {}
  }
}
</script>
<style>
.bg-gradiente {
  background: linear-gradient(to right, #76BA99 , #4A6973, #090A17
);
}
.font-text {
  font-family: 'Freshman';
  color: #FFFFFF;
}
.zoom-works {
  background: linear-gradient(180deg, #FFFFFF 0%, #000000 100%);
opacity: 0.3;
border-radius: 35px;
}
</style>
