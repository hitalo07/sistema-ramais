<template>
  <div>
    <q-table
    title="Lista de Ramais"
    :data="tableData"
    :columns="columns"
    row-key="name"
    :filter="filter"
  >
    <template slot="top-right" slot-scope="props">
        <q-search
          hide-underline
          color="secondary"
          v-model="filter"
          class="col-6"
        />
      </template>
  </q-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // name: 'ComponentName',
  data: () => ({
    filter: '',
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
  mounted () {
    this.tableData = this.leanList
  }
}
</script>

<style>
</style>
