"use client";

import {
  Button,
  Fade,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { numberPlateFont } from "../theme/font";
import { steps } from "../component/steps";

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

export default function VehicleRegistration() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const formPage = "vehicleRegistration";

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const existingData: FormData = JSON.parse(
      sessionStorage.getItem(formPage) || "{}"
    );

    if (existingData) {
      setValue("licencePlate", existingData.licencePlate);
      setValue("vehicle", existingData.vehicle);
    }
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    // if (data.dateOfBirth) {
    //   data.dateOfBirth = format(new Date(data.dateOfBirth), "dd/MM/yyyy");
    // }
    try {
      setLoading(true);
      const carDetails = await axios.get<Vehicle>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/car-details`,
        {
          params: {
            licencePlate: data.licencePlate.toUpperCase(),
          },
        }
      );
      setLoading(false);

      data.vehicle = carDetails.data;
      data.licencePlate = data.licencePlate.toUpperCase();
      sessionStorage.setItem(formPage, JSON.stringify(data));
      router.push("/vehicle-details");
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("licencePlate", {
        message: "Invalid registration plate. 😔 Please try again.",
      });
    }
  };

  return (
    <Fade in timeout={300}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container marginTop={5} spacing={2} marginBottom={5} padding={2}>
          <Grid size={{ xs: 12 }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid size={{ xs: 12 }} textAlign="center">
            <TextField
              variant="outlined"
              fullWidth
              label="Your vehicle registration"
              {...register("licencePlate", { required: true })}
              slotProps={{
                htmlInput: {
                  style: {
                    textTransform: "uppercase",
                    fontFamily: numberPlateFont.style.fontFamily,
                  },
                },
                inputLabel: {
                  style: {
                    fontFamily: numberPlateFont.style.fontFamily,
                    fontSize: "24px",
                  },
                },
                input: {
                  style: {
                    backgroundColor: "#fed500",
                    fontSize: "24px",
                  },
                },
                formHelperText: {
                  style: {
                    fontSize: "24px",
                  },
                },
              }}
              error={!!errors.licencePlate}
              helperText={
                errors.licencePlate ? errors.licencePlate.message : null
              }
              required
            />
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}></Grid>
          <Grid
            container
            size={{ xs: 12 }}
            spacing={2}
            direction={{ xs: "row-reverse" }}
          >
            <Grid size={{ md: 6, xs: 12 }}>
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                loading={loading}
              >
                Next
              </LoadingButton>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
              <Button
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: "white" }}
                onClick={() => {
                  router.push("/personal-details");
                }}
              >
                Previous
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Fade>
  );
}
