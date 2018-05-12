<template>
  <q-layout view="hHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Controle de Atividades
          <div slot="subtitle">Controle de Atividades - Unibalsas</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Ramais</q-list-header>
        <q-item to="ramais">
          <q-item-side icon="phone" />
          <q-item-main label="Ramais UB" sublabel="Lista de Ramais" />
        </q-item>
        <q-list-header>Links Úteis</q-list-header>
        <q-item @click.native="openURL('http://www.unibalsas.edu.br/')">
          <q-item-side icon="link" />
          <q-item-main label="Site da Unibalsas" sublabel="http://www.unibalsas.edu.br/" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
