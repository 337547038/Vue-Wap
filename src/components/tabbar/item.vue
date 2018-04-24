<!--Created by 337547038 on 2018/4/23.-->
<template>
    <li :class="{'active':active}">
        <router-link :to="to" :class="styleClass">
            <slot></slot>
        </router-link>
    </li>
</template>
<script>
    export default {
        name: 'tabBarItem',
        data(){
            return {}
        },
        props: {
            active: {
                type: Boolean,
                default: false
            },
            to: String,
            icon: [String, Array]
        },
        mounted(){

        },
        components: {},
        methods: {},
        computed: {
            styleClass(){
                if (typeof this.icon == 'string') {
                    return this.icon
                } else if (typeof this.icon == 'object') {
                    return this.active ? this.icon[1] : this.icon[0];
                }
            }
        }
    }
</script>