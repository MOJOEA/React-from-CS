import { CardActions, Button, TextField } from "@mui/material";

export function ButtonAction({ onBtnClick }: { onBtnClick: () => void }) {
  return (
    <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
      <Button 
        variant="contained"
        color="primary"
        onClick={onBtnClick}
      > 
        View Details
      </Button>
    </CardActions>
  );
}

export function InputAction({ onInputChange }: { onInputChange: (value: string) => void }) {
  return (
    <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Input your text..."
        onChange={(e) => onInputChange(e.target.value)}
        sx={{
          input: { color: '#fff' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#444' },
            '&:hover fieldset': { borderColor: '#00d397' },
          }
        }}
      />
    </CardActions>
  );
}
