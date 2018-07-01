<template>
<v-layout row>
  <v-flex>
    <v-card>
      <panel title="Create New User"/>
      <v-card-text>
        <v-form>
          <v-text-field
            label="First Name"
            v-model="firstName"
            :rules="nameRules"
            :counter="10"
            required
          ></v-text-field>
          <v-text-field
            label="Last Name"
            v-model="lastName"
            :rules="nameRules"
            :counter="10"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            label="Dept_Id"
            v-model="deptId"
            required
          ></v-text-field>
          <v-text-field
            name="phoneNumber"
            label="Phone Number"
            v-model="phoneNumber"
            single-line
            required
          ></v-text-field>
          <v-text-field
            name="password"
            label="Enter your password"
            hint="At least 8 characters"
            v-model="password"
            min="8"
            :append-icon="vis ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (vis = !vis)"
            :type="vis ? 'password' : 'text'"
            counter
            required
          ></v-text-field>
          <v-menu
            ref="menu"
            lazy
            :close-on-content-click="false"
            v-model="menu"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            min-width="290px"
            :return-value.sync="dateOfBirth"
          >
            <v-text-field
              slot="activator"
              label="Date of Birth"
              v-model="dateOfBirth"
              prepend-icon="event"
              readonly
              required
            ></v-text-field>
            <v-date-picker v-model="dateOfBirth" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(dateOfBirth)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" style="width: 100%;" @click="submit">submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>
</template>
<script>
import UserService from '../../../services/UserService'
export default {
  name: 'CreateUser',
  data: () => ({
    valid: false,
    firstName: '',
    lastName: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    deptId: '',
    phoneNumber: '',
    password: '',
    vis: false,
    dateOfBirth: null,
    menu: false
  }),
  methods: {
    submit () {
      UserService.createUser({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        deptId: this.deptId,
        phoneNumber: this.phoneNumber,
        password: this.password,
        dateOfBirth: this.dateOfBirth
      }).then(res => {
        this.$swal('User creation Successful')
      }).catch(err => {
        if (err) {
          this.$swal('User could not be created')
        }
      })
    }
  }
}
</script>
