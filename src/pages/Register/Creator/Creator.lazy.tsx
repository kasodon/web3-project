import React, { lazy, Suspense } from 'react'

const LazyCreator = lazy(() => import('./Creator'))

const Creator = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
    <Suspense fallback={null}>
        <LazyCreator {...props} />
    </Suspense>
)

export default Creator
