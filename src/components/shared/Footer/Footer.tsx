import facebookIcon from "@/assets/landing_page/facebook.png";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <Box bgcolor={"rgb(17, 26, 34)"} py={5}>
      <Container>
        <Stack direction={"row"} gap={4} justifyContent={"center"}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={2} justifyContent={"center"} py={3}>
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
        </Stack>
        <Box sx={{ border: "1px dashed lightGray" }}></Box>
        <Stack
          direction={"row"}
          gap={2}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={3}
        >
          <Typography component="p" color={"#fff"}>
            &copy; 2024 Health Care. All rights reserved
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            fontWeight={600}
            color={"#fff"}
          >
            <Box component={"span"} color={"primary.main"}>
              Health
            </Box>{" "}
            Care
          </Typography>

          <Typography component="p" color={"#fff"}>
            Privacy Policy | Tames and conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
