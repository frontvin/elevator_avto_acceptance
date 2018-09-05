<template>
  <el-form ref="auth" :model="auth">
    <el-form-item label="login">
      <el-input v-model="auth.login"></el-input>
    </el-form-item>
    <el-form-item label="Pass">
      <el-input v-model="auth.pass"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="signUp">Submit</el-button>
    </el-form-item>
  </el-form> 
</template>

<script>


export default {
    data() { 
      return {
        auth: {
          login: '',
          pass: ''
        }
      }
    },
    methods: {
      signUp: function (){
        localStorage.setItem('login', this.auth.login);
        localStorage.setItem('pass', this.auth.pass);
          if(this.auth.login=='user' && this.auth.pass=='user'){
            this.$router.push('/registrations');
          } else if(this.auth.login=='' || this.auth.pass==''){
            alert('You not enter login or password');
          } else {
            alert('You entered wrong login or password');
          }
      }
    }
} 
</script>

<style>

</style>

