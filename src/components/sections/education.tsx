'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'
import educationData from '@/data/education.json'

export default function Education() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    return (
        <section
            id="education"
            className="section-padding bg-slate-50 dark:bg-slate-900/50"
        >
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        教育背景
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
                >
                    {educationData.map((edu) => (
                        <motion.div
                            key={edu.id}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="glass-strong rounded-2xl p-6 lg:p-8 group hover:shadow-xl transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                                    <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                                        {edu.school}
                                    </h3>
                                    <p className="text-base lg:text-lg font-semibold text-primary-600 dark:text-primary-400">
                                        {edu.major}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
                                <Calendar className="w-4 h-4" />
                                <span>
                                    {edu.startDate} - {edu.endDate}
                                </span>
                                <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs font-medium ml-auto">
                                    {edu.degree}
                                </span>
                            </div>

                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                {edu.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
