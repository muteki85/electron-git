import {  Menu, Layout } from 'antd';

import React from "react";


const NavBar:React.FC = () => {

    const {Header} = Layout;
    
    return (
        <Header className={'flex justify-content-center !align-center !items-center' }>
            <div >
                <h1 className={'text-white text-xl mb-0'}>[electron_git]</h1>
            </div>
            {/*<Menu*/}
            {/*    theme="dark"*/}
            {/*    mode="horizontal"*/}
            {/*    defaultSelectedKeys={['2']}*/}
            {/*    items={new Array(3).fill(null).map((_, index) => ({*/}
            {/*        key: String(index + 1),*/}
            {/*        label: `nav ${index + 1}`,*/}
            {/*    }))}*/}
            {/*/>*/}
        </Header>
    )

}

export default NavBar;