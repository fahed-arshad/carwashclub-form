"use client";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Button,
  Fade,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { numberPlateFont } from "../theme/font";
import { steps } from "../component/steps";
import { useEffect, useState } from "react";

export interface FormData {
  licencePlate: string;
  vehicle?: Vehicle;
}

export type Vehicle = {
  registration: string;
  make: string;
  model: string;
  fuelType: string;
  primaryColour: string;
  manufactureDate: Date;
};

export default function VehicleDetails() {
  const router = useRouter();
  const { handleSubmit } = useForm();
  const [vehicle, setVehicle] = useState<Vehicle>({
    registration: "",
    make: "",
    model: "",
    fuelType: "",
    primaryColour: "",
    manufactureDate: new Date(),
  });

  useEffect(() => {
    const { vehicle }: { vehicle: Vehicle } = JSON.parse(
      sessionStorage.getItem("vehicleRegistration") || "{}"
    );

    if (!vehicle) {
      router.push("/vehicle-registration");
    }

    setVehicle(vehicle);
  }, [router]);

  const onSubmit = () => {
    router.push("/payments");
  };

  return (
    <Fade in timeout={300}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          marginTop={5}
          spacing={2}
          marginBottom={5}
          padding={2}
          justifyContent="center"
        >
          <Grid size={{ xs: 12 }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography textAlign="center" variant="h2">
              Is this your car?
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            display="flex"
            justifyContent="center"
            textAlign="center"
          >
            <Typography
              maxWidth={200}
              paddingLeft={1}
              paddingRight={1}
              fontFamily={numberPlateFont.style.fontFamily}
              fontSize={24}
              sx={{ backgroundColor: "#fed500", borderRadius: "5px" }}
            >
              {vehicle.registration}
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12 }}
            gap={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src={`https://cdn.brandfetch.io/${vehicle.make}.com/logo/theme/dark/`}
              width={100}
            />
            <Box>
              <Typography>
                {vehicle.make} {vehicle.model}
              </Typography>
              <Typography>
                {new Date(vehicle.manufactureDate).getFullYear()} •{" "}
                {vehicle.fuelType} • {vehicle.primaryColour}
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
                  router.push("/vehicle-registration");
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
