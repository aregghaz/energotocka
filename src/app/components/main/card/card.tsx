import React from "react";

interface Iprops {
    title: string;
    htmlContent?: boolean;
    children?: React.ReactNode;
    component?: React.ReactNode;
}

const Card: React.FC<Iprops> = ({
                                    title,
                                    htmlContent,
                                    component,
                                    children,
                                }) => {
    return (
        <div className="full-card max-w-sm rounded overflow-hidden shadow-lg">
            <div className="">
                <h3 className="full-card-title font-bold text-xl  text-3xl font-bold">
                    {title}
                </h3>
                <hr/>
                <div>{htmlContent ? <>{component}</> : null}</div>
                {children}
            </div>
        </div>
    );
};

export default Card;
