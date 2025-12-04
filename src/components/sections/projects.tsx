'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink, Github, Briefcase, CheckCircle2 } from 'lucide-react'
import projectsData from '@/data/projects.json'

export default function Projects() {
    // 默认展开所有项目
    const [expandedProjects, setExpandedProjects] = useState<Set<number>>(
        new Set(projectsData.map(p => p.id))
    )

    const toggleProject = (id: number) => {
        const newExpanded = new Set(expandedProjects)
        if (newExpanded.has(id)) {
            newExpanded.delete(id)
        } else {
            newExpanded.add(id)
        }
        setExpandedProjects(newExpanded)
    }

    return (
        <section id="projects" className="section-padding bg-white dark:bg-slate-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        项目经验
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto rounded-full mb-4" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        精选核心项目，展示在大模型应用、数据工程与智能化系统方面的实战能力
                    </p>
                </motion.div>

                <div className="space-y-6 max-w-6xl mx-auto">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="glass-strong rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow"
                        >
                            <div className="p-6 lg:p-8 cursor-pointer" onClick={() => toggleProject(project.id)}>
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                                                <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                            </div>
                                            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 px-3 py-1 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 mb-4">{project.overview}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <motion.div animate={{ rotate: expandedProjects.has(project.id) ? 180 : 0 }} className="mt-2">
                                        <ChevronDown className="w-6 h-6 text-slate-400" />
                                    </motion.div>
                                </div>
                            </div>

                            <AnimatePresence>
                                {expandedProjects.has(project.id) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden border-t border-slate-200/50 dark:border-slate-700/50"
                                    >
                                        <div className="p-6 lg:p-8 space-y-6">
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">我的职责</h4>
                                                <p className="text-base font-medium text-slate-900 dark:text-white">{project.role}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase mb-3">项目亮点</h4>
                                                <ul className="space-y-3">
                                                    {project.highlights.map((highlight, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex gap-4 pt-4">
                                                {project.link && (
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors">
                                                        <Github className="w-4 h-4" />查看代码
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
