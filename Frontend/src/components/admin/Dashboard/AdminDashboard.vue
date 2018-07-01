<template>
<v-app id="inspire">
  <v-navigation-drawer
    fixed
    :clipped="$vuetify.breakpoint.mdAndUp"
    app
    v-model="drawer"
  >
    <v-list dense>
      <template v-for="item in items">
        <v-layout
          row
          v-if="item.heading"
          align-center
          :key="item.heading"
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-flex>
        </v-layout>
        <v-list-group
          v-else-if="item.children"
          v-model="item.model"
          :key="item.text"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
          @click="switchRoute(item.id)"
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
          >
            <v-list-tile-action v-if="child.icon" >
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else :key="item.text" @click="switchRoute(item.id)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar
    color="blue darken-3"
    dark
    app
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    fixed
  >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">R&D Department<sub>(Gujarat)</sub></span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn icon @click="logout">
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <v-layout justify-center align-center>
        <component v-bind:is="currentView">
          <!-- component changes when vm.currentView changes! -->
        </component>
      </v-layout>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
import CreateUser from '../UserEntry/CreateUser'
import ManualEntry from '../DailyTransactionalEntry/Manual/index'
import BulkEntry from '../DailyTransactionalEntry/Bulk/index'
import UpdateOutputs from '../UpdateOutputs/index'
import Settings from '../../presentational/Settings'
import UserForecast from '../UserForecast/index'
import storage from 'local-storage-fallback'
export default {
  name: 'AdminDashboard',
  components: {
    CreateUser,
    ManualEntry,
    BulkEntry,
    Settings,
    UpdateOutputs
  },
  data: () => ({
    currentView: ManualEntry,
    dialog: false,
    drawer: null,
    items: [
      {
        icon: 'card_membership',
        text: 'Manual Entry Weather Data',
        id: 1
      },
      {
        icon: 'history',
        text: 'Bulk Entry Weather Data',
        id: 2
      },
      {
        icon: 'assessment',
        text: 'Update Outputs',
        id: 3
      },
      {
        icon: 'add',
        text: 'Create User',
        id: 4
      },
      {
        icon: 'add',
        text: 'Admin Forecast',
        id: 5
      },
      {
        icon: 'power_settings_new',
        text: 'Logout',
        id: 6
      }
    ]
  }),
  methods: {
    switchRoute (id) {
      switch (id) {
        case 1 :
          this.currentView = ManualEntry
          break
        case 2 :
          this.currentView = BulkEntry
          break
        case 3 :
          this.currentView = UpdateOutputs
          break
        case 4 :
          this.currentView = CreateUser
          break
        case 5 :
          this.currentView = UserForecast
          break
        case 6 :
          this.logout()
          break
      }
    },
    logout () {
      storage.removeItem('user')
      this.$router.push({
        name: 'Login'
      })
    }
  },
  created () {
    if (!storage.getItem('user')) {
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>
