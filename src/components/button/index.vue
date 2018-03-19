<!--Created by 337547038 on 2018/3/9.-->
<template>
    <button class="btn" :disabled="disabled" :class="{'btn-disabled':disabled}" @click="_click">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name: 'Button',
        data () {
            return {}
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        },
        components: {},
        methods: {
            _click(e){
                this.$emit('click', e);
            }
        },
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>