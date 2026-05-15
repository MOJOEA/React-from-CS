import { useParams, useNavigate } from "react-router-dom";
import { Box, Container, Typography, Button, Divider, SvgIcon } from "@mui/material";
// นำเข้าข้อมูล Mock Data ถอยหลัง 3 ชั้นจากโฟลเดอร์ [id] ไปหา src/database/data.tsx
import getMovies from "../../../database/movies";

function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movies = getMovies();
  
  // ค้นหาข้อมูลจากไอดี URL (ถ้าไม่เจอให้ดึงภาพยนตร์เรื่องแรกมาเรนเดอร์ทดสอบสไตล์ไว้ก่อน)
  const movie = movies.find((m) => m.id === id) || movies[0];

  return (
    <Box sx={{ bgcolor: "#121212", minHeight: "100vh", color: "#ffffff", pb: 6 }}>
      
      {/* 1. ปุ่มย้อนกลับสีเหลืองเด่นด้านบนสุด (< Back) */}
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

      <Container maxWidth="lg" sx={{ mt: 3 }}>
        
        {/* 2. บรรทัดหัวข้อชื่อหลักและแท็บคะแนนความนิยมย่อย */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2, flexWrap: "wrap", gap: 2 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "normal", mb: 0.5 }}>
              {movie.stars && movie.stars[0] ? movie.stars[0] : movie.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#999999", textTransform: "uppercase", fontSize: "12px", letterSpacing: 0.5 }}>
              Actress • Soundtrack
            </Typography>
          </Box>
          
          {/* แถบคะแนนความนิยมฝั่งขวา */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="caption" sx={{ color: "#999999", display: "block", fontWeight: "bold", fontSize: "11px" }}>STAR METER</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }}>
                <SvgIcon sx={{ color: "#5795e4", fontSize: 22 }}><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></SvgIcon>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>{movie.popularity || "Top 50"}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 3. แผงแสดงสื่อมีเดีย Layout IMDb (ภาพโปรไฟล์ซ้าย + กล่องวิดีโอกลาง + ปุ่มสถิติขวา) */}
        <Box sx={{ display: "flex", gap: 0.5, bgcolor: "#1a1a1a", p: 0.5, borderRadius: 1, mb: 3, flexWrap: { xs: "wrap", md: "nowrap" } }}>
          {/* รูปโปรไฟล์นักแสดงหรือโปสเตอร์หลักแนวตั้ง */}
          <Box 
            component="img" 
            src={movie.img} 
            alt={movie.title} 
            sx={{ width: { xs: "100%", sm: 220 }, height: 320, objectFit: "cover" }} 
          />
          
          {/* กล่องเครื่องเล่นวิดีโอหลักตรงกลาง พร้อมปุ่มเล่น Trailer ทับบนฉากหลัง */}
          <Box sx={{ 
            flexGrow: 1, 
            position: "relative", 
            minWidth: { xs: "100%", sm: 300 }, 
            height: 320, 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${movie.img})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            display: "flex", 
            alignItems: "flex-end", 
            p: 3 
          }}>
            <Button 
              startIcon={<SvgIcon sx={{ fontSize: 40 }}><path d="M8 5v14l11-7z" /></SvgIcon>} 
              sx={{ color: "#ffffff", fontSize: "18px", fontWeight: "bold", textTransform: "none", textAlign: "left", display: "block" }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>ON THE SCENE</Typography>
              <Typography variant="caption" sx={{ color: "#ccc", display: "block", textTransform: "none" }}>
                Watch {movie.stars && movie.stars[0] ? movie.stars[0] : "Trailer"} ({movie.trailerDuration || "2:30"})
              </Typography>
            </Button>
          </Box>

          {/* แผงปุ่มนับจำนวนมีเดียฝั่งขวาสองกล่องแนวดิ่ง */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, width: { xs: "100%", sm: 140 } }}>
            <Box sx={{ flex: 1, bgcolor: "#252525", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", "&:hover": { bgcolor: "#333" }, p: 2 }}>
              <SvgIcon sx={{ fontSize: 26, mb: 1, color: "#fff" }}><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" /></SvgIcon>
              <Typography variant="caption" sx={{ fontWeight: "bold", color: "#fff" }}>{movie.videoCount || "12"} VIDEOS</Typography>
            </Box>
            <Box sx={{ flex: 1, bgcolor: "#252525", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", "&:hover": { bgcolor: "#333" }, p: 2 }}>
              <SvgIcon sx={{ fontSize: 26, mb: 1, color: "#fff" }}><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></SvgIcon>
              <Typography variant="caption" sx={{ fontWeight: "bold", color: "#fff" }}>{movie.photoCount || "99"} PHOTOS</Typography>
            </Box>
          </Box>
        </Box>

        {/* 4. กล่องคำอธิบายประวัติย่อย และปุ่มสีกรมท่า/เหลืองสำหรับกดติดตามด้านล่าง */}
        <Box sx={{ display: "flex", gap: 4, flexWrap: { xs: "wrap", md: "nowrap" }, alignItems: "flex-start" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3, color: "#e0e0e0" }}>
              {movie.description}
            </Typography>
            
            <Divider sx={{ bgcolor: "#333", mb: 2 }} />
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: "#fff" }}>More at IMDbPro:</Typography>
              <Typography variant="body2" sx={{ color: "#5795e4", cursor: "pointer" }}>Contact Info • Agent Info • Resume</Typography>
            </Box>
          </Box>

          {/* การ์ดฟังก์ชันแสดงวันเกิดและปุ่มกดเหลืองด้านล่างขวา */}
          <Box sx={{ width: { xs: "100%", md: 300 }, flexShrink: 0, bgcolor: "#1a1a1a", p: 2, borderRadius: 1 }}>
            <Typography variant="body2" sx={{ color: "#999999", mb: 1.5 }}>
              Born: <span style={{ color: "#5795e4" }}>May 3, {movie.year ? parseInt(movie.year) - 20 : "2001"}</span>
            </Typography>
            
            <Button 
              variant="contained" 
              fullWidth 
              startIcon={<SvgIcon><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></SvgIcon>}
              sx={{ bgcolor: "#f5c518", color: "#000000", fontWeight: "bold", py: 1.2, textTransform: "none", fontSize: "14px", "&:hover": { bgcolor: "#dfb210" }, borderRadius: 1 }}
            >
              Add to Bio
            </Button>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}

export default MovieDetailPage;
