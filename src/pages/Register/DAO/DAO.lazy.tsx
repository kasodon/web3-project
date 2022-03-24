import React, { lazy, Suspense } from 'react'

const LazyDAO = lazy(() => import('./DAO'))

const DAO = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
    <Suspense fallback={null}>
        <LazyDAO {...props} />
    </Suspense>
)

export default DAO
