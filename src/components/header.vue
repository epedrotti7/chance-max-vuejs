<template>
  <div class="row fit q-pa-xl q-pl-xl ">
    <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12 col-xs-12 no-border no-shadow q-pa-xl">
      <q-card-section>
        <div class="text-h5"> Utilize o
        algoritmo mais assertivo do mercado e
        <strong>maximize seus lucros </strong> em investimentos esportivos.</div>
        <div class="text-body2">Desenvolvido na Califórnia em parceria com Departamento de Matemática da Universidade de San Diego, o Chance Max é um sistema de probabilidade para apostas esportivas criado a partir do ELO RATING ALGORITHM*, usado para classificação de jogadores e times em jogos competitivos.
</div>
      </q-card-section>
<q-card-actions  align="center" color="text-black">
  <q-btn  style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #D2F9E9 88.54%), #FFFFFF; color:black" class="fit" push  label="Assinar agora" @click="scrollTo('plans')" />
  </q-card-actions>
      <q-card-section>
        <div class="text-subtitle"></div>
      </q-card-section>
    </div>
      <div class="row col-md-8 col-lg-8 col-xl-8  col-xs-10">
        <div class="col-2 font-text no-border no-shadow"></div>
        <q-img
            class="rounded-borders col-5"
            src="~assets/smartphone_2.svg"
          />
      <q-img
          class="rounded-borders q-pl-none col-5"
          src="~assets/smartphone.svg"
          />
      </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentHeader',
  setup () {
    function scrollTo (id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    }
    return {
      scrollTo
    }
  }
}
</script>
<style>
.font-text {
  font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 38px;

color: #FFFFFF;
}
.btn-buy {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #D2F9E9 88.54%), #FFFFFF;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
border-radius: 15px;
}
</style>
