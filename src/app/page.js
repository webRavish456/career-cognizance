"use client"

import { Button, Card, CardContent, Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const features = [
  {
    icon: "🏠",
    title: "Personalized Approach",
    description:
      "We understand that every individual is unique, which is why we tailor our coaching services to meet the specific needs and goals of each client.",
  },
  {
    icon: "🔑",
    title: "Expert Guidance",
    description:
      "Our team of experienced coaches brings a wealth of knowledge and expertise in career development, work-life balance, and personal growth to help clients overcome challenges and achieve success.",
  },
  {
    icon: "🎧",
    title: "Holistic Support",
    description:
      "We believe in taking a holistic approach to coaching, addressing not only career-related goals but also supporting clients in cultivating a healthy mindset, resilience, and overall well-being.",
  },
  {
    icon: "📍",
    title: "Results-Oriented",
    description:
      "Our coaching programs are designed to deliver tangible results, empowering clients to take action, overcome obstacles, and reach their full potential.",
  },
];


  // Example company logos (Replace with actual image paths)
  const companies = [
    { name: "Pelatro", logo: "/home/company-a.png" },
    { name: "Enlighten", logo: "/home/company-b.png" },
    { name: "Fave", logo: "/home/company-c.png" },
    { name: "SVKM's", logo: "/home/company-d.png" },
    { name: "Saga Enterprise", logo: "/home/company-e.png" },
    { name: "Ojasampurna", logo: "/home/company-f.png" },
  ];



  return (
    <>
      <div className="section home-section container-section">

        <div className="home">

          <div>
            <h3 className="pivot">Pivot your Purpose!</h3>
            <h1
              className="hero_title"
              style={{
                fontSize: "3rem",
                textAlign: "left",
                fontWeight: 800,
                marginBottom: "1rem"
              }}
            >
              Experts in Comprehensive & Personalised Consultation
            </h1>
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
        <h2 className="hero_title" style={{ marginBottom: 50, color: 'var(--secondary_color)', fontWeight: 700 }}>We are experts in</h2>
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
        <h6 className="hero_title" style={{ marginBottom: 50, color: 'var(--secondary_color)', fontWeight: 700 }}>
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
                  fontWeight: 700,
                  padding: "6px 14px",
                  borderRadius: "12px",
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "0.9rem",
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src="/home/camera.png"
                  alt="Live sessions "
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
               Live Sessions & Recordings
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

              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--secondary_color)', fontSize: "2.5rem", textAlign: "left" }} gutterBottom>
                Mermaid Mentoring
              </Typography>

              <Typography variant="h5" sx={{ marginBottom: "1.5rem", color: "#333", textAlign: "left" }}>
                Dear Women, we're here to help you to Swim Strong
                <br />like a Mermaid in the Ocean of Emotions!
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "1rem", textAlign: "left" }}>
                Key Benefits:
              </Typography>

              <ul style={{ paddingLeft: "1.2rem", marginBottom: "2rem" }}>
                <li>✅2 Yoga Sessions</li>
                <li>✅4 Coaching Sessions</li>
                <li>✅AI-based Assessments</li>
                <li>✅Individualized Approach</li>
                <li>✅Tools for Personal Growth</li>
              </ul>

              <Button className="secondary_button">Enroll Now</Button>
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

              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--secondary_color)', fontSize: "2.5rem", textAlign: "left" }} gutterBottom>
                Phoenix Program
              </Typography>

              <Typography variant="h5" sx={{ marginBottom: "1.5rem", color: "#333", textAlign: "left" }}>
                Frame the Fire of your Life & Career, Transform &
                <br />Unleash your Potential.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "1rem", textAlign: "left" }}>
                Key Benefits:
              </Typography>
              <ul style={{ paddingLeft: "1.2rem", marginBottom: "2rem" }}>
                <li>✅ Professional Profile Building</li>
                <li>✅ Personal Sessions included</li>
                <li>✅ Brand Development Guidance</li>
                <li>✅ Executive Leadership Guidance</li>
                <li>✅ AI based SWOT & Skill Assessments</li>
              </ul>

              <Button className="secondary_button">Enroll Now</Button>
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
                  fontWeight: 700,
                  padding: "6px 14px",
                  borderRadius: "12px",
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "0.9rem",
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src="/home/camera.png"
                  alt="Live sessions "
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
               Live Sessions & Recordings
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
                  fontWeight: 700,
                  padding: "6px 14px",
                  borderRadius: "12px",
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "0.9rem",
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src="/home/camera.png"
                  alt="Live sessions "
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
                Live Sessions & Recordings
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

              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--secondary_color)', fontSize: "2.5rem", textAlign: "left" }} gutterBottom>
                Career Coaching
              </Typography>

              <Typography variant="h5" sx={{ marginBottom: "1.5rem", color: "#333", textAlign: "left" }}>
                Career coaching offers personalized
                <br />guidance and strategies to navigate
                <br />career paths effectively.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "1rem", textAlign: "left" }}>
                Key Benefits:
              </Typography>

              <ul style={{ paddingLeft: "1.2rem", marginBottom: "2rem" }}>
                <li>✅Take Career Test</li>
                <li>✅Career and Personal Counselling</li>
                <li>✅Career Reports for Right Careers</li>
                <li>✅Brain Score</li>✅
                <li>✅AI based career assessment</li>
              </ul>

              <div style={{ display: "flex", gap: "1rem" }}>
                <Button className="secondary_button">Enroll Now</Button>

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

<div style={{ textAlign: "center", padding: "4rem 1rem", backgroundColor: "#f2f1fe" }}>
  <h6 className="hero_title" style={{ marginBottom: 50, color: "var(--secondary_color)", fontWeight: 500 }}>
    Why Choose our Professional Coaching Services?
  </h6>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
    {features.map((feature, index) => (
      <div
        key={index}
        className="flex flex-col gap-2 p-10 bg-white rounded-lg shadow-sm border border-gray-300 items-start"
        style={{ maxWidth: "1000px", // Adjust this value to expand the width
      width: "100%"}} 
      >
        {/* Feature Icon (Smaller & Left-Aligned) */}
        <div
          className="flex items-center justify-center w-16 h-16 text-xl rounded-md"
          style={{ backgroundColor: "var(--primary_color)", marginLeft: "0" }}
        >
          {feature.icon}
        </div>

        {/* Title (Next Line, Left-Aligned) */}
        <h3
          className="text-md font-bold mb-1"
          style={{ color: "var(--secondary_color)", fontSize: "1.8rem", textAlign: "left", marginLeft: "0" }}
        >
          {feature.title}
        </h3>

        {/* Description (Next Line, Left-Aligned) */}
        <p
          className="text-gray-600"
          style={{ fontSize: "1.4rem", textAlign: "left", marginLeft: "0" }}
        >
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</div>
<div style={{ textAlign: "center", padding: "4rem 1rem" }}>
  <h6
    className="hero_title"
    style={{ marginBottom: 50, color: 'var(--secondary_color)', fontWeight: 700 }}
  >
    Social Proof
  </h6>
  <h6
    className="heading_title"
    style={{ marginBottom: 50, color: 'var(--secondary_color)', fontWeight: 500 }}
  >
    Check out few of the success stories and feedback from people we have worked with
  </h6>

  {/* Social Proof Cards */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    {/* Image Card 1 */}
    <div style={{ background: "#e0f2ff", padding: "1rem", borderRadius: "12px" }}>
  <iframe
    src="https://www.instagram.com/p/careercognizance/embed"
    width="100%"
    height="400"
    style={{  width:"100%", height:"550px", border: 0, borderRadius: "8px", marginBottom: "0.75rem" }}
    allow="encrypted-media"
    title="Instagram post"
  ></iframe>
  <p style={{ fontSize: "0.9rem", color: "#333" }}>Individuals from people's program</p>
</div>

    {/* Video Card */}
    <div style={{ background: "#e0f2ff", padding: "1rem", borderRadius: "12px" }}>
      <video controls style={{ width: "100%", borderRadius: "8px", marginBottom: "0.75rem" }}>
        <source src="/videos/chats.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p style={{ fontSize: "0.9rem", color: "#333" }}>Insights gained by individuals from our course</p>
    </div>

    {/* Image Card 2 */}
    <div style={{ background: "#e0f2ff", padding: "1rem", borderRadius: "12px" }}>
  <iframe
    src="https://www.instagram.com/p/POST_ID/embed"
    width="100%"
    height="400"
    style={{ width:"100%", height:"550px", border: 0, borderRadius: "8px", marginBottom: "0.75rem" }}
    allow="encrypted-media"
    title="Instagram post"
  ></iframe>
  <p style={{ fontSize: "0.9rem", color: "#333" }}>Wonder women community's first meet-up</p>
</div>

    {/* Handwritten Feedback */}
    <div style={{ background: "#e0f2ff", padding: "1rem", borderRadius: "12px" }}>
      <img
        src="/home/handwritten.png"
        alt="Handwritten Feedback"
        style={{ width:"100%", height:"550px", borderRadius: "8px", marginBottom: "0.75rem" }}
      />
      <p style={{ fontSize: "0.9rem", color: "#333" }}>Advanced abilities acquired and applied</p>
    </div>
  </div>
</div>


     <div style={{ textAlign: "center", padding: "4rem 1rem"}}>
      <h6 className="hero_title" style={{ marginBottom: 50, color: 'var(--secondary_color)', fontWeight: 700 }}>
          Companies Anitha has worked with
        </h6>

      <Grid container spacing={4} justifyContent="center" style={{ maxWidth: "1000px", margin: "auto" }}>
        {companies.map((company, index) => (
          <Grid item xs={6} md={4} lg={3} key={index}>
            <Card style={{ padding: "4px", textAlign: "center" }}>
              <CardContent>
                <Image src={company.logo} alt={company.name} width={100} height={100} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>

    </>
  );
}
