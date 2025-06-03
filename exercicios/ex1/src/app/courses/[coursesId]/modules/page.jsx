'use client';

import { useParams } from "next/navigation";

export default function ModulesPage() {
    const {courseId} = useParams();

    return (
        <div>
            <h1> Módulos do curso </h1>
            <ul>
                <li> Módulo 01 </li>
                <li> Módulo 02 </li>
                <li> Módulo 03 </li>
            </ul>
        </div>
    )
}
