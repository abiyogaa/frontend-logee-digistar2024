import React from 'react';
import { Box, Typography, Container, Paper, Avatar } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useTheme } from '@mui/material/styles';

const testimonials = [
    {
        name: 'John Doe',
        company: 'ABC Logistics',
        text: 'LOGEE has revolutionized our shipping process. It\'s efficient and user-friendly!',
        avatar: '/avatars/john.jpg',
    },
    {
        name: 'Jane Smith',
        company: 'XYZ Distributors',
        text: 'The variety of vehicles available on LOGEE is impressive. We always find what we need.',
        avatar: '/avatars/jane.jpg',
    },
    {
        name: 'Mike Johnson',
        company: 'Quick Deliveries',
        text: 'LOGEE\'s platform has helped us reduce costs and improve our delivery times significantly.',
        avatar: '/avatars/mike.jpg',
    },
];

function TestimonialSection() {
    const theme = useTheme();
    return (
        <Box sx={{ py: 8, bgcolor: '#f5f5f5', backgroundImage: 'url("/IMG_1222 1.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Container maxWidth="md">
                <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                    What Our Customers Say
                </Typography>
                <Carousel>
                    {testimonials.map((testimonial, index) => (
                        <Paper
                            key={index}
                            elevation={3}
                            sx={{
                                p: 4,
                                textAlign: 'center',
                                borderRadius: 4,
                                bgcolor: 'rgba(255, 255, 255, 0.6)',
                            }}
                        >
                            <Avatar
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                            />
                            <Typography variant="body1" paragraph>
                                "{testimonial.text}"
                            </Typography>
                            <Typography variant="h6" component="p">
                                {testimonial.name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {testimonial.company}
                            </Typography>
                        </Paper>
                    ))}
                </Carousel>
            </Container>
        </Box>
    );
}

export default TestimonialSection;