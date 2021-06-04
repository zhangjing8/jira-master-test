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
import { ProjectListScreen } from './screens/project-list'
export const AuthenticatedApp = () => {
    const { logout } = useAuth();
    return <Container>
        <Header between={true}>
            <HeaderLeft gap={true}>
                <h2>logo</h2>
                <h2>项目</h2>
                <h2>用户</h2>
                
            </HeaderLeft>
            <HeaderRight>
            <button onClick={() => logout()}>登出</button>
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
grid-template-columns: 20rem 1fr 20rem;
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
/* grid-area: header;
display: flex;
flex-direction: row;
align-items: center; */
/* justify-content: space-between; */
`

const HeaderLeft=styled(Row)``
const HeaderRight=styled.div``

const HeaderItem=styled.h3`
margin-right:3rem
`

const Main = styled.main`grid-area: main;`
const Nav=styled.nav`grid-area: nav;`
const Aside=styled.aside`grid-area: aside;`
const Footer=styled.footer`grid-area: footer;`

