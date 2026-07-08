'use client'

import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Brain, Code, Award, ExternalLink, Download, ChevronDown, Briefcase, GraduationCap, Trophy, Microscope, Activity, Sparkles, Camera } from 'lucide-react';
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
                        Medical AI researcher focused on cell imaging and biological aging simulation. Building generative models for label-free microscopy analysis with clinical deployment potential.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl p-4">
                            <div className="text-3xl font-bold text-blue-400">4</div>
                            <div className="text-sm text-gray-300">Deployed AI Systems</div>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-green-500/20 rounded-xl p-4">
                            <div className="text-3xl font-bold text-green-400">54</div>
                            <div className="text-sm text-gray-300">GitHub Projects</div>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-4">
                            <div className="text-3xl font-bold text-purple-400">3.70</div>
                            <div className="text-sm text-gray-300">GPA (Ranked 2nd)</div>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-yellow-500/20 rounded-xl p-4">
                            <div className="text-3xl font-bold text-yellow-400">Top 39%</div>
                            <div className="text-sm text-gray-300">Vesuvius Kaggle Challenge</div>
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
                        <a href="https://medium.com/@emirmaran22" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all font-semibold">
                            <span className="text-xl">📰</span>
                            Medium
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
                                        <span className="text-sm text-gray-400">Expected 2027</span>
                                    </div>
                                    <p className="text-gray-300">B.S. Computer Engineering</p>
                                </div>
                            </div>
                        </div>

                        {/* Work Experience */}
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-green-500/20 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Briefcase className="text-green-400" size={32} />
                                <h3 className="text-2xl font-bold text-white">Experience</h3>
                            </div>

                            <div className="mb-8">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="text-lg font-semibold text-green-300">Developer, ARCx</h4>
                                        <p className="text-gray-300">Applied Research & Community | Solvien</p>
                                    </div>
                                    <span className="text-sm text-gray-400">Present</span>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-400 mt-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>Medical AI & Computer Vision: Developing MVP projects on Medical Image Processing and generative models</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>Large Language Models (LLMs): Implementing state-of-the-art architectures and clinical text analysis</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>Open-Source Contribution: Participating in rigorous peer code reviews via GitHub</span>
                                    </li>
                                </ul>
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
                                        <span>Built real-time IoT monitoring dashboard integrating ESP32 sensors with Firebase cloud database</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>Developed secure authentication system with role-based access control across 3 mobile applications</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>Implemented cross-platform Flutter applications; shipped to internal users at TOBB Garaj</span>
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
                        Production-ready AI systems deployed on HuggingFace with comprehensive clinical validation
                    </p>

                    <div className="space-y-10">
                        {/* Pancreas Spatial Transcriptomics */}
                        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-lg border-2 border-orange-500/40 rounded-2xl p-8 ring-1 ring-orange-500/20">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl shadow-lg shadow-orange-500/30">
                                    <Activity size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Spatial Architecture of Pancreas Aging & Senotypes</h3>
                                    <div className="flex gap-2 mt-1">
                                        <span className="inline-block px-2 py-0.5 bg-blue-600 text-white rounded-full text-[10px] font-bold uppercase tracking-wide">🔬 Solvien</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Advanced multiplexed immunofluorescence (PhenoCycler/CODEX 41-channel) analysis of the human pancreas to decode the cellular architecture of aging. Unveiled cell-type specific "Bystander Senescence" mechanisms where Alpha cells act as toxic SASP-secreting hubs. Discovered the "Immune Exclusion" barricade and HMGB1 nuclear leakage driving macrophage chemotaxis, actively rewriting the narrative of age-related tissue entropy.
                            </p>
                            <div className="flex gap-2 mb-4 flex-wrap">
                                <span className="px-3 py-1 bg-orange-600 text-white rounded-lg text-xs font-semibold">Spatial Analysis</span>
                                <span className="px-3 py-1 bg-orange-600 text-white rounded-lg text-xs font-semibold">PhenoCycler (CODEX)</span>
                                <span className="px-3 py-1 bg-orange-500/30 text-orange-300 rounded-lg text-xs">Cellular Senescence</span>
                                <span className="px-3 py-1 bg-orange-500/30 text-orange-300 rounded-lg text-xs">Immune Evasion</span>
                                <span className="px-3 py-1 bg-orange-500/30 text-orange-300 rounded-lg text-xs">Data Science</span>
                                <span className="px-3 py-1 bg-yellow-500/30 text-yellow-300 rounded-lg text-xs font-semibold">🔄 ONGOING</span>
                            </div>
                            <div className="flex gap-3 items-center flex-wrap">
                                <a href="https://medium.com/@emirmaran22/unveiling-the-hidden-architecture-of-aging-tissue-entropy-senotypes-and-the-igg-paradox-7f9d33261602" target="_blank" className="text-orange-400 hover:text-orange-300 font-semibold text-sm">📰 Read Article →</a>
                            </div>
                        </div>

                        {/* Bidirectional Age Transformation */}
                        <div className="bg-gradient-to-br from-pink-500/10 to-indigo-500/10 backdrop-blur-lg border-2 border-indigo-500/40 rounded-2xl p-8 ring-1 ring-indigo-500/20">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/30">
                                    <Sparkles size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">MSC Bidirectional Aging Simulation — LDM vs CycleGAN</h3>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                First-author generative pipeline performing label-free, non-destructive morphological &quot;time-travel&quot; on Mesenchymal Stem Cells — translating young↔senescent phenotypes directly from bright-field microscopy (no SA-β-gal staining). Comparative study of Latent Diffusion Models (SDEdit img2img + class conditioning + latent L1 fine-tuning) vs CycleGAN, built on an <span className="text-indigo-300 font-semibold">8,312 single-cell dataset</span> via Mask R-CNN pseudo-labeling. Champion LDM <span className="text-indigo-300 font-semibold">outperformed CycleGAN</span> in both fidelity and training stability: Aging FID <span className="text-indigo-300 font-semibold">47.30</span>, Rejuvenation FID <span className="text-indigo-300 font-semibold">53.49</span> (5-seed validated, ±0.89/±0.49). Includes ResNet-18 morphology evaluator with Grad-CAM interpretability and an interactive Gradio prototype.
                            </p>
                            <div className="flex gap-2 mb-4 flex-wrap">
                                <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-semibold">PyTorch</span>
                                <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-semibold">Latent Diffusion</span>
                                <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-semibold">CycleGAN</span>
                                <span className="px-3 py-1 bg-indigo-500/30 text-indigo-300 rounded-lg text-xs">SDEdit</span>
                                <span className="px-3 py-1 bg-indigo-500/30 text-indigo-300 rounded-lg text-xs">Mask R-CNN</span>
                                <span className="px-3 py-1 bg-indigo-500/30 text-indigo-300 rounded-lg text-xs">Bidirectional</span>
                                <span className="px-3 py-1 bg-indigo-500/30 text-indigo-300 rounded-lg text-xs">Grad-CAM</span>
                                <span className="px-3 py-1 bg-green-500/30 text-green-300 rounded-lg text-xs font-semibold">✓ FID 47.30</span>
                            </div>
                            <div className="flex gap-3 items-center flex-wrap">
                                <a href="https://medium.com/@emirmaran22/architectural-trade-offs-in-medical-image-translation-cyclegan-vs-latent-diffusion-20624437aee2" target="_blank" className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm">📰 Article →</a>
                                <span className="text-gray-500 text-sm font-semibold">📄 Preprint stage (bioRxiv)</span>
                            </div>
                        </div>

                        {/* Brain Tumor MRI Classification */}
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8">
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
                            <div className="flex gap-2 mb-4 flex-wrap">
                                <span className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-semibold">EfficientNetB3</span>
                                <span className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-semibold">99% Accuracy</span>
                                <span className="px-3 py-1 bg-blue-500/30 text-blue-300 rounded-lg text-xs">Transfer Learning</span>
                                <span className="px-3 py-1 bg-blue-500/30 text-blue-300 rounded-lg text-xs">Grad-CAM</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://huggingface.co/spaces/emiraran/brain-tumor-classification" target="_blank" className="text-blue-400 hover:text-blue-300 font-semibold text-sm">🔗 Live Demo</a>
                                <a href="https://github.com/EmirMuhammetARAN/Brain-Tumor-MRI-Classification---99-ACC---Grad-CAM-" target="_blank" className="text-blue-400 hover:text-blue-300 font-semibold text-sm">💻 GitHub →</a>
                            </div>
                        </div>

                        {/* BraTS Brain Tumor Segmentation */}
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-purple-600 rounded-xl">
                                    <Brain size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">BraTS 2020 Brain Tumor Segmentation</h3>
                                    <span className="text-green-400 text-sm font-semibold">✓ DEPLOYED</span>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                3D medical image segmentation using U-Net with EfficientNetB0 achieving <span className="text-purple-400 font-semibold">90.34% Sensitivity</span> and <span className="text-purple-400 font-semibold">99.96% Specificity</span> for precise tumor region identification (Necrotic, Enhancing Tumor, Edema). Implements Focal Loss for class imbalance with interactive Gradio interface.
                            </p>
                            <div className="flex gap-2 mb-4 flex-wrap">
                                <span className="px-3 py-1 bg-purple-600 text-white rounded-lg text-xs font-semibold">U-Net</span>
                                <span className="px-3 py-1 bg-purple-600 text-white rounded-lg text-xs font-semibold">90.34% Sensitivity</span>
                                <span className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-lg text-xs">3D Segmentation</span>
                                <span className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-lg text-xs">Focal Loss</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://huggingface.co/spaces/emiraran/brats2020-brain-tumor-segmentation" target="_blank" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">🔗 Live Demo</a>
                                <a href="https://github.com/EmirMuhammetARAN/BraTS2020-Brain-Tumor-Segmentation" target="_blank" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">💻 GitHub →</a>
                            </div>
                        </div>

                        {/* Breast Cancer Detection */}
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-green-500/20 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-green-600 rounded-xl">
                                    <Microscope size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Breast Cancer Histopathology (PCam)</h3>
                                    <span className="text-green-400 text-sm font-semibold">✓ DEPLOYED</span>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Custom lightweight CNN from scratch achieving <span className="text-green-400 font-semibold">91.5% sensitivity</span> (exceeds FDA/EMA screening benchmark) and <span className="text-green-400 font-semibold">AUC 0.94</span>. Implemented Focal Loss with optimized clinical threshold prioritizing Recall over Accuracy—catching missed diagnoses. Published detailed analysis on blind augmentation pitfalls and architecture design for medical imaging.
                            </p>
                            <div className="flex gap-2 mb-4 flex-wrap">
                                <span className="px-3 py-1 bg-green-600 text-white rounded-lg text-xs font-semibold">Custom CNN</span>
                                <span className="px-3 py-1 bg-green-600 text-white rounded-lg text-xs font-semibold">91.5% Sensitivity</span>
                                <span className="px-3 py-1 bg-green-500/30 text-green-300 rounded-lg text-xs">Focal Loss</span>
                                <span className="px-3 py-1 bg-green-500/30 text-green-300 rounded-lg text-xs">FDA/EMA Compliant</span>
                                <span className="px-3 py-1 bg-green-500/30 text-green-300 rounded-lg text-xs">Medium Article</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://huggingface.co/spaces/emiraran/histopathology-cancer-detection" target="_blank" className="text-green-400 hover:text-green-300 font-semibold text-sm">🔗 Live Demo</a>
                                <a href="https://github.com/EmirMuhammetARAN/histopathology-cancer-detection-ai" target="_blank" className="text-green-400 hover:text-green-300 font-semibold text-sm">💻 GitHub →</a>
                                <a href="https://lnkd.in/dPQF-CHe" target="_blank" className="text-green-400 hover:text-green-300 font-semibold text-sm">📰 Article →</a>
                            </div>
                        </div>

                        {/* Chest X-ray Disease Classification */}
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-orange-500/20 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-orange-600 rounded-xl">
                                    <Activity size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Chest X-ray Disease Classification</h3>
                                    <span className="text-green-400 text-sm font-semibold">✓ DEPLOYED</span>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Multi-label deep learning system for 15-class thoracic disease detection achieving <span className="text-orange-400 font-semibold">0.784 mean AUC</span> with Test-Time Augmentation (TTA). Implements Focal Loss for class imbalance, balanced sampling with oversampling for rare diseases.
                            </p>
                            <div className="flex gap-2 mb-4 flex-wrap">
                                <span className="px-3 py-1 bg-orange-600 text-white rounded-lg text-xs font-semibold">EfficientNetB0</span>
                                <span className="px-3 py-1 bg-orange-600 text-white rounded-lg text-xs font-semibold">0.784 AUC</span>
                                <span className="px-3 py-1 bg-orange-500/30 text-orange-300 rounded-lg text-xs">Multi-Label (15)</span>
                                <span className="px-3 py-1 bg-orange-500/30 text-orange-300 rounded-lg text-xs">TTA</span>
                                <span className="px-3 py-1 bg-orange-500/30 text-orange-300 rounded-lg text-xs">Medium Article</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://huggingface.co/spaces/emiraran/chest-xray-classification" target="_blank" className="text-orange-400 hover:text-orange-300 font-semibold text-sm">🔗 Live Demo</a>
                                <a href="https://github.com/EmirMuhammetARAN/chest-xray-disease-classification" target="_blank" className="text-orange-400 hover:text-orange-300 font-semibold text-sm">💻 GitHub →</a>
                                <a href="https://medium.com/@emirmaran22/stop-blaming-the-model-why-your-medical-ai-is-just-a-pre-schooler-trapped-in-dirty-data-e0e5b95c3c1f" target="_blank" className="text-orange-400 hover:text-orange-300 font-semibold text-sm">📰 Article →</a>
                            </div>
                        </div>

                        {/* EV Smart Parking */}
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-teal-500/20 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-teal-600 rounded-xl">
                                    <Camera size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">EV Smart Parking & Anomaly Detection</h3>
                                    <span className="text-teal-400 text-sm font-semibold">✓ TÜBİTAK 2209-B SUPPORTED</span>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Developed an AI-powered smart parking and security system for electric vehicle charging stations using YOLOv8. Achieved <span className="text-teal-400 font-semibold">96.7% mAP50</span> for 8-class detection including vehicle status, parking violations, and dangerous dropped cables. Entirely trained on a custom synthetic dataset generated via <span className="text-teal-400 font-semibold">NVIDIA Isaac Sim</span> with advanced weather augmentation for robust real-world performance.
                            </p>
                            <div className="flex gap-2 mb-4 flex-wrap">
                                <span className="px-3 py-1 bg-teal-600 text-white rounded-lg text-xs font-semibold">YOLOv8</span>
                                <span className="px-3 py-1 bg-teal-600 text-white rounded-lg text-xs font-semibold">96.7% mAP50</span>
                                <span className="px-3 py-1 bg-teal-500/30 text-teal-300 rounded-lg text-xs">Computer Vision</span>
                                <span className="px-3 py-1 bg-teal-500/30 text-teal-300 rounded-lg text-xs">NVIDIA Isaac Sim</span>
                                <span className="px-3 py-1 bg-teal-500/30 text-teal-300 rounded-lg text-xs">Synthetic Data</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://github.com/EmirMuhammetARAN/ev-charging-smart-parking" target="_blank" className="text-teal-400 hover:text-teal-300 font-semibold text-sm">💻 GitHub →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Projects */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-4">Technical Projects</h2>
                    <p className="text-center text-gray-400 mb-12">
                        54 repositories covering computer vision, NLP, IoT, and mobile development
                    </p>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-blue-300 mb-3">Clinical NLP & Sequence</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Unstructured clinical text (BioBERT)</li>
                                <li>• Automatic subtitle translation</li>
                                <li>• Transformer seq2seq models</li>
                                <li>• Attention mechanisms</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-purple-300 mb-3">Computer Vision & Infrastructure</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• High-throughput DICOM pipelines</li>
                                <li>• Real-time face recognition</li>
                                <li>• OpenCV + MTCNN pipelines</li>
                                <li>• Scalable model deployment</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-green-500/20 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-green-300 mb-3">Predictive Analytics</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Ensemble methods (Random Forest)</li>
                                <li>• Gradient boosting (XGBoost)</li>
                                <li>• Time series forecasting (FBProphet)</li>
                                <li>• Optimization tasks</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <a href="https://github.com/EmirMuhammetARAN?tab=repositories" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all font-semibold">
                            <Github size={20} />
                            View All 54 Projects on GitHub
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
                            <p className="text-sm text-gray-400">PyTorch, MONAI, TensorFlow/Keras, Scikit-learn, OpenCV, XGBoost, HuggingFace Transformers, NVIDIA Isaac Sim, LLMs</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-green-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-green-300 mb-4">Medical AI Specialization</h3>
                            <p className="text-sm text-gray-400">FDA Compliance, 3D/2.5D volumetric imaging, Ensemble transfer learning, Clinical Validation, Medical Image Analysis, Grad-CAM Explainability</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">Programming Languages</h3>
                            <p className="text-sm text-gray-400">Python, C, C#, Java, SQL, HTML/CSS, Bash, Arduino</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-orange-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-orange-300 mb-4">Data Science & Analysis</h3>
                            <p className="text-sm text-gray-400">Pandas, NumPy, Matplotlib, Feature Engineering, Vector Embeddings, Statistical Analysis, LLM Fine-tuning</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-yellow-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-yellow-300 mb-4">Development & Deployment</h3>
                            <p className="text-sm text-gray-400">HuggingFace Spaces, REST APIs, Git, Linux, Docker, PostgreSQL, FastAPI, Flask</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Achievements & Leadership</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Brain className="text-purple-400 flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-xl font-bold text-purple-300 mb-2">🧠 NeuroBridge AI Hackathon 2026</h3>
                                    <p className="text-sm text-gray-400">Built a multimodal Post-COVID neurological biomarker detection system combining brain MRI radiomics, MoCA cognitive scores, and peripheral blood RNA gene expression.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-yellow-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Trophy className="text-yellow-400 flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-300 mb-2">🏆 Ostim Game Jam 2025 - 1st Place</h3>
                                    <p className="text-sm text-gray-400">Led team in rapid game prototype development, demonstrating leadership and technical expertise under tight deadlines</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Trophy className="text-blue-400 flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-xl font-bold text-blue-300 mb-2">🏥 ACUHIT Healthcare Hackathon 2026</h3>
                                    <p className="text-sm text-gray-400">Sole AI/ML developer; architected full-stack clinical NLP system (Sentence Transformer + TF-IDF ensemble) with Flask API and React frontend.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-orange-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Trophy className="text-orange-400 flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-xl font-bold text-orange-300 mb-2">🏆 RARE 26 Grand Challenge</h3>
                                    <p className="text-sm text-gray-400">Developed a Self-Supervised Dual-Branch (GastroNet + DINOv3) vision architecture for predicting neoplastic lesions in endoscopy.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Trophy className="text-cyan-400 flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-xl font-bold text-cyan-300 mb-2">🏆 Vesuvius Challenge — Top 39%</h3>
                                    <p className="text-sm text-gray-400">3D volumetric segmentation of ancient carbonized scrolls</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Award className="text-purple-400 flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-xl font-bold text-purple-300 mb-2">Board Member - MEDCODES</h3>
                                    <p className="text-sm text-gray-400">Leading technical training sessions for medical engineering students (2024-Present)</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Award className="text-indigo-400 flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-300 mb-2">Board Member - CYBERMEDU</h3>
                                    <p className="text-sm text-gray-400">Organizing cybersecurity and medical technology education initiatives (2023-Present)</p>
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
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="https://linkedin.com/in/emiraran" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all font-semibold">
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                        <a href="https://github.com/EmirMuhammetARAN" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all font-semibold">
                            <Github size={20} />
                            GitHub (54 Repos)
                        </a>
                        <a href="https://medium.com/@emirmaran22" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all font-semibold">
                            <span className="text-xl">📰</span>
                            Medium
                        </a>
                    </div>

                    <div className="mt-8 p-6 bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl">
                        <p className="text-gray-300 mb-2">
                            <strong className="text-blue-300">Languages:</strong> English
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
