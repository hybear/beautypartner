import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

const RequestReset = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  const User = {
    email: email,
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
    //         Request New Password
    //       </Typography>
    //       <Mutation mutation={REQUEST_RESET_MUTATION} variables={User}>
    //         {(reset, { error, loading, called }) => (
    //           <form
    //             className={classes.form}
    //             method="post"
    //             data-test="form"
    //             onSubmit={async e => {
    //               e.preventDefault();
    //               const res = await reset();
    //               setEmail('');
    //             }}
    //           >
    //             {!error && !loading && called && <p>Success! We send to your e-mail the next steps</p>}
    //             <TextField
    //               variant="outlined"
    //               margin="normal"
    //               required
    //               fullWidth
    //               id="email"
    //               label="Email Address"
    //               name="email"
    //               autoComplete="email"
    //               autoFocus
    //               value={email}
    //               data-test="email"
    //               onChange={e => setEmail(e.target.value)}
    //             />
    //             <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
    //               Send Request
    //             </Button>
    //             <Grid container>
    //               <Grid item>
    //                 <Link href="/account/login">Remember your password? Sign In</Link>
    //               </Grid>
    //             </Grid>
    //           </form>
    //         )}
    //       </Mutation>
    //     </div>
    //   </Grid>
    // </Grid>
  );
};

export default RequestReset;
export { REQUEST_RESET_MUTATION };
