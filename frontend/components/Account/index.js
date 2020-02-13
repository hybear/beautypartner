import Menu from './Menu';
import AccountContent from './Content';
import Figure from './Figure';
import { Grid } from './styles';

const AccountComponents = props => {
  return (
    <Grid>
      <Menu />
      <AccountContent>{props.children}</AccountContent>
      <Figure />
    </Grid>
  );
};

export default AccountComponents;
