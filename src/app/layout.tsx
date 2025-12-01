import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: '沈佳龙 - Java/Python/LangChain 工程师',
    description: '专注于智能体、知识库与大模型工程化落地的后端开发工程师，拥有 5 年开发经验',
    keywords: ['Java', 'Python', 'LangChain', 'AI', 'Backend', 'Developer', 'Portfolio'],
    authors: [{ name: '沈佳龙' }],
    openGraph: {
        title: '沈佳龙 - Java/Python/LangChain 工程师',
        description: '专注于智能体、知识库与大模型工程化落地的后端开发工程师',
        type: 'website',
        locale: 'zh_CN',
    },
    twitter: {
        card: 'summary_large_image',
        title: '沈佳龙 - Java/Python/LangChain 工程师',
        description: '专注于智能体、知识库与大模型工程化落地的后端开发工程师',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh-CN" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange={false}
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
