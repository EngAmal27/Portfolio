
import { AppBar, Toolbar, Button, Typography, Container, Box, Grid, Avatar,Link } from '@mui/material';
import profileImage from './assets/moka.png'; 

function PortfolioHeader() {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#1B1B1B', 
        boxShadow: 'none', 
        width: { xs: '100%', md: '66.719vw' }, // Responsive width
        height: '70px', 
        m: 'auto' 
      }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}>
          {['Home', 'Case Studies', 'Testimonials', 'Recent Work', 'Get In Touch'].map((label, index) => (
            <Button
              key={index}
              color="inherit"
              sx={{
                '&:hover': {
                  color: '#ff8769', // Change to your desired hover color
                },
                fontSize: { xs: '0.8rem', md: '1rem' }, // Responsive font size
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function PortfolioMain() {
  return (
    <Container 
      sx={{ 
        py: 10, 
        color: '#fff', 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, // Stack column on small screens
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 4 
      }}
    >
      <Box 
        sx={{ 
          width: { xs: '100%', md: '538px' }, 
          height: 'auto', 
          textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
          display: 'flex', 
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' } 
        }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ 
            color: '#ff8769', 
            fontSize: { xs: '2rem', md: '3rem' }  // Responsive font size
          }}
        > 
          Dev MOka
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ 
            fontSize: { xs: '1rem', md: '1.25rem' }  // Responsive font size
          }}
        >
          Fullstack web developer
        </Typography>
        <Button 
          sx={{ 
            mt: 2, 
            color: '#ff8769', 
            fontSize: { xs: '0.8rem', md: '1rem' }  // Responsive font size
          }}
        >
          <Link sx={{ 
            textDecoration:'none',
            mt: 2, 
            color: '#ff8769', 
            fontSize: { xs: '0.8rem', md: '1rem' }  // Responsive font size
          }}>
          Let`s get started &gt;
          </Link>
         
        </Button>
      </Box>
      <Avatar
        alt="Profile Picture"
        src={profileImage}
        sx={{ 
          width: { xs: 150, md: 300 },  // Responsive avatar size
          height: { xs: 150, md: 300 }  // Responsive avatar size
        }}
      />
    </Container>
  );
}

function PortfolioFooter() {
  return (
    <Box sx={{ m: 'auto', textAlign: 'center', color: '#aaa', py: 4  ,width: { xs: '100%', md: '66.719vw' }}}>
      <Typography variant="h6" gutterBottom sx={{color:"#ff8769"}}>
        Worked with
      </Typography>
      <Grid 
        container 
        spacing={2} 
        justifyContent="center"
        sx={{ width: '100%', maxWidth: '100vw', mx: 'auto' }}
      >
        {['Html', 'Css', 'Javascript', 'React', 'Node', 'Express', 'MongoDB'].map((company, index) => (
          <Grid item xs={4} sm={3} md={2} key={index}>
            <Box 
              sx={{ 
                p: 2, 
                backgroundColor: '#222', 
                borderRadius: 2, 
                display: 'flex', 
                justifyContent: 'center'
              }}
            >
              <Typography variant="body2" sx={{ color: '#fff' }}>
                {company}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function PortfolioPage() {
  return (
    <Box sx={{ backgroundColor: '#080808' }}>
      <PortfolioHeader />
      <PortfolioMain />
      <PortfolioFooter />
    </Box>
  );
}

export default PortfolioPage;
