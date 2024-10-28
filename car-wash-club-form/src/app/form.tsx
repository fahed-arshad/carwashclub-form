"use client";
import { Fade, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MembershipCard from "./component/card";
import { useRouter } from "next/navigation";
import { Membership } from "./page";

export default function Home({ memberships }: { memberships: Membership[] }) {
  const router = useRouter();

  const handleClick = (membership: Membership) => {
    sessionStorage.removeItem("vehicleRegistration");
    sessionStorage.setItem("selectedMembership", JSON.stringify(membership));
    router.push("/personal-details");
  };

  return (
    <Fade in timeout={300}>
      <Stack alignItems="center">
        <form>
          <Grid container spacing={2} justifyContent="center" padding={2}>
            {memberships.map((membership) => (
              <Grid size={{ md: 4, sm: 6, xs: 12 }} key={membership.id}>
                <MembershipCard
                  content={membership}
                  onClick={() => handleClick(membership)}
                  key={membership.id}
                />
              </Grid>
            ))}
          </Grid>
        </form>
      </Stack>
    </Fade>
  );
}
