import Menu from './Menu';
// import AccountContent from './Content'
// import Figures from './Figures'
import { Grid } from './styles';

const AccountComponents = props => {
  return (
    <Grid>
      <Menu />
      {/* <AccountContent>
                {props.children}
            </AccountContent>
            <Figures /> */}
    </Grid>
  );
};

export default AccountComponents;
