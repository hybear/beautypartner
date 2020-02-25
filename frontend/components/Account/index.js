import Menu from './Menu';
import AccountContent from './Content';
import Figure from './Figure';
import { Grid } from './styles';
import { CartPop, Cart } from '../General';

const AccountComponents = props => {
  return (
    <Grid>
      <Menu active={props.active} />
      <AccountContent>{props.children}</AccountContent>
      <Figure />
      <CartPop />
      <Cart />
    </Grid>
  );
};

export default AccountComponents;
