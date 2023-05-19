import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


import {
    Layout,
    Form,
    Select,
    InputNumber,
    DatePicker,
    Switch,
    Slider,
    Button,
} from 'antd';

const {
    Header,
    Content,
} = Layout;
const {Item: FormItem} = Form;
const {Option} = Select;

function Home() {
    return (
        <>
            <h1 className={'text-3xl !text-blue-500'}>Home</h1>
        </>
    );
};

export default Home;
