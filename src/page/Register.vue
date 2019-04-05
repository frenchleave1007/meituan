<template>
  <div>
    <div class="page-register">
      <div class="header">
        <header>
          <a href="#" class="site-logo"></a>
          <div class="login">
            <span>已有美团账号?</span>
            <router-link :to="{name:'login'}">登录</router-link>
          </div>
        </header>
      </div>
      <div class="content">
        <el-form
          :model="registerForm"
          status-icon
          :rules="rules"
          ref="registerForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="userName">
            <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="registerForm.password"
              autocomplete="off"
              @input="input"
            ></el-input>
          </el-form-item>
          <div class="pw-strength">
            <div :class="['bar',strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
          <el-form-item label="确认密码" prop="rePassword">
            <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')">同意以下协议并注册</el-button>
          </el-form-item>
        </el-form>
      </div>
      <footer></footer>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名长度4-16"));
      } else {
        // if (this.registerForm.userName !== "") {
        //   this.$refs.registerForm.validateField("userName");
        // } else {
        //   callback();
        // }
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("密码长度6-16"));
      } else {
        // if (this.registerForm.rePassword !== "") {
        //   this.$refs.registerForm.validateField("rePassword");
        // } else {
        //   callback();
        // }
        callback();
      }
    };
    var validaterRePasswrod = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        rePassword: [{ validator: validaterRePasswrod, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
        // console.log(this.registerForm.userName,this.registerForm.password,this.registerForm.rePassword)
        this.$refs[formName].validate((valid) => {
          if (valid) { //success
            // alert('submit!');
            api.register({
                params:this.registerForm
            }).then(res => {
                if(res.data.status == 'success'){
                    this.$router.push({name:'login'})
                }else{
                    alert(res.data.msg)
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    input(){
        // var reg = /[([\d])([A-z])(_)]+/g
        if(this.registerForm.password.length > 14){
            this.strengthClass = 'strong';
        }else if(this.registerForm.password.length > 8 ){
            this.strengthClass = 'normal';
        }else if(!this.registerForm.password){
            this.strengthClass = '';
        }else{
            this.strengthClass = 'week';
        }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>