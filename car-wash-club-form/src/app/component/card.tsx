"use client";
import {
  CardActionArea,
  Typography,
  CardContent,
  Card,
  Box,
} from "@mui/material";
import { Membership } from "../page";

export default function MembershipCard({
  content,
  onClick,
}: {
  content: Membership;
  onClick?: () => void;
}) {
  return (
    <CardActionArea
      sx={{
        height: "100%",
        minHeight: "100%",
        maxHeight: "300px",
      }}
      onClick={onClick}
    >
      <Card variant="outlined" sx={{ height: "100%", borderRadius: "0px" }}>
        <CardContent sx={{ height: "100%" }}>
          <Box
            display="grid"
            gap="10px"
            alignContent="space-between"
            height="100%"
          >
            <Box>
              <Typography variant="h5">{content.name}</Typography>
              <Typography>{content.description}</Typography>
            </Box>
            <Typography variant="h6">{content.price} / PER MONTH</Typography>
          </Box>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
