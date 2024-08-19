"use client";

import React from "react";
import headerLogo from "@/assets/header-logo.png";
import Image from "next/image";
import { Button } from "@mui/material";
import { toggleLogin } from "@/redux/auth-slice/authSlice";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    return (
        <header>
            <div
                className={`container d-flex align-items-center justify-between`}
            >
                <div className={``}>
                    <Image src={headerLogo} alt="" />
                </div>
                <Button
                    variant="outlined"
                    onClick={() => {
                        dispatch(toggleLogin(false));
                    }}
                >
                    Login
                </Button>
            </div>
        </header>
    );
};

export default Header;
