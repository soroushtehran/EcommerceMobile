import React, { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

interface LogoProps extends HTMLAttributes<HTMLDivElement> {

}

export default function Logo({ ...otherDivProps }: LogoProps) {
    return (
        <div {...otherDivProps}>
            <Link to="/">
                <img
                    className="w-full h-full"
                    src="/images/Logo.png"
                    alt="logo"
                />
            </Link>
        </div>
    )
}
