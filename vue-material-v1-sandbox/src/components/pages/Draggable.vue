<template>
  <div>
    <draggable v-model="strList">
      <md-chip v-for="(str, index) in strList" :key="index">
        {{ str }}
      </md-chip>
    </draggable>
    <draggable tag="md-table" :list="objectList">
      <!-- <md-table> -->
      <md-table-row v-for="(obj, index) in objectList" :key="index">
        <md-table-cell>{{ obj.first }}</md-table-cell>
        <md-table-cell>{{ obj.last }}</md-table-cell>
      </md-table-row>
      <!-- </md-table> -->
    </draggable>
    <div class="md-content md-table md-theme-default">
      <div class="md-content md-table-content md-scrollbar md-theme-default">
        <draggable tag="table" v-model="objectList">
          <tr
            v-for="(obj, index) in objectList"
            :key="index"
            class="md-table-row"
          >
            <td class="md-table-cell">
              <div class="md-table-cell-container">
                {{ obj.first }}
              </div>
            </td>
            <td class="md-table-cell">
              <div class="md-table-cell-container">
                {{ obj.last }}
              </div>
            </td>
          </tr>
        </draggable>
      </div>
    </div>
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
      strList: ['aaa', 'bbb', 'ccc'],
      objectList: [
        { first: 'aaa', last: 'bbb' },
        { first: 'ccc', last: 'ddd' },
        { first: 'eee', last: 'fff' }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.md-table-row {
  /* transition: 0.3s $md-transition-default-timing;
  transition-property: background-color, font-weight;
  will-change: background-color, font-weight; */

  &.md-has-selection {
    cursor: pointer;
  }

  &.md-selected-single {
    font-weight: 500;
  }

  tbody & td {
    border-top: 1px solid;
  }
}
</style>
