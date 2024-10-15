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
  id: number;
  title: string;
  description?: string;
  price: string;
}

export default function Home() {
  const router = useRouter();
  const memberships: Record<Membership, MembershipDetails> = {
    unlimited: {
      id: 1,
      title: "Unlimited Gold Wash",
      description: "Unlimited washes with rinse, snow foam, shampoo, and dry.",
      price: "£35",
    },
    unlimitiedAndInterior: {
      id: 2,
      title: "Unlimited Gold Wash & Interior Clean",
      description: "Unlimited exterior wash plus interior cleaning.",
      price: "£45",
    },
    over60s: {
      id: 3,
      title: "Over 60s Unlimited Gold Wash",
      description: "Unlimited washes with a discount for over 60s.",
      price: "£30",
    },
    over60sAndInterior: {
      id: 4,
      title: "Over 60s Unlimited Gold Wash & Interior Clean",
      description: "Unlimited exterior and interior cleaning for over 60s.",
      price: "£45",
    },
    taxiAndUber: {
      id: 5,
      title: "Taxi & Uber Unlimited Gold Wash",
      description:
        "Unlimited Gold washes and Interior Cleans to keep your vehicle spotless for passengers. Just show us some identification and you'll be on your way!",
      price: "£30",
    },
    family2Vehicles: {
      id: 6,
      title: "Family Package 1",
      description:
        "Save MORE on our family plan. Unlimited Gold Wash and Interior Clean for 2 vehicles.",
      price: "£80",
    },
    family3Vehicles: {
      id: 7,
      title: "Family Package 2",
      description:
        "Our biggest SAVER. Get unlimited Gold Washes and Interior Cleans for 3 vehicles.",
      price: "£120",
    },
  };

  const handleClick = (membership: MembershipDetails) => {
    console.log("hello");
    sessionStorage.setItem("selectedMembership", JSON.stringify(membership));
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
                onClick={() => handleClick(memberships.unlimited)}
              />
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.unlimitiedAndInterior}
                onClick={() => handleClick(memberships.unlimitiedAndInterior)}
              />
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.over60s}
                onClick={() => handleClick(memberships.over60s)}
              />
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.over60sAndInterior}
                onClick={() => handleClick(memberships.over60sAndInterior)}
              />
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.family2Vehicles}
                onClick={() => handleClick(memberships.family2Vehicles)}
              />
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.family3Vehicles}
                onClick={() => handleClick(memberships.family3Vehicles)}
              />
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <MembershipCard
                content={memberships.taxiAndUber}
                onClick={() => handleClick(memberships.taxiAndUber)}
              />
            </Grid>
          </Grid>
        </form>
      </Stack>
    </Fade>
  );
}
