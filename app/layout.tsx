"use client";

import "./styles/globals.css";
import Providers from "./providers";
import { env } from "./util/env.mjs";
import { Inter } from "next/font/google";
import { Container, Stack } from "@mui/material";
import Header from "./components/header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const interFont = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={interFont.className}
        style={{
          height: "100vh",
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BetaBanner />
        <Providers>
          <Header />
          <Container
            sx={{
              height: "100%",
            }}
          >
            <Stack
              direction={"column"}
              gap={"1rem"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
            >
              {children}
            </Stack>
          </Container>
        </Providers>
      </body>
    </html>
  );
}

function BetaBanner() {
  return env.NEXT_PUBLIC_NODE_ENV === "production" ? (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#FF0000AA",
        color: "white",
        textAlign: "center",
        zIndex: 9999,
      }}
    >
      <h3>THIS APP IS IN AN UNFINISHED STATE. USE WITH CAUTION.</h3>
    </div>
  ) : null;
}
