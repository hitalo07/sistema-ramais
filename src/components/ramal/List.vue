<template>
  <div>
    <q-search
      color="secondary"
      v-model="filter"
      class="col-6"
    />
    <br>
    <q-table
      :data="tableData"
      :columns="columns"
      row-key="name"
      :filter="filter"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // name: 'ComponentName',
  data: () => ({
    filter: '',
    loading: false,
    columns: [
      {
        name: 'nome',
        required: true,
        label: 'Nome',
        align: 'left',
        field: 'nome',
        sortable: true
      },
      {
        name: 'setor',
        required: true,
        label: 'Setor',
        align: 'left',
        field: 'setor',
        sortable: true
      },
      {
        name: 'ramal',
        required: true,
        label: 'Ramal',
        align: 'left',
        field: 'ramal',
        sortable: true
      },
      {
        name: 'cargo',
        required: true,
        label: 'Cargo',
        align: 'left',
        field: 'cargo',
        sortable: true
      },
      {
        name: 'competencias',
        required: true,
        label: 'Competências',
        align: 'left',
        field: 'competencias',
        sortable: true
      }
    ],
    tableData: []
  }),
  computed: {
    ...mapGetters('ramal', ['leanList'])
  },
  methods: {
    submit () {
      const database = this.$firebase.database()
      database.$ref('tasks')
    }
  },
  mounted () {
    this.tableData = this.leanList
  }
}
</script>

<style>
</style>
