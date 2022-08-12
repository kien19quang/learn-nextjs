import { Work } from '@/models';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import WorkCard from './workCard';

export interface WorkListProps {
    workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
    if (workList.length === 0) return null;
    return (
        <Box>
            {workList.map((work) => {
                return (
                    <React.Fragment key={work.id}>
                        <WorkCard work={work} />
                        <Divider sx={{ my: 3 }} />
                    </React.Fragment>
                );
            })}
        </Box>
    );
}
