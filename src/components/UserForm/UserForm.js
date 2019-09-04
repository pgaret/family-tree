import React from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import backendApi from '../../backendApi';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  header: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  row: {
    marginLeft: theme.spacing(1),
    display: 'flex'
  },
  button: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2),
  }
}));

export const UserForm = ({ onSubmit, closeModal }) => {
  const classes = useStyles();
  const newMember = {};
  const setValue = (field, value) => newMember[field] = value;
  const submitNewMember = async () => {
      if (onSubmit) {
        onSubmit(newMember);
      } else {
        const response = await backendApi.postPerson(newMember);
        console.log(response);
      }
      closeModal();
  }
  return (
    <div>
      <form>
        <Typography className={classes.row} variant="h4">Add Person</Typography>
        <div className={classes.row}>
          <TextField id='email' className={classes.textField} label="Email" value={newMember['email']} onChange={(e) => setValue('email', e.target.value)} />
        </div>
        <Typography variant="h5" className={classes.header}>Name</Typography>
        <div className={classes.row}>
          <TextField id='firstName' className={classes.textField} label="First Name" value={newMember['firstName']} onChange={(e) => setValue('firstName', e.target.value)} />
          <TextField id='middleName' className={classes.textField} label="Middle Name" value={newMember['middleName']} onChange={(e) => setValue('middleName', e.target.value)} />
          <TextField id='lastName' className={classes.textField} label="Last Name" value={newMember['lastName']} onChange={(e) => setValue('lastName', e.target.value)} />
          <TextField id='maidenName' className={classes.textField} label="Maiden Name" value={newMember['maidenName']} onChange={(e) => setValue('maidenName', e.target.value)} />
        </div>
        <Typography variant="h5" className={classes.header}>Birthdate</Typography>
        <div className={classes.row}>
          <TextField id='birthDay' type='number' max={31} min={1} className={classes.textField} label="Day" value={newMember['birthDay']} onChange={(e) => setValue('birthDay', e.target.value)} />
          <TextField id='birthMonth' type='number' max={12} min={1} className={classes.textField} label="Month" value={newMember['birthMonth']} onChange={(e) => setValue('birthMonth', e.target.value)} />
          <TextField id='birthYear' type='number' max={2019} min={0} className={classes.textField} label="Year" value={newMember['birthYear']} onChange={(e) => setValue('birthYear', e.target.value)} />
        </div>
        <Button
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={submitNewMember}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UserForm;
