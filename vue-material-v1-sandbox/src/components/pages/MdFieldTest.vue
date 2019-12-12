<template>
  <validation-observer v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(submit)">
      <div>
        <md-field>
          <label>free</label>
          <md-input v-model="field.free"></md-input>
        </md-field>
        <md-field>
          <label>Read Only</label>
          <md-input v-model="field.readOnly" readonly></md-input>
        </md-field>
        <md-field>
          <label for="movie">Movie</label>
          <md-select v-model="field.movie" name="movie" id="movie">
            <md-option value="fight-club">Fight Club</md-option>
            <md-option value="godfather">Godfather</md-option>
            <md-option value="godfather-ii">Godfather II</md-option>
            <md-option value="godfather-iii">Godfather III</md-option>
            <md-option value="godfellas">Godfellas</md-option>
            <md-option value="pulp-fiction">Pulp Fiction</md-option>
            <md-option value="scarface">Scarface</md-option>
          </md-select>
        </md-field>
        <validation-provider name="email" rules="required" v-slot="{ errors }">
          <md-field :class="mdFieldClass(errors)">
            <label>Vee-Validate Required</label>
            <md-input name="email" v-model="field.email" required></md-input>
            <span class="md-error">{{ errors[0] }}</span>
          </md-field>
        </validation-provider>
      </div>
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
        email: '',
        movie: ''
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
