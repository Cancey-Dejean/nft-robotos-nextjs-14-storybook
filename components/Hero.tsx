"use client"
import { motion } from "framer-motion"
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
} from "./microComponents/images"
import Button from "./microComponents/Button/Button"

import Image from "next/image"
import Inventory from "./microComponents/Inventory/Inventory"

type HeroProps = {}

// Animations
const robots = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const ctaContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delay: 1.5,
    },
  },
}

const Hero = ({}: HeroProps) => {
  return (
    <section className="hero-area">
      <motion.div
        className="hero-container"
        variants={robots}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero-text" initial="hidden" animate="show">
          <motion.h1 className="hero-heading">Ro</motion.h1>
          <motion.h1 className="hero-heading h2">Bot</motion.h1>
          <motion.h1 className="hero-heading h3">os</motion.h1>
        </motion.div>

        <motion.div className="img-item img1" variants={robots}>
          <Image
            src={Image1}
            width={262}
            height={213}
            className="hero-img"
            priority
            alt=""
          />
        </motion.div>

        <motion.div className="img-item img2" variants={robots}>
          <Image
            src={Image2}
            className="hero-img"
            width={300}
            height={160}
            priority
            alt=""
          />
        </motion.div>

        <motion.div className="img-item img3" variants={robots}>
          <Image
            src={Image3}
            className="hero-img"
            width={250}
            height={281}
            priority
            alt=""
          />
        </motion.div>

        <motion.div className="img-item img4" variants={robots}>
          <Image
            src={Image4}
            className="hero-img"
            width={247}
            height={277}
            priority
            alt=""
          />
        </motion.div>

        <motion.div className="img-item img5" variants={robots}>
          <Image
            src={Image5}
            className="hero-img"
            width={236}
            height={231}
            priority
            alt=""
          />
        </motion.div>

        <motion.div className="img-item img6" variants={robots}>
          <Image
            src={Image6}
            className="hero-img"
            width={295}
            height={229}
            priority
            alt=""
          />
        </motion.div>

        <motion.div className="img-item img7" variants={robots}>
          <Image
            src={Image7}
            className="hero-img"
            width={270}
            height={271}
            priority
            alt=""
          />
        </motion.div>

        <motion.div className="img-item img8" variants={robots}>
          <Image
            src={Image8}
            className="hero-img"
            width={300}
            height={160}
            priority
            alt=""
          />
        </motion.div>

        <motion.div className="img-item img9" variants={robots}>
          <Image
            src={Image9}
            className="hero-img"
            width={246}
            height={275}
            priority
            alt=""
          />
        </motion.div>

        <motion.div className="img-item img10" variants={robots}>
          <Image
            src={Image10}
            className="hero-img"
            width={237}
            height={243}
            priority
            alt=""
          />
        </motion.div>

        <motion.div className="img-item img11" variants={robots}>
          <Image
            src={Image11}
            className="hero-img"
            width={237}
            height={212}
            priority
            alt=""
          />
        </motion.div>

        <motion.div
          className="cta-container"
          variants={ctaContainer}
          initial="hidden"
          animate="show"
        >
          <Button text="Mint Robotos" btnColor="mint" linkUrl="/" />

          <Inventory bgColor="red" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
