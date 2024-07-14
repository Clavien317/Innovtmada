// components/FormDialog.js
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Postuler</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Pour postuler à cette offre, veuillez entrer votre adresse email ici. Nous vous contacterons pour plus de détails.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Adresse Email"
          type="email"
          fullWidth
          variant="standard"
        />

        <TextField
          autoFocus
          required
          margin="dense"
          id="salarial"
          name="Pretention salarial"
          label="Pretention salarial"
          type="Pretention salarial"
          fullWidth
          variant="standard"
        />
        <br />
        <br />
        <DialogContentText>
            Votre CV *
        </DialogContentText>
        <input
          required
          id="resume"
          name="resume"
          type="file"
          style={{ marginTop: '16px', marginBottom: '8px', display: 'block' }}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button type="submit">Postuler</Button>
      </DialogActions>
    </Dialog>
  );
}
