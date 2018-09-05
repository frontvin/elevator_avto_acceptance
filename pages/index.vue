<template>
    <div id="SignUp">    
      <div id="signCont">
        <!-- <input v-model="login" placeholder="Enter your login"> -->
        <el-input
          placeholder="Please input login"
          v-model="login"
          clearable>
        </el-input>
        <el-input
          placeholder="Please input pass"
          v-model="pass"
          clearable>
        </el-input>
        <!-- <input v-model="pass" placeholder="Enter your password"> -->
        <button v-on:click="signUp"> Let me in. </button>
      </div>
  </div> 
</template>

<script>
// import LoginForm from '~/components/LoginForm.vue'

export default {
    data() { 
      return {
        login: '',
        pass: ''
      }
    },
    methods: {
      signUp: function (){
        localStorage.setItem('login', this.login);
        localStorage.setItem('pass', this.pass);
          if(this.login=='user' && this.pass=='user'){
            this.$router.push('/registrations');
          } else if(this.login=='' || this.pass==''){
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

