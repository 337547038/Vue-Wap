<!--Created by 337547038 on 2018/4/12.-->
<template>
    <div class="select-control" @click="visible=true">
        <div class="input-control" v-text="value?value:placeholder" :class="{placeholder:value==''}"></div>
        <Picker :visible.sync="visible" :data="data" v-model="valueNew" :change="_changeCity"
                :cancelEvent="_cancelEvent" :confirmEvent="_confirmEvent" :cancelText="cancelText"
                :confirmText="confirmText" :title="title" :visibleCount="visibleCount"></Picker>
    </div>
</template>
<script>
    import Picker from '../picker/index'
    export default {
        name: 'Select',
        data () {
            return {
                visible: false,
                valueNew: this.value
            }
        },
        props: {
            data: Array,
            value: String,
            placeholder: String,//模拟input效果
            cancelText: String,
            cancelEvent: Function,
            confirmText: String,
            confirmEvent: Function,
            change: Function,
            title: String,
            visibleCount: Number
        },
        components: {Picker},
        methods: {
            _changeCity(value){
                this.cancelEvent ? this.cancelEvent(value) : "";
            },
            _cancelEvent(value){
                this.cancelEvent ? this.cancelEvent(value) : "";
            },
            _confirmEvent(value){
                this.$emit('input', value);
                this.confirmEvent ? this.confirmEvent(value) : "";
            }
        },
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>