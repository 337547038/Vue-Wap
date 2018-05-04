<!--Created by 337547038 on 2018/5/2.-->
<template>
    <div class="form-group">
        <div class="label" :class="[labelClass]" v-text="label" v-if="label||labelClass"></div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'formItem',
        data () {
            return {}
        },
        props: {
            label:String,
            labelClass:String
        },
        components: {},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>