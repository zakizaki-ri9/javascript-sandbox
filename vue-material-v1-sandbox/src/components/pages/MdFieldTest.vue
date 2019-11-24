<template>
  <validation-observer v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(submit)">
      <md-field
        ><label>free</label>
        <md-input v-model="field.free"></md-input>
      </md-field>
      <md-field
        ><label>Read Only</label>
        <md-input v-model="field.readOnly" readonly></md-input>
      </md-field>
      <validation-provider name="email" rules="required" v-slot="{ errors }">
        <md-field :class="mdFieldClass(errors)"
          ><label>Vee-Validate Required</label>
          <md-input name="email" v-model="field.email" required></md-input>
          <span class="md-error">{{ errors[0] }}</span>
        </md-field>
      </validation-provider>
    </form>
  </validation-observer>
</template>

<script>
export default {
  data() {
    return {
      field: {
        free: '',
        readOnly: 'read only value',
        email: ''
      }
    }
  },
  methods: {
    submit() {},
    mdFieldClass(errors) {
      return {
        'md-invalid': errors.length > 0
      }
    }
  }
}
</script>

<style scoped></style>
