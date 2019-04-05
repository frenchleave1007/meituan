<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{$store.state.position.name}}
            <router-link class="changeCity" :to="{name:'changeCity'}">
                切换城市
            </router-link>
              [ <a href="#">新津县</a>
                <a href="#">崇州</a>
                <a href="#">彭州</a> ]
        </div>
        <div class="m-user" v-if="!$store.state.userName">
            <router-link class="login" :to="{name:'login'}">
                立即登录
            </router-link>
            <router-link class="register" :to="{name:'register'}">
                注册
            </router-link>
        </div>
    </div>
</template>

<script>
import api from '@/api/index'
export default {
    created(){
        api.getCurPosition().then(res => {
            console.log(res)
            this.$store.dispatch('setPosition',res.data.data)

        })
    }
}
</script>

<style scoped>

</style>
