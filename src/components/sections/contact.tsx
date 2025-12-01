'use client'

import { motion } from 'framer-motion'
import { Mail, Github, MessageSquare, ExternalLink } from 'lucide-react'

const contactMethods = [
    {
        title: 'Email',
        value: 'xiaolongok528@gmail.com',
        href: 'mailto:xiaolongok528@gmail.com',
        icon: Mail,
        color: 'from-blue-500 to-cyan-500',
        description: '工作咨询与合作',
    },
    {
        title: 'GitHub',
        value: 'github.com/shuijiaole',
        href: 'https://github.com/shuijiaole',
        icon: Github,
        color: 'from-slate-700 to-slate-900',
        description: '开源项目与代码',
    },
    {
        title: 'CSDN博客',
        value: 'CSDN技术博客',
        href: 'https://blog.csdn.net/sjl1234567sjl?type=blog',
        icon: ExternalLink,
        color: 'from-red-500 to-orange-500',
        description: '技术文章与分享',
    },
    {
        title: '手机',
        value: '156-5107-3910',
        href: 'tel:15651073910',
        icon: MessageSquare,
        color: 'from-green-500 to-emerald-600',
        description: '即时沟通交流',
        isQR: false,
    },
]

export default function Contact() {
    return (
        <section id="contact" className="section-padding bg-white dark:bg-slate-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        联系方式
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto rounded-full mb-4" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        欢迎技术交流、项目合作与工作机会探讨
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon
                        return (
                            <motion.div
                                key={method.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -8 }}
                                className="glass rounded-2xl p-6 group hover:shadow-2xl transition-all relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${method.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

                                <div className="relative">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-full h-full text-white" />
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                        {method.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                        {method.description}
                                    </p>

                                    <a
                                        href={method.href}
                                        target={method.href.startsWith('http') ? '_blank' : undefined}
                                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="text-sm text-primary-600 dark:text-primary-400 hover:underline break-all inline-flex items-center gap-1 group/link"
                                    >
                                        {method.value}
                                        {method.href.startsWith('http') && (
                                            <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                        )}
                                    </a>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
