'use client'

import './globals.css'
import { Web3ModalProvider } from "../components/Web3modal-provider"
import { ThemeProvider } from "../components/Theme-provider"
import { LensProvider } from "../components/Lens-provider"
import { Nav } from "../components/Nav"
import React from 'react'
import Footer from '../components/Footer'
import { ThirdwebProvider, useSigner, useWallet } from "@thirdweb-dev/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* PWA config */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Lens PWA" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icons/iconmain-512x512.png" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <body className='landing'>
        <Web3ModalProvider>
          <ThirdwebProvider>
            <LensProvider>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <Nav />
                {children}
                <Footer />
              </ThemeProvider>
            </LensProvider>
          </ThirdwebProvider>
        </Web3ModalProvider>
      </body>
    </html>
  )
}