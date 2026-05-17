import { useParams } from "react-router-dom"; 
import { Container, Card, CardHeader, CardContent, CardActions, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MovieDetailPage() {
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();

    function navigateTo() {
        navigate("/test4");
    }
    return (
        <Container>
            <Card>
                <CardHeader title={`Movie Detail Page: ${id}`} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This is the detail page for movie ID: {id}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={navigateTo}>
                        Back to Movies
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}

export default MovieDetailPage;
