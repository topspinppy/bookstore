import React from 'react'

interface IPageLayoutProps {
    children: React.ReactNode
}
const PageLayout: React.FC<IPageLayoutProps> = (props): React.ReactElement => {
    const { children } = props
    return (
        <div className='text-3xl'>
            <div>Header</div>
            <div>Slide</div>
            <div>{children}</div>
        </div>
    );
}

export default PageLayout;
