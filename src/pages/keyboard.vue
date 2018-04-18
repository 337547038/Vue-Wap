<!--Created by 337547038 on 2018/4/17.-->
<template>
    <div class="container">
        <comHeader title="Keyboard"/>
        <div class="demo">
            <Keyboard confirmText="ok" v-model="value1"></Keyboard>
            <br>
            <Keyboard confirmText="ok" placeholder="placeholder" v-model="value2" :maxLength="3"></Keyboard>
            <br>
            <Keyboard placeholder="placeholder" :password="true" v-model="value3"></Keyboard>
            <br>
            <Keyboard placeholder="maxLength=3" v-model="value4" :maxLength="3"></Keyboard>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <Keyboard placeholder="弹出键盘挡住了输入框时" v-model="value5"></Keyboard>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
    </div>
</template>
<script>
    import Keyboard from '../components/keyboard/index'
    export default {
        name: 'keyboard',
        path: '/keyboard',
        data(){
            return {
                value1:'123.01',
                value2:'',
                value3:'03',
                value4:'',
                value5:'',
            }
        },
        props: [],
        mounted(){
        },
        components: {Keyboard},
        methods: {},
        computed: {}
    }
</script>