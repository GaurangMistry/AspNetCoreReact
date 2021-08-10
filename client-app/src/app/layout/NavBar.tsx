import React  from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

interface props{
    openForm: () => void;
}

export default function NavBar({openForm}: props){
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight:'10px'}} />
                    ReActivities
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button positive onClick={openForm} content='Create Activity'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}