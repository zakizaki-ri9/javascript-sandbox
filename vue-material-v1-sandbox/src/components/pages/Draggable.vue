<template>
  <div>
    <draggable v-model="strList">
      <md-chip v-for="(str, index) in strList" :key="index">
        {{ str }}
      </md-chip>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
/**
 * @vuese
 * @group pages
 */
export default {
  name: 'Draggable',
  components: {
    draggable
  },
  data() {
    return {
      strList: ['aaa', 'bbb', 'ccc']
    }
  },
  methods: {}
}
</script>

<style scoped></style>
