"use client";
import {
  Box,
  Button,
  Fade,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { steps } from "../component/steps";
import { getSessionStorageItem } from "../helpers/getSessionStorageItem";
import { PersonalDetailsData } from "../personal-details/page";
import { VehicleData } from "../vehicle-details/page";
import axios from "axios";
import { MembershipDetails } from "../page";

export default function FormSuccess() {
  const router = useRouter();
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    const { firstName, lastName, email, phone }: PersonalDetailsData =
      getSessionStorageItem("personalDetails");

    const { vehicles }: VehicleData = getSessionStorageItem(
      "vehicleRegistration"
    );

    const { id }: MembershipDetails =
      getSessionStorageItem("selectedMembership");

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/submit-form`, {
        firstName,
        lastName,
        email,
        phone,
        carWashId: 1,
        membershipId: id,
        vehicles,
      });
    } catch (error) {
      console.error(error);
    }

    // sessionStorage.clear();
    router.push("/");
  };

  return (
    <Fade in timeout={300}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container marginTop={5} spacing={2} marginBottom={5} padding={2}>
          <Grid size={{ xs: 12 }}>
            <Stepper activeStep={3} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid size={{ xs: 12 }} display="flex" justifyContent="center">
            <Box>
              <Typography textAlign="center" variant="h2">
                Success!
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            size={{ xs: 12 }}
            spacing={2}
            direction={{ xs: "row-reverse" }}
          >
            <Grid size={{ md: 6, xs: 12 }}>
              <Button type="submit" fullWidth variant="contained">
                Yes
              </Button>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
              <Button
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: "white" }}
                onClick={() => {
                  router.push("/payments");
                }}
              >
                No
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Fade>
  );
}
