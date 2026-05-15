import { useParams, useNavigate } from "react-router-dom";
import { Box, Container, Typography, Button, Chip, Divider, SvgIcon } from "@mui/material";

import { PhotosCount, VideoCount } from "../../../components/header/box/movie.box";

import getMovies from "../../../database/movies";

function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const movies = getMovies();
  const movie = movies.find((m) => m.id === id) || movies[0];

  return (
    <Box sx={{ bgcolor: "#121212", minHeight: "100vh", color: "#ffffff"}}>
      <Box sx={{ bgcolor: "#1a1a1a", py: 1.5 }}>
        <Container maxWidth="lg">
          <Button 
            variant="text" 
            onClick={() => navigate("/movie")}
            startIcon={
              <SvgIcon>
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </SvgIcon>
            }
            sx={{ color: "#f5c518", fontWeight: "bold", fontSize: "16px", textTransform: "none" }}
          >
            Back
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 2, mb: 2 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "normal", mb: 0.5 }}>
              {movie.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#999999" }}>
              {movie.year} • {movie.maturityRating} • {movie.duration}
            </Typography>
          </Box>
          
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="caption" sx={{ color: "#999999", display: "block", textTransform: "uppercase", fontWeight: "bold", fontSize: "11px" }}>IMDb RATING</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }}>
                <SvgIcon sx={{ color: "#f5c518", fontSize: 24 }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></SvgIcon>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold", display: "inline" }}>{movie.imdbRating}</Typography>
                  <Typography variant="caption" sx={{ color: "#999999" }}>/10</Typography>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="caption" sx={{ color: "#999999", display: "block", textTransform: "uppercase", fontWeight: "bold", fontSize: "11px" }}>YOUR RATING</Typography>
              <Button startIcon={<SvgIcon sx={{ color: "#5795e4" }}><path d="M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21z" /></SvgIcon>} sx={{ color: "#5795e4", textTransform: "none", fontWeight: "bold", mt: 0.5, p: 0 }}>Rate</Button>
            </Box>
          </Box>
        </Box>

        {/* 3. แผงแสดงสื่อมีเดียหลัก (Poster + Trailer Backdrop + Media Counts) */}
        <Box sx={{ display: "flex", gap: 0.5, bgcolor: "#1a1a1a", p: 0.5, borderRadius: 1, mb: 3, minHeight: 320, flexWrap: { xs: "wrap", md: "nowrap" } }}>
          {/* ภาพโปสเตอร์แนวตั้งซ้ายมือ */}
          <Box component="img" src={movie.img} alt={movie.title} sx={{ width: { xs: "100%", sm: 220 }, height: 320, objectFit: "cover" }} />
          
          {/* กล่องวิดีโอตัวอย่างตรงกลางพร้อมปุ่ม Play เด้งซ้อนด้านบน */}
          <Box sx={{ flexGrow: 1, position: "relative", minWidth: { xs: "100%", sm: 300 }, maxWidth: 700, height: 320, backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${movie.img})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "flex-end", p: 3 }}>
            <Button startIcon={<SvgIcon sx={{ fontSize: 40 }}><path d="M8 5v14l11-7z" /></SvgIcon>} sx={{ color: "#ffffff", fontSize: "20px", fontWeight: "bold", textTransform: "none", "&:hover": { bgcolor: "transparent" } }}>
              Play trailer <Typography variant="caption" sx={{ color: "#aaa", ml: 1, fontSize: "14px" }}>{movie.trailerDuration}</Typography>
            </Button>
          </Box>

          {/* ปุ่มสถิติจำนวนมีเดียฝั่งขวามือสองกล่อง */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, width: { xs: "100%", sm: 200 } }}>
            <PhotosCount photosCount={movie.photoCount} />
            <VideoCount videoCount={movie.videoCount} />
          </Box>
        </Box>

        {/* 4. รายละเอียดเนื้อเรื่องและปุ่ม Watchlist สีเหลืองเด่นด้านล่าง */}
        <Box sx={{ display: "flex", gap: 4, flexWrap: { xs: "wrap", md: "nowrap" } }}>
          <Box sx={{ flexGrow: 1 }}>
            {/* หมวดหมู่หนังแบบป้ายแคปซูล (Genres Chips) */}
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {movie.genres.map((genre, idx) => (
                <Chip key={idx} label={genre} sx={{ bgcolor: "transparent", border: "1px solid #555", color: "#fff", cursor: "pointer", "&:hover": { bgcolor: "#252525" } }} />
              ))}
            </Box>
            
            <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 3 }}>
              {movie.description}
            </Typography>

            <Divider sx={{ bgcolor: "#333", my: 1.5 }} />

            {/* ส่วนรายชื่อทีมงานภาพยนตร์ (Director, Writers, Stars) */}
            <Box sx={{ display: "flex", py: 1 }}><Typography sx={{ fontWeight: "bold", width: 100, color: "#fff" }}>Director</Typography><Typography sx={{ color: "#5795e4" }}>{movie.director.join(", ")}</Typography></Box>
            <Divider sx={{ bgcolor: "#222" }} />
            <Box sx={{ display: "flex", py: 1 }}><Typography sx={{ fontWeight: "bold", width: 100, color: "#fff" }}>Writers</Typography><Typography sx={{ color: "#5795e4" }}>{movie.writers.join(", ")}</Typography></Box>
            <Divider sx={{ bgcolor: "#222" }} />
            <Box sx={{ display: "flex", py: 1 }}><Typography sx={{ fontWeight: "bold", width: 100, color: "#fff" }}>Stars</Typography><Typography sx={{ color: "#5795e4" }}>{movie.stars.join(", ")}</Typography></Box>
            <Divider sx={{ bgcolor: "#333", mt: 1.5 }} />
          </Box>

          {/* กล่องปุ่มเหลืองเด่นทางขวา (+ Add to Watchlist) */}
          <Box sx={{ width: { xs: "100%", md: 320 }, flexShrink: 0 }}>
            <Button 
              variant="contained" 
              fullWidth 
              startIcon={<SvgIcon><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></SvgIcon>}
              sx={{ bgcolor: "#f5c518", color: "#000000", fontWeight: "bold", py: 1.5, textTransform: "none", fontSize: "15px", "&:hover": { bgcolor: "#dfb210" }, mb: 2, borderRadius: 1 }}
            >
              Add to Watchlist
            </Button>
            <Typography variant="caption" sx={{ color: "#999999", display: "block", textAlign: "center" }}>
              Added by {movie.userReviewCount} users • {movie.criticReviewCount} critic reviews
            </Typography>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}

export default MovieDetailPage;
