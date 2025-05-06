import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import { projects } from '@/constants'

const Project = () => {
    return (
        <div className='flex flex-col items-center justify-center py-10 md:py-20'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10'>
                My Projects
            </h1>
            {/* Changed to grid layout */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 ">
                <ProjectCard
                    src="/Ecommerce.png"
                    title="Ecommerce Store"
                    description="Fully functional Ecommerce store with Admin Panel , Cart ,Review and Rating,  Payment with paypal,Stock calculation and validation , Advance Filtering and Sorting/Searching products "
                    link="https://ecomerce-frontend-seven.vercel.app/"
                    gitLink='hhttps://github.com/MateenIqbal1/Ecommerce_Store_MERN.git'
                    technologies={projects[0].icons}
                    />
                <ProjectCard
                    src="/chatApp.png"
                    title="Realtime Chat App"
                    description="A real-time chat application built with   Socket.IO , MERN stack, and Zustand, featuring instant messaging,showing online user , and persistent chat history."
                    link='https://message-chat-app-frontend.vercel.app/'
                    gitLink='https://github.com/MateenIqbal1/Chat_Realtime_MERN.git'
                    technologies={projects[1].icons}


                />
                <ProjectCard
                    src="/chatBot.png"
                    title="AI ChatBot "
                    description="AI chatbot using Gemini API for real-time conversations and image analysis, supporting image queries, smart responses, and chat history."
                    link='https://chat-bot-frontend-hazel.vercel.app/'
                    gitLink='https://github.com/MateenIqbal1/ChatBot_Gemini_MERN.git'
                    technologies={projects[2].icons}


                />
                
            </div>
        </div>
    )
}

export default Project
