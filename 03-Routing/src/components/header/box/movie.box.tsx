import { Box, SvgIcon, Typography } from "@mui/material";
     
export function PhotosCount({ photosCount }: { photosCount: number }) {
    return (
        <Box sx={{ flex: 1, bgcolor: "#252525", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", "&:hover": { bgcolor: "#333" }, p: 2 }}>
            <SvgIcon sx={{ fontSize: 26, mb: 1, color: "#fff" }}><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></SvgIcon>
            <Typography variant="caption" sx={{ fontWeight: "bold", color: "#fff" }}>{photosCount || "99"} PHOTOS</Typography>
        </Box>
    );
}

export function VideoCount({ videoCount }: { videoCount: number }) {
    return (
        <Box sx={{ flex: 1, bgcolor: "#252525", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", "&:hover": { bgcolor: "#333" }, p: 2 }}>
            <SvgIcon sx={{ fontSize: 26, mb: 1, color: "#fff" }}><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" /></SvgIcon>
            <Typography variant="caption" sx={{ fontWeight: "bold", color: "#fff" }}>{videoCount || "12"} VIDEOS</Typography>
        </Box>
    );
}