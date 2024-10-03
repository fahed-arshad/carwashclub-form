"use client";
import React from "react";
import {
  // Controller,
  useForm,
} from "react-hook-form";
import {
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Fade,
} from "@mui/material";
import {
  // DateField,
  LocalizationProvider,
} from "@mui/x-date-pickers";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid2";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

export const steps = ["My Details", "Vehicle Information", "Payment"];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function OnboardingForm() {
  const router = useRouter();
  const formPage = "personalDetails";
  const existingData: FormData = JSON.parse(
    sessionStorage.getItem(formPage) || "{}"
  );
  // if (existingData.dateOfBirth) {
  //   existingData.dateOfBirth = parse(existingData.dateOfBirth, "dd/MM/yyyy", new Date());
  // }

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      firstName: existingData.firstName ? existingData.firstName : "",
      lastName: existingData.lastName ? existingData.lastName : "",
      email: existingData.email ? existingData.email : "",
      phone: existingData.phone ? existingData.phone : "",
    },
  });

  const onSubmit = (data: FormData) => {
    // if (data.dateOfBirth) {
    //   data.dateOfBirth = format(new Date(data.dateOfBirth), "dd/MM/yyyy");
    // }
    data.firstName = data.firstName.toUpperCase();
    data.lastName = data.lastName.toUpperCase();
    sessionStorage.setItem(formPage, JSON.stringify(data));
    router.push("/vehicle-registration");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Fade in timeout={300}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            marginTop={5}
            spacing={2}
            marginBottom={5}
            padding={2}
          >
            <Grid size={{ xs: 12 }}>
              <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
              <TextField
                variant="outlined"
                fullWidth
                label="First Name"
                {...register("firstName", { required: true })}
                autoComplete="given-name"
                slotProps={{
                  htmlInput: { style: { textTransform: "uppercase" } },
                }}
                required
              />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
              <TextField
                variant="outlined"
                fullWidth
                label="Last Name"
                {...register("lastName", { required: true })}
                autoComplete="family-name"
                slotProps={{
                  htmlInput: { style: { textTransform: "uppercase" } },
                }}
                required
              />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email"
                {...register("email", { required: true })}
                type="email"
                autoComplete="email"
                required
              />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
              <TextField
                variant="outlined"
                fullWidth
                label="Phone number"
                {...register("phone", { required: true })}
                type="tel"
                slotProps={{ htmlInput: { pattern: "[0-9]*" } }}
                helperText="Please enter in the following format: 07XXXXXXXXX"
                required
              />
            </Grid>
            {/* <Grid size={{ md: 6, xs: 12 }}>
              <Controller
                name="dateOfBirth"
                control={control}
                defaultValue={undefined}
                render={({ field }) => (
                  <DateField
                    fullWidth
                    label="Date of Birth"
                    clearable
                    required
                    format="dd/MM/yyyy"
                    slotProps={{
                      input: { endAdornment: <CalendarTodayIcon /> },
                    }}
                    {...field}
                  />
                )}
              />
            </Grid> */}
            <Grid size={{ md: 6, xs: 12 }}></Grid>
            <Grid
              container
              size={{ xs: 12 }}
              spacing={2}
              direction={{ xs: "row-reverse" }}
            >
              <Grid size={{ md: 6, xs: 12 }}>
                <Button type="submit" fullWidth variant="contained">
                  Next
                </Button>
              </Grid>
              <Grid size={{ md: 6, xs: 12 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ backgroundColor: "white" }}
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Previous
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Fade>
    </LocalizationProvider>
  );
}
