import {  Menu } from 'antd';
import {HeaderSticky, Title} from "./NavBar.styled";

const NavBar:React.FC = () => {

    return (
        <HeaderSticky>
            <Title>
                <h1>[electron_git]</h1>
            </Title>
            {/*<Menu*/}
            {/*    theme="dark"*/}
            {/*    mode="horizontal"*/}
            {/*    defaultSelectedKeys={['2']}*/}
            {/*    items={new Array(3).fill(null).map((_, index) => ({*/}
            {/*        key: String(index + 1),*/}
            {/*        label: `nav ${index + 1}`,*/}
            {/*    }))}*/}
            {/*/>*/}
        </HeaderSticky>
    )

}

export default NavBar;