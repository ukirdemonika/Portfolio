import { Menu, Container, Icon } from 'semantic-ui-react';

/* eslint-disable no-unused-vars */
function Header({ theme }) {
  return (
    <div>
        <Container>
           
                <Menu>
                    <Menu.Item>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name='info' />
                        About
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name='call' />
                        Contact
                    </Menu.Item>
                </Menu>
            
        </Container>
    </div>
  );
}
export default Header;