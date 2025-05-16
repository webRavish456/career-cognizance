"use client"

import { Button, Card, CardContent, Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function Home() {


  return (
    <>
      <div className="section home-section container-section">

        <div className="home">

          <div>
            <h3 className="pivot">Pivot your Purpose!</h3>
            <h1 className="hero_title">Experts in Comprehensive & Personalised Consultation</h1>
            <h2 className="heading_title"> Our offerings stimulate expansion, cultivate essential abilities, & in still assurance in traversing the perpetually changing landscape of Career and Life.</h2>
            <div>
              <Button className="secondary_button">Request Callback</Button>
              <Button className="primary_button">Our programs</Button>
            </div>

          </div>

          <div>
            <Image src="/home/JFMWSMkbj74Fp6b97pFc3B6zQ.avif" alt="career-cognizance"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", position: "relative" }}
            />
          </div>

        </div>

      </div>

      {/* We are expert in Section */}
      <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <h2 className="hero_title" style={{ marginBottom: 50 }}>We are experts in</h2>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} >
            <Card
              sx={{
                maxWidth: 345,
                height: 600,
                margin: "0 auto",
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Image
                src="/home/consultation.png"
                alt="Consultation"
                width={345}
                height={200}
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="h5" gutterBottom className="heading_title" fontWeight={600} textAlign={"left"}>Consultation</Typography>
                <Typography className="heading_title" textAlign={"left"} marginTop={2}>
                  We provide expert advice & guidance to improve performance, solve specific problems & achieve goals.
                </Typography>
                <Button className="primary_button" sx={{ marginTop: "auto" }}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card

              sx={{
                maxWidth: 345,
                height: 600,
                margin: "0 auto",
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Image
                src="/home/training.png"
                alt="Training Modules"
                width={345}
                height={200}
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="h5" gutterBottom className="heading_title" fontWeight={600} textAlign={"left"}>
                  Training Modules
                </Typography>
                <Typography className="heading_title" textAlign={"left"} marginTop={2}>
                  We cater our services to B2B - IT software, Education institutions, Hospital industry and all corporates.  We also  provide customised programs for B2C segment in terms of the-   Phenix program mermaid program and womens community.
                </Typography>
                <Button className="primary_button" sx={{ marginTop: "auto" }}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                height: 600,
                margin: "0 auto",
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Image
                src="/home/coaching.png"
                alt="Coaching"
                width={345}
                height={200}
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="h5" gutterBottom className="heading_title" fontWeight={600} textAlign={"left"}>
                  Coaching
                </Typography>
                <Typography className="heading_title" textAlign={"left"} marginTop={2}>
                 At Career cognizance , we specialize in empowering individuals to unlock their full potential and achieve their career...
                </Typography>
                <Button className="primary_button" sx={{ marginTop: "auto" }}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </div>

      {/* Mermaid Mentoring Section */}
<div style={{ textAlign: "center", padding: "4rem 1rem" }}>
  <h6 className="hero_title" style={{ marginBottom: 50 }}>
    Coaching Programs
  </h6>

  <Grid container spacing={4} alignItems="center" justifyContent="center">
    <Grid item xs={12} md={5}>
      <Card sx={{ boxShadow: 3, borderRadius: 4, position: "relative" }}>
        <Image
          src="/home/mermaid.png"
          alt="Mermaid Mentoring"
          width={600}
          height={400}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "16px"
          }}
        />

        {/* Live Sessions & Recordings Badge */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            backgroundColor: "#D1FFB0",
            color: "#0C3A3E",
            fontWeight: 600,
            padding: "6px 14px",
            borderRadius: "12px",
            display: "inline-flex",
            alignItems: "center",
            fontSize: "0.9rem",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
          }}
        >
          📺 Live Sessions & Recordings
        </div>
      </Card>
    </Grid>

    <Grid item xs={12} md={6}>
      <div style={{ textAlign: "left" }}>
        <Typography
          variant="subtitle2"
          sx={{
            backgroundColor: "#B2F5EA",
            color: "#0C3A3E",
            fontWeight: 600,
            display: "inline-block",
            padding: "0.25rem 0.75rem",
            borderRadius: "6px",
            marginBottom: "1rem",
          }}
        >
          DESIGN FOR INDIVIDUAL
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 700, color: "#0C3A3E" }} gutterBottom>
          Mermaid Mentoring
        </Typography>

        <Typography variant="h5" sx={{ marginBottom: "1.5rem", color: "#333" }}>
          Dear Women, we're here to help you to Swim Strong 
          <br/>like a Mermaid in the Ocean of Emotions!
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "1rem" }}>
          Key Benefits:
        </Typography>

        <ul style={{ paddingLeft: "1.2rem", marginBottom: "2rem" }}>
          <li>2 Yoga Sessions</li>
          <li>4 Coaching Sessions</li>
          <li>AI-based Assessments</li>
          <li>Individualized Approach</li>
          <li>Tools for Personal Growth</li>
        </ul>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#B2F500",
            color: "#000",
            fontWeight: 600,
            padding: "0.75rem 2rem",
            borderRadius: "8px",
            '&:hover': { backgroundColor: "#A5E400" }
          }}
        >
          Enroll Now
        </Button>
      </div>
    </Grid>
  </Grid>
</div>

{/* Phoenix Program */}
<div style={{ padding: "4rem 1rem" }}>
<Grid container spacing={4} alignItems="center" justifyContent="center">
  

<Grid item xs={12} md={6}>
      <div style={{ textAlign: "left" }}>
        <Typography
          variant="subtitle2"
          sx={{
            backgroundColor: "#B2F5EA",
            color: "#0C3A3E",
            fontWeight: 600,
            display: "inline-block",
            padding: "0.25rem 0.75rem",
            borderRadius: "6px",
            marginBottom: "1rem",
          }}
        >
          DESIGN FOR ENTREPRENEURS
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 700, color: "#0C3A3E" }} gutterBottom>
          Phoenix Program
        </Typography>

        <Typography variant="h5" sx={{ marginBottom: "1.5rem", color: "#333" }}>
          Frame the Fire of your Life & Career, Transform & 
          <br/>Unleash your Potential.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "1rem" }}>
          Key Benefits:
        </Typography>
      <ul style={{ paddingLeft: "1.2rem", marginBottom: "2rem" }}>
        <li>✅ Professional Profile Building</li>
        <li>✅ Personal Sessions included</li>
        <li>✅ Brand Development Guidance</li>
        <li>✅ Executive Leadership Guidance</li>
        <li>✅ AI based SWOT & Skill Assessments</li>
      </ul>

      <Button
          variant="contained"
          sx={{
            backgroundColor: "#B2F500",
            color: "#000",
            fontWeight: 600,
            padding: "0.75rem 2rem",
            borderRadius: "8px",
            marginTop: "1rem",  
            '&:hover': { backgroundColor: "#A5E400" }
          }}
        >
          Enroll Now
        </Button>
        </div>
    </Grid>

  <Grid item xs={12} md={5}>
      <Card sx={{ boxShadow: 3, borderRadius: 4, position: "relative" }}>
        <Image
          src="/home/phoenix.png"
          alt="Phoenix Program"
          width={400}
          height={600}
          style={{
            width: "500px",
            height: "600px",
            objectFit: "cover",
            borderRadius: "16px"
          }}
        />
        {/* Live Sessions & Recordings Badge */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            backgroundColor: "#D1FFB0",
            color: "#0C3A3E",
            fontWeight: 600,
            padding: "6px 14px",
            borderRadius: "12px",
            display: "inline-flex",
            alignItems: "center",
            fontSize: "0.9rem",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
          }}
        >
          📺 Live Sessions & Recordings
        </div>
      </Card>
    </Grid>

</Grid>
</div>

{/* career */}
<div style={{ padding: "4rem 1rem" }}>
  <Grid container spacing={4} alignItems="center" justifyContent="center">
    <Grid item xs={12} md={5}>
      <Card sx={{ boxShadow: 3, borderRadius: 4, position: "relative" }}>
        <Image
          src="/home/career-coaching.png"
          alt="Career Coaching"
          width={600}
          height={400}
          style={{ width: "650px", height: "500px", objectFit: "cover", borderRadius: "16px" }}
        />
      {/* Live Sessions & Recordings Badge */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            backgroundColor: "#D1FFB0",
            color: "#0C3A3E",
            fontWeight: 600,
            padding: "6px 14px",
            borderRadius: "12px",
            display: "inline-flex",
            alignItems: "center",
            fontSize: "0.9rem",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
          }}
        >
          📺 Live Sessions & Recordings
        </div>
      </Card>
    </Grid>

    <Grid item xs={12} md={6}>
      <div style={{ textAlign: "left" }}>
        <Typography
          variant="subtitle2"
          sx={{
            backgroundColor: "#B2F5EA",
            color: "#0C3A3E",
            fontWeight: 600,
            display: "inline-block",
            padding: "0.25rem 0.75rem",
            borderRadius: "6px",
            marginBottom: "1rem",
          }}
        >
          DESIGN FOR STUDENTS
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 700, color: "#0C3A3E" }} gutterBottom>
          Career Coaching
        </Typography>

        <Typography variant="h5" sx={{ marginBottom: "1.5rem", color: "#333" }}>
          Career coaching offers personalized 
          <br/>guidance and strategies to navigate 
          <br/>career paths effectively.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "1rem" }}>
          Key Benefits:
        </Typography>

        <ul style={{ paddingLeft: "1.2rem", marginBottom: "2rem" }}>
          <li>Take Career Test</li>
          <li>Career and Personal Counselling</li>
          <li>Career Reports for Right Careers</li>
          <li>Brain Score</li>
          <li>AI based career assessment</li>
        </ul>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#B2F500",
              color: "#000",
              fontWeight: 600,
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              '&:hover': { backgroundColor: "#A5E400" }
            }}
          >
            Enroll Now
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#B2F5EA",
              color: "#0C3A3E",
              fontWeight: 600,
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              '&:hover': { backgroundColor: "#E6FFFA" }
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </Grid>
  </Grid>
</div>



    </>
  );
}
