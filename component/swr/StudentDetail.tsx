import * as React from 'react';
import useSWR from 'swr';

export interface StudentDetailProps {
    studentId: string;
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export function StudentDetail({ studentId }: StudentDetailProps) {
    const { data, error, isValidating, mutate } = useSWR(`/students/${studentId}`, {
        revalidateOnFocus: false,
        dedupingInterval: MILLISECOND_PER_HOUR,
    });

    console.log(data);

    return <div>{data?.name || '--'}</div>;
}
