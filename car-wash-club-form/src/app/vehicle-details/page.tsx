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
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { numberPlateFont } from "../theme/font";
import { steps } from "../component/steps";
import { useEffect, useState } from "react";

export interface VehicleData {
  licencePlate: string;
  vehicles?: Vehicle[];
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
  const theme = useTheme();
  const { handleSubmit } = useForm();
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      registration: "",
      make: "",
      model: "",
      fuelType: "",
      primaryColour: "",
      manufactureDate: new Date(),
    },
  ]);

  useEffect(() => {
    const { vehicles }: { vehicles: Vehicle[] } = JSON.parse(
      sessionStorage.getItem("vehicleRegistration") || "{}"
    );

    if (!vehicles) {
      router.push("/vehicle-registration");
    }

    setVehicles(vehicles);
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
            <Typography textAlign="center" variant="h3">
              {vehicles.length > 1
                ? "Are these your vehicles?"
                : "Is this your vehicle?"}
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={10}
          >
            {vehicles.map((vehicle, key) => (
              <Grid container key={key} spacing={2} justifyContent="center">
                <Grid
                  size={{ md: 4, sm: 6, xs: 12 }}
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
                    src={`https://cdn.brandfetch.io/${vehicle.make}.com/logo/theme/light/`}
                    width={100}
                  />
                  <Box>
                    <Typography sx={{ color: theme.palette.text.primary }}>
                      {vehicle.make} {vehicle.model}
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.primary }}>
                      {new Date(vehicle.manufactureDate).getFullYear()} •{" "}
                      {vehicle.fuelType} • {vehicle.primaryColour}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            ))}
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
