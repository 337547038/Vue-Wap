<!--Created by 337547038 on 2018/4/18.-->
<template>
    <div class="container">
        <comHeader title="formItem"></comHeader>
        <div class="demo">
            <FormItem label="用户名" labelClass="icon-user">
                <vInput></vInput>
            </FormItem>
            <FormItem label="密码" labelClass="icon-lock1">
                <vInput placeholder="请输入" type="password"></vInput>
            </FormItem>
            <FormItem labelClass="icon-user">
                <vInput></vInput>
            </FormItem>
            <FormItem label="radio">
                <Radio>选项</Radio>
            </FormItem>
            <FormItem label="RadioGroup">
                <RadioGroup :data="radioGroup"></RadioGroup>
            </FormItem>
            <FormItem label="Checkbox：">
                <Checkbox>多选</Checkbox>
            </FormItem>
            <FormItem label="Checkbox：">
                <CheckboxGroup :data="groupDate" v-model="group"></CheckboxGroup>
            </FormItem>
            <FormItem label="联动：">
                <CityPicker v-model="value1" placeholder="默认状态"></CityPicker>
            </FormItem>
            <FormItem label="选择时间：">
                <DatePicker placeholder="请选择" v-model="datePicker"></DatePicker>
            </FormItem>
            <h2>API</h2>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td>字段名称</td>
                </tr>
                <tr>
                    <td>labelClass</td>
                    <td>String</td>
                    <td>字段名称类名</td>
                </tr>
                <tr>
                    <td>slot</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import FormItem from '../components/formItem/index'
    import vInput from '../components/input/index'
    import {Radio, RadioGroup} from '../components/radio/index'
    import {Checkbox, CheckboxGroup} from '../components/checkbox/index'
    import CityPicker from '../components/cityPicker/index'
    import DatePicker from '../components/datePicker/index'
    export default {
        name: 'formItem',
        path: '/formItem',
        data () {
            return {
                radioGroup: [
                    {text: '男', value: 'a1'},
                    {text: '女', value: 'a2'}
                ],
                groupDate: [
                    {text: '选项1', value: 'a1'},
                    {text: '选项2', value: 'a2'},
                    {text: '选项3', value: 'a3'}
                ],
                group: ['a1'],
                value1: ['广东', '广州市', '天河区'],
                datePicker: ''
            }
        },
        props: {},
        components: {FormItem, vInput, Radio, RadioGroup, Checkbox, CheckboxGroup, CityPicker, DatePicker},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>