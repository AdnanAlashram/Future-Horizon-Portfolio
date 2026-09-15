"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="hero shell">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
        {/* <p className="eyebrow">Software Engineer · Product Builder</p> */}
        <h1>
          Ideas are easy.
          <span>Turning them into something real is engineering.</span>
        </h1>
        <p className="hero-text">
         We design and engineer digital products that turn complex problems into clear, scalable and usable experiences.
        </p>
        <div className="hero-actions">
          <a href="#work" className="button button--primary">
            Explore Selected Work
            <ArrowRight size={16} />
          </a>
           
        </div>
      </motion.div>

      <div className="hero-visual" aria-label="A system being shaped into a real digital product">
        <div className="artifact-grid" />
        <div className="artifact-coordinate artifact-coordinate--top">SYSTEM MAP / 01</div>
        <div className="artifact-coordinate artifact-coordinate--bottom">BUILD STATUS / READY</div>
        <div className="artifact-route artifact-route--one" />
        <div className="artifact-route artifact-route--two" />
        <div className="artifact-route artifact-route--three" />

        <motion.div className="artifact-node artifact-node--idea" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.25 }}>
          <span className="artifact-node__signal" />
          <small>01 / IDEA</small>
          <strong>Problem</strong>
        </motion.div>

        <motion.div className="artifact-system" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.55 }}>
          <div className="artifact-system__header"><span>02 / ARCHITECTURE</span><i>●</i></div>
          <div className="artifact-system__body">
            <span className="system-pill system-pill--one">FLOW</span>
            <span className="system-pill system-pill--two">DATA</span>
            <span className="system-pill system-pill--three">UX</span>
            <span className="system-core" />
            <span className="system-connection system-connection--one" />
            <span className="system-connection system-connection--two" />
            <span className="system-connection system-connection--three" />
          </div>
        </motion.div>

        <motion.div className="artifact-product" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.9 }}>
          <div className="artifact-product__bar"><span /><span /><span /><em>03 / PRODUCT</em></div>
          <div className="artifact-product__content">
            <div className="product-sidebar"><span /><span /><span /><span /></div>
            <div className="product-screen"><div className="product-screen__line" /><div className="product-screen__line product-screen__line--short" /><div className="product-screen__chart"><i /><i /><i /><i /></div><div className="product-screen__footer"><span>Clear direction</span><b>Built to use</b></div></div>
          </div>
        </motion.div>

        <motion.div className="artifact-real" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }}>
          <span className="artifact-real__dot" />
          <span><small>04 / REAL WORLD</small><strong>In use</strong></span>
        </motion.div>
      </div>
    </section>
  );
}
