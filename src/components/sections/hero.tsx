'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Mail, Download } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center section-padding pt-32 md:pt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
        >
            <div className="container-custom">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Content */}
                    <div className="space-y-8">
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                                你好，我是
                                <span className="block text-gradient mt-2">沈佳龙</span>
                            </h1>

                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 text-lg md:text-xl text-slate-600 dark:text-slate-400">
                                <span className="font-medium">后端开发工程师</span>
                                <span className="hidden md:inline text-slate-400">|</span>
                                <span>5 年开发经验</span>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <span className="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium">
                                    Java
                                </span>
                                <span className="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium">
                                    Python
                                </span>
                                <span className="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium">
                                    LangChain
                                </span>
                            </div>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
                        >
                            专注于<span className="text-gradient font-semibold">智能体、知识库与大模型工程化落地</span>，拥有丰富的后端架构设计与 AI 应用开发经验
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed"
                        >
                            精通 Java/Python 生态，熟悉 Spring Cloud 微服务架构、消息队列与大数据处理。
                            擅长利用 LangChain、LangGraph、RAG 技术构建智能化系统，致力于打造高性能、可扩展的企业级解决方案。
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium shadow-lg shadow-primary-600/30 transition-colors inline-flex items-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                联系我
                            </motion.a>
                            <motion.a
                                href="/沈佳龙简历.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 glass hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                                download
                            >
                                <Download className="w-5 h-5" />
                                下载简历
                            </motion.a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex gap-3 pt-2">
                            <motion.a
                                href="https://github.com/shuijiaole"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 glass hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://blog.csdn.net/sjl1234567sjl?type=blog"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 glass hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                                aria-label="CSDN"
                            >
                                <ExternalLink className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="mailto:xiaolongok528@gmail.com"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 glass hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="w-6 h-6" />
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right Content - Avatar */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            {/* Animated background circles */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-cyan-400/20 rounded-full blur-3xl"
                            />
                            <motion.div
                                animate={{
                                    scale: [1.1, 1, 1.1],
                                    rotate: [360, 180, 0],
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="absolute inset-4 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
                            />

                            {/* Avatar */}
                            <div className="relative z-10 w-full h-full glass-strong rounded-full flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/avatar.jpg"
                                    alt="沈佳龙"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
