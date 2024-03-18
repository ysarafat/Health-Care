import assets from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
const HeroSection = () => {
  return (
    <Container sx={{ display: "flex", direction: "row", my: 16 }}>
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component={"h1"} fontWeight={600}>
          Healthier Hearts{" "}
        </Typography>
        <Typography variant="h3" component={"h1"} fontWeight={600}>
          Come From{" "}
        </Typography>
        <Typography
          variant="h3"
          component={"h1"}
          color={"primary.main"}
          fontWeight={600}
        >
          Preventive Care{" "}
        </Typography>
        <Typography
          variant="h6"
          component={"p"}
          fontWeight={400}
          sx={{ marginTop: "18px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum
          voluptate consectetur mollitia consequuntur nostrum earum. Ad tenetur
          natus aperiam at eos?
        </Typography>
        <Box sx={{ marginTop: "25px" }}>
          <Button>Make Appointment</Button>
          <Button variant="outlined" sx={{ marginLeft: "12px" }}>
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            p: 1,
            flex: 1,
            display: "flex",
            justifyContent: "center",
            position: "relative",
            mt: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "200px",
              top: "-30px",
            }}
          >
            <Image src={assets.svgs.arrow} alt="arrow" />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box mt={4}>
              <Image
                src={assets.images.doctor1}
                alt="doctor1"
                width={240}
                height={380}
              />
            </Box>
            <Box>
              <Image
                src={assets.images.doctor2}
                alt="doctor2"
                width={240}
                height={350}
              />
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "220px",
              left: "100px",
            }}
          >
            <Image
              src={assets.images.doctor3}
              alt="doctor3"
              width={240}
              height={240}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-50px",
              right: 0,
              zIndex: "-1",
            }}
          >
            <Image
              src={assets.images.stethoscope}
              alt="doctor3"
              width={180}
              height={180}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
