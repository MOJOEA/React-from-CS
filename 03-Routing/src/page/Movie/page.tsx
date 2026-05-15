import { Box, Container, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import CardMovie from "../../components/header/crad/Cradmovie";

import getMovies from "../../database/movies"; 
import getActors from "../../database/actors";

import { useNavigate } from "react-router-dom";

function MoviePage() {
  const movies = getMovies(); 
  const actors = getActors();

  return (
    <Box sx={{ bgcolor: "#000000", minHeight: "100vh", color: "#ffffff", py: 4 }}>
      <Container maxWidth="lg">
        
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box sx={{ width: 4, height: 28, bgcolor: "#f5c518", mr: 1.5, borderRadius: 0.5 }} />
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Top 10 on IMDb this week
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 2 }}>
            {movies.map((movie, index) => (
              <CardMovie 
                key={movie.id}
                id={movie.id}
                title={`${index + 1}. ${movie.title}`} // พ่นตัวเลขลำดับ 1-7 หน้าชื่อเรื่อง
                rating={movie.imdbRating}             // ดึงคะแนนเรตติ้ง (เช่น 8.4, 9.2)
                imageUrl={movie.img}                  // ดึงชื่อไฟล์รูปภาพโปสเตอร์ (เช่น alien_romulus_th_poster_...)
              />
            ))}
          </Box>
        </Box>

        {/* ================= SECTION 2: BORN TODAY ================= */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
            <Box sx={{ width: 4, height: 28, bgcolor: "#f5c518", mr: 1.5, borderRadius: 0.5 }} />
            <Typography variant="h5" sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
              Born today <NavigateNextIcon sx={{ fontSize: 28 }} />
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "#999999", mb: 3, pl: 2 }}>
            People born on December 11
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            {actors.map((actor) => (
              <Box key={actor.id} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: 120 }}>
                <Box 
                  component="img"
                  src={actor.img}
                  alt={actor.name}
                  sx={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", mb: 1 }}
                />
                <Typography variant="body2" sx={{ fontWeight: 500, textAlign: "center" }}>
                  {actor.name}
                </Typography>
                <Typography variant="caption" sx={{ color: "#999999" }}>
                  {actor.age}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
}

export default MoviePage;
