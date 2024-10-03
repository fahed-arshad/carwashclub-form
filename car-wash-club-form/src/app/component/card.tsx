"use client";
import {
  CardActionArea,
  Typography,
  CardContent,
  Card,
  Box,
} from "@mui/material";
import { MembershipDetails } from "../page";

export default function MembershipCard({
  content,
  onClick,
}: {
  content: MembershipDetails;
  onClick?: () => void;
}) {
  return (
    <CardActionArea
      sx={{ height: "100%", minHeight: "100%", maxHeight: "300px" }}
      onClick={onClick}
    >
      <Card variant="outlined" sx={{ height: "100%" }}>
        <CardContent sx={{ height: "100%" }}>
          <Box
            display="grid"
            gap="10px"
            alignContent="space-between"
            height="100%"
          >
            <Box>
              <Typography variant="h5">{content.title}</Typography>
              <Typography>{content.description}</Typography>
            </Box>
            <Typography variant="h6">{content.price}</Typography>
          </Box>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
