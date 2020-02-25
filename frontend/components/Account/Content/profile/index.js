import React, { useState, useContext } from 'react';
// import DateFnsUtils from '@date-io/date-fns';
import { Mutation } from 'react-apollo';
import InputMask from 'react-input-mask';
import { CURRENT_USER_QUERY } from '../../../User';
import gql from 'graphql-tag';
import { REQUEST_RESET_MUTATION } from '../../../ResetPassword/ResetRequest';
import { Me } from '../../../Middleware';

// UI
import { ProfileContainer, Profile, ProfileItem, Password, PasswordContainer, EmailReset, Button } from './styles'; // Profile
import { Title } from '../styles'; // Content
import { Form, Input, Label, Info } from '../../../General/Form'; // Form
import { EditButton } from '../../../General'; // General

// ANIMATIONS
import Checked from '../../../General/Animations/Checked';

const ProfileContent = props => {
  const User = useContext(Me);

  const [handleProfile, setHandleProfile] = useState(false);
  const [handlePassword, setHandlePassword] = useState(false);
  //   const [birthday, setBirthday] = useState(User.info.birthday);
  const [profile, setProfile] = useState({
    name: User.info.name,
    document: User.info.document,
    phone: User.info.phone,
    birthday: User.info.birthday,
  });

  //   const handleBirthday = date => {
  //     setBirthday(date);
  //   };

  const handleInput = (state, handleState) => {
    handleState(!state);
  };

  const handleChange = e => {
    try {
      const { name, type, value } = e.target;
      // const val = type === 'number' ? parseFloat(value) : value;
      setProfile({ ...profile, [name]: value });
    } catch (err) {
      console.log(err);
    }
  };

  const UPDATE_USER = gql`
    mutation UPDATE_USER($id: ID!, $name: String, $phone: String, $birthday: DateTime) {
      updateInfos(id: $id, name: $name, phone: $phone, birthday: $birthday) {
        id
        name
        phone
        birthday
      }
    }
  `;

  const updateProfile = async (e, updateProfileMutation) => {
    e.preventDefault();

    console.log('UPDATING...');

    const res = await updateProfileMutation({
      variables: {
        id: User.info.id,
        name: profile.name,
        document: profile.document,
        phone: profile.phone,
        birthday: profile.birthday,
      },
    });
    console.log(profile);
    console.log('UPDATED');
  };

  return (
    <ProfileContainer>
      <Title>Account Info</Title>
      <Profile handleProfile={handleProfile}>
        {handleProfile == false ? (
          <>
            <EditButton primary onClick={() => handleInput(handleProfile, setHandleProfile)} />
            <ProfileItem>
              <p>Full Name</p>
              {profile.name}
            </ProfileItem>
            <ProfileItem>
              <p>Email Address</p>
              {User.info.email}
            </ProfileItem>
            <ProfileItem>
              <p>Document</p>
              {User.info.document}
            </ProfileItem>
            <ProfileItem>
              <p>Birthday</p>
              {profile.birthday && new Date(profile.birthday).toLocaleDateString('en-US', { timeZone: 'UTC' })}
            </ProfileItem>
            <ProfileItem>
              <p>Phone Number</p>
              {profile.phone}
            </ProfileItem>
            {/* <ProfileItem key={4}>
              <p>Phone Number</p>
              {profile.phone}
            </ProfileItem> */}
          </>
        ) : (
          <Mutation
            mutation={UPDATE_USER}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            onCompleted={data => handleInput(handleProfile, setHandleProfile)}
          >
            {(updateProfileMutation, { loading, error }) => (
              <Form
                method="post"
                onSubmit={e => {
                  console.log(profile);
                  updateProfile(e, updateProfileMutation);
                }}
              >
                <div className="form__container">
                  <div className="form__grid">
                    <Label htmlFor="fullname">Full Name*</Label>
                    <Input
                      name="fullname"
                      type="text"
                      required
                      placeholder="Ex: Lydia Hallie"
                      checked={/(\w.+\s).+/.test(profile.name) && true}
                      value={profile.name}
                      defaultValue={User.info.name}
                      onChange={e => handleChange(e)}
                    />
                    {/^\w+$/.test(profile.name) && <Info>Please check if you type your full name</Info>}
                    {/(\w.+\s).+/.test(profile.name) && (
                      <span className="set--ok">
                        <Checked isStoped={false} />
                      </span>
                    )}
                  </div>
                  <div className="form__grid">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="Ex: lydia.hallie@email.com"
                      // checked={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(profile.email) && true}
                      value={profile.email}
                      defaultValue={User.info.email}
                      disabled
                      // onChange={e => handleChange(e)}
                    />
                    {/* {/^(?!$)+(?!\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)/.test(profile.email) && (
                    <Info>Check if your e-mail is valid</Info>
                  )}
                  {/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(profile.email) && (
                    <span className="set--ok">
                      <Checked isStoped={false} />
                    </span>
                  )} */}
                  </div>

                  <div className="form__grid">
                    <Label htmlFor="birthday">Birthday</Label>
                    {/* <InputMask
                      mask="99/99/9999"
                      value={profile.birthday}
                      defaultValue={User.info.birthday}
                      onChange={e => handleChange(e)}
                    >
                      {() => (
                      )}
                    </InputMask> */}
                    <Input
                      name="birthday"
                      type="date"
                      // checked={}
                      value={profile.birthday.substring(0, 10)}
                      defaultValue={User.info.birthday.substring(0, 10)}
                      onChange={e => handleChange(e)}
                      placeholder="MM/DD/YYYY"
                    />
                    {/* {/^(?=.*[0-9])((?=.*_).)*$/.test(profile.birthday) && <Info>Provide a valid date</Info>}
                  {/^((?!_).)*$/.test(profile.birthday) && profile.birthday != null && profile.birthday != '' && (
                    <span className="set--ok">
                      <Checked isStoped={false} />
                    </span>
                  )} */}
                  </div>

                  <div className="form__grid">
                    <Label htmlFor="document">CPF*</Label>
                    <InputMask
                      mask="999.999.999-99"
                      value={profile.document}
                      defaultValue={User.info.document}
                      onChange={e => handleChange(e)}
                    >
                      {() => (
                        <Input
                          name="document"
                          type="text"
                          required
                          checked={
                            /^((?!_).)*$/.test(profile.document) &&
                            profile.document != null &&
                            profile.document != '' &&
                            true
                          }
                          placeholder="000.000.000-00"
                        />
                      )}
                    </InputMask>
                    {/^(?=.*[0-9])((?=.*_).)*$/.test(profile.document) && <Info>Provide a valid document</Info>}
                    {/^((?!_).)*$/.test(profile.document) && profile.document != null && profile.document != '' && (
                      <span className="set--ok">
                        <Checked isStoped={false} />
                      </span>
                    )}
                  </div>

                  <div className="form__grid">
                    <Label htmlFor="phone">Phone</Label>
                    <InputMask
                      mask="(00) 0000-0000"
                      value={profile.phone}
                      defaultValue={User.info.phone}
                      onChange={e => handleChange(e)}
                    >
                      {() => (
                        <Input
                          name="phone"
                          type="text"
                          // checked={}
                          placeholder="(00) 0000-0000"
                        />
                      )}
                    </InputMask>
                    {/* {/^(?=.*[0-9])((?=.*_).)*$/.test(profile.birthday) && <Info>Provide a valid date</Info>}
  {/^((?!_).)*$/.test(profile.birthday) && profile.birthday != null && profile.birthday != '' && (
    <span className="set--ok">
      <Checked isStoped={false} />
    </span>
  )} */}
                  </div>
                </div>

                <Button primary profile disabled={loading}>
                  Sav{loading ? 'ing' : 'e'} Changes
                </Button>
                <Button onClick={() => handleInput(handleProfile, setHandleProfile)}>Cancel</Button>
              </Form>
            )}
          </Mutation>
        )}
      </Profile>

      <PasswordContainer>
        {handlePassword == false ? (
          <>
            <EditButton primary onClick={() => handleInput(handlePassword, setHandlePassword)} />
            <p>Password</p>
            *********
          </>
        ) : (
          <Password>
            <Mutation mutation={REQUEST_RESET_MUTATION} variables={User.info}>
              {(reset, { error, loading, called }) => (
                <form
                  method="post"
                  onSubmit={async e => {
                    e.preventDefault();
                    console.log(User.info.email);
                    const res = await reset();
                    console.log(res);
                  }}
                >
                  {!called && (
                    <EmailReset>
                      We will send a email to <b>{User.info.email}</b> with the information to reset
                    </EmailReset>
                  )}

                  {!error && !loading && called && (
                    <EmailReset success>Success! We sent to your e-mail the next steps</EmailReset>
                  )}

                  <Button type="submit" primary fullWidth disabled={loading}>
                    {!loading ? 'Reset Now' : 'Sending...'}
                  </Button>

                  {!loading && <Button onClick={() => handleInput(handlePassword, setHandlePassword)}>Cancel</Button>}
                </form>
              )}
            </Mutation>
          </Password>
        )}
      </PasswordContainer>
    </ProfileContainer>
  );
};

export default ProfileContent;
