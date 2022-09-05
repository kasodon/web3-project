import React, { lazy, Suspense } from 'react'

const LazyTalent = lazy(() => import('./Talent'))

const Talent = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
    <Suspense fallback={null}>
        <LazyTalent {...props} />
    </Suspense>
)

export default Talent
