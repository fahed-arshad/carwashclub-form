"use client";
import { Fade, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MembershipCard from "./component/card";
import { useRouter } from "next/navigation";

export type Membership =
  | "unlimited"
  | "unlimitiedAndInterior"
  | "over60s"
  | "over60sAndInterior"
  | "taxiAndUber"
  | "family2Vehicles"
  | "family3Vehicles";

export interface MembershipDetails {
  title: string;
  description?: string;
  price: string;
}

export default function Home() {
  const router = useRouter();
  const memberships: Record<Membership, MembershipDetails> = {
    unlimited: {
      title: "Unlimited Gold Wash",
      description: "Unlimited washes with rinse, snow foam, shampoo, and dry.",
      price: "£35",
    },
    unlimitiedAndInterior: {
      title: "Unlimited Gold Wash & Interior Clean",
      description: "Unlimited exterior wash plus interior cleaning.",
      price: "£45",
    },
    over60s: {
      title: "Over 60s Unlimited Gold Wash",
      description: "Unlimited washes with a discount for over 60s.",
      price: "£30",
    },
    over60sAndInterior: {
      title: "Over 60s Unlimited Gold Wash & Interior Clean",
      description: "Unlimited exterior and interior cleaning for over 60s.",
      price: "£45",
    },
    taxiAndUber: {
      title: "Taxi & Uber Unlimited Gold Wash",
      description:
        "Unlimited Gold washes and Interior Cleans to keep your vehicle spotless for passengers. Just show us some identification and you'll be on your way!",
      price: "£30",
    },
    family2Vehicles: {
      title: "Family Package 1",
      description:
        "Save MORE on our family plan. Unlimited Gold Wash and Interior Clean for 2 vehicles.",
      price: "£80",
    },
    family3Vehicles: {
      title: "Family Package 2",
      description:
        "Our biggest SAVER. Get unlimited Gold Washes and Interior Cleans for 3 vehicles.",
      price: "£120",
    },
  };

  const handleClick = (membershipTitle: string) => {
    console.log("hello");
    sessionStorage.setItem("selectedMembership", membershipTitle);
    router.push("/personal-details");
  };

  return (
    <Fade in timeout={300}>
      <Stack alignItems="center">
        <Typography>Which membership would you like to choose?</Typography>
        <form>
          <Grid container spacing={2} justifyContent="center" padding={2}>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.unlimited}
                onClick={() => handleClick(memberships.unlimited.title)}
              />
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.unlimitiedAndInterior}
                onClick={() =>
                  handleClick(memberships.unlimitiedAndInterior.title)
                }
              />
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.over60s}
                onClick={() => handleClick(memberships.over60s.title)}
              />
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.over60sAndInterior}
                onClick={() =>
                  handleClick(memberships.over60sAndInterior.title)
                }
              />
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.family2Vehicles}
                onClick={() => handleClick(memberships.family2Vehicles.title)}
              />
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.family3Vehicles}
                onClick={() => handleClick(memberships.family3Vehicles.title)}
              />
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.taxiAndUber}
                onClick={() => handleClick(memberships.taxiAndUber.title)}
              />
            </Grid>
          </Grid>
        </form>
      </Stack>
    </Fade>
  );
}
