import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import { Box, Typography, Icon } from '@mui/material';
import { Stack } from '@mui/system';
import * as React from 'react';

export interface FooterProps {}

export function Footer(props: FooterProps) {
    const socialLinks = [
        { icon: Facebook, url: 'https://www.facebook.com/kien19quang' },
        { icon: Instagram, url: 'https://www.instagram.com/qanz_kine/' },
        { icon: Twitter, url: '' },
        { icon: LinkedIn, url: '' },
    ];

    return (
        <Box component="footer" py={2} textAlign="center">
            <Stack direction="row" justifyContent="center">
                {socialLinks.map((item, idx) => (
                    <Box key={idx} component="a" p={2} href={item.url} target="_blank" rel="noopener noreferrer">
                        <Icon component={item.icon} sx={{ fontSize: 40 }} />
                    </Box>
                ))}
            </Stack>

            <Typography>Copyright ©{new Date().getFullYear()} All rights reserved</Typography>
        </Box>
    );
}
