<template>
  <q-page class="bg-gradiente text-black text-weight-bolder" padding>
    <div v-if="id > 0 && id <= 3" class="flex flex-center  row">
      <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="bg-transparent no-shadow  col-8 text-weight-bolder">
      <q-card class="bg-transparent no-shadow">
        <img src="~assets/chance_max.svg" class="cursor-pointer" @click="goTo">
        <q-card-section>
          <div class="text-h4 text-left text-weight-bold">Checkout</div>
        </q-card-section>
        <q-card-section class="">
          <div class="text-h5 text-left text-weight-bold">Resumo</div>
          <div class="row col-12 q-gutter-md">
            <q-item class="q-pa-lg">
        <q-item-section avatar>
          <q-icon color="secondary" name="shopping_cart" size="lg" />
        </q-item-section>

        <q-item-section>Icon as avatar</q-item-section>
      </q-item>
            <q-item class="q-pa-lg">
        <q-item-section avatar>
          <q-icon color="secondary" name="check" size="lg" />
        </q-item-section>

        <q-item-section>Icon as avatar</q-item-section>
      </q-item>
          </div>
        </q-card-section>
        <q-card-section class="q-pt-lg  shadow-24">
           <div class="text-h5 text-left text-weight-bold">Dados do Membro</div>
           <div class="row col-12 fit q-pt-lg">
             <q-input filled class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" v-model="form.name" ref="nameRef" lazy-rules :rules="nameRules" type="text" label="Nome Completo" />
             <q-input filled class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" v-model="form.cpf" ref="cpfRef" lazy-rules :rules="cpfRules" mask="###.###.###-##" unmasked-value type="tel" label="CPF" />
           </div>
           <div class="row col-12 fit ">
            <q-input class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" filled v-model="form.birthday" ref="birthdayRef" lazy-rules :rules="birthdayRules" label="Data de Nascimento" type="date" />
             <q-input filled class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" v-model="form.phone" ref="phoneRef" lazy-rules :rules="phoneRules" type="tel" label="Telefone" />
           </div>
           <div class="row col-12 fit q-pt-xs">
            <q-input filled class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" v-model="form.email" ref="emailRef" lazy-rules :rules="emailRules" type="email" label="Email" />
              <q-input filled class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" v-model="form.password" ref="passwordRef" lazy-rules :rules="passwordRules"  :type="isPwd ? 'password' : 'text'" label="Senha">
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
           </div>
        </q-card-section>
        <q-card-section class="q-pt-lg  shadow-24">
           <div class="text-h5 text-left  text-weight-bold">Dados do Cartão</div>
           <div class="row col-12 fit q-pt-lg">
             <q-input filled mask="#### #### #### ####" unmasked-value v-model="form.card.card_number" ref="cardNumberRef" lazy-rules :rules="cardNumberRules" class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" type="tel" label="Número do Cartão" />
             <q-input filled class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" v-model="form.card.card_name" ref="cardNameRef" lazy-rules :rules="cardNameRules" type="text" label="Nome no Cartão" />
           </div>
           <div class="row col-12 fit q-pt-lg">
            <q-input class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" filled mask="##" unmasked-value v-model="form.card.exp_month" ref="cardExpMonthRef" lazy-rules :rules="cardExpMonthRules" label="Mês Vencimento Cartão"  />
            <q-input filled class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" mask="####" unmasked-value v-model="form.card.exp_year" ref="cardExpYearRef" lazy-rules :rules="cardExpYearRules" label="Ano Vencimento Cartão" />
           </div>
           <div class="row col-12 fit q-pt-lg">
            <q-input class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" mask="###" unmasked-value filled v-model="form.card.security_code" ref="cardSecCodeRef" lazy-rules :rules="cardSecCodeRules" label="Código de Segurança"  />
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm " >
              <q-img
              class="zoom-pag"
              src="~assets/pag_seguro.jpeg"
            />
            </div>
           </div>
        </q-card-section>
        <q-card-section class="q-pt-lg  shadow-24">
           <div class="text-h5 text-left  text-weight-bold">Endereço do Membro</div>
           <q-input filled mask="##.###-###" unmasked-value v-model="form.address.CEP" ref="addressCepRef" lazy-rules :rules="addressCepRules" class="q-pt-lg" type="text" label="CEP" />
           <div class="row col-12 fit q-pt-lg">
             <q-input filled class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" v-model="form.address.street" ref="addressStreetRef" lazy-rules :rules="addressStreetRules" type="text" label="Logradouro" />
             <q-input filled class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" v-model="form.address.number_address" ref="addressNumberRef" lazy-rules :rules="addressNumberRules" type="number" label="Número" />
           </div>
           <div class="row col-12 fit q-pt-lg">
            <q-input class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" filled v-model="form.address.complement" ref="addressComplementRef" lazy-rules :rules="addressComplementRules" label="Complemento"  />
             <q-input filled class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" v-model="form.address.district" ref="addressDistrictRef" lazy-rules :rules="addressDistrictRules"  type="text" label="Bairro" />
           </div>
           <div class="row col-12 fit q-pt-md">
            <q-input filled class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" v-model="form.address.city" ref="addressCityRef" lazy-rules :rules="addressCityRules" type="text" label="Cidade" />
             <q-select filled class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm" :options="options" v-model="form.address.state" ref="addressCountryRef" lazy-rules :rules="addressCountryRules" type="text" label="Estado" />
           </div>
        </q-card-section>
        <q-card-section>
          <q-toggle
        v-model="terms"
        checked-icon="check"
        color="primary"
        label="Li e concordo com os Termos de Uso e com a Política de Privacidade"
        unchecked-icon="clear"
      />
        </q-card-section>
        <q-card-actions  align="stretch">
          <q-btn push color="secondary" type="submit" class="fit text-black disable" label="Finalizar Assinatura" />
        </q-card-actions>
      </q-card>
      </form>
    </div>
    <div v-else class="flex flex-center text-bold">
      <strong>Malandrinho! Não faça isso!</strong>
    </div>
  </q-page>
</template>

<script>
import { isCPF, isPhone, isCEP } from 'brazilian-values'
import { useRouter, useRoute } from 'vue-router'
import { defineComponent, reactive, ref } from 'vue'
import { axios } from 'boot/axios'
import { useQuasar, openURL } from 'quasar'
export default defineComponent({
  name: 'PageIndex',
  setup () {
    const $q = useQuasar()
    const $router = useRouter()
    const $route = useRoute()
    const nameRef = ref(null)
    const cpfRef = ref(null)
    const birthdayRef = ref(null)
    const phoneRef = ref(null)
    const emailRef = ref(null)
    const passwordRef = ref(null)
    const cardNumberRef = ref(null)
    const cardNameRef = ref(null)
    const cardExpMonthRef = ref(null)
    const cardExpYearRef = ref(null)
    const cardSecCodeRef = ref(null)
    const addressCepRef = ref(null)
    const addressStreetRef = ref(null)
    const addressNumberRef = ref(null)
    const addressComplementRef = ref(null)
    const addressDistrictRef = ref(null)
    const addressCityRef = ref(null)
    const addressCountryRef = ref(null)
    const id = ref(0)
    const terms = ref(false)
    id.value = $route.query.id
    const form = reactive({
      name: '',
      cpf: '',
      birthday: '',
      phone: '',
      password: '',
      email: '',
      address: {
        CEP: '',
        street: '',
        number_address: 0,
        complement: '',
        district: '',
        city: '',
        state: ''
      },
      plan: id.value,
      card: {
        card_number: '',
        card_name: '',
        exp_month: '',
        exp_year: '',
        security_code: ''
      }
    })
    function goTo () {
      $router.push('/')
    }
    async function onSubmit () {
      nameRef.value.validate()
      cpfRef.value.validate()
      birthdayRef.value.validate()
      phoneRef.value.validate()
      emailRef.value.validate()
      passwordRef.value.validate()
      cardNumberRef.value.validate()
      cardNameRef.value.validate()
      cardExpMonthRef.value.validate()
      cardExpYearRef.value.validate()
      cardSecCodeRef.value.validate()
      addressCepRef.value.validate()
      addressStreetRef.value.validate()
      addressNumberRef.value.validate()
      addressComplementRef.value.validate()
      addressDistrictRef.value.validate()
      addressCityRef.value.validate()
      addressCountryRef.value.validate()
      if (nameRef.value.hasError ||
    cpfRef.value.hasError ||
    birthdayRef.value.hasError ||
    phoneRef.value.hasError ||
    emailRef.value.hasError ||
    passwordRef.value.hasError ||
    cardNumberRef.value.hasError ||
    cardNameRef.value.hasError ||
    cardExpMonthRef.value.hasError ||
    cardExpYearRef.value.hasError ||
    cardSecCodeRef.value.hasError ||
    addressCepRef.value.hasError ||
    addressStreetRef.value.hasError ||
    addressNumberRef.value.hasError ||
    addressComplementRef.value.hasError ||
    addressDistrictRef.value.hasError ||
    addressCityRef.value.hasError ||
    addressCountryRef.value.hasError || !terms.value) {
        return $q.notify({
          color: 'negative',
          position: 'bottom',
          message: 'Erro ao enviar',
          icon: 'report_problem'
        })
      } else {
        $q.loading.show({
          message: 'Processando pagamento...'
        })
        const axiosConfig = {
          method: 'POST',
          url: `${process.env.API}/v1/users/create`,
          data: JSON.parse(JSON.stringify(form))
        }
        const response = await axios(axiosConfig).then(R => R.data).catch((error) => {
          return $q.notify({
            color: 'negative',
            position: 'top',
            message: error?.response.data.message,
            icon: 'report_problem'
          })
        })
        $q.loading.hide()
        if (response.message.includes('sucesso!')) {
          form.name = ''
          form.name = ''
          form.cpf = ''
          form.birthday = ''
          form.phone = ''
          form.password = ''
          form.email = ''
          form.address.CEP = ''
          form.address.number_address = 0
          form.address.street = ''
          form.address.complement = ''
          form.address.district = ''
          form.address.district = ''
          form.address.state = ''
          form.plan = id.value
          form.card.card_number = ''
          form.card.card_name = ''
          form.card.exp_month = ''
          form.card.exp_year = ''
          form.card.security_code = ''
          openURL(process.env.APP)
        }
      }
    }
    return {
      isPwd: ref(true),
      form,
      nameRef,
      cpfRef,
      birthdayRef,
      phoneRef,
      emailRef,
      id,
      passwordRef,
      cardNumberRef,
      cardNameRef,
      cardExpMonthRef,
      cardExpYearRef,
      cardSecCodeRef,
      addressCepRef,
      addressStreetRef,
      addressNumberRef,
      addressComplementRef,
      addressDistrictRef,
      addressCityRef,
      addressCountryRef,
      terms,
      nameRules: [(val) => (val && val.length > 0) || 'This field deserves attention'],
      cpfRules: [(val) => isCPF(val) || 'This field deserves attention'],
      birthdayRules: [(val) => (val && val.length > 0) || 'This field deserves attention'],
      phoneRules: [(val) => isPhone(val) || 'This field deserves attention'],
      // eslint-disable-next-line
      emailRules: [(val) => val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || 'This field deserves attention'],
      passwordRules: [(val) => (val && val.length > 0) || 'This field deserves attention'],
      cardNumberRules: [(val) => (val && val.length > 12) || 'This field deserves attention'],
      cardNameRules: [(val) => (val && val.length > 0) || 'This field deserves attention'],
      cardExpMonthRules: [(val) => (val && val.length > 0) || 'This field deserves attention'],
      cardExpYearRules: [(val) => (val && val.length > 0) || 'This field deserves attention'],
      cardSecCodeRules: [(val) => (val && val.length > 2)],
      addressCepRules: [(val) => isCEP(val) || 'This field deserves attention'],
      addressStreetRules: [(val) => (val && val.length > 0) || 'This field deserves attention'],
      addressNumberRules: [(val) => (val && val.length > 0) || 'This field deserves attention'],
      addressComplementRules: [(val) => (val && val.length > 0) || 'This field deserves attention'],
      addressDistrictRules: [(val) => (val && val.length > 0) || 'This field deserves attention'],
      addressCityRules: [(val) => (val && val.length > 0) || 'This field deserves attention'],
      addressCountryRules: [(val) => (val && val.length > 0) || 'This field deserves attention'],
      onSubmit,
      options: [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO'
      ],
      goTo,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
})
</script>
<style>
.bg-gradiente {
  background: linear-gradient(to right, #76BA99 , #4A6973, #090A17
);
}
.zoom-pag {
border-radius: 20px;
}
</style>
