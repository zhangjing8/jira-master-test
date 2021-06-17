/*
 * @Description: grid flex
 * @Author: zhangjing
 * @Date: 2021-05-31 14:00:29
 * @LastEditors: zhangjing
 */
import styled from '@emotion/styled';
import { Row } from 'components/lib';
import React from 'react'
import { useAuth } from './context/auth-context'
import {ReactComponent as SoftwareLogo} from 'assets/software-logo.svg'
import { ProjectListScreen } from './screens/project-list'
import { Button, Dropdown,Menu } from 'antd';
export const AuthenticatedApp = () => {
    const { logout,user } = useAuth();
    return <Container>
        <Header between={true}>
            <HeaderLeft gap={true}>
                <SoftwareLogo width={'18rem'} color={'rgb(38,132,255)'}/>
                <h2>项目</h2>
                <h2>用户</h2>
                
            </HeaderLeft>
            <HeaderRight>
                <Dropdown overlay={<Menu>
                    <Menu.Item key='logout'>
                        <Button type='link' onClick={() => logout()}>
                            登出
                        </Button>
                    </Menu.Item>
                </Menu>}>
                    <Button type='link' onClick={e=>e.preventDefault()}>
                        Hi,{user?.name}
                    </Button>
                </Dropdown>
            </HeaderRight>
        </Header>
        {/* <Nav>
            nav
        </Nav> */}
        <Main>
        <ProjectListScreen></ProjectListScreen>
        </Main>
        {/* <Aside>aside</Aside>
        <Footer>footer</Footer> */}
    </Container>
}

const Container=styled.div`
display: grid;
grid-template-rows: 6rem 1fr 6rem;//不会有滚动条
/* grid-template-rows: 6rem calc(100vh - 6rem) auto; */
/* grid-template-columns: 20rem 1fr 20rem; */
grid-template-areas: 
"header header header"
"main main main"
/* "nav main aside" */
"footer footer footer"
;
height: 100vh;
/* grid-gap: 10rem; */
`
//grid-area用来给grid子元素起名字
const Header = styled(Row)`
width: 100vw;
padding: 3.2rem;
box-shadow: 0 0 5px 0 rgb(0,0,0,0.1);
z-index: 1;
/* grid-area: header;
display: flex;
flex-direction: row;
align-items: center; */
/* justify-content: space-between; */
`

const HeaderLeft=styled(Row)``
const HeaderRight=styled.div`
`

const HeaderItem=styled.h3`
margin-right:3rem
`

const Main = styled.main`grid-area: main;`
const Nav=styled.nav`grid-area: nav;`
const Aside=styled.aside`grid-area: aside;`
const Footer=styled.footer`grid-area: footer;`

