<template>
<div class="authForm">
  <el-form ref="auth" :model="auth">
    <el-form-item>
      <el-input v-model="auth.login" placeholder="Login"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="auth.pass" placeholder="Password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="signUp">Submit</el-button>
    </el-form-item>
  </el-form> 
</div>
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

.authForm{
  height: 100vh; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  .el-form{
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    .el-form-input{
      font-family: "Roboto", sans-serif;
      outline: 0;
      background: #f2f2f2;
      width: 100%;
      border: 0;
      margin: 0 0 15px;
      padding: 15px;
      box-sizing: border-box;
      font-size: 14px;
      .el-button{
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        outline: 0;
        background: #4CAF50;
        width: 100%;
        border: 0;
        padding: 15px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
      }
    }
  }
}
</style>

