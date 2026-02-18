import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { MessageCircle, Bell } from 'lucide-react';

export const MerlinHero: React.FC = () => {
    const { user } = useAuthStore();

    return (
        <div className="merlin-hero slide-up">
            {/* Top Row: Greeting + Icons */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                        Hi {user?.username} 🤗
                    </h1>
                    <p className="merlin-hero-subtitle">
                        What would you like to do?
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="merlin-hero-icon-btn" title="Messages">
                        <MessageCircle className="w-5 h-5" />
                    </button>
                    <button className="merlin-hero-icon-btn" title="Notifications">
                        <Bell className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Merlin Bot Section */}
            <div className="flex flex-col items-center text-center">
                {/* Bot Avatar */}
                <div className="merlin-hero-avatar-wrapper">
                    <div className="merlin-hero-glow-ring" />
                    <div className="merlin-hero-avatar">
                        <img
                            src="/MERLIN_DANCE.jpg"
                            alt="Merlin Trading Bot"
                            className="merlin-hero-img"
                        />
                    </div>
                </div>

                {/* Bot Introduction */}
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-6 mb-2">
                    Hey, I am <span className="merlin-hero-highlight">Merlin</span> your
                    <br />personal trading bot
                </h2>
                <p className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed">
                    Trade like a pro with Merlin, Regardless of your
                    level of experience in the cryptocurrency space.
                </p>
            </div>
        </div>
    );
};
