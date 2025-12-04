'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-slate-900 dark:bg-slate-950 text-slate-300 section-padding pt-16 pb-8">
            {/* Scroll to top button */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </motion.button>

            <div className="container-custom">
                <div className="text-center space-y-6">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">shuijiaole</h3>
                        <p className="text-slate-400">Java / Python / LangChain 工程师</p>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-6 text-sm"
                    >
                        <a href="#hero" className="hover:text-primary-400 transition-colors">
                            关于
                        </a>
                        <a href="#education" className="hover:text-primary-400 transition-colors">
                            教育
                        </a>
                        <a href="#projects" className="hover:text-primary-400 transition-colors">
                            项目
                        </a>
                        <a href="#skills" className="hover:text-primary-400 transition-colors">
                            技能
                        </a>
                        <a href="#contact" className="hover:text-primary-400 transition-colors">
                            联系
                        </a>
                    </motion.div>

                    {/* Divider */}
                    <div className="w-full h-px bg-slate-800" />

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-slate-500"
                    >
                        <span>© {currentYear} shuijiaole. Built with Next.js & Tailwind CSS</span>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}
