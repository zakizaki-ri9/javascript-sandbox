<template>
  <validation-observer v-slot="{ handleSubmit }">
    <h1>{{ title }}</h1>
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
        <p>
          md-checkboxはv-modelを指定しない場合、チェックの切り替わりが発生しない
        </p>
        <md-layout>
          <md-checkbox value="1">Array</md-checkbox>
          <md-checkbox value="2">Array</md-checkbox>
        </md-layout>
      </div>
    </form>
  </validation-observer>
</template>

<script>
/**
 * @vuese
 * @group pages
 * `vue-material` の `md-field` 系お試しページ
 */
export default {
  name: 'MdFieldTest',
  data() {
    return {
      title: 'MdFieldTest',
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
