import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const TopRatedDoctor = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/doctor?page=1&limit=3",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: topRatedDoctor } = await res.json();

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20,20,20,0.1)",
        clipPath: "polygon(0 0,100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontWeight={300} fontSize={18}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi suscipit
          maxime magnam voluptate quo totam.
        </Typography>
      </Box>
      <Container sx={{ margin: "30px auto" }}>
        <Grid container spacing={2}>
          {topRatedDoctor?.map((doctor: any) => (
            <Grid item key={doctor.id} md={4}>
              <Card sx={{}}>
                <Box>
                  <Image
                    src={doctor.profilePhoto}
                    alt="Doctor"
                    width={500}
                    height={100}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.qualification + ", " + doctor.designation}
                  </Typography>
                  <Box mt={2}>
                    <Typography variant="body2" color="text.secondary">
                      <LocationOnIcon /> {doctor.address}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      <LocationOnIcon /> {doctor.address}
                    </Typography> */}
                  </Box>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  <Button
                    sx={{
                      width: "100%",
                    }}
                    variant="outlined"
                  >
                    View Profile
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="outlined" sx={{ marginTop: "20px" }}>
            View All
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctor;
