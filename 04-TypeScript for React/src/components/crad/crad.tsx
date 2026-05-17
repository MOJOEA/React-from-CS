import { Box, Card, CardHeader, CardContent, Typography, CardActions, Button, TextField } from "@mui/material";
import { ButtonAction, InputAction } from "./action/action";

export default function MovieCard(props: { title?: string; text: string; mode: "input" | "btn" | "null"; onInputChange?: (value: string) => void; onBtnClick?: () => void }) {
  const { title, text, mode, onInputChange, onBtnClick } = props;
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
      <Card 
        sx={{ 
          maxWidth: 600, 
          width: '100%',
          bgcolor: '#1e1e1e',
          color: '#fff',
          borderRadius: 3, 
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)', 
          border: '1px solid #2f2f2f',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)'
          }
        }}
      >
        <CardHeader 
          title={title} 
          titleTypographyProps={{ 
            variant: 'h5', 
            fontWeight: 'bold',
            color: '#00d397' 
          }}
          sx={{ 
            borderBottom: '1px solid #2f2f2f', 
            pb: 1.5 
          }}
        />

        <CardContent sx={{ pt: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#b3b3b3',
              lineHeight: 1.6,
              letterSpacing: 0.5
            }}
          >
            {text}
          </Typography>          
        </CardContent>

        {/* 2. CardActions แยกรูปแบบการทำงานตามโหมด */}
        {mode === "input" ? (
            <InputAction onInputChange={onInputChange} />
        ) : mode === "btn" ? (
            <ButtonAction onBtnClick={onBtnClick} />
        ) : mode === "null"}

      </Card>
    </Box>
  );
}