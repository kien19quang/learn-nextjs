import * as React from 'react';
import { StudentDetail } from '@/component/swr';

export default function SWRPage() {
    return (
        <div>
            <h1>SWR Playground</h1>

            <ul>
                <li>
                    <StudentDetail studentId="sktwi1cgkkuif36f3" />
                </li>
            </ul>
        </div>
    );
}
