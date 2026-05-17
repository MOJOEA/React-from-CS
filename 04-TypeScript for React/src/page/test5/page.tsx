import { Box, Container, Card, CardHeader, CardContent, Typography } from "@mui/material";
import { CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const moviesData = [
  { id: "1", title: "House of the Dragon", description: "The story of the Targaryen civil war." },
  { id: "2", title: "Game of Thrones", description: "Nine noble families fight for control over the mythical lands of Westeros." },
  { id: "3", title: "A Knight of the Seven Kingdoms", description: "The adventures of Ser Duncan the Tall and Egg." }
];

function MoviePage() {
    const navigate = useNavigate();

    function navigateTo(id: string) {
        navigate(`/test5/${id}`);
    }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* ส่วนหัวของหน้าเว็บ */}
      <Card sx={{ mb: 4, bgcolor: "background.paper" }}>
        <CardHeader title="Movie Page" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is the main movie page. Select a movie below to see details.
          </Typography>
        </CardContent>
      </Card>

      {/* 2. นำข้อมูล moviesData มาสั่ง .map() วนลูปสร้างรายการการ์ดภาพยนตร์ */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {moviesData.map((element) => (
          <Card key={element.id} variant="outlined">
            <CardHeader title={element.title} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {element.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                variant="contained"
                color="primary"
                onClick={() => navigateTo(element.id)}
              > View Details</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default MoviePage;
