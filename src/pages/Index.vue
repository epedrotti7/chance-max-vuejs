<template>
  <q-page class="bg-gradiente font-text">
    <div class="text-weight-bold">
    <div class="row justify-between">
      <HeaderComponent />
      <HowToWorksComponent />
      <PlansComponent />
      <FooterComponent />
    </div>
  </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/header.vue'
import HowToWorksComponent from 'components/howWorks.vue'
import PlansComponent from 'components/plans.vue'
import FooterComponent from 'components/footer.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    HeaderComponent,
    HowToWorksComponent,
    PlansComponent,
    FooterComponent
  },
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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
