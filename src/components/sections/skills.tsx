'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Brain, Cloud, GitBranch, Layout } from 'lucide-react'

const skillCategories = [
    {
        title: 'Backend',
        icon: Code2,
        skills: ['Java', 'Python', 'Spring Boot', 'Spring Cloud', 'MyBatis-Plus', 'Flask'],
        color: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'AI & LLM',
        icon: Brain,
        skills: ['LangChain', 'LangGraph', 'RAG', 'Agent', 'Prompt Engineering', 'FAISS'],
        color: 'from-purple-500 to-pink-500',
    },
    {
        title: 'Database',
        icon: Database,
        skills: ['MySQL', 'PostgreSQL', 'Oracle', 'Redis', 'SQLite', 'Elasticsearch', 'Neo4j', '达梦数据库'],
        color: 'from-green-500 to-emerald-500',
    },
    {
        title: 'Message Queue',
        icon: GitBranch,
        skills: ['RocketMQ', 'Kafka', 'RabbitMQ', 'Activiti工作流'],
        color: 'from-orange-500 to-red-500',
    },
    {
        title: 'DevOps & Tools',
        icon: Cloud,
        skills: ['Linux', 'Docker', 'Git', 'Maven', 'Nginx', 'CI/CD', '国产麒麟Linux'],
        color: 'from-teal-500 to-blue-500',
    },
    {
        title: 'Frontend',
        icon: Layout,
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        color: 'from-indigo-500 to-purple-500',
    },
]

export default function Skills() {
    return (
        <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900/50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        技术栈
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto rounded-full mb-4" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        后端架构、AI 应用、数据工程与前端开发能力
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -8 }}
                                className="glass-strong rounded-2xl p-6 group hover:shadow-xl transition-all"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                    {category.title}
                                </h3>
                                <div className="space-y-2">
                                    {category.skills.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
