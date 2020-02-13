import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from '../../User';
import Link from 'next/link';

// Styles
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

// import { Button, TextField } from '../../General';
// import useStyles from './styles';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION($resetToken: String!, $password: String!, $confirmPassword: String!) {
    resetPassword(resetToken: $resetToken, password: $password, confirmPassword: $confirmPassword) {
      id
      email
      name
    }
  }
`;

const propTypes = {
  resetToken: PropTypes.string.isRequired,
};

const Reset = props => {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const User = {
    password: confirmPassword,
    confirmPassword: confirmPassword,
  };

  return (
    <div></div>
    // <Grid container component="main" className={classes.root}>
    //   <Grid item xs={false} sm={4} md={7} className={classes.image} />
    //   <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
    //     <div className={classes.paper}>
    //       <Avatar className={classes.avatar}>
    //         <LockOutlinedIcon />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Set New Password
    //       </Typography>
    //       <Mutation
    //         mutation={RESET_MUTATION}
    //         variables={{
    //           resetToken: props.resetToken,
    //           password: password,
    //           confirmPassword: confirmPassword,
    //         }}
    //         refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    //       >
    //         {(reset, { error, loading, called }) => (
    //           <form
    //             className={classes.form}
    //             method="post"
    //             onSubmit={async e => {
    //               e.preventDefault();
    //               console.log(User);
    //               const res = await reset();
    //               setPassword('');
    //               setConfirmPassword('');
    //             }}
    //           >
    //             <TextField
    //               variant="outlined"
    //               margin="normal"
    //               required
    //               fullWidth
    //               name="password"
    //               label="Password"
    //               type="password"
    //               id="password"
    //               value={password}
    //               onChange={e => setPassword(e.target.value)}
    //             />
    //             <TextField
    //               variant="outlined"
    //               margin="normal"
    //               required
    //               fullWidth
    //               name="confirmPassword"
    //               label="Confirm Password"
    //               type="password"
    //               id="confirmPassword"
    //               value={confirmPassword}
    //               onChange={e => setConfirmPassword(e.target.value)}
    //             />
    //             <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
    //               Reset Password
    //             </Button>
    //           </form>
    //         )}
    //       </Mutation>
    //     </div>
    //   </Grid>
    // </Grid>
  );
};

export default Reset;
export { RESET_MUTATION };
