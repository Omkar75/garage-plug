import React from "react";
import PageWallpaper from "../components/PageWallpaper/PageWallpaper";
import FromCompnent from "../components/FromComponent/FromCompnent";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <PageWallpaper />
      <FromCompnent />
      <PageWallpaper />
      <Footer />
    </React.Fragment>
  )
}