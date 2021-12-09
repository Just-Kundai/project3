import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#242124"
        color="white"
        position="absolute"
        left="0"
        bottom="0"
        right="0"
      >
        <Container
        maxWidth="lg"
        padding-bottom="60px"
        >



          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          <p>The Art of Thriving</p>
          © Bootcamp Final Project Created {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
