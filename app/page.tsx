'use client'

import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Brain, Code, Award, ExternalLink, Download, ChevronDown, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import Image from 'next/image';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50"></div>
                <div className="max-w-5xl mx-auto text-center z-10">
                    {/* Profile Photo */}
                    <div className="mb-6 flex justify-center">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/50">
                            <Image
                                src="/profile.jpg"
                                alt="Emir Muhammet Aran"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        Emir Muhammet Aran
                    </h1>
                    <p className="text-2xl md:text-3xl text-blue-300 mb-6">
                        Medical AI Developer | Computer Engineering Student
                    </p>
                    <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Developing FDA-compliant medical AI systems with <span className="text-blue-400 font-semibold">99% accuracy</span> in brain tumor detection and <span className="text-green-400 font-semibold">91% sensitivity</span> in cancer histopathology. Specialized in deep learning for healthcare, transfer learning, and clinical deployment.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl p-4">
                            <div className="text-3xl font-bold text-blue-400">2+</div>
                            <div className="text-sm text-gray-300">Deployed AI Systems</div>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-green-500/20 rounded-xl p-4">
                            <div className="text-3xl font-bold text-green-400">20+</div>
                            <div className="text-sm text-gray-300">GitHub Projects</div>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-4">
                            <div className="text-3xl font-bold text-purple-400">3.70</div>
                            <div className="text-sm text-gray-300">GPA (Ranked 2nd)</div>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-yellow-500/20 rounded-xl p-4">
                            <div className="text-3xl font-bold text-yellow-400">3x</div>
                            <div className="text-sm text-gray-300">Game Jam Winner</div>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center mb-8 flex-wrap">
                        <a href="/Emir%20Muhammet%20Aran%20-%20CV.pdf" download className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all font-semibold">
                            <Download size={20} />
                            Download CV
                        </a>
                        <a href="mailto:emirmaran22@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold">
                            <Mail size={20} />
                            Email
                        </a>
                        <a href="https://linkedin.com/in/emiraran" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all font-semibold">
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                        <a href="https://github.com/EmirMuhammetARAN" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all font-semibold">
                            <Github size={20} />
                            GitHub
                        </a>
                        <a href="tel:+905452019276" className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all font-semibold">
                            <Phone size={20} />
                            +90 545 201 92 76
                        </a>
                    </div>

                    <a href="#about" className="inline-block animate-bounce">
                        <ChevronDown size={40} className="text-blue-400" />
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 bg-slate-900/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Professional Background</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Education */}
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap className="text-blue-400" size={32} />
                                <h3 className="text-2xl font-bold text-white">Education</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold text-blue-300">Gazi University</h4>
                                        <span className="text-sm text-gray-400">2025 - 2027</span>
                                    </div>
                                    <p className="text-gray-300">B.S. Computer Engineering</p>
                                    <p className="text-sm text-gray-400">Third Year • GPA 3.52 • Currently Enrolled</p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold text-blue-300">Ankara Medipol University</h4>
                                        <span className="text-sm text-gray-400">2022 - 2025</span>
                                    </div>
                                    <p className="text-gray-300">B.S. Computer Engineering</p>
                                    <p className="text-sm text-gray-400">Sophomore GPA 3.70 • Freshman GPA 3.68 (Ranked 2nd)</p>
                                </div>
                            </div>
                        </div>

                        {/* Work Experience */}
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-green-500/20 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Briefcase className="text-green-400" size={32} />
                                <h3 className="text-2xl font-bold text-white">Experience</h3>
                            </div>

                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="text-lg font-semibold text-green-300">Software Developer Intern</h4>
                                        <p className="text-gray-300">Gibrin R&D | TOBB Garaj</p>
                                    </div>
                                    <span className="text-sm text-gray-400">Summer 2024</span>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-400 mt-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>Developed cross-platform mobile apps with Flutter/Dart</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>Built real-time chat application (3300+ lines, Firebase)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>Designed IoT monitoring with ESP32 integration</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>Implemented secure authentication & role-based access</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Medical AI Projects */}
            <section id="projects" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-4">Medical AI Projects</h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Production-ready AI systems deployed on HuggingFace with comprehensive FDA compliance documentation
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Brain Tumor Classification */}
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/20">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-600 rounded-xl">
                                    <Brain size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Brain Tumor MRI Classification</h3>
                                    <span className="text-green-400 text-sm font-semibold">✓ DEPLOYED</span>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Multi-class deep learning classifier achieving <span className="text-blue-400 font-semibold">99% accuracy</span> for brain tumor detection (Glioma, Meningioma, Pituitary, No Tumor). Transfer learning with EfficientNetB3 featuring Grad-CAM visualizations for clinical interpretability.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-semibold">EfficientNetB3</span>
                                <span className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-semibold">99% Accuracy</span>
                                <span className="px-3 py-1 bg-blue-500/30 text-blue-300 rounded-lg text-xs">Transfer Learning</span>
                                <span className="px-3 py-1 bg-blue-500/30 text-blue-300 rounded-lg text-xs">Grad-CAM</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://huggingface.co/spaces/emiraran/brain-tumor-classification" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold text-sm">
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
                                <a href="https://github.com/EmirMuhammetARAN/Brain-Tumor-MRI-Classification---99-ACC---Grad-CAM-" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-semibold text-sm">
                                    <Github size={16} />
                                    GitHub
                                </a>
                            </div>
                        </div>

                        {/* Breast Cancer Detection */}
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-green-500/20 rounded-2xl p-8 hover:border-green-500/50 transition-all hover:shadow-2xl hover:shadow-green-500/20">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-green-600 rounded-xl">
                                    <Code size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Breast Cancer Histopathology</h3>
                                    <span className="text-green-400 text-sm font-semibold">✓ DEPLOYED</span>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Deep learning system achieving <span className="text-green-400 font-semibold">91% sensitivity</span> (exceeds FDA screening benchmark of 90%) and <span className="text-green-400 font-semibold">AUC 0.94</span> for metastatic cancer detection. Comprehensive FDA compliance documentation and clinical validation framework.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-green-600 text-white rounded-lg text-xs font-semibold">91% Sensitivity</span>
                                <span className="px-3 py-1 bg-green-600 text-white rounded-lg text-xs font-semibold">AUC 0.94</span>
                                <span className="px-3 py-1 bg-green-500/30 text-green-300 rounded-lg text-xs">CNN</span>
                                <span className="px-3 py-1 bg-green-500/30 text-green-300 rounded-lg text-xs">Focal Loss</span>
                                <span className="px-3 py-1 bg-green-500/30 text-green-300 rounded-lg text-xs">FDA Compliant</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://huggingface.co/spaces/emiraran/histopathology-cancer-detection" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all font-semibold text-sm">
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
                                <a href="https://github.com/EmirMuhammetARAN/histopathology-cancer-detection-ai" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-semibold text-sm">
                                    <Github size={16} />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* In Development Project */}
                    <div className="bg-slate-800/30 backdrop-blur-lg border border-orange-500/20 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-orange-600 rounded-lg">
                                <Brain size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Lung Disease X-Ray Classifier</h3>
                                <span className="text-orange-400 text-sm font-semibold">🚧 IN DEVELOPMENT</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">
                            Multi-class chest X-ray classification for pneumonia, COVID-19, and tuberculosis detection. Implementing ensemble methods with ResNet, EfficientNet, and Vision Transformer architectures.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-xs">Ensemble Learning</span>
                            <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-xs">Vision Transformer</span>
                            <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-xs">Grad-CAM</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Projects */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-4">Technical Projects</h2>
                    <p className="text-center text-gray-400 mb-12">
                        20+ repositories covering computer vision, NLP, IoT, and mobile development
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-purple-300 mb-3">Computer Vision</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• YOLO/Faster R-CNN detection</li>
                                <li>• Face recognition (OpenCV, Dlib)</li>
                                <li>• MNIST/EMNIST classification</li>
                                <li>• Transfer learning (ResNet, VGG16)</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-blue-300 mb-3">Natural Language Processing</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• RNN/LSTM sequence models</li>
                                <li>• Transformer-based translation</li>
                                <li>• Attention mechanisms</li>
                                <li>• Text classification systems</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-green-500/20 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-green-300 mb-3">Predictive Analytics</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Time series (FBProphet Bitcoin)</li>
                                <li>• Random Forest, XGBoost</li>
                                <li>• Regression models</li>
                                <li>• Feature engineering</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-orange-500/20 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-orange-300 mb-3">Mobile & IoT</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Flutter cross-platform apps</li>
                                <li>• Firebase real-time integration</li>
                                <li>• ESP32/Arduino systems</li>
                                <li>• Cloud database connectivity</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <a href="https://github.com/EmirMuhammetARAN?tab=repositories" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all font-semibold">
                            <Github size={20} />
                            View All 20+ Projects on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Technical Expertise</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">AI/ML Frameworks</h3>
                            <p className="text-sm text-gray-400">PyTorch, TensorFlow, Keras, Scikit-learn, OpenCV, XGBoost</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-green-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-green-300 mb-4">Medical AI Specialization</h3>
                            <p className="text-sm text-gray-400">FDA Compliance, Clinical Validation, Medical Image Analysis, Grad-CAM Explainability</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">Programming Languages</h3>
                            <p className="text-sm text-gray-400">Python, C, C#, Java, Dart, LEGv8 Assembly, Bash</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-orange-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-orange-300 mb-4">Data Science & Analysis</h3>
                            <p className="text-sm text-gray-400">Pandas, NumPy, Matplotlib, Feature Engineering, Statistical Analysis</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-yellow-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-yellow-300 mb-4">Development & Deployment</h3>
                            <p className="text-sm text-gray-400">Flutter, Firebase, HuggingFace Spaces, REST APIs, Git, Linux, Docker</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-pink-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-pink-300 mb-4">Hardware & Game Dev</h3>
                            <p className="text-sm text-gray-400">Arduino, ESP32, IoT Systems, Unity, Unreal Engine</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Achievements & Leadership</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-yellow-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Trophy className="text-yellow-400 flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-300 mb-2">🏆 Ostim Game Jam 2025 - 1st Place</h3>
                                    <p className="text-sm text-gray-400">Led team in rapid game prototype development, demonstrating leadership and technical expertise under tight deadlines</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-gray-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Trophy className="text-gray-400 flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-300 mb-2">🥈 Pura Game Jam 2025 - 2nd Place</h3>
                                    <p className="text-sm text-gray-400">Collaborative problem-solving and rapid prototyping in competitive environment</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-orange-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Trophy className="text-orange-400 flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-xl font-bold text-orange-300 mb-2">🏅 Ankü Game Jam 2025 - 5th Place</h3>
                                    <p className="text-sm text-gray-400">Demonstrated creativity and technical execution in game development</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Award className="text-blue-400 flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-xl font-bold text-blue-300 mb-2">Board Member - MEDCODES & CYBERMEDU</h3>
                                    <p className="text-sm text-gray-400">Leading technical training sessions and cybersecurity education initiatives (2023-Present)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Open to collaborations, research opportunities, and consulting on medical AI projects
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center mb-8">
                        <a href="mailto:emirmaran22@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold">
                            <Mail size={20} />
                            emirmaran22@gmail.com
                        </a>
                        <a href="tel:+905452019276" className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all font-semibold">
                            <Phone size={20} />
                            +90 545 201 92 76
                        </a>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <a href="https://linkedin.com/in/emiraran" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all font-semibold">
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                        <a href="https://github.com/EmirMuhammetARAN" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all font-semibold">
                            <Github size={20} />
                            GitHub (20+ Repos)
                        </a>
                    </div>

                    <div className="mt-8 p-6 bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl">
                        <p className="text-gray-300 mb-2">
                            <strong className="text-blue-300">Languages:</strong> English (B2-C1 Professional) | Turkish (Native)
                        </p>
                        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                            <MapPin size={16} />
                            Based in Ankara, Turkey • Available for remote work
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 px-4 border-t border-slate-800">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 Emir Muhammet Aran • Medical AI Developer • Computer Engineering Student
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                        Built with Next.js, TypeScript, and Tailwind CSS
                    </p>
                </div>
            </footer>
        </div>
    );
}
