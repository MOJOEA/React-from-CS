import { Card, CardMedia, CardContent, Typography, Button, Box, IconButton, SvgIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CardMovieProps {
  id: string;
  title: string;
  rating: string;
  imageUrl: string;
}

function Cradmovie({ id, title, rating, imageUrl }: CardMovieProps) {

    const navigate = useNavigate();
    function navigateTo_Watchlist(id: string) {
        navigate(`/movie/${id}`);
    }
    function navigateTo_Trailer(id: string) {
        navigate(`/movie/${id}/trailer`);
    }
  
  return (
    <Card 
      sx={{ 
        minWidth: 160,        
        maxWidth: 250,
        bgcolor: "#1a1a1a",     
        color: "#ffffff",       
        borderRadius: 1, 
        boxShadow: 4,
        overflow: "hidden"
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={imageUrl}
        alt={title}
        sx={{ 
          objectFit: "cover",
          bgcolor: "#2a2a2a",
          width: "100%",
        }}
      />
      
      <CardContent sx={{ p: 1.5, "&:last-child": { pb: 1.5 } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <SvgIcon sx={{ color: "#f5c518", fontSize: 18 }}>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </SvgIcon>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {rating}
            </Typography>
          </Box>
          
          <IconButton size="small" sx={{ color: "#999999", p: 0 }}>
            <SvgIcon sx={{ fontSize: 18 }}>
              <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </SvgIcon>
          </IconButton>
        </Box>

        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: 500, 
            mb: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap" 
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button 
            variant="contained" 
            startIcon={
              <SvgIcon fontSize="small">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </SvgIcon>
            }
            sx={{ 
              bgcolor: "#2c3e50", 
              color: "#3498db",
              fontWeight: "bold",
              fontSize: "12px",
              textTransform: "none", 
              "&:hover": { bgcolor: "#34495e" }
            }}
            fullWidth
            onClick={() => navigateTo_Watchlist(id)}
          >
            Watchlist
          </Button>

          <Button 
            variant="text" 
            startIcon={
              <SvgIcon fontSize="small">
                <path d="M8 5v14l11-7z" />
              </SvgIcon>
            }
            sx={{ 
              color: "#ffffff",
              fontSize: "12px",
              textTransform: "none",
              "&:hover": { bgcolor: "rgba(255,255,255,0.08)" }
            }}
            fullWidth
            onClick={() => navigateTo_Trailer(id)}
          >
            Trailer
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Cradmovie;
