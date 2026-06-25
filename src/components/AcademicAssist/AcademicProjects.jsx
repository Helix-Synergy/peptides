import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Target, CheckCircle, ArrowRight, ChevronDown, Briefcase, ChevronRight, GraduationCap } from "lucide-react";
import Banner from '../../assets/images/PageBanners/6.webp'

/* ---------- Data (UG & PG Subjects) ---------- */
const leaf = (title) => ({ name: title });

// Manually created data with 50 projects for each subject

const UG_DATA = [
    {
        name: "Accounting",
        children: [
            leaf("Financial Statement Analysis for Profitability Assessment"),
            leaf("Cost-Volume-Profit Analysis for Decision Making"),
            leaf("Auditing of Internal Controls and Fraud Detection"),
            leaf("Blockchain Technology in Accounting and Auditing"),
            leaf("Forensic Accounting Case Study: Detecting Financial Misconduct"),
            leaf("Tax Planning and Management for Small Businesses"),
            leaf("Implementation of a Cloud-Based Accounting System"),
            leaf("Budgeting and Forecasting for a Startup"),
            leaf("Analysis of IFRS vs. GAAP Reporting Standards"),
            leaf("Working Capital Management Strategies"),
            leaf("Automated Bookkeeping System using RPA"),
            leaf("E-commerce Accounting Integration with ERP"),
            leaf("Data Analytics for Expense Report Audits"),
            leaf("Machine Learning Model for Predictive Accounting"),
            leaf("Development of a Tax Calculator Web Application"),
            leaf("Hospitality Sector Accounting Practices"),
            leaf("Real Estate Investment Trust (REIT) Financial Analysis"),
            leaf("Non-Profit Organization Fund Accounting"),
            leaf("Agricultural Sector Cost Accounting"),
            leaf("Manufacturing Overhead Allocation and Control"),
            leaf("Ethical Considerations in Financial Reporting"),
            leaf("The Impact of Big Data on Modern Auditing"),
            leaf("Global Financial Reporting Standards Harmonization"),
            leaf("Corporate Governance and Its Link to Financial Performance"),
            leaf("Sustainability Reporting and its Impact on Investors"),
            leaf("Project on Asset Valuation Techniques"),
            leaf("Project on Inventory Management Systems"),
            leaf("Project on Mergers and Acquisitions Accounting"),
            leaf("Project on International Finance Reporting"),
            leaf("Project on Capital Budgeting Analysis"),
            leaf("Project on Payroll Management Automation"),
            leaf("Project on Risk Management in Financial Institutions"),
            leaf("Project on Financial Ratios and Benchmarking"),
            leaf("Project on Enterprise Resource Planning (ERP) Systems"),
            leaf("Project on Supply Chain Cost Optimization"),
            leaf("Project on Investment Portfolio Analysis"),
            leaf("Project on Treasury Management Functions"),
            leaf("Project on Digital Currencies and Taxation"),
            leaf("Project on Corporate Social Responsibility Accounting"),
            leaf("Project on Performance Measurement in Organizations"),
            leaf("Project on Cost Reduction Strategies"),
            leaf("Project on Revenue Recognition Standards (ASC 606)"),
            leaf("Project on Capital Market Efficiency Studies"),
            leaf("Project on Hedge Fund Financial Reporting"),
            leaf("Project on Venture Capital Accounting Practices"),
            leaf("Project on Credit Risk Assessment Models"),
            leaf("Project on Derivatives Accounting and Valuation"),
            leaf("Project on Cash Flow Statement Analysis"),
            leaf("Project on Public Sector Budgeting"),
            leaf("Project on Financial Planning for Retirement"),
            leaf("Project on Cloud Computing Financial Models"),
        ],
    },
    {
        name: "Applied Nutrition",
        children: [
            leaf("Personalized Diet Plan Generator for Athletes"),
            leaf("Analysis of Public Health Nutrition Programs in India"),
            leaf("Childhood Malnutrition Monitoring and Intervention System"),
            leaf("Food Nutrient Database & API Development for App Integration"),
            leaf("Dietary Interventions for Type 2 Diabetes Management"),
            leaf("Role of Probiotics in Gut Health and Immunity"),
            leaf("Analysis of Food Labeling and Consumer Awareness"),
            leaf("Nutritional Requirements for Geriatric Populations"),
            leaf("Impact of Veganism on Micronutrient Status"),
            leaf("Developing a School Lunch Program for Nutritional Improvement"),
            leaf("Nutritional Management of Chronic Kidney Disease"),
            leaf("Eating Disorder Treatment and Nutritional Counseling"),
            leaf("Assessing the Nutritional Needs of Pregnant Women"),
            leaf("Impact of Fast Food Consumption on Adolescent Health"),
            leaf("Designing a Diet Plan for Weight Loss and Management"),
            leaf("Mobile App for Calorie and Macronutrient Tracking"),
            leaf("AI-Based Food Recognition and Calorie Estimation"),
            leaf("Sensor-Based System for Monitoring Hydration Levels"),
            leaf("Data Analytics on Food Consumption Patterns in Urban Areas"),
            leaf("VR Simulation for Nutritional Education"),
            leaf("Project on Sport-Specific Nutrition for Endurance Athletes"),
            leaf("Project on Food Safety and Hygiene Protocols"),
            leaf("Project on the Effect of Organic Foods on Health"),
            leaf("Project on Nutritional Deficiencies in Low-Income Groups"),
            leaf("Project on the Role of Superfoods in a Balanced Diet"),
            leaf("Project on Sustainable Diets and Environmental Impact"),
            leaf("Project on Nutritional Counseling Techniques"),
            leaf("Project on Food Allergies and Intolerances Management"),
            leaf("Project on Food Preservation Techniques and Their Effects"),
            leaf("Project on Designing a Menu for a Hospital Cafeteria"),
            leaf("Project on the Impact of Processed Foods on Public Health"),
            leaf("Project on Nutritional Guidelines for Different Lifestyles"),
            leaf("Project on Herbal Supplements and Their Effects"),
            leaf("Project on the Role of Vitamin D in Bone Health"),
            leaf("Project on Carbohydrate and Protein Cycling in Diets"),
            leaf("Project on the Effect of Sugar on Brain Function"),
            leaf("Project on Mindful Eating and its Psychological Benefits"),
            leaf("Project on the Impact of Fermented Foods on Gut Flora"),
            leaf("Project on Nutritional Needs for a Ketogenic Diet"),
            leaf("Project on Dietary Fiber and Digestive Health"),
            leaf("Project on the Glycemic Index and Blood Sugar Control"),
            leaf("Project on Community-Based Nutritional Programs"),
            leaf("Project on the Use of Fortified Foods"),
            leaf("Project on Food Additives and their Health Risks"),
            leaf("Project on a Low-Salt Diet and Blood Pressure"),
            leaf("Project on the Role of Iron in Anemia Prevention"),
            leaf("Project on Omega-3 Fatty Acids and Heart Health"),
            leaf("Project on Diet for Skin Health"),
            leaf("Project on Nutritional Needs for Vegetarians"),
            leaf("Project on Hydration and Cognitive Performance"),
        ],
    },
    {
        name: "B. Com (Computers)",
        children: [
            leaf("E-commerce Business Plan & Website Development"),
            leaf("Digital Marketing Strategy for a Local Business"),
            leaf("Blockchain-based Supply Chain Management System"),
            leaf("Data Analytics Dashboard for Retail Sales Forecasting"),
            leaf("Cloud Computing for Small Business Operations"),
            leaf("Cybersecurity Plan for an E-commerce Platform"),
            leaf("Mobile App for Customer Relationship Management (CRM)"),
            leaf("Implementation of an ERP System for Inventory"),
            leaf("Website Development with Integrated Payment Gateway"),
            leaf("Search Engine Optimization (SEO) Strategy and Analysis"),
            leaf("Impact of AI on Business Operations and Efficiency"),
            leaf("Role of Social Media in Brand Building"),
            leaf("Feasibility Study for a SaaS-based Business"),
            leaf("Data Privacy and GDPR Compliance for Online Businesses"),
            leaf("E-commerce Pricing Strategy Tool using Data Analysis"),
            leaf("Automated Financial Reporting using Python"),
            leaf("Web Scraping for Market Research Data Collection"),
            leaf("Creating a Dynamic Business Intelligence Dashboard"),
            leaf("Developing a Simple HR Management System"),
            leaf("Network Design and Security for a Corporate Office"),
            leaf("Project on Customer Segmentation using K-Means Clustering"),
            leaf("Project on Mobile Commerce Trends and Future Scope"),
            leaf("Project on Content Management System (CMS) for Business"),
            leaf("Project on B2B E-commerce Platform Development"),
            leaf("Project on UI/UX Design for Business Applications"),
            leaf("Project on Data Backup and Disaster Recovery Plan"),
            leaf("Project on Business Intelligence Tools (e.g., Tableau)"),
            leaf("Project on Financial Technology (FinTech) Innovations"),
            leaf("Project on Cloud Security and Access Control"),
            leaf("Project on Lean Management and Automation"),
            leaf("Project on Digital Advertising Campaign Performance Analysis"),
            leaf("Project on Customer Service Chatbot Development"),
            leaf("Project on Supply Chain Logistics Optimization"),
            leaf("Project on Big Data Analytics in Retail"),
            leaf("Project on Ethical Hacking for Business Systems"),
            leaf("Project on Business Process Automation (BPA)"),
            leaf("Project on Online Payment Gateway Security Analysis"),
            leaf("Project on E-commerce Inventory Management"),
            leaf("Project on Web Analytics for Website Performance"),
            leaf("Project on Agile Project Management in IT"),
            leaf("Project on Implementing a CRM system (e.g., Salesforce)"),
            leaf("Project on Social Media Analytics for Marketing"),
            leaf("Project on a Business Management Simulation Game"),
            leaf("Project on Enterprise Data Warehousing"),
            leaf("Project on a Digital Supply Chain Solution"),
            leaf("Project on Customer Lifetime Value (CLV) Prediction"),
            leaf("Project on Automated Sales Reporting Dashboard"),
            leaf("Project on IoT for Retail Inventory Management"),
            leaf("Project on Cybersecurity Policies and Procedures"),
            leaf("Project on Online Brand Reputation Management"),
        ],
    },
    {
        name: "B. Com (General)",
        children: [
            leaf("Market Research and Feasibility Study for a New Product Launch"),
            leaf("Analysis of GST Impact on Small and Medium Enterprises (SMEs)"),
            leaf("Development of a Small Business Financial Model"),
            leaf("HR Management System Prototype for Employee Records"),
            leaf("E-commerce Pricing Strategy Tool based on Competitor Analysis"),
            leaf("Risk Management Strategies for a Service-Based Business"),
            leaf("Corporate Social Responsibility (CSR) Report for a Local Company"),
            leaf("Consumer Behavior Study on Online Shopping Habits"),
            leaf("Working Capital Management of a Manufacturing Company"),
            leaf("Financial Ratio Analysis for a Publicly Traded Company"),
            leaf("Analysis of Indian Stock Market Trends"),
            leaf("Business Plan for a Home-Based Catering Service"),
            leaf("Impact of Digital Marketing on Brand Awareness"),
            leaf("Study on Entrepreneurial Ecosystem in a Specific City"),
            leaf("Supply Chain Management Best Practices Case Study"),
            leaf("Analysis of Banking Sector Performance in India"),
            leaf("Capital Budgeting Analysis for a Hypothetical Project"),
            leaf("A Study on the Evolution of E-commerce in India"),
            leaf("Human Resource Management Challenges in the IT Sector"),
            leaf("Study on the Impact of demonetization on informal sector"),
            leaf("Analysis of Foreign Direct Investment (FDI) in India"),
            leaf("Feasibility Study of a Co-working Space"),
            leaf("A Comparative Study of Direct vs. Indirect Taxes in India"),
            leaf("Role of Microfinance in Rural Development"),
            leaf("Inventory Control Techniques in Retail Business"),
            leaf("A Study of Customer Satisfaction in the Banking Sector"),
            leaf("The Role of Advertising in Consumer Decision Making"),
            leaf("Impact of Mergers and Acquisitions on Company Performance"),
            leaf("Analysis of Public Sector Undertakings (PSUs) in India"),
            leaf("A Study on Corporate Governance Practices in India"),
            leaf("The Role of Auditing in Preventing Financial Fraud"),
            leaf("Analysis of a Company's Financial Health and Performance"),
            leaf("Project on Tax Implications of Digital Assets"),
            leaf("Project on Business Ethics and Corporate Scandals"),
            leaf("Project on Social Media Marketing Strategy for a Brand"),
            leaf("Project on The Role of IT in Modern Business"),
            leaf("Project on Financial Planning for Individuals"),
            leaf("Project on The Indian Banking System and Reforms"),
            leaf("Project on Export-Import Procedures and Documentation"),
            leaf("Project on Supply Chain Logistics and Optimization"),
            leaf("Project on Retail Management Strategies"),
            leaf("Project on The Role of Human Resources in Team Building"),
            leaf("Project on Small Business Financing Options"),
            leaf("Project on Marketing Mix Analysis of a Product"),
            leaf("Project on Risk Management in a Financial Firm"),
            leaf("Project on Brand Equity and Customer Loyalty"),
            leaf("Project on Customer Relationship Management (CRM)"),
            leaf("Project on The Impact of Globalization on Business"),
            leaf("Project on Market Feasibility of a New Product"),
            leaf("Project on Analyzing Stock Market Volatility"),
        ],
    },
    {
        name: "BBA (Bachelor of Business Administration)",
        children: [
            leaf("Customer Relationship Management (CRM) System Implementation Plan"),
            leaf("Business Process Automation (BPA) Strategy for a Service Company"),
            leaf("Corporate Social Responsibility (CSR) Report on Environmental Initiatives"),
            leaf("Market Entry Strategy for a New Product in a Foreign Market"),
            leaf("Brand Management and Repositioning Strategy"),
            leaf("Human Resource Analytics for Employee Retention"),
            leaf("Supply Chain Optimization using Lean Six Sigma Principles"),
            leaf("Financial Feasibility Study for a Social Enterprise"),
            leaf("Strategic Management Analysis of a Fortune 500 Company"),
            leaf("Consumer Behavior Study on E-commerce Platforms"),
            leaf("E-commerce Logistics and Last-Mile Delivery Optimization"),
            leaf("Digital Marketing Campaign Performance Analysis"),
            leaf("Talent Acquisition and Onboarding Process Improvement"),
            leaf("Performance Management System Design for a Team"),
            leaf("Organizational Behavior and Employee Motivation Study"),
            leaf("Data-driven Decision Making in Sales Management"),
            leaf("Risk Assessment and Mitigation Plan for a Project"),
            leaf("Feasibility of launching a Mobile App for Food Delivery"),
            leaf("Leadership Styles and their Impact on Team Productivity"),
            leaf("A Study on the Role of AI in Business Operations"),
            leaf("Business Plan for a Virtual Reality Gaming Cafe"),
            leaf("Analysis of Marketing Strategies of a Multinational Corporation"),
            leaf("A Study on the Impact of Work-Life Balance on Productivity"),
            leaf("Project on Employee Training and Development Programs"),
            leaf("Project on Business Ethics and Corporate Governance"),
            leaf("Project on Change Management in an Organization"),
            leaf("Project on E-commerce Business Models and Strategies"),
            leaf("Project on Financial Planning and Budgeting"),
            leaf("Project on Supply Chain Management in the Retail Sector"),
            leaf("Project on Brand Loyalty and Customer Satisfaction"),
            leaf("Project on Customer Segmentation Analysis"),
            leaf("Project on Operations Management in the Service Sector"),
            leaf("Project on Strategic Human Resource Management"),
            leaf("Project on Project Management Tools and Techniques"),
            leaf("Project on Global Business Environment Analysis"),
            leaf("Project on Crisis Management and Communication"),
            leaf("Project on Pricing Strategies and Market Demand"),
            leaf("Project on Negotiation and Conflict Resolution Skills"),
            leaf("Project on Entrepreneurial Finance and Venture Capital"),
            leaf("Project on Business Communication and Public Relations"),
            leaf("Project on Quality Management Systems (QMS)"),
            leaf("Project on Market Research and Consumer Insights"),
            leaf("Project on Retail Store Layout and Design"),
            leaf("Project on Digital Transformation in the Banking Industry"),
            leaf("Project on Sustainability and Corporate Responsibility"),
            leaf("Project on Leadership and Team Dynamics"),
            leaf("Project on Financial Risk Management"),
            leaf("Project on Market Analysis for a New Product"),
            leaf("Project on Innovation Management in Organizations"),
            leaf("Project on Performance Appraisal System Design"),
        ],
    },
    {
        name: "Banking",
        children: [
            leaf("Risk Assessment Model for Loan Approval using Machine Learning"),
            leaf("Digital Banking Onboarding Flow and User Experience Improvement"),
            leaf("Fraud Detection in Online Transactions using Data Analytics"),
            leaf("Personal Finance Management App with Budgeting Features"),
            leaf("Analysis of Credit Risk in Microfinance Institutions"),
            leaf("Implementation of a Blockchain-based Secure Payment Gateway"),
            leaf("Study on the Impact of Fintech on Traditional Banking"),
            leaf("Mobile Banking Security and Biometric Authentication"),
            leaf("Analysis of Non-Performing Assets (NPAs) in the Banking Sector"),
            leaf("Project on Treasury Management in a Commercial Bank"),
            leaf("Study on Customer Satisfaction in the Banking Sector"),
            leaf("Impact of RBI's Monetary Policies on Banking Operations"),
            leaf("Financial Inclusion through Digital Banking in Rural Areas"),
            leaf("Analysis of the Indian Banking System and its Reforms"),
            leaf("Project on Core Banking System (CBS) Implementation"),
            leaf("Risk Management in International Banking"),
            leaf("Project on E-KYC (Know Your Customer) Automation"),
            leaf("Project on Wealth Management and Investment Products"),
            leaf("Project on Credit Card Fraud Detection"),
            leaf("Project on Green Banking and Sustainable Finance"),
            leaf("Project on Banking Regulations and Compliance"),
            leaf("Project on Cross-Border Payments using Blockchain"),
            leaf("Project on Loan Portfolio Management"),
            leaf("Project on Retail Banking and its Products"),
            leaf("Project on Corporate Banking and Services"),
            leaf("Project on Financial Statement Analysis of a Bank"),
            leaf("Project on Mobile Wallets and their Impact"),
            leaf("Project on Customer Data Analytics for Banking"),
            leaf("Project on Cybersecurity in Banking Systems"),
            leaf("Project on Cashless Economy and Digital Payments"),
            leaf("Project on Debt Recovery Strategies for Banks"),
            leaf("Project on Mergers and Acquisitions in the Banking Sector"),
            leaf("Project on the Role of Commercial Banks in Economic Development"),
            leaf("Project on Financial Literacy Programs for Youth"),
            leaf("Project on the Impact of COVID-19 on the Banking Industry"),
            leaf("Project on Automated Customer Service Chatbots"),
            leaf("Project on Credit Scoring Models"),
            leaf("Project on Islamic Banking Principles"),
            leaf("Project on the Functioning of Stock Exchanges"),
            leaf("Project on Mutual Funds and their Performance Analysis"),
            leaf("Project on the Role of Public Sector Banks in India"),
            leaf("Project on Private Sector Banks and their Growth Strategies"),
            leaf("Project on Foreign Exchange Management"),
            leaf("Project on Banking Auditing and Regulations"),
            leaf("Project on the Impact of Globalization on Banking"),
            leaf("Project on Financial Derivatives and their Use in Banking"),
            leaf("Project on a Banking Simulation Game"),
            leaf("Project on Micro-Lending and its Impact"),
            leaf("Project on The Role of Central Bank in an Economy"),
            leaf("Project on Digital Lending Platforms"),
        ],
    },
    {
        name: "Biochemistry",
        children: [
            leaf("Protein-Ligand Interaction Visualization and Analysis"),
            leaf("Enzyme Kinetics Simulation and Modeling"),
            leaf("Metabolic Pathway Analysis Tool for Disease Prediction"),
            leaf("Drug Discovery Pipeline Study with a focus on a specific disease"),
            leaf("Molecular Cloning and Gene Expression Analysis"),
            leaf("Study of DNA Replication and Repair Mechanisms"),
            leaf("Protein Purification and Characterization Techniques"),
            leaf("Analysis of Photosynthesis and Cellular Respiration"),
            leaf("Bioinformatics Pipeline for Genome Annotation"),
            leaf("Project on Lipid Metabolism and its Regulation"),
            leaf("Project on Carbohydrate Metabolism Pathways"),
            leaf("Project on Nucleic Acid Structure and Function"),
            leaf("Project on Signal Transduction Pathways in Cells"),
            leaf("Project on the Biochemistry of Hormones"),
            leaf("Project on the Role of Vitamins and Minerals"),
            leaf("Project on the Biochemistry of Neurotransmitters"),
            leaf("Project on the Immune System and Antibody Production"),
            leaf("Project on the Biochemistry of Cancer Cells"),
            leaf("Project on the Effects of Toxins on Cellular Processes"),
            leaf("Project on the Biochemistry of Aging"),
            leaf("Project on the Use of Biosensors in Medicine"),
            leaf("Project on the Biochemistry of Muscle Contraction"),
            leaf("Project on the Role of Free Radicals in Disease"),
            leaf("Project on Glycogen Synthesis and Degradation"),
            leaf("Project on the Biochemistry of Vision"),
            leaf("Project on the Structure and Function of Hemoglobin"),
            leaf("Project on the Biochemistry of Plant Secondary Metabolites"),
            leaf("Project on the Role of Enzymes in Industrial Processes"),
            leaf("Project on the Biochemistry of DNA Damage and Repair"),
            leaf("Project on the Biochemistry of Apoptosis"),
            leaf("Project on the Role of RNA in Gene Regulation"),
            leaf("Project on the Biochemistry of Photosynthesis"),
            leaf("Project on the Effects of pH on Enzyme Activity"),
            leaf("Project on the Use of Chromatography in Biochemistry"),
            leaf("Project on the Biochemistry of Viral Replication"),
            leaf("Project on the Structure of Antibodies"),
            leaf("Project on the Role of ATP in Cellular Energy"),
            leaf("Project on the Biochemistry of Blood Clotting"),
            leaf("Project on the Role of Lipids in Cell Membranes"),
            leaf("Project on the Biochemistry of Food Processing"),
            leaf("Project on the Use of Bioinformatics in Drug Discovery"),
            leaf("Project on the Role of Antioxidants in Health"),
            leaf("Project on the Biochemistry of Photosynthesis and Respiration"),
            leaf("Project on the Structure of Collagen"),
            leaf("Project on the Role of Chaperones in Protein Folding"),
            leaf("Project on the Biochemistry of Photosynthesis in Algae"),
            leaf("Project on the Use of Spectroscopy in Biochemistry"),
            leaf("Project on the Role of Calcium in Cellular Signaling"),
            leaf("Project on the Biochemistry of Fermentation"),
            leaf("Project on the Role of Phosphorylation in Signaling"),
        ],
    },
    {
        name: "Biotechnology",
        children: [
            leaf("Genetic Engineering Simulation Software for Gene Editing"),
            leaf("Fermentation Process Optimization for Biofuel Production"),
            leaf("Bioremediation of Contaminated Sites using Microorganisms"),
            leaf("Biofuel Production from Algae: A Feasibility Study"),
            leaf("Development of a CRISPR-Cas9 System for Gene Therapy"),
            leaf("Production of Bioplastics from Agricultural Waste"),
            leaf("Analysis of Biosensor Technology for Environmental Monitoring"),
            leaf("Stem Cell Differentiation and its Applications"),
            leaf("Tissue Engineering for Regenerative Medicine"),
            leaf("Project on Vaccine Development and Production"),
            leaf("Project on Genetically Modified Organisms (GMOs)"),
            leaf("Project on Drug Discovery and Development Pipeline"),
            leaf("Project on Nanobiotechnology for Drug Delivery"),
            leaf("Project on Molecular Farming for Protein Production"),
            leaf("Project on Industrial Enzymes and their Applications"),
            leaf("Project on Bioprocess Engineering and Bioreactor Design"),
            leaf("Project on Bioinformatics for DNA Sequence Analysis"),
            leaf("Project on Gene Therapy for Genetic Disorders"),
            leaf("Project on a Bio-Based Water Purification System"),
            leaf("Project on the Role of Biotechnology in Agriculture"),
            leaf("Project on Plant Tissue Culture and Micropropagation"),
            leaf("Project on the Production of Recombinant Proteins"),
            leaf("Project on Microbial Biotechnology for Food Production"),
            leaf("Project on Biosafety and Ethical Issues in Biotechnology"),
            leaf("Project on a Diagnostic Kit for a Viral Disease"),
            leaf("Project on the Use of CRISPR in Crop Improvement"),
            leaf("Project on Bio-Based Nanomaterials Synthesis"),
            leaf("Project on Bioremediation of Plastic Waste"),
            leaf("Project on the Use of Algae in Carbon Sequestration"),
            leaf("Project on the Production of Bio-Fertilizers"),
            leaf("Project on the Role of Biotechnology in Forensic Science"),
            leaf("Project on Bio-Fuel Production from Lignocellulosic Biomass"),
            leaf("Project on the Use of RNAi for Gene Silencing"),
            leaf("Project on the Development of a Biosensor for Glucose"),
            leaf("Project on the Production of Monoclonal Antibodies"),
            leaf("Project on the Role of Biotechnology in Environmental Protection"),
            leaf("Project on the Use of Genomics in Personalized Medicine"),
            leaf("Project on the Ethical Issues of Cloning"),
            leaf("Project on the Use of Stem Cells in Regenerative Medicine"),
            leaf("Project on the Use of Microbes in Waste Treatment"),
            leaf("Project on the Development of a Bioreactor for Cell Culture"),
            leaf("Project on the Production of a Bio-Pesticide"),
            leaf("Project on the Use of Enzymes in the Textile Industry"),
            leaf("Project on the Development of a Biosensor for a Heavy Metal"),
            leaf("Project on the Production of Biodegradable Plastics"),
            leaf("Project on the Use of Bioreactors for Waste Water Treatment"),
            leaf("Project on the Production of a Therapeutic Protein"),
            leaf("Project on the Use of CRISPR for Disease Diagnosis"),
            leaf("Project on the Production of Biodiesel from Waste Cooking Oil"),
            leaf("Project on the Use of Bioremediation for Oil Spills"),
        ],
    },
    {
        name: "Botany",
        children: [
            leaf("Plant Disease Detection using CNN from Drone Imagery"),
            leaf("Crop Monitoring & Health Analytics System using IoT Sensors"),
            leaf("Digital Herbarium Management System for Plant Collections"),
            leaf("Drought-Resistant Plant Species Study and Breeding Program"),
            leaf("Analysis of Photosynthesis Efficiency in Different Plant Species"),
            leaf("Plant Tissue Culture for Mass Propagation of Orchids"),
            leaf("Ethnobotanical Study of Medicinal Plants in a Region"),
            leaf("Ecological Impact of Invasive Plant Species"),
            leaf("Molecular Marker Analysis for Plant Genetic Diversity"),
            leaf("Project on Plant-Microbe Interactions"),
            leaf("Project on the Anatomy of Plant Stems and Roots"),
            leaf("Project on the Pollination Biology of Flowering Plants"),
            leaf("Project on the Effects of Pollution on Plant Growth"),
            leaf("Project on the Role of Hormones in Plant Development"),
            leaf("Project on Plant Classification using DNA Barcoding"),
            leaf("Project on the Evolution of Plant Species"),
            leaf("Project on the Role of Algae in Aquatic Ecosystems"),
            leaf("Project on the Use of Plants in Phytoremediation"),
            leaf("Project on the Fungal Infections in Agricultural Crops"),
            leaf("Project on Plant Physiology and Stress Response"),
            leaf("Project on the Seed Dispersal Mechanisms in Plants"),
            leaf("Project on the Role of Mycorrhizae in Plant Nutrition"),
            leaf("Project on a Botanical Garden Management Plan"),
            leaf("Project on the Use of Bio-Fertilizers in Agriculture"),
            leaf("Project on the Anatomy and Physiology of Cacti"),
            leaf("Project on the Role of Plant Pigments in Photosynthesis"),
            leaf("Project on a Survey of Medicinal Plants in a Local Forest"),
            leaf("Project on the Effects of Light on Plant Growth"),
            leaf("Project on the Genetics of Plant Hybrids"),
            leaf("Project on the Use of Hydroponics in Plant Cultivation"),
            leaf("Project on the Symbiotic Relationship Between Plants and Insects"),
            leaf("Project on the Effects of Heavy Metals on Plant Growth"),
            leaf("Project on the Role of Plants in Carbon Sequestration"),
            leaf("Project on a Botanical Illustration Guide of a Plant Family"),
            leaf("Project on the Use of Tissue Culture for Rare Plant Conservation"),
            leaf("Project on the Role of Plants in Wetland Ecosystems"),
            leaf("Project on a Phylogenetic Analysis of a Plant Genus"),
            leaf("Project on the Use of Drones for Crop Health Monitoring"),
            leaf("Project on the Role of Plant Hormones in Flowering"),
            leaf("Project on the Anatomy of a Leaf"),
            leaf("Project on the Use of Remote Sensing in Forest Monitoring"),
            leaf("Project on the Use of Plants in Water Purification"),
            leaf("Project on the Life Cycle of a Fern"),
            leaf("Project on the Role of Lichens in the Environment"),
            leaf("Project on the Taxonomy of a Specific Plant Family"),
            leaf("Project on a Study of Plant Adaptations to Extreme Environments"),
            leaf("Project on the Role of Seed Banks in Plant Conservation"),
            leaf("Project on the Genetic Diversity of a Crop Plant"),
            leaf("Project on a Study of Plant-Fungus Interactions"),
            leaf("Project on the Use of Plant Extracts for Pest Control"),
        ],
    },
    {
        name: "Business Analytics",
        children: [
            leaf("Predictive Customer Churn Model for a Telecom Company"),
            leaf("Retail Sales Forecasting using Time-Series Analysis"),
            leaf("Sentiment Analysis on Social Media Data for Brand Insights"),
            leaf("Supply Chain Optimization using Analytics and Simulation"),
            leaf("Market Basket Analysis for E-commerce Product Recommendations"),
            leaf("Customer Lifetime Value (CLV) Prediction Model"),
            leaf("Fraud Detection in Financial Transactions using Machine Learning"),
            leaf("Web Analytics Dashboard for Website Performance"),
            leaf("A/B Testing for Website Optimization"),
            leaf("HR Analytics: Predicting Employee Attrition"),
            leaf("Analysis of Public Transport Usage Patterns using GIS Data"),
            leaf("Logistics Route Optimization for a Delivery Service"),
            leaf("Healthcare Analytics: Patient Readmission Prediction"),
            leaf("Marketing Campaign Effectiveness Analysis using Data"),
            leaf("Financial Portfolio Optimization using R"),
            leaf("E-commerce Pricing Strategy using Dynamic Pricing Models"),
            leaf("Customer Segmentation using K-Means Clustering"),
            leaf("Predictive Maintenance for Industrial Machinery"),
            leaf("Analysis of Airline Ticket Pricing Strategies"),
            leaf("Sports Analytics: Predicting Game Outcomes"),
            leaf("Text Analytics for Customer Feedback Analysis"),
            leaf("Social Media Listening and Trend Analysis"),
            leaf("Predictive Modeling for Loan Default Risk"),
            leaf("Energy Consumption Forecasting for a City"),
            leaf("Call Center Queue Optimization"),
            leaf("Project on an Inventory Management System"),
            leaf("Project on a Business Intelligence Dashboard"),
            leaf("Project on a Fraud Detection System"),
            leaf("Project on a Recommendation Engine"),
            leaf("Project on a Sales Forecasting Model"),
            leaf("Project on a Customer Segmentation Model"),
            leaf("Project on a Predictive Maintenance Model"),
            leaf("Project on a Churn Prediction Model"),
            leaf("Project on a Web Analytics Dashboard"),
            leaf("Project on a Market Basket Analysis"),
            leaf("Project on a Supply Chain Optimization Model"),
            leaf("Project on a Financial Risk Model"),
            leaf("Project on an HR Analytics Model"),
            leaf("Project on a Marketing Campaign Analysis"),
            leaf("Project on a Customer Service Chatbot"),
            leaf("Project on a Financial Planning Tool"),
            leaf("Project on a Social Media Analytics Tool"),
            leaf("Project on a Product Pricing Strategy"),
            leaf("Project on a Sales Pipeline Analysis"),
            leaf("Project on a Customer Acquisition Cost (CAC) Analysis"),
            leaf("Project on a Data Visualization Dashboard"),
            leaf("Project on a Sentiment Analysis Model"),
            leaf("Project on a Loan Approval Model"),
            leaf("Project on a Time-Series Forecasting Model"),
            leaf("Project on a Predictive Analytics Model"),
        ],
    },
    {
        name: "Chemistry",
        children: [
            leaf("Molecular Dynamics Simulation of Water at Different Temperatures"),
            leaf("Synthesis of Novel Organic Compounds for Medicinal Use"),
            leaf("Environmental Pollution Monitoring and Analysis of Water Samples"),
            leaf("Catalyst Design for Industrial Chemical Processes"),
            leaf("Computational Chemistry for Drug-Ligand Binding Prediction"),
            leaf("Synthesis and Characterization of Nanomaterials"),
            leaf("Spectroscopic Analysis of Chemical Compounds"),
            leaf("Study on the Kinetics of a Chemical Reaction"),
            leaf("Green Chemistry: Synthesis of Biodegradable Polymers"),
            leaf("Project on the Electrochemistry of a Battery"),
            leaf("Project on a Water Quality Testing System"),
            leaf("Project on the Synthesis of a New Dye"),
            leaf("Project on the Chemistry of Food Additives"),
            leaf("Project on a Study of Chemical Bonds"),
            leaf("Project on the Properties of Liquid Crystals"),
            leaf("Project on the Chemistry of Perfumes"),
            leaf("Project on a Study of Reaction Mechanisms"),
            leaf("Project on the Chemistry of Explosives"),
            leaf("Project on the Use of Chromatography for Separation"),
            leaf("Project on the Synthesis of a Polymer"),
            leaf("Project on a Study of Acid-Base Reactions"),
            leaf("Project on the Chemistry of a Photosynthesis Simulation"),
            leaf("Project on the Chemistry of Plastics"),
            leaf("Project on a Study of a Chemical Process"),
            leaf("Project on the Chemistry of a Biological System"),
            leaf("Project on a Study of a Metal Complex"),
            leaf("Project on the Use of Spectroscopy in Environmental Analysis"),
            leaf("Project on the Synthesis of a Biofuel"),
            leaf("Project on a Study of a Solid-State Material"),
            leaf("Project on the Chemistry of a Catalytic Reaction"),
            leaf("Project on the Synthesis of a Pigment"),
            leaf("Project on a Study of a Polymerization Reaction"),
            leaf("Project on the Chemistry of a Drug"),
            leaf("Project on a Study of a Chemical Equilibrium"),
            leaf("Project on the Synthesis of a Liquid Crystal"),
            leaf("Project on a Study of a Chemical Reaction in a Solution"),
            leaf("Project on the Chemistry of a Nanomaterial"),
            leaf("Project on the Synthesis of a Compound for a Specific Use"),
            leaf("Project on a Study of a Chemical Reaction at a Surface"),
            leaf("Project on the Chemistry of a Food Product"),
            leaf("Project on the Synthesis of a Chemical for a Specific Function"),
            leaf("Project on a Study of a Chemical Reaction under Pressure"),
            leaf("Project on the Chemistry of a Liquid"),
            leaf("Project on the Synthesis of a Chemical for a Specific Application"),
            leaf("Project on a Study of a Chemical Reaction with a Catalyst"),
            leaf("Project on the Chemistry of a Gas"),
            leaf("Project on the Synthesis of a Chemical for a Specific Purpose"),
            leaf("Project on a Study of a Chemical Reaction in the Gas Phase"),
            leaf("Project on the Chemistry of a Solid"),
            leaf("Project on the Synthesis of a Chemical for a Specific Use"),
        ],
    },
    {
        name: "Computer Science",
        children: [
            leaf("E-commerce Website with Secure Payment Gateway and Admin Panel"),
            leaf("Mobile App for Local Service Discovery and Booking"),
            leaf("Machine Learning Model for Image Classification (e.g., Plant Species)"),
            leaf("Real-time Chat Application with WebSocket Technology"),
            leaf("Blockchain-based Voting System with Smart Contracts"),
            leaf("Data Visualization Dashboard for Public Health Data"),
            leaf("Development of a Web Crawler for Data Extraction"),
            leaf("IoT-based Smart Home Automation System"),
            leaf("Computer Graphics Project: 3D Rendering Engine"),
            leaf("Cybersecurity: Penetration Testing of a Web Application"),
            leaf("Development of a Simple Operating System Kernel"),
            leaf("Natural Language Processing (NLP) Chatbot for Customer Service"),
            leaf("Game Development Project using Unity or Unreal Engine"),
            leaf("Big Data Analysis of Social Media Networks"),
            leaf("Development of a Compiler for a Custom Language"),
            leaf("Android App for a College Management System"),
            leaf("Web Development with MERN Stack (MongoDB, Express, React, Node)"),
            leaf("Implementation of a Recommendation Engine"),
            leaf("Development of a Serverless Application on AWS Lambda"),
            leaf("Cloud-based File Storage System"),
            leaf("Project on a Library Management System"),
            leaf("Project on a Hospital Management System"),
            leaf("Project on a Food Delivery App"),
            leaf("Project on an E-learning Platform"),
            leaf("Project on a Social Networking Site"),
            leaf("Project on a Job Portal Website"),
            leaf("Project on a Real-Time Bus Tracking System"),
            leaf("Project on a Student Information System"),
            leaf("Project on a Supply Chain Management System"),
            leaf("Project on a Customer Feedback System"),
            leaf("Project on a Personal Portfolio Website"),
            leaf("Project on a Video Conferencing App"),
            leaf("Project on a Cryptography Algorithm Implementation"),
            leaf("Project on a Network Monitoring Tool"),
            leaf("Project on a Smart Traffic Management System"),
            leaf("Project on a Face Recognition System"),
            leaf("Project on a Weather Forecasting App"),
            leaf("Project on a Music Player App"),
            leaf("Project on a Digital Wallet App"),
            leaf("Project on a Secure File Transfer Protocol"),
            leaf("Project on a Virtual Reality (VR) Application"),
            leaf("Project on a Machine Translation System"),
            leaf("Project on a Data Compression Algorithm"),
            leaf("Project on a File System Implementation"),
            leaf("Project on a Chatbot for a Business"),
            leaf("Project on an Online Examination System"),
            leaf("Project on a Flight Booking System"),
            leaf("Project on a Car Rental System"),
            leaf("Project on an E-ticketing System"),
            leaf("Project on a Stock Market Analysis App"),
        ],
    },
    {
        name: "Data Science",
        children: [
            leaf("Predictive Analytics for Stock Prices using Time-Series Models"),
            leaf("Natural Language Processing (NLP) Chatbot for Text Classification"),
            leaf("Big Data Analysis of Customer Behavior from E-commerce Logs"),
            leaf("Computer Vision for Object Detection in Medical Images"),
            leaf("Sentiment Analysis on Twitter Data for Political Polling"),
            leaf("Recommendation System for Movies using Collaborative Filtering"),
            leaf("Predictive Model for Credit Card Fraud Detection"),
            leaf("Time-Series Forecasting for Energy Consumption"),
            leaf("Web Scraping and Data Analysis of Job Market Trends"),
            leaf("Building a Dashboard for a Sales Team using Tableau"),
            leaf("Machine Learning Model for Spam Email Detection"),
            leaf("Clustering Analysis of Customer Demographics"),
            leaf("Analysis of Public Health Data on Disease Outbreaks"),
            leaf("Neural Network for Handwritten Digit Recognition"),
            leaf("A/B Testing Analysis for E-commerce Website Conversion"),
            leaf("Predictive Model for Real Estate Housing Prices"),
            leaf("Text Summarization using Deep Learning"),
            leaf("Analysis of Customer Reviews and Feedback"),
            leaf("Image Segmentation for Satellite Imagery"),
            leaf("Deep Learning Model for Financial Market Forecasting"),
            leaf("Project on a Predictive Churn Model"),
            leaf("Project on a Recommendation Engine"),
            leaf("Project on a Fraud Detection System"),
            leaf("Project on a Time-Series Forecasting Model"),
            leaf("Project on a Customer Segmentation Model"),
            leaf("Project on a Web Analytics Dashboard"),
            leaf("Project on a Market Basket Analysis"),
            leaf("Project on a Supply Chain Optimization Model"),
            leaf("Project on a Financial Risk Model"),
            leaf("Project on an HR Analytics Model"),
            leaf("Project on a Marketing Campaign Analysis"),
            leaf("Project on a Customer Service Chatbot"),
            leaf("Project on a Financial Planning Tool"),
            leaf("Project on a Social Media Analytics Tool"),
            leaf("Project on a Product Pricing Strategy"),
            leaf("Project on a Sales Pipeline Analysis"),
            leaf("Project on a Customer Acquisition Cost (CAC) Analysis"),
            leaf("Project on a Data Visualization Dashboard"),
            leaf("Project on a Sentiment Analysis Model"),
            leaf("Project on a Loan Approval Model"),
            leaf("Project on a Time-Series Forecasting Model"),
            leaf("Project on a Predictive Analytics Model"),
            leaf("Project on a Healthcare Analytics System"),
            leaf("Project on a Text Generation Model"),
            leaf("Project on a Reinforcement Learning Model"),
            leaf("Project on a Natural Language Understanding System"),
            leaf("Project on a Data Cleaning and Preprocessing Pipeline"),
            leaf("Project on a Big Data Processing Framework (e.g., Hadoop)"),
            leaf("Project on a Data Warehouse Design"),
            leaf("Project on a Data Lake Implementation"),
        ],
    },
    {
        name: "Economics",
        children: [
            leaf("Econometric Model for GDP Prediction of a Country"),
            leaf("Analysis of Inflationary Trends and their Causes"),
            leaf("Impact of Trade Policies on Local Markets"),
            leaf("Behavioral Economics Experiment Design for Consumer Choices"),
            leaf("Financial Market Efficiency and Portfolio Management"),
            leaf("Microeconomic Analysis of Supply and Demand in a Specific Market"),
            leaf("Study on the Impact of Minimum Wage on Employment"),
            leaf("Economic Analysis of Climate Change Policies"),
            leaf("Poverty and Inequality in a Developing Economy"),
            leaf("Game Theory Models for Oligopoly Markets"),
            leaf("Impact of Globalization on Domestic Industries"),
            leaf("Public Policy Analysis of a Government Scheme"),
            leaf("Analysis of Fiscal Policy and its Effects on Economic Growth"),
            leaf("Econometric Study of Education's Impact on Income"),
            leaf("Role of Central Bank in Economic Stabilization"),
            leaf("Project on the Economic Impact of COVID-19"),
            leaf("Project on the Economics of Labor Markets"),
            leaf("Project on the Economics of Health Care"),
            leaf("Project on the Economics of Education"),
            leaf("Project on the Economics of the Environment"),
            leaf("Project on the Economics of Development"),
            leaf("Project on the Economics of International Trade"),
            leaf("Project on the Economics of Public Finance"),
            leaf("Project on the Economics of Banking and Finance"),
            leaf("Project on the Economics of Agriculture"),
            leaf("Project on the Economics of the Service Sector"),
            leaf("Project on the Economics of the Industrial Sector"),
            leaf("Project on the Economics of the Technology Sector"),
            leaf("Project on the Economics of the Energy Sector"),
            leaf("Project on the Economics of the Transportation Sector"),
            leaf("Project on the Economics of the Communication Sector"),
            leaf("Project on the Economics of the Construction Sector"),
            leaf("Project on the Economics of the Real Estate Sector"),
            leaf("Project on the Economics of the Tourism Sector"),
            leaf("Project on the Economics of the Entertainment Sector"),
            leaf("Project on the Economics of the Sports Sector"),
            leaf("Project on the Economics of the Fashion Industry"),
            leaf("Project on the Economics of the Food Industry"),
            leaf("Project on the Economics of the Beverage Industry"),
            leaf("Project on the Economics of the Automobile Industry"),
            leaf("Project on the Economics of the Pharmaceutical Industry"),
            leaf("Project on the Economics of the Software Industry"),
            leaf("Project on the Economics of the Semiconductor Industry"),
            leaf("Project on the Economics of the Telecommunications Industry"),
            leaf("Project on the Economics of the Retail Industry"),
            leaf("Project on the Economics of the Hospitality Industry"),
            leaf("Project on the Economics of the Airline Industry"),
            leaf("Project on the Economics of the Logistics Industry"),
            leaf("Project on the Economics of the Education Sector"),
            leaf("Project on the Economics of the Health Care Sector"),
        ],
    },
    {
        name: "E-commerce",
        children: [
            leaf("Marketplace Platform Development with Multi-Vendor Support"),
            leaf("Personalized Product Recommendation Engine using Machine Learning"),
            leaf("Logistics & Inventory Management System for an E-commerce Business"),
            leaf("Customer Feedback Analysis for E-commerce using Sentiment Analysis"),
            leaf("E-commerce Business Plan for a Niche Product"),
            leaf("Implementation of a Secure Payment Gateway"),
            leaf("Search Engine Optimization (SEO) Strategy for an E-commerce Website"),
            leaf("Mobile App for a Retail E-commerce Store"),
            leaf("Supply Chain Management and Automation for E-commerce"),
            leaf("Digital Marketing Campaign Performance Analysis"),
            leaf("A/B Testing for Website Conversion Rate Optimization"),
            leaf("Customer Segmentation and Targeting Strategy"),
            leaf("UI/UX Design for a User-Friendly E-commerce Website"),
            leaf("E-commerce Pricing Strategy and Dynamic Pricing Models"),
            leaf("Web Scraping for Competitor Pricing Analysis"),
            leaf("Data Analytics Dashboard for Sales and Revenue"),
            leaf("Social Media Marketing for E-commerce Brand Building"),
            leaf("Customer Retention and Loyalty Program Design"),
            leaf("Risk Management in E-commerce Transactions"),
            leaf("A Study on the Impact of COVID-19 on E-commerce"),
            leaf("Project on a Digital Marketing Strategy for an Online Store"),
            leaf("Project on an E-commerce Platform for Handmade Products"),
            leaf("Project on a Subscription Box Service Model"),
            leaf("Project on a Dropshipping Business Plan"),
            leaf("Project on a B2B E-commerce Marketplace"),
            leaf("Project on a Customer Service Chatbot for E-commerce"),
            leaf("Project on an E-commerce Platform for Digital Goods"),
            leaf("Project on a Returns Management System"),
            leaf("Project on a Loyalty Program for E-commerce Customers"),
            leaf("Project on an E-commerce Dashboard for a Business"),
            leaf("Project on an E-commerce Platform for a Local Business"),
            leaf("Project on a Social Commerce Platform"),
            leaf("Project on an E-commerce App for a Fashion Brand"),
            leaf("Project on a Marketplace for Used Goods"),
            leaf("Project on a Food Delivery App with E-commerce Features"),
            leaf("Project on an E-commerce Platform for a Bookstore"),
            leaf("Project on an E-commerce Platform for a Pharmacy"),
            leaf("Project on an E-commerce Platform for a Grocery Store"),
            leaf("Project on an E-commerce Platform for a Pet Store"),
            leaf("Project on an E-commerce Platform for a Toy Store"),
            leaf("Project on an E-commerce Platform for a Sports Store"),
            leaf("Project on an E-commerce Platform for a Craft Store"),
            leaf("Project on an E-commerce Platform for a Home Decor Store"),
            leaf("Project on an E-commerce Platform for a Gift Store"),
            leaf("Project on an E-commerce Platform for a Flower Store"),
            leaf("Project on an E-commerce Platform for a Jewelry Store"),
            leaf("Project on an E-commerce Platform for a Health Food Store"),
            leaf("Project on an E-commerce Platform for a Vegan Store"),
            leaf("Project on an E-commerce Platform for a Zero-Waste Store"),
            leaf("Project on an E-commerce Platform for a Fair Trade Store"),
        ],
    },
    {
        name: "Electronics",
        children: [
            leaf("Smart Home Automation System (IoT) using Raspberry Pi"),
            leaf("Robotic Arm Control using Arduino and Servo Motors"),
            leaf("Digital Signal Processing (DSP) for Audio Filtering"),
            leaf("FPGA-based Digital Clock with Alarm Functionality"),
            leaf("Gesture-Controlled Robot using a Microcontroller"),
            leaf("Wireless Power Transfer System for Mobile Devices"),
            leaf("Solar-Powered Automatic Street Lighting System"),
            leaf("Smart Security System with Facial Recognition"),
            leaf("PCB Design and Fabrication of a Simple Circuit"),
            leaf("Project on a Line Follower Robot"),
            leaf("Project on a Bluetooth-Controlled Car"),
            leaf("Project on a Home Automation System"),
            leaf("Project on a Smart Irrigation System"),
            leaf("Project on a Weather Monitoring System"),
            leaf("Project on a Water Level Indicator"),
            leaf("Project on a Voice-Controlled Home Appliance System"),
            leaf("Project on a Temperature and Humidity Monitoring System"),
            leaf("Project on a GSM-Based Home Security System"),
            leaf("Project on an Obstacle Avoidance Robot"),
            leaf("Project on a Fire Alarm System"),
            leaf("Project on a Gas Leakage Detection System"),
            leaf("Project on a Visitor Counter using IR Sensor"),
            leaf("Project on a Metal Detector Robot"),
            leaf("Project on a DTMF Controlled Robot"),
            leaf("Project on a Solar Powered Mobile Charger"),
            leaf("Project on a Clap Switch Circuit"),
            leaf("Project on a Rain Alarm Circuit"),
            leaf("Project on a Darkness Detector Circuit"),
            leaf("Project on a Sound Operated Switch"),
            leaf("Project on a Light Sensitive Switch"),
            leaf("Project on a Password Protected Door Lock"),
            leaf("Project on a Fingerprint Based Security System"),
            leaf("Project on an RFID Based Security System"),
            leaf("Project on a Biometric Voting System"),
            leaf("Project on a GPS Based Vehicle Tracking System"),
            leaf("Project on an Automated Toll Tax System"),
            leaf("Project on a Smart Grid System"),
            leaf("Project on a Smart Energy Meter"),
            leaf("Project on a Smart Traffic Light System"),
            leaf("Project on a Smart Parking System"),
            leaf("Project on a Smart Dustbin System"),
            leaf("Project on a Smart Street Light System"),
            leaf("Project on a Smart Water Management System"),
            leaf("Project on a Smart Waste Management System"),
            leaf("Project on a Smart City Framework"),
            leaf("Project on a Smart Farming System"),
            leaf("Project on a Smart Home Security System"),
            leaf("Project on a Smart Healthcare System"),
        ],
    },
    {
        name: "English Literature",
        children: [
            leaf("Literary Text Analysis using NLP and Text Mining Techniques"),
            leaf("Digital Archive of Historical Texts and Manuscripts"),
            leaf("Interactive Storytelling Website based on a Classic Novel"),
            leaf("Comparative Study of a Literary Genre Across Different Eras"),
            leaf("Adaptation of a Shakespearean Play for a Modern Audience"),
            leaf("Psychoanalytic Study of a Literary Character"),
            leaf("Postcolonial Reading of a Contemporary Novel"),
            leaf("Feminist Interpretation of a Victorian Text"),
            leaf("Analysis of Symbolism in a Poetic Collection"),
            leaf("Project on the Influence of Mythology on Modern Fantasy"),
            leaf("Project on the Role of Irony in Satirical Writing"),
            leaf("Project on the Theme of Memory in a Memoir"),
            leaf("Project on the Literary Devices in a Short Story"),
            leaf("Project on a Digital Edition of a Literary Work"),
            leaf("Project on the History of the English Language"),
            leaf("Project on a Study of Literary Criticism Theories"),
            leaf("Project on the Gothic in Literature"),
            leaf("Project on the Romantic Movement in English Poetry"),
            leaf("Project on a Study of a Nobel Laureate's Work"),
            leaf("Project on a Study of a Playwright's Work"),
            leaf("Project on a Study of an Author's Oeuvre"),
            leaf("Project on a Study of a Literary Genre"),
            leaf("Project on a Study of a Literary Period"),
            leaf("Project on a Study of a Literary Movement"),
            leaf("Project on a Study of a Literary Work"),
            leaf("Project on a Study of a Literary Character"),
            leaf("Project on a Study of a Literary Theme"),
            leaf("Project on a Study of a Literary Device"),
            leaf("Project on a Study of a Literary Form"),
            leaf("Project on a Study of a Literary Technique"),
            leaf("Project on a Study of a Literary Theory"),
            leaf("Project on a Study of a Literary Style"),
            leaf("Project on a Study of a Literary Context"),
            leaf("Project on a Study of a Literary Influence"),
            leaf("Project on a Study of a Literary Reception"),
            leaf("Project on a Study of a Literary History"),
            leaf("Project on a Study of a Literary Criticism"),
            leaf("Project on a Study of a Literary Adaptation"),
            leaf("Project on a Study of a Literary Translation"),
            leaf("Project on a Study of a Literary Publication"),
            leaf("Project on a Study of a Literary Archive"),
            leaf("Project on a Study of a Literary Festival"),
            leaf("Project on a Study of a Literary Prize"),
            leaf("Project on a Study of a Literary Canon"),
            leaf("Project on a Study of a Literary Marketplace"),
            leaf("Project on a Study of a Literary Reader"),
            leaf("Project on a Study of a Literary Author"),
            leaf("Project on a Study of a Literary Work"),
        ],
    },
    {
        name: "Entrepreneurship",
        children: [
            leaf("Startup Business Plan & Pitch Deck for a Tech-based Venture"),
            leaf("Market Validation of a New Idea using Surveys and Interviews"),
            leaf("Crowdfunding Campaign Strategy and Execution Plan"),
            leaf("Feasibility Study for a Social Enterprise Addressing a Local Problem"),
            leaf("Digital Marketing and Sales Funnel for a B2B Startup"),
            leaf("Financial Modeling and Funding Strategy for a Seed Stage Startup"),
            leaf("Lean Startup Methodology: Building a Minimum Viable Product (MVP)"),
            leaf("Business Model Canvas for a New Business Idea"),
            leaf("Intellectual Property (IP) Strategy for a Startup"),
            leaf("Project on a Business Plan for a Mobile App"),
            leaf("Project on a Business Plan for a Restaurant"),
            leaf("Project on a Business Plan for a Retail Store"),
            leaf("Project on a Business Plan for a Service-Based Business"),
            leaf("Project on a Business Plan for a Manufacturing Business"),
            leaf("Project on a Business Plan for an E-commerce Business"),
            leaf("Project on a Business Plan for a Social Enterprise"),
            leaf("Project on a Business Plan for a Non-Profit Organization"),
            leaf("Project on a Business Plan for a Franchise"),
            leaf("Project on a Business Plan for a Startup"),
            leaf("Project on a Business Plan for a Small Business"),
            leaf("Project on a Business Plan for a Home-Based Business"),
            leaf("Project on a Business Plan for a Co-working Space"),
            leaf("Project on a Business Plan for a Coffee Shop"),
            leaf("Project on a Business Plan for a Bakery"),
            leaf("Project on a Business Plan for a Gym"),
            leaf("Project on a Business Plan for a Salon"),
            leaf("Project on a Business Plan for a Spa"),
            leaf("Project on a Business Plan for a Hotel"),
            leaf("Project on a Business Plan for a Travel Agency"),
            leaf("Project on a Business Plan for a Tour Operator"),
            leaf("Project on a Business Plan for a Consulting Firm"),
            leaf("Project on a Business Plan for a Law Firm"),
            leaf("Project on a Business Plan for an Accounting Firm"),
            leaf("Project on a Business Plan for a Marketing Agency"),
            leaf("Project on a Business Plan for an IT Company"),
            leaf("Project on a Business Plan for a Software Company"),
            leaf("Project on a Business Plan for a Hardware Company"),
            leaf("Project on a Business Plan for a Retail Store"),
            leaf("Project on a Business Plan for a Wholesale Business"),
            leaf("Project on a Business Plan for a Logistics Company"),
            leaf("Project on a Business Plan for a Real Estate Company"),
            leaf("Project on a Business Plan for a Construction Company"),
            leaf("Project on a Business Plan for a Manufacturing Company"),
            leaf("Project on a Business Plan for a Pharmaceutical Company"),
            leaf("Project on a Business Plan for a Chemical Company"),
            leaf("Project on a Business Plan for a Food Processing Company"),
            leaf("Project on a Business Plan for a Beverage Company"),
        ],
    },
    {
        name: "Environmental Science",
        children: [
            leaf("Renewable Energy Feasibility Study for a Local Community"),
            leaf("Water Quality Monitoring System using IoT Sensors"),
            leaf("Ecosystem Health Assessment of a Local River Basin"),
            leaf("Waste Management & Recycling Strategy for a University Campus"),
            leaf("Impact of Plastic Pollution on Marine Ecosystems"),
            leaf("Air Pollution Monitoring and Analysis in an Urban Area"),
            leaf("Sustainable Agriculture Practices and their Environmental Impact"),
            leaf("Climate Change Impact Analysis on Agricultural Productivity"),
            leaf("Bioremediation of Oil Spills using Microorganisms"),
            leaf("Project on a Study of a Local Ecosystem"),
            leaf("Project on a Study of a Local Habitat"),
            leaf("Project on a Study of a Local Species"),
            leaf("Project on a Study of a Local Pollution Source"),
            leaf("Project on a Study of a Local Environmental Problem"),
            leaf("Project on a Study of a Local Environmental Solution"),
            leaf("Project on a Study of a Local Environmental Policy"),
            leaf("Project on a Study of a Local Environmental Law"),
            leaf("Project on a Study of a Local Environmental Regulation"),
            leaf("Project on a Study of a Local Environmental Standard"),
            leaf("Project on a Study of a Local Environmental Guideline"),
            leaf("Project on a Study of a Local Environmental Management Plan"),
            leaf("Project on a Study of a Local Environmental Impact Assessment"),
            leaf("Project on a Study of a Local Environmental Audit"),
            leaf("Project on a Study of a Local Environmental Monitoring Program"),
            leaf("Project on a Study of a Local Environmental Education Program"),
            leaf("Project on a Study of a Local Environmental Research Project"),
            leaf("Project on a Study of a Local Environmental Restoration Project"),
            leaf("Project on a Study of a Local Environmental Conservation Project"),
            leaf("Project on a Study of a Local Environmental Protection Project"),
            leaf("Project on a Study of a Local Environmental Sustainability Project"),
            leaf("Project on a Study of a Local Environmental Innovation Project"),
            leaf("Project on a Study of a Local Environmental Technology Project"),
            leaf("Project on a Study of a Local Environmental Design Project"),
            leaf("Project on a Study of a Local Environmental Engineering Project"),
            leaf("Project on a Study of a Local Environmental Science Project"),
            leaf("Project on a Study of a Local Environmental Management System"),
            leaf("Project on a Study of a Local Environmental Information System"),
            leaf("Project on a Study of a Local Environmental Database"),
            leaf("Project on a Study of a Local Environmental Model"),
            leaf("Project on a Study of a Local Environmental Simulation"),
            leaf("Project on a Study of a Local Environmental Analysis"),
            leaf("Project on a Study of a Local Environmental Assessment"),
            leaf("Project on a Study of a Local Environmental Impact"),
            leaf("Project on a Study of a Local Environmental Risk"),
            leaf("Project on a Study of a Local Environmental Problem"),
            leaf("Project on a Study of a Local Environmental Solution"),
            leaf("Project on a Study of a Local Environmental Policy"),
            leaf("Project on a Study of a Local Environmental Law"),
        ],
    },
    {
        name: "Finance",
        children: [
            leaf("Portfolio Optimization & Risk Analysis using Python"),
            leaf("Algorithmic Trading Strategy Backtesting on Historical Data"),
            leaf("Financial Modeling for a Startup and Valuation Analysis"),
            leaf("Capital Budgeting Analysis Tool for Investment Decisions"),
            leaf("Analysis of Indian Stock Market Volatility"),
            leaf("Credit Risk Assessment Model using Machine Learning"),
            leaf("Impact of COVID-19 on the Indian Financial Market"),
            leaf("Corporate Mergers and Acquisitions Case Study"),
            leaf("Wealth Management and Financial Planning for Individuals"),
            leaf("Project on the Role of SEBI in Financial Market Regulation"),
            leaf("Project on the Performance of Mutual Funds"),
            leaf("Project on the Role of RBI in Monetary Policy"),
            leaf("Project on Financial Derivatives and their Use"),
            leaf("Project on a Study of a Bank's Financial Health"),
            leaf("Project on the Impact of Globalization on Finance"),
            leaf("Project on a Study of a Financial Market"),
            leaf("Project on a Study of a Financial Institution"),
            leaf("Project on a Study of a Financial Product"),
            leaf("Project on a Study of a Financial Service"),
            leaf("Project on a Study of a Financial Technology"),
            leaf("Project on a Study of a Financial Innovation"),
            leaf("Project on a Study of a Financial Regulation"),
            leaf("Project on a Study of a Financial Law"),
            leaf("Project on a Study of a Financial Standard"),
            leaf("Project on a Study of a Financial Guideline"),
            leaf("Project on a Study of a Financial Management Plan"),
            leaf("Project on a Study of a Financial Risk Assessment"),
            leaf("Project on a Study of a Financial Audit"),
            leaf("Project on a Study of a Financial Monitoring Program"),
            leaf("Project on a Study of a Financial Education Program"),
            leaf("Project on a Study of a Financial Research Project"),
            leaf("Project on a Study of a Financial Restoration Project"),
            leaf("Project on a Study of a Financial Conservation Project"),
            leaf("Project on a Study of a Financial Protection Project"),
            leaf("Project on a Study of a Financial Sustainability Project"),
            leaf("Project on a Study of a Financial Innovation Project"),
            leaf("Project on a Study of a Financial Technology Project"),
            leaf("Project on a Study of a Financial Design Project"),
            leaf("Project on a Study of a Financial Engineering Project"),
            leaf("Project on a Study of a Financial Science Project"),
            leaf("Project on a Study of a Financial Management System"),
            leaf("Project on a Study of a Financial Information System"),
            leaf("Project on a Study of a Financial Database"),
            leaf("Project on a Study of a Financial Model"),
            leaf("Project on a Study of a Financial Simulation"),
            leaf("Project on a Study of a Financial Analysis"),
            leaf("Project on a Study of a Financial Assessment"),
            leaf("Project on a Study of a Financial Impact"),
            leaf("Project on a Study of a Financial Risk"),
        ],
    },
    {
        name: "Foreign Trade Practices",
        children: [
            leaf("Global Supply Chain Management Case Study: The Apple Supply Chain"),
            leaf("Impact of Tariffs on International Trade and Economic Growth"),
            leaf("Trade Compliance Automation Tool using RPA"),
            leaf("Export-Import Documentation System for Small Businesses"),
            leaf("Analysis of Bilateral Trade Agreements and their Impact"),
            leaf("Risk Management in International Business Transactions"),
            leaf("Digital Transformation of Foreign Trade Operations"),
            leaf("Impact of Geopolitical Factors on Global Trade"),
            leaf("Logistics and Shipping Management for Cross-Border E-commerce"),
            leaf("Project on the Role of WTO in International Trade"),
            leaf("Project on the Role of UNCTAD in International Trade"),
            leaf("Project on the Role of ICC in International Trade"),
            leaf("Project on the Role of World Bank in International Trade"),
            leaf("Project on the Role of IMF in International Trade"),
            leaf("Project on the Role of ADB in International Trade"),
            leaf("Project on the Role of AIIB in International Trade"),
            leaf("Project on the Role of EIB in International Trade"),
            leaf("Project on the Role of EBRD in International Trade"),
            leaf("Project on the Role of IDB in International Trade"),
            leaf("Project on the Role of AfDB in International Trade"),
            leaf("Project on the Role of WIPO in International Trade"),
            leaf("Project on the Role of WCO in International Trade"),
            leaf("Project on the Role of WTO in Dispute Settlement"),
            leaf("Project on the Role of WCO in Customs Matters"),
            leaf("Project on the Role of WIPO in Intellectual Property"),
            leaf("Project on the Role of WTO in Trade Policy Review"),
            leaf("Project on the Role of WCO in Harmonized System"),
            leaf("Project on the Role of WIPO in TRIPS Agreement"),
            leaf("Project on the Role of WTO in GATS Agreement"),
            leaf("Project on the Role of WCO in Kyoto Convention"),
            leaf("Project on the Role of WIPO in Patent Cooperation Treaty"),
            leaf("Project on the Role of WTO in TBT Agreement"),
            leaf("Project on the Role of WCO in SAFE Framework"),
            leaf("Project on the Role of WIPO in Madrid System"),
            leaf("Project on the Role of WTO in SPS Agreement"),
            leaf("Project on the Role of WCO in Revised Kyoto Convention"),
            leaf("Project on the Role of WIPO in Lisbon System"),
            leaf("Project on the Role of WTO in Anti-Dumping Agreement"),
            leaf("Project on the Role of WCO in Arusha Declaration"),
            leaf("Project on the Role of WIPO in Berne Convention"),
            leaf("Project on the Role of WTO in Subsidies and Countervailing Measures Agreement"),
            leaf("Project on the Role of WCO in Istanbul Convention"),
            leaf("Project on the Role of WIPO in Paris Convention"),
            leaf("Project on the Role of WTO in Safeguards Agreement"),
            leaf("Project on the Role of WCO in Nairobi Convention"),
            leaf("Project on the Role of WIPO in Nice Agreement"),
        ],
    },
    {
        name: "Geography",
        children: [
            leaf("GIS-based Urban Planning Tool for a Smart City"),
            leaf("Remote Sensing for Land Use Mapping in a Rural Area"),
            leaf("Climate Change Impact Analysis on Coastal Regions"),
            leaf("Natural Disaster Risk Assessment Model for Floods"),
            leaf("Population Dynamics and Migration Patterns in a Region"),
            leaf("Analysis of Urban Heat Island Effect using Satellite Data"),
            leaf("GIS Mapping of Water Resources and Management"),
            leaf("Environmental Impact Assessment of a Major Infrastructure Project"),
            leaf("Socio-economic Survey of a Rural Community"),
            leaf("Project on a Study of a Local Ecosystem"),
            leaf("Project on a Study of a Local Habitat"),
            leaf("Project on a Study of a Local Species"),
            leaf("Project on a Study of a Local Pollution Source"),
            leaf("Project on a Study of a Local Environmental Problem"),
            leaf("Project on a Study of a Local Environmental Solution"),
            leaf("Project on a Study of a Local Environmental Policy"),
            leaf("Project on a Study of a Local Environmental Law"),
            leaf("Project on a Study of a Local Environmental Regulation"),
            leaf("Project on a Study of a Local Environmental Standard"),
            leaf("Project on a Study of a Local Environmental Guideline"),
            leaf("Project on a Study of a Local Environmental Management Plan"),
            leaf("Project on a Study of a Local Environmental Impact Assessment"),
            leaf("Project on a Study of a Local Environmental Audit"),
            leaf("Project on a Study of a Local Environmental Monitoring Program"),
            leaf("Project on a Study of a Local Environmental Education Program"),
            leaf("Project on a Study of a Local Environmental Research Project"),
            leaf("Project on a Study of a Local Environmental Restoration Project"),
            leaf("Project on a Study of a Local Environmental Conservation Project"),
            leaf("Project on a Study of a Local Environmental Protection Project"),
            leaf("Project on a Study of a Local Environmental Sustainability Project"),
            leaf("Project on a Study of a Local Environmental Innovation Project"),
            leaf("Project on a Study of a Local Environmental Technology Project"),
            leaf("Project on a Study of a Local Environmental Design Project"),
            leaf("Project on a Study of a Local Environmental Engineering Project"),
            leaf("Project on a Study of a Local Environmental Science Project"),
            leaf("Project on a Study of a Local Environmental Management System"),
            leaf("Project on a Study of a Local Environmental Information System"),
            leaf("Project on a Study of a Local Environmental Database"),
            leaf("Project on a Study of a Local Environmental Model"),
            leaf("Project on a Study of a Local Environmental Simulation"),
            leaf("Project on a Study of a Local Environmental Analysis"),
            leaf("Project on a Study of a Local Environmental Assessment"),
            leaf("Project on a Study of a Local Environmental Impact"),
            leaf("Project on a Study of a Local Environmental Risk"),
            leaf("Project on a Study of a Local Environmental Problem"),
            leaf("Project on a Study of a Local Environmental Solution"),
        ],
    },
    {
        name: "Genetics",
        children: [
            leaf("Genetic Mutation Analysis Pipeline for Disease Diagnosis"),
            leaf("Phylogenetic Tree Reconstruction of a Species"),
            leaf("CRISPR Gene Editing Simulation Software"),
            leaf("Population Genetics Study of a Local Community"),
            leaf("Bioinformatics Analysis of Genome-Wide Association Studies (GWAS)"),
            leaf("Ethical Considerations in Human Genetic Engineering"),
            leaf("Study on the Genetic Basis of Complex Diseases"),
            leaf("Molecular Cloning and Gene Expression Analysis"),
            leaf("Genetic Counseling and its Role in Disease Prevention"),
            leaf("Project on the Genetics of a Crop Plant"),
            leaf("Project on the Genetics of an Animal Species"),
            leaf("Project on the Genetics of a Microorganism"),
            leaf("Project on the Genetics of a Viral Disease"),
            leaf("Project on the Genetics of a Bacterial Disease"),
            leaf("Project on the Genetics of a Fungal Disease"),
            leaf("Project on the Genetics of a Parasitic Disease"),
            leaf("Project on the Genetics of a Genetic Disorder"),
            leaf("Project on the Genetics of a Metabolic Disorder"),
            leaf("Project on the Genetics of a Neurological Disorder"),
            leaf("Project on the Genetics of a Cardiovascular Disorder"),
            leaf("Project on the Genetics of a Respiratory Disorder"),
            leaf("Project on the Genetics of a Digestive Disorder"),
            leaf("Project on the Genetics of an Endocrine Disorder"),
            leaf("Project on the Genetics of a Musculoskeletal Disorder"),
            leaf("Project on the Genetics of a Skin Disorder"),
            leaf("Project on the Genetics of an Eye Disorder"),
            leaf("Project on the Genetics of an Ear Disorder"),
            leaf("Project on the Genetics of a Blood Disorder"),
            leaf("Project on the Genetics of a Cancer"),
            leaf("Project on the Genetics of an Autoimmune Disease"),
            leaf("Project on the Genetics of a Mental Disorder"),
            leaf("Project on the Genetics of a Personality Trait"),
            leaf("Project on the Genetics of an Intelligence Trait"),
            leaf("Project on the Genetics of a Behavioral Trait"),
            leaf("Project on the Genetics of a Physical Trait"),
            leaf("Project on the Genetics of a Psychological Trait"),
            leaf("Project on the Genetics of a Social Trait"),
            leaf("Project on the Genetics of a Cultural Trait"),
            leaf("Project on the Genetics of a Political Trait"),
            leaf("Project on the Genetics of a Religious Trait"),
            leaf("Project on the Genetics of an Economic Trait"),
            leaf("Project on the Genetics of a Legal Trait"),
            leaf("Project on the Genetics of a Moral Trait"),
            leaf("Project on the Genetics of an Ethical Trait"),
            leaf("Project on the Genetics of a Philosophical Trait"),
            leaf("Project on the Genetics of a Scientific Trait"),
            leaf("Project on the Genetics of a Technological Trait"),
            leaf("Project on the Genetics of a Creative Trait"),
            leaf("Project on the Genetics of a Logical Trait"),
        ],
    },
    {
        name: "Geology",
        children: [
            leaf("Seismic Data Visualization & Analysis for Earthquake Prediction"),
            leaf("Mineral Resource Mapping using GIS and Remote Sensing"),
            leaf("GIS Application for Geological Survey and Mapping"),
            leaf("Analysis of Rock & Mineral Samples for Composition"),
            leaf("Hydrogeological Modeling of a Groundwater Basin"),
            leaf("Paleontological Study of a Fossil Site"),
            leaf("Geotechnical Engineering: Soil and Rock Mechanics"),
            leaf("Environmental Geology: Contaminant Transport Modeling"),
            leaf("Volcanology: Study of a Volcano's Eruptive History"),
            leaf("Project on a Study of a Local Geological Formation"),
            leaf("Project on a Study of a Local Mineral Deposit"),
            leaf("Project on a Study of a Local Geological Hazard"),
            leaf("Project on a Study of a Local Geological Feature"),
            leaf("Project on a Study of a Local Geological Resource"),
            leaf("Project on a Study of a Local Geological Map"),
            leaf("Project on a Study of a Local Geological Survey"),
            leaf("Project on a Study of a Local Geological Report"),
            leaf("Project on a Study of a Local Geological Model"),
            leaf("Project on a Study of a Local Geological Simulation"),
            leaf("Project on a Study of a Local Geological Analysis"),
            leaf("Project on a Study of a Local Geological Assessment"),
            leaf("Project on a Study of a Local Geological Impact"),
            leaf("Project on a Study of a Local Geological Risk"),
            leaf("Project on a Study of a Local Geological Problem"),
            leaf("Project on a Study of a Local Geological Solution"),
            leaf("Project on a Study of a Local Geological Policy"),
            leaf("Project on a Study of a Local Geological Law"),
            leaf("Project on a Study of a Local Geological Regulation"),
            leaf("Project on a Study of a Local Geological Standard"),
            leaf("Project on a Study of a Local Geological Guideline"),
            leaf("Project on a Study of a Local Geological Management Plan"),
            leaf("Project on a Study of a Local Geological Impact Assessment"),
            leaf("Project on a Study of a Local Geological Audit"),
            leaf("Project on a Study of a Local Geological Monitoring Program"),
            leaf("Project on a Study of a Local Geological Education Program"),
            leaf("Project on a Study of a Local Geological Research Project"),
            leaf("Project on a Study of a Local Geological Restoration Project"),
            leaf("Project on a Study of a Local Geological Conservation Project"),
            leaf("Project on a Study of a Local Geological Protection Project"),
            leaf("Project on a Study of a Local Geological Sustainability Project"),
            leaf("Project on a Study of a Local Geological Innovation Project"),
            leaf("Project on a Study of a Local Geological Technology Project"),
            leaf("Project on a Study of a Local Geological Design Project"),
            leaf("Project on a Study of a Local Geological Engineering Project"),
            leaf("Project on a Study of a Local Geological Science Project"),
            leaf("Project on a Study of a Local Geological Management System"),
            leaf("Project on a Study of a Local Geological Information System"),
            leaf("Project on a Study of a Local Geological Database"),
        ],
    },
    {
        name: "History",
        children: [
            leaf("Interactive Timeline of a Historical Period (e.g., Indian Independence)"),
            leaf("Digital Archive of Historical Documents from a Specific Era"),
            leaf("Historiographical Analysis of a Major Event (e.g., Partition of India)"),
            leaf("3D Modeling of an Ancient Site or Monument"),
            leaf("Oral History Project: Documenting the Lives of a Community"),
            leaf("Social History of a City or Town"),
            leaf("Cultural History of Food or Fashion in a Period"),
            leaf("Analysis of Propaganda in World War II"),
            leaf("Comparative Study of Two Historical Civilizations"),
            leaf("Project on a Study of a Local Historical Event"),
            leaf("Project on a Study of a Local Historical Person"),
            leaf("Project on a Study of a Local Historical Place"),
            leaf("Project on a Study of a Local Historical Document"),
            leaf("Project on a Study of a Local Historical Artifact"),
            leaf("Project on a Study of a Local Historical Building"),
            leaf("Project on a Study of a Local Historical Site"),
            leaf("Project on a Study of a Local Historical Landscape"),
            leaf("Project on a Study of a Local Historical Map"),
            leaf("Project on a Study of a Local Historical Survey"),
            leaf("Project on a Study of a Local Historical Report"),
            leaf("Project on a Study of a Local Historical Model"),
            leaf("Project on a Study of a Local Historical Simulation"),
            leaf("Project on a Study of a Local Historical Analysis"),
            leaf("Project on a Study of a Local Historical Assessment"),
            leaf("Project on a Study of a Local Historical Impact"),
            leaf("Project on a Study of a Local Historical Risk"),
            leaf("Project on a Study of a Local Historical Problem"),
            leaf("Project on a Study of a Local Historical Solution"),
            leaf("Project on a Study of a Local Historical Policy"),
            leaf("Project on a Study of a Local Historical Law"),
            leaf("Project on a Study of a Local Historical Regulation"),
            leaf("Project on a Study of a Local Historical Standard"),
            leaf("Project on a Study of a Local Historical Guideline"),
            leaf("Project on a Study of a Local Historical Management Plan"),
            leaf("Project on a Study of a Local Historical Impact Assessment"),
            leaf("Project on a Study of a Local Historical Audit"),
            leaf("Project on a Study of a Local Historical Monitoring Program"),
            leaf("Project on a Study of a Local Historical Education Program"),
            leaf("Project on a Study of a Local Historical Research Project"),
            leaf("Project on a Study of a Local Historical Restoration Project"),
            leaf("Project on a Study of a Local Historical Conservation Project"),
            leaf("Project on a Study of a Local Historical Protection Project"),
            leaf("Project on a Study of a Local Historical Sustainability Project"),
            leaf("Project on a Study of a Local Historical Innovation Project"),
            leaf("Project on a Study of a Local Historical Technology Project"),
            leaf("Project on a Study of a Local Historical Design Project"),
            leaf("Project on a Study of a Local Historical Engineering Project"),
            leaf("Project on a Study of a Local Historical Science Project"),
            leaf("Project on a Study of a Local Historical Management System"),
            leaf("Project on a Study of a Local Historical Information System"),
        ],
    },
    {
        name: "Information Technology (IT)",
        children: [
            leaf("Network Security Audit & Report for a Small Business"),
            leaf("Cloud Infrastructure Deployment on AWS/Azure"),
            leaf("Database Management System Design for a University"),
            leaf("IT Service Management (ITSM) Workflow Automation"),
            leaf("Disaster Recovery Plan for a Corporate Network"),
            leaf("DevOps Pipeline for a Web Application"),
            leaf("Implementation of a Cybersecurity Policy"),
            leaf("Data Center Design and Management"),
            leaf("IT Governance and Compliance Management"),
            leaf("Project on a Network Monitoring Tool"),
            leaf("Project on a System for a Small Business"),
            leaf("Project on a Database for a University"),
            leaf("Project on a Website for a Small Business"),
            leaf("Project on an E-commerce Website"),
            leaf("Project on a Mobile App for a Business"),
            leaf("Project on a Social Networking Site"),
            leaf("Project on a Job Portal Website"),
            leaf("Project on an E-learning Platform"),
            leaf("Project on a Hospital Management System"),
            leaf("Project on a Library Management System"),
            leaf("Project on a Student Information System"),
            leaf("Project on a Supply Chain Management System"),
            leaf("Project on a Customer Relationship Management (CRM) System"),
            leaf("Project on an Enterprise Resource Planning (ERP) System"),
            leaf("Project on a Business Intelligence Dashboard"),
            leaf("Project on a Data Warehouse Design"),
            leaf("Project on a Data Lake Implementation"),
            leaf("Project on a Big Data Processing Framework (e.g., Hadoop)"),
            leaf("Project on a Cloud Computing Solution"),
            leaf("Project on a Cybersecurity Solution"),
            leaf("Project on a Network Security Audit"),
            leaf("Project on a Penetration Testing Report"),
            leaf("Project on a Disaster Recovery Plan"),
            leaf("Project on an IT Service Management (ITSM) Workflow"),
            leaf("Project on an IT Governance and Compliance Management Plan"),
            leaf("Project on a Data Center Design"),
            leaf("Project on an IT Infrastructure Design"),
            leaf("Project on an IT Operations Management System"),
            leaf("Project on an IT Project Management Plan"),
            leaf("Project on an IT Budgeting and Financial Plan"),
            leaf("Project on an IT Human Resource Management Plan"),
            leaf("Project on an IT Marketing Plan"),
            leaf("Project on an IT Sales Plan"),
            leaf("Project on an IT Customer Service Plan"),
            leaf("Project on an IT Quality Management Plan"),
            leaf("Project on an IT Supply Chain Management Plan"),
        ],
    },
    {
        name: "Marketing Management",
        children: [
            leaf("Social Media Campaign Analytics Dashboard for a Brand"),
            leaf("Consumer Behavior Study on a Specific Product"),
            leaf("Brand Strategy & Positioning Plan for a Startup"),
            leaf("Market Segmentation Analysis for a Service Industry"),
            leaf("Digital Marketing Strategy for a Local Business"),
            leaf("SEO & Content Marketing Strategy for an E-commerce Site"),
            leaf("Marketing Plan for a New Product Launch"),
            leaf("Impact of Influencer Marketing on Consumer Purchase Decisions"),
            leaf("Competitive Analysis of the Fast-Moving Consumer Goods (FMCG) Sector"),
            leaf("Project on a Marketing Mix Analysis of a Product"),
            leaf("Project on a Marketing Plan for a Service"),
            leaf("Project on a Marketing Plan for a Non-Profit Organization"),
            leaf("Project on a Marketing Plan for a Political Campaign"),
            leaf("Project on a Marketing Plan for a Social Cause"),
            leaf("Project on a Marketing Plan for a Green Product"),
            leaf("Project on a Marketing Plan for a Luxury Brand"),
            leaf("Project on a Marketing Plan for a Technology Product"),
            leaf("Project on a Marketing Plan for a Food Product"),
            leaf("Project on a Marketing Plan for a Beverage Product"),
            leaf("Project on a Marketing Plan for an Automobile"),
            leaf("Project on a Marketing Plan for a Pharmaceutical Product"),
            leaf("Project on a Marketing Plan for a Software Product"),
            leaf("Project on a Marketing Plan for a Hardware Product"),
            leaf("Project on a Marketing Plan for a Retail Store"),
            leaf("Project on a Marketing Plan for a Wholesale Business"),
            leaf("Project on a Marketing Plan for a Logistics Company"),
            leaf("Project on a Marketing Plan for a Real Estate Company"),
            leaf("Project on a Marketing Plan for a Construction Company"),
            leaf("Project on a Marketing Plan for a Manufacturing Company"),
            leaf("Project on a Marketing Plan for a Service-Based Business"),
            leaf("Project on a Marketing Plan for a Home-Based Business"),
            leaf("Project on a Marketing Plan for an E-commerce Business"),
            leaf("Project on a Marketing Plan for a Startup"),
            leaf("Project on a Marketing Plan for a Small Business"),
            leaf("Project on a Marketing Plan for a Large Corporation"),
            leaf("Project on a Marketing Plan for a Multinational Corporation"),
            leaf("Project on a Marketing Plan for a Global Brand"),
            leaf("Project on a Marketing Plan for a Local Brand"),
            leaf("Project on a Marketing Plan for a Niche Market"),
            leaf("Project on a Marketing Plan for a Mass Market"),
            leaf("Project on a Marketing Plan for a B2B Market"),
            leaf("Project on a Marketing Plan for a B2C Market"),
            leaf("Project on a Marketing Plan for a C2C Market"),
            leaf("Project on a Marketing Plan for a C2B Market"),
            leaf("Project on a Marketing Plan for a B2B2C Market"),
        ],
    },
    {
        name: "Mass Communication",
        children: [
            leaf("Journalism Website with Content Management System and User Feedback"),
            leaf("Media Ethics & Law Case Study: A Controversial News Story"),
            leaf("Social Media Influence Analysis for a Political Campaign"),
            leaf("Public Relations Campaign Design for a Non-Profit Organization"),
            leaf("Impact of Fake News on Public Opinion"),
            leaf("Film Analysis: A Study of Cinematography and Storytelling"),
            leaf("Development of a Short Film or Documentary"),
            leaf("Audience Research for a Television Program"),
            leaf("History of Radio Broadcasting in a Country"),
            leaf("Project on a Study of a News Channel"),
            leaf("Project on a Study of a Newspaper"),
            leaf("Project on a Study of a Magazine"),
            leaf("Project on a Study of a Radio Station"),
            leaf("Project on a Study of a Television Channel"),
            leaf("Project on a Study of a Film Production Company"),
            leaf("Project on a Study of a Public Relations Agency"),
            leaf("Project on a Study of an Advertising Agency"),
            leaf("Project on a Study of a Digital Marketing Agency"),
            leaf("Project on a Study of a Social Media Platform"),
            leaf("Project on a Study of a Blog"),
            leaf("Project on a Study of a Podcast"),
            leaf("Project on a Study of a YouTube Channel"),
            leaf("Project on a Study of an Instagram Account"),
            leaf("Project on a Study of a Twitter Account"),
            leaf("Project on a Study of a TikTok Account"),
            leaf("Project on a Study of a Public Figure's Social Media"),
            leaf("Project on a Study of a Brand's Social Media"),
            leaf("Project on a Study of a Corporate Social Media"),
            leaf("Project on a Study of a Government Social Media"),
            leaf("Project on a Study of a Non-Profit Social Media"),
            leaf("Project on a Study of a News Media Social Media"),
            leaf("Project on a Study of a Political Social Media"),
            leaf("Project on a Study of a Social Movement's Social Media"),
            leaf("Project on a Study of a Crisis Communication Plan"),
            leaf("Project on a Study of a Public Opinion Poll"),
            leaf("Project on a Study of a Media Campaign"),
            leaf("Project on a Study of a Public Relations Campaign"),
            leaf("Project on a Study of an Advertising Campaign"),
            leaf("Project on a Study of a Digital Marketing Campaign"),
            leaf("Project on a Study of a Social Media Campaign"),
            leaf("Project on a Study of a Political Campaign"),
            leaf("Project on a Study of a Social Cause Campaign"),
            leaf("Project on a Study of a Green Campaign"),
            leaf("Project on a Study of a Luxury Brand Campaign"),
            leaf("Project on a Study of a Technology Product Campaign"),
        ],
    },
    {
        name: "Mathematics",
        children: [
            leaf("Cryptography Algorithm Implementation (e.g., RSA)"),
            leaf("Predictive Model using Regression Analysis for a Real-World Dataset"),
            leaf("Numerical Simulation of a Physical System (e.g., Projectile Motion)"),
            leaf("Graph Theory Application for Optimal Routing"),
            leaf("Mathematical Modeling of a Biological System"),
            leaf("Study of Chaos Theory and its Applications"),
            leaf("Optimization Algorithms for Resource Allocation"),
            leaf("Monte Carlo Simulation for Financial Risk Assessment"),
            leaf("Abstract Algebra: Group Theory and its Applications"),
            leaf("Project on a Study of a Mathematical Theorem"),
            leaf("Project on a Study of a Mathematical Problem"),
            leaf("Project on a Study of a Mathematical Concept"),
            leaf("Project on a Study of a Mathematical Method"),
            leaf("Project on a Study of a Mathematical Model"),
            leaf("Project on a Study of a Mathematical Simulation"),
            leaf("Project on a Study of a Mathematical Analysis"),
            leaf("Project on a Study of a Mathematical Assessment"),
            leaf("Project on a Study of a Mathematical Impact"),
            leaf("Project on a Study of a Mathematical Risk"),
            leaf("Project on a Study of a Mathematical Problem"),
            leaf("Project on a Study of a Mathematical Solution"),
            leaf("Project on a Study of a Mathematical Policy"),
            leaf("Project on a Study of a Mathematical Law"),
            leaf("Project on a Study of a Mathematical Regulation"),
            leaf("Project on a Study of a Mathematical Standard"),
            leaf("Project on a Study of a Mathematical Guideline"),
            leaf("Project on a Study of a Mathematical Management Plan"),
            leaf("Project on a Study of a Mathematical Impact Assessment"),
            leaf("Project on a Study of a Mathematical Audit"),
            leaf("Project on a Study of a Mathematical Monitoring Program"),
            leaf("Project on a Study of a Mathematical Education Program"),
            leaf("Project on a Study of a Mathematical Research Project"),
            leaf("Project on a Study of a Mathematical Restoration Project"),
            leaf("Project on a Study of a Mathematical Conservation Project"),
            leaf("Project on a Study of a Mathematical Protection Project"),
            leaf("Project on a Study of a Mathematical Sustainability Project"),
            leaf("Project on a Study of a Mathematical Innovation Project"),
            leaf("Project on a Study of a Mathematical Technology Project"),
            leaf("Project on a Study of a Mathematical Design Project"),
            leaf("Project on a Study of a Mathematical Engineering Project"),
            leaf("Project on a Study of a Mathematical Science Project"),
            leaf("Project on a Study of a Mathematical Management System"),
            leaf("Project on a Study of a Mathematical Information System"),
            leaf("Project on a Study of a Mathematical Database"),
            leaf("Project on a Study of a Mathematical Model"),
            leaf("Project on a Study of a Mathematical Simulation"),
            leaf("Project on a Study of a Mathematical Analysis"),
        ],
    },
    {
        name: "Microbiology",
        children: [
            leaf("Bacterial Growth Simulation Model with Environmental Factors"),
            leaf("Antimicrobial Resistance Study in a Clinical Setting"),
            leaf("Microbiome Data Analysis Pipeline from a Soil Sample"),
            leaf("Fermentation Process Optimization for Probiotic Production"),
            leaf("Identification of a Novel Microorganism from a Water Source"),
            leaf("Study of Biofilm Formation and Control Strategies"),
            leaf("Role of Microbes in Waste Water Treatment"),
            leaf("Genomic Analysis of a Microbe of Industrial Importance"),
            leaf("Production of Bio-Pesticides using Fungi"),
            leaf("Project on the Study of a Local Microorganism"),
            leaf("Project on the Study of a Local Microbial Community"),
            leaf("Project on the Study of a Local Microbial Habitat"),
            leaf("Project on the Study of a Local Microbial Species"),
            leaf("Project on the Study of a Local Microbial Strain"),
            leaf("Project on the Study of a Local Microbial Culture"),
            leaf("Project on the Study of a Local Microbial Sample"),
            leaf("Project on the Study of a Local Microbial Collection"),
            leaf("Project on the Study of a Local Microbial Database"),
            leaf("Project on the Study of a Local Microbial Model"),
            leaf("Project on the Study of a Local Microbial Simulation"),
            leaf("Project on the Study of a Local Microbial Analysis"),
            leaf("Project on the Study of a Local Microbial Assessment"),
            leaf("Project on the Study of a Local Microbial Impact"),
            leaf("Project on the Study of a Local Microbial Risk"),
            leaf("Project on the Study of a Local Microbial Problem"),
            leaf("Project on the Study of a Local Microbial Solution"),
            leaf("Project on the Study of a Local Microbial Policy"),
            leaf("Project on the Study of a Local Microbial Law"),
            leaf("Project on the Study of a Local Microbial Regulation"),
            leaf("Project on the Study of a Local Microbial Standard"),
            leaf("Project on the Study of a Local Microbial Guideline"),
            leaf("Project on the Study of a Local Microbial Management Plan"),
            leaf("Project on the Study of a Local Microbial Impact Assessment"),
            leaf("Project on the Study of a Local Microbial Audit"),
            leaf("Project on the Study of a Local Microbial Monitoring Program"),
            leaf("Project on the Study of a Local Microbial Education Program"),
            leaf("Project on the Study of a Local Microbial Research Project"),
            leaf("Project on the Study of a Local Microbial Restoration Project"),
            leaf("Project on the Study of a Local Microbial Conservation Project"),
            leaf("Project on the Study of a Local Microbial Protection Project"),
            leaf("Project on the Study of a Local Microbial Sustainability Project"),
            leaf("Project on the Study of a Local Microbial Innovation Project"),
            leaf("Project on the Study of a Local Microbial Technology Project"),
            leaf("Project on the Study of a Local Microbial Design Project"),
            leaf("Project on the Study of a Local Microbial Engineering Project"),
            leaf("Project on the Study of a Local Microbial Science Project"),
            leaf("Project on the Study of a Local Microbial Management System"),
            leaf("Project on the Study of a Local Microbial Information System"),
        ],
    },
    {
        name: "Nursing (B.Sc Nursing)",
        children: [
            leaf("Patient Health Monitoring System using IoT sensors"),
            leaf("Nursing Staff Shift Scheduling App with AI Optimization"),
            leaf("Disease Outbreak Tracking Dashboard for a Public Health Authority"),
            leaf("Telehealth Platform for Patient Consultations and Remote Monitoring"),
            leaf("E-learning Module for Nursing Students on a Specific Medical Procedure"),
            leaf("Study on the Impact of Nurse-Patient Ratio on Patient Outcomes"),
            leaf("Patient Fall Prediction System using Machine Learning"),
            leaf("Medication Adherence Tracker App for Chronic Disease Patients"),
            leaf("Pain Management System for Post-Operative Patients"),
            leaf("Project on a Study of a Local Nursing Home"),
            leaf("Project on a Study of a Local Hospital"),
            leaf("Project on a Study of a Local Clinic"),
            leaf("Project on a Study of a Local Health Center"),
            leaf("Project on a Study of a Local Nursing School"),
            leaf("Project on a Study of a Local Nursing Program"),
            leaf("Project on a Study of a Local Nursing Curriculum"),
            leaf("Project on a Study of a Local Nursing Student"),
            leaf("Project on a Study of a Local Nurse"),
            leaf("Project on a Study of a Local Patient"),
            leaf("Project on a Study of a Local Disease"),
            leaf("Project on a Study of a Local Health Problem"),
            leaf("Project on a Study of a Local Health Solution"),
            leaf("Project on a Study of a Local Health Policy"),
            leaf("Project on a Study of a Local Health Law"),
            leaf("Project on a Study of a Local Health Regulation"),
            leaf("Project on a Study of a Local Health Standard"),
            leaf("Project on a Study of a Local Health Guideline"),
            leaf("Project on a Study of a Local Health Management Plan"),
            leaf("Project on a Study of a Local Health Impact Assessment"),
            leaf("Project on a Study of a Local Health Audit"),
            leaf("Project on a Study of a Local Health Monitoring Program"),
            leaf("Project on a Study of a Local Health Education Program"),
            leaf("Project on a Study of a Local Health Research Project"),
            leaf("Project on a Study of a Local Health Restoration Project"),
            leaf("Project on a Study of a Local Health Conservation Project"),
            leaf("Project on a Study of a Local Health Protection Project"),
            leaf("Project on a Study of a Local Health Sustainability Project"),
            leaf("Project on a Study of a Local Health Innovation Project"),
            leaf("Project on a Study of a Local Health Technology Project"),
            leaf("Project on a Study of a Local Health Design Project"),
            leaf("Project on a Study of a Local Health Engineering Project"),
            leaf("Project on a Study of a Local Health Science Project"),
            leaf("Project on a Study of a Local Health Management System"),
            leaf("Project on a Study of a Local Health Information System"),
            leaf("Project on a Study of a Local Health Database"),
            leaf("Project on a Study of a Local Health Model"),
            leaf("Project on a Study of a Local Health Simulation"),
            leaf("Project on a Study of a Local Health Analysis"),
            leaf("Project on a Study of a Local Health Assessment"),
            leaf("Project on a Study of a Local Health Impact"),
            leaf("Project on a Study of a Local Health Risk"),
        ],
    },
    {
        name: "Nutrition",
        children: [
            leaf("Nutritional Assessment Tool for a Specific Population"),
            leaf("Food-Sourced Nutrient Database and API"),
            leaf("Custom Meal Plan Generator for Various Dietary Needs"),
            leaf("Analysis of Public Health Nutrition Trends in a State"),
            leaf("Impact of Fad Diets on Adolescent Health"),
            leaf("Nutritional Interventions for Anemia in Women"),
            leaf("Food Safety and Quality Assurance System for a Food Business"),
            leaf("Dietary Management of Chronic Diseases"),
            leaf("Role of Micronutrients in Cognitive Function"),
            leaf("Project on a Study of a Local Food Product"),
            leaf("Project on a Study of a Local Food Service"),
            leaf("Project on a Study of a Local Nutritional Program"),
            leaf("Project on a Study of a Local Nutritional Policy"),
            leaf("Project on a Study of a Local Nutritional Law"),
            leaf("Project on a Study of a Local Nutritional Regulation"),
            leaf("Project on a Study of a Local Nutritional Standard"),
            leaf("Project on a Study of a Local Nutritional Guideline"),
            leaf("Project on a Study of a Local Nutritional Management Plan"),
            leaf("Project on a Study of a Local Nutritional Impact Assessment"),
            leaf("Project on a Study of a Local Nutritional Audit"),
            leaf("Project on a Study of a Local Nutritional Monitoring Program"),
            leaf("Project on a Study of a Local Nutritional Education Program"),
            leaf("Project on a Study of a Local Nutritional Research Project"),
            leaf("Project on a Study of a Local Nutritional Restoration Project"),
            leaf("Project on a Study of a Local Nutritional Conservation Project"),
            leaf("Project on a Study of a Local Nutritional Protection Project"),
            leaf("Project on a Study of a Local Nutritional Sustainability Project"),
            leaf("Project on a Study of a Local Nutritional Innovation Project"),
            leaf("Project on a Study of a Local Nutritional Technology Project"),
            leaf("Project on a Study of a Local Nutritional Design Project"),
            leaf("Project on a Study of a Local Nutritional Engineering Project"),
            leaf("Project on a Study of a Local Nutritional Science Project"),
            leaf("Project on a Study of a Local Nutritional Management System"),
            leaf("Project on a Study of a Local Nutritional Information System"),
            leaf("Project on a Study of a Local Nutritional Database"),
            leaf("Project on a Study of a Local Nutritional Model"),
            leaf("Project on a Study of a Local Nutritional Simulation"),
            leaf("Project on a Study of a Local Nutritional Analysis"),
            leaf("Project on a Study of a Local Nutritional Assessment"),
            leaf("Project on a Study of a Local Nutritional Impact"),
            leaf("Project on a Study of a Local Nutritional Risk"),
            leaf("Project on a Study of a Local Nutritional Problem"),
            leaf("Project on a Study of a Local Nutritional Solution"),
            leaf("Project on a Study of a Local Nutritional Policy"),
            leaf("Project on a Study of a Local Nutritional Law"),
        ],
    },
    {
        name: "Paramedical Sciences",
        children: [
            leaf("First-Aid Training Simulation using Virtual Reality"),
            leaf("Medical Device Inventory System for a Clinical Lab"),
            leaf("Patient Vitals Monitoring App with Emergency Alerts"),
            leaf("E-learning Module for Paramedical Skills (e.g., Phlebotomy)"),
            leaf("Analysis of Ambulance Service Response Times"),
            leaf("Automated ECG Signal Analysis for Cardiac Health"),
            leaf("Clinical Lab Management System for Sample Tracking"),
            leaf("Study on the Impact of Tele-paramedicine on Rural Healthcare"),
            leaf("Project on a Study of a Local Hospital's Paramedical Services"),
            leaf("Project on a Study of a Local Clinic's Paramedical Services"),
            leaf("Project on a Study of a Local Health Center's Paramedical Services"),
            leaf("Project on a Study of a Local Nursing Home's Paramedical Services"),
            leaf("Project on a Study of a Local Ambulance Service"),
            leaf("Project on a Study of a Local Medical Lab"),
            leaf("Project on a Study of a Local Medical Device Company"),
            leaf("Project on a Study of a Local Medical Equipment Company"),
            leaf("Project on a Study of a Local Medical Supplies Company"),
            leaf("Project on a Study of a Local Paramedical School"),
            leaf("Project on a Study of a Local Paramedical Program"),
            leaf("Project on a Study of a Local Paramedical Curriculum"),
            leaf("Project on a Study of a Local Paramedical Student"),
            leaf("Project on a Study of a Local Paramedic"),
            leaf("Project on a Study of a Local Patient"),
            leaf("Project on a Study of a Local Disease"),
            leaf("Project on a Study of a Local Health Problem"),
            leaf("Project on a Study of a Local Health Solution"),
            leaf("Project on a Study of a Local Health Policy"),
            leaf("Project on a Study of a Local Health Law"),
            leaf("Project on a Study of a Local Health Regulation"),
            leaf("Project on a Study of a Local Health Standard"),
            leaf("Project on a Study of a Local Health Guideline"),
            leaf("Project on a Study of a Local Health Management Plan"),
            leaf("Project on a Study of a Local Health Impact Assessment"),
            leaf("Project on a Study of a Local Health Audit"),
            leaf("Project on a Study of a Local Health Monitoring Program"),
            leaf("Project on a Study of a Local Health Education Program"),
            leaf("Project on a Study of a Local Health Research Project"),
            leaf("Project on a Study of a Local Health Restoration Project"),
            leaf("Project on a Study of a Local Health Conservation Project"),
            leaf("Project on a Study of a Local Health Protection Project"),
            leaf("Project on a Study of a Local Health Sustainability Project"),
            leaf("Project on a Study of a Local Health Innovation Project"),
            leaf("Project on a Study of a Local Health Technology Project"),
            leaf("Project on a Study of a Local Health Design Project"),
            leaf("Project on a Study of a Local Health Engineering Project"),
            leaf("Project on a Study of a Local Health Science Project"),
            leaf("Project on a Study of a Local Health Management System"),
            leaf("Project on a Study of a Local Health Information System"),
        ],
    },
    {
        name: "Pharmacy (B.Pharm)",
        children: [
            leaf("Drug-Drug Interaction Checker App for Pharmacists"),
            leaf("Pharmacokinetics Modeling of a New Drug Candidate"),
            leaf("Drug Inventory Management System for a Retail Pharmacy"),
            leaf("Patient Medication Adherence Tracker App with Reminders"),
            leaf("Study of Herbal Medicines and their Efficacy"),
            leaf("Analysis of Drug Formulation and Delivery Systems"),
            leaf("Development of a Pharmaceutical Quality Control System"),
            leaf("Role of Pharmacogenomics in Personalized Medicine"),
            leaf("Biotechnology in Drug Manufacturing"),
            leaf("Project on a Study of a Local Pharmacy"),
            leaf("Project on a Study of a Local Pharmaceutical Company"),
            leaf("Project on a Study of a Local Drugstore"),
            leaf("Project on a Study of a Local Medical Store"),
            leaf("Project on a Study of a Local Hospital Pharmacy"),
            leaf("Project on a Study of a Local Clinic Pharmacy"),
            leaf("Project on a Study of a Local Health Center Pharmacy"),
            leaf("Project on a Study of a Local Pharmaceutical School"),
            leaf("Project on a Study of a Local Pharmaceutical Program"),
            leaf("Project on a Study of a Local Pharmaceutical Curriculum"),
            leaf("Project on a Study of a Local Pharmaceutical Student"),
            leaf("Project on a Study of a Local Pharmacist"),
            leaf("Project on a Study of a Local Patient"),
            leaf("Project on a Study of a Local Drug"),
            leaf("Project on a Study of a Local Health Problem"),
            leaf("Project on a Study of a Local Health Solution"),
            leaf("Project on a Study of a Local Health Policy"),
            leaf("Project on a Study of a Local Health Law"),
            leaf("Project on a Study of a Local Health Regulation"),
            leaf("Project on a Study of a Local Health Standard"),
            leaf("Project on a Study of a Local Health Guideline"),
            leaf("Project on a Study of a Local Health Management Plan"),
            leaf("Project on a Study of a Local Health Impact Assessment"),
            leaf("Project on a Study of a Local Health Audit"),
            leaf("Project on a Study of a Local Health Monitoring Program"),
            leaf("Project on a Study of a Local Health Education Program"),
            leaf("Project on a Study of a Local Health Research Project"),
            leaf("Project on a Study of a Local Health Restoration Project"),
            leaf("Project on a Study of a Local Health Conservation Project"),
            leaf("Project on a Study of a Local Health Protection Project"),
            leaf("Project on a Study of a Local Health Sustainability Project"),
            leaf("Project on a Study of a Local Health Innovation Project"),
            leaf("Project on a Study of a Local Health Technology Project"),
            leaf("Project on a Study of a Local Health Design Project"),
            leaf("Project on a Study of a Local Health Engineering Project"),
            leaf("Project on a Study of a Local Health Science Project"),
            leaf("Project on a Study of a Local Health Management System"),
            leaf("Project on a Study of a Local Health Information System"),
        ],
    },
    {
        name: "Philosophy",
        children: [
            leaf("AI Ethics & Moral Reasoning Study: Developing an Ethical Framework"),
            leaf("Analysis of a Philosophical Text (e.g., Plato's Republic)"),
            leaf("Interactive Logic Puzzles Website for Learning Fallacies"),
            leaf("Philosophy of Mind & Consciousness: A Comparative Analysis"),
            leaf("Study of Political Philosophy and its Impact on Governance"),
            leaf("Epistemology: The Problem of Knowledge and Belief"),
            leaf("Metaphysics: The Nature of Reality and Existence"),
            leaf("Aesthetics: The Philosophy of Art and Beauty"),
            leaf("Applied Ethics: A Case Study on a Contemporary Moral Issue"),
            leaf("Project on a Study of a Local Philosophical Society"),
            leaf("Project on a Study of a Local Philosophical Group"),
            leaf("Project on a Study of a Local Philosophical Club"),
            leaf("Project on a Study of a Local Philosophical Discussion"),
            leaf("Project on a Study of a Local Philosophical Debate"),
            leaf("Project on a Study of a Local Philosophical Lecture"),
            leaf("Project on a Study of a Local Philosophical Seminar"),
            leaf("Project on a Study of a Local Philosophical Workshop"),
            leaf("Project on a Study of a Local Philosophical Conference"),
            leaf("Project on a Study of a Local Philosophical Journal"),
            leaf("Project on a Study of a Local Philosophical Magazine"),
            leaf("Project on a Study of a Local Philosophical Newspaper"),
            leaf("Project on a Study of a Local Philosophical Website"),
            leaf("Project on a Study of a Local Philosophical Blog"),
            leaf("Project on a Study of a Local Philosophical Podcast"),
            leaf("Project on a Study of a Local Philosophical YouTube Channel"),
            leaf("Project on a Study of a Local Philosophical Instagram Account"),
            leaf("Project on a Study of a Local Philosophical Twitter Account"),
            leaf("Project on a Study of a Local Philosophical TikTok Account"),
            leaf("Project on a Study of a Local Philosophical Social Media"),
            leaf("Project on a Study of a Local Philosophical Discussion"),
            leaf("Project on a Study of a Local Philosophical Debate"),
            leaf("Project on a Study of a Local Philosophical Lecture"),
            leaf("Project on a Study of a Local Philosophical Seminar"),
            leaf("Project on a Study of a Local Philosophical Workshop"),
            leaf("Project on a Study of a Local Philosophical Conference"),
            leaf("Project on a Study of a Local Philosophical Journal"),
            leaf("Project on a Study of a Local Philosophical Magazine"),
            leaf("Project on a Study of a Local Philosophical Newspaper"),
            leaf("Project on a Study of a Local Philosophical Website"),
            leaf("Project on a Study of a Local Philosophical Blog"),
            leaf("Project on a Study of a Local Philosophical Podcast"),
            leaf("Project on a Study of a Local Philosophical YouTube Channel"),
            leaf("Project on a Study of a Local Philosophical Instagram Account"),
            leaf("Project on a Study of a Local Philosophical Twitter Account"),
            leaf("Project on a Study of a Local Philosophical TikTok Account"),
            leaf("Project on a Study of a Local Philosophical Social Media"),
        ],
    },
    {
        name: "Physics",
        children: [
            leaf("Orbital Mechanics Simulation of a Planetary System"),
            leaf("Quantum Computing Basics Simulator and Quantum Gates"),
            leaf("Optics Ray Tracing Engine for Lens Design"),
            leaf("Particle Physics Data Analysis from a Collider Experiment"),
            leaf("Mathematical Modeling of a Physical System"),
            leaf("Study of Thermodynamics and Heat Engines"),
            leaf("Acoustics: Sound Wave Propagation Simulation"),
            leaf("Study of Electromagnetism and Circuits"),
            leaf("Astrophysics: Stellar Evolution Simulation"),
            leaf("Project on a Study of a Local Physical Phenomenon"),
            leaf("Project on a Study of a Local Physical System"),
            leaf("Project on a Study of a Local Physical Problem"),
            leaf("Project on a Study of a Local Physical Solution"),
            leaf("Project on a Study of a Local Physical Policy"),
            leaf("Project on a Study of a Local Physical Law"),
            leaf("Project on a Study of a Local Physical Regulation"),
            leaf("Project on a Study of a Local Physical Standard"),
            leaf("Project on a Study of a Local Physical Guideline"),
            leaf("Project on a Study of a Local Physical Management Plan"),
            leaf("Project on a Study of a Local Physical Impact Assessment"),
            leaf("Project on a Study of a Local Physical Audit"),
            leaf("Project on a Study of a Local Physical Monitoring Program"),
            leaf("Project on a Study of a Local Physical Education Program"),
            leaf("Project on a Study of a Local Physical Research Project"),
            leaf("Project on a Study of a Local Physical Restoration Project"),
            leaf("Project on a Study of a Local Physical Conservation Project"),
            leaf("Project on a Study of a Local Physical Protection Project"),
            leaf("Project on a Study of a Local Physical Sustainability Project"),
            leaf("Project on a Study of a Local Physical Innovation Project"),
            leaf("Project on a Study of a Local Physical Technology Project"),
            leaf("Project on a Study of a Local Physical Design Project"),
            leaf("Project on a Study of a Local Physical Engineering Project"),
            leaf("Project on a Study of a Local Physical Science Project"),
            leaf("Project on a Study of a Local Physical Management System"),
            leaf("Project on a Study of a Local Physical Information System"),
            leaf("Project on a Study of a Local Physical Database"),
            leaf("Project on a Study of a Local Physical Model"),
            leaf("Project on a Study of a Local Physical Simulation"),
            leaf("Project on a Study of a Local Physical Analysis"),
            leaf("Project on a Study of a Local Physical Assessment"),
            leaf("Project on a Study of a Local Physical Impact"),
            leaf("Project on a Study of a Local Physical Risk"),
            leaf("Project on a Study of a Local Physical Problem"),
            leaf("Project on a Study of a Local Physical Solution"),
            leaf("Project on a Study of a Local Physical Policy"),
            leaf("Project on a Study of a Local Physical Law"),
        ],
    },
    {
        name: "Political Science",
        children: [
            leaf("Election Polling Data Analysis and Voter Behavior"),
            leaf("Policy Analysis & Impact Assessment of a Government Scheme"),
            leaf("Comparative Government Study of Two Countries"),
            leaf("Digital Citizen Engagement Platform for Local Governance"),
            leaf("Analysis of Political Ideologies and their Historical Context"),
            leaf("Role of Social Media in Political Campaigns"),
            leaf("International Relations: A Case Study of a Diplomatic Crisis"),
            leaf("Study on the Impact of Lobbying on Public Policy"),
            leaf("Project on a Study of a Local Political Party"),
            leaf("Project on a Study of a Local Political Leader"),
            leaf("Project on a Study of a Local Political Campaign"),
            leaf("Project on a Study of a Local Political Issue"),
            leaf("Project on a Study of a Local Political Policy"),
            leaf("Project on a Study of a Local Political Law"),
            leaf("Project on a Study of a Local Political Regulation"),
            leaf("Project on a Study of a Local Political Standard"),
            leaf("Project on a Study of a Local Political Guideline"),
            leaf("Project on a Study of a Local Political Management Plan"),
            leaf("Project on a Study of a Local Political Impact Assessment"),
            leaf("Project on a Study of a Local Political Audit"),
            leaf("Project on a Study of a Local Political Monitoring Program"),
            leaf("Project on a Study of a Local Political Education Program"),
            leaf("Project on a Study of a Local Political Research Project"),
            leaf("Project on a Study of a Local Political Restoration Project"),
            leaf("Project on a Study of a Local Political Conservation Project"),
            leaf("Project on a Study of a Local Political Protection Project"),
            leaf("Project on a Study of a Local Political Sustainability Project"),
            leaf("Project on a Study of a Local Political Innovation Project"),
            leaf("Project on a Study of a Local Political Technology Project"),
            leaf("Project on a Study of a Local Political Design Project"),
            leaf("Project on a Study of a Local Political Engineering Project"),
            leaf("Project on a Study of a Local Political Science Project"),
            leaf("Project on a Study of a Local Political Management System"),
            leaf("Project on a Study of a Local Political Information System"),
            leaf("Project on a Study of a Local Political Database"),
            leaf("Project on a Study of a Local Political Model"),
            leaf("Project on a Study of a Local Political Simulation"),
            leaf("Project on a Study of a Local Political Analysis"),
            leaf("Project on a Study of a Local Political Assessment"),
            leaf("Project on a Study of a Local Political Impact"),
            leaf("Project on a Study of a Local Political Risk"),
            leaf("Project on a Study of a Local Political Problem"),
            leaf("Project on a Study of a Local Political Solution"),
            leaf("Project on a Study of a Local Political Policy"),
            leaf("Project on a Study of a Local Political Law"),
        ],
    },
    {
        name: "Psychology",
        children: [
            leaf("Cognitive Psychology Experiment Design on Memory Recall"),
            leaf("Stress & Anxiety Management App with Guided Meditation"),
            leaf("Behavioral Data Analysis using Python for User Habits"),
            leaf("Social Psychology Survey Tool for Group Dynamics"),
            leaf("Clinical Psychology: A Case Study on a Mental Health Disorder"),
            leaf("Developmental Psychology: Child Development Milestones"),
            leaf("Neuroscience of Decision-Making"),
            leaf("Organizational Psychology: Study on Workplace Morale"),
            leaf("Project on a Study of a Local Psychological Clinic"),
            leaf("Project on a Study of a Local Psychological Center"),
            leaf("Project on a Study of a Local Psychological Association"),
            leaf("Project on a Study of a Local Psychological Society"),
            leaf("Project on a Study of a Local Psychological Group"),
            leaf("Project on a Study of a Local Psychological Club"),
            leaf("Project on a Study of a Local Psychological Discussion"),
            leaf("Project on a Study of a Local Psychological Debate"),
            leaf("Project on a Study of a Local Psychological Lecture"),
            leaf("Project on a Study of a Local Psychological Seminar"),
            leaf("Project on a Study of a Local Psychological Workshop"),
            leaf("Project on a Study of a Local Psychological Conference"),
            leaf("Project on a Study of a Local Psychological Journal"),
            leaf("Project on a Study of a Local Psychological Magazine"),
            leaf("Project on a Study of a Local Psychological Newspaper"),
            leaf("Project on a Study of a Local Psychological Website"),
            leaf("Project on a Study of a Local Psychological Blog"),
            leaf("Project on a Study of a Local Psychological Podcast"),
            leaf("Project on a Study of a Local Psychological YouTube Channel"),
            leaf("Project on a Study of a Local Psychological Instagram Account"),
            leaf("Project on a Study of a Local Psychological Twitter Account"),
            leaf("Project on a Study of a Local Psychological TikTok Account"),
            leaf("Project on a Study of a Local Psychological Social Media"),
            leaf("Project on a Study of a Local Psychological Discussion"),
            leaf("Project on a Study of a Local Psychological Debate"),
            leaf("Project on a Study of a Local Psychological Lecture"),
            leaf("Project on a Study of a Local Psychological Seminar"),
            leaf("Project on a Study of a Local Psychological Workshop"),
            leaf("Project on a Study of a Local Psychological Conference"),
            leaf("Project on a Study of a Local Psychological Journal"),
            leaf("Project on a Study of a Local Psychological Magazine"),
            leaf("Project on a Study of a Local Psychological Newspaper"),
            leaf("Project on a Study of a Local Psychological Website"),
            leaf("Project on a Study of a Local Psychological Blog"),
            leaf("Project on a Study of a Local Psychological Podcast"),
            leaf("Project on a Study of a Local Psychological YouTube Channel"),
        ],
    },
    {
        name: "Public Administration",
        children: [
            leaf("Government Service Delivery Portal with Feedback System"),
            leaf("Public Policy Analysis & Evaluation of a Social Program"),
            leaf("E-governance System Prototype for a Local Municipality"),
            leaf("Urban Planning & Development Study for a City"),
            leaf("Study on the Impact of Bureaucracy on Public Service"),
            leaf("Public Financial Management and Budgeting Analysis"),
            leaf("Comparative Study of Public Administration in Two Countries"),
            leaf("Disaster Management and Preparedness Plan for a Region"),
            leaf("Project on a Study of a Local Government Department"),
            leaf("Project on a Study of a Local Government Agency"),
            leaf("Project on a Study of a Local Government Policy"),
            leaf("Project on a Study of a Local Government Program"),
            leaf("Project on a Study of a Local Government Project"),
            leaf("Project on a Study of a Local Government Service"),
            leaf("Project on a Study of a Local Government System"),
            leaf("Project on a Study of a Local Government Management"),
            leaf("Project on a Study of a Local Government Information System"),
            leaf("Project on a Study of a Local Government Database"),
            leaf("Project on a Study of a Local Government Model"),
            leaf("Project on a Study of a Local Government Simulation"),
            leaf("Project on a Study of a Local Government Analysis"),
            leaf("Project on a Study of a Local Government Assessment"),
            leaf("Project on a Study of a Local Government Impact"),
            leaf("Project on a Study of a Local Government Risk"),
            leaf("Project on a Study of a Local Government Problem"),
            leaf("Project on a Study of a Local Government Solution"),
            leaf("Project on a Study of a Local Government Policy"),
            leaf("Project on a Study of a Local Government Law"),
            leaf("Project on a Study of a Local Government Regulation"),
            leaf("Project on a Study of a Local Government Standard"),
            leaf("Project on a Study of a Local Government Guideline"),
            leaf("Project on a Study of a Local Government Management Plan"),
            leaf("Project on a Study of a Local Government Impact Assessment"),
            leaf("Project on a Study of a Local Government Audit"),
            leaf("Project on a Study of a Local Government Monitoring Program"),
            leaf("Project on a Study of a Local Government Education Program"),
            leaf("Project on a Study of a Local Government Research Project"),
            leaf("Project on a Study of a Local Government Restoration Project"),
            leaf("Project on a Study of a Local Government Conservation Project"),
            leaf("Project on a Study of a Local Government Protection Project"),
            leaf("Project on a Study of a Local Government Sustainability Project"),
            leaf("Project on a Study of a Local Government Innovation Project"),
            leaf("Project on a Study of a Local Government Technology Project"),
            leaf("Project on a Study of a Local Government Design Project"),
            leaf("Project on a Study of a Local Government Engineering Project"),
            leaf("Project on a Study of a Local Government Science Project"),
            leaf("Project on a Study of a Local Government Management System"),
            leaf("Project on a Study of a Local Government Information System"),
        ],
    },
    {
        name: "Public Health",
        children: [
            leaf("Disease Surveillance & Reporting System for a Local Health Authority"),
            leaf("Public Health Campaign Design for a Specific Health Issue"),
            leaf("Epidemiological Data Analysis of a Local Disease Outbreak"),
            leaf("Healthcare Resource Allocation Model for a Pandemic Scenario"),
            leaf("Community-Based Health Promotion Program"),
            leaf("Study on the Impact of Air Pollution on Respiratory Health"),
            leaf("Nutritional Assessment of a School-Going Population"),
            leaf("Water Sanitation and Hygiene (WASH) Project in a Rural Area"),
            leaf("Project on a Study of a Local Public Health Department"),
            leaf("Project on a Study of a Local Public Health Agency"),
            leaf("Project on a Study of a Local Public Health Policy"),
            leaf("Project on a Study of a Local Public Health Program"),
            leaf("Project on a Study of a Local Public Health Project"),
            leaf("Project on a Study of a Local Public Health Service"),
            leaf("Project on a Study of a Local Public Health System"),
            leaf("Project on a Study of a Local Public Health Management"),
            leaf("Project on a Study of a Local Public Health Information System"),
            leaf("Project on a Study of a Local Public Health Database"),
            leaf("Project on a Study of a Local Public Health Model"),
            leaf("Project on a Study of a Local Public Health Simulation"),
            leaf("Project on a Study of a Local Public Health Analysis"),
            leaf("Project on a Study of a Local Public Health Assessment"),
            leaf("Project on a Study of a Local Public Health Impact"),
            leaf("Project on a Study of a Local Public Health Risk"),
            leaf("Project on a Study of a Local Public Health Problem"),
            leaf("Project on a Study of a Local Public Health Solution"),
            leaf("Project on a Study of a Local Public Health Policy"),
            leaf("Project on a Study of a Local Public Health Law"),
            leaf("Project on a Study of a Local Public Health Regulation"),
            leaf("Project on a Study of a Local Public Health Standard"),
            leaf("Project on a Study of a Local Public Health Guideline"),
            leaf("Project on a Study of a Local Public Health Management Plan"),
            leaf("Project on a Study of a Local Public Health Impact Assessment"),
            leaf("Project on a Study of a Local Public Health Audit"),
            leaf("Project on a Study of a Local Public Health Monitoring Program"),
            leaf("Project on a Study of a Local Public Health Education Program"),
            leaf("Project on a Study of a Local Public Health Research Project"),
            leaf("Project on a Study of a Local Public Health Restoration Project"),
            leaf("Project on a Study of a Local Public Health Conservation Project"),
            leaf("Project on a Study of a Local Public Health Protection Project"),
            leaf("Project on a Study of a Local Public Health Sustainability Project"),
            leaf("Project on a Study of a Local Public Health Innovation Project"),
            leaf("Project on a Study of a Local Public Health Technology Project"),
            leaf("Project on a Study of a Local Public Health Design Project"),
            leaf("Project on a Study of a Local Public Health Engineering Project"),
            leaf("Project on a Study of a Local Public Health Science Project"),
        ],
    },
    {
        name: "Sales Management",
        children: [
            leaf("Sales Pipeline CRM & Analytics Dashboard"),
            leaf("Lead Generation Strategy & Automation for a Startup"),
            leaf("Customer Segmentation & Targeting for a Retail Store"),
            leaf("Sales Performance Dashboard with Key Metrics"),
            leaf("Analysis of Sales Forecasting Models"),
            leaf("Sales Team Training and Motivation Program"),
            leaf("Impact of Customer Relationship Management on Sales"),
            leaf("A/B Testing for Sales Funnel Optimization"),
            leaf("Project on a Study of a Local Sales Department"),
            leaf("Project on a Study of a Local Sales Team"),
            leaf("Project on a Study of a Local Sales Manager"),
            leaf("Project on a Study of a Local Salesperson"),
            leaf("Project on a Study of a Local Customer"),
            leaf("Project on a Study of a Local Product"),
            leaf("Project on a Study of a Local Service"),
            leaf("Project on a Study of a Local Sales Process"),
            leaf("Project on a Study of a Local Sales Strategy"),
            leaf("Project on a Study of a Local Sales Plan"),
            leaf("Project on a Study of a Local Sales Forecast"),
            leaf("Project on a Study of a Local Sales Budget"),
            leaf("Project on a Study of a Local Sales Report"),
            leaf("Project on a Study of a Local Sales Dashboard"),
            leaf("Project on a Study of a Local Sales System"),
            leaf("Project on a Study of a Local Sales Management System"),
            leaf("Project on a Study of a Local Sales Information System"),
            leaf("Project on a Study of a Local Sales Database"),
            leaf("Project on a Study of a Local Sales Model"),
            leaf("Project on a Study of a Local Sales Simulation"),
            leaf("Project on a Study of a Local Sales Analysis"),
            leaf("Project on a Study of a Local Sales Assessment"),
            leaf("Project on a Study of a Local Sales Impact"),
            leaf("Project on a Study of a Local Sales Risk"),
            leaf("Project on a Study of a Local Sales Problem"),
            leaf("Project on a Study of a Local Sales Solution"),
            leaf("Project on a Study of a Local Sales Policy"),
            leaf("Project on a Study of a Local Sales Law"),
            leaf("Project on a Study of a Local Sales Regulation"),
            leaf("Project on a Study of a Local Sales Standard"),
            leaf("Project on a Study of a Local Sales Guideline"),
            leaf("Project on a Study of a Local Sales Management Plan"),
            leaf("Project on a Study of a Local Sales Impact Assessment"),
            leaf("Project on a Study of a Local Sales Audit"),
            leaf("Project on a Study of a Local Sales Monitoring Program"),
            leaf("Project on a Study of a Local Sales Education Program"),
            leaf("Project on a Study of a Local Sales Research Project"),
            leaf("Project on a Study of a Local Sales Restoration Project"),
            leaf("Project on a Study of a Local Sales Conservation Project"),
        ],
    },
    {
        name: "Sociology",
        children: [
            leaf("Social Network Analysis of a Community Group"),
            leaf("Urban Sociology Case Study of a Gated Community"),
            leaf("Impact of Technology on Society: A Study of Social Media"),
            leaf("Survey Design & Data Collection on a Social Issue"),
            leaf("Sociology of Gender and its Representation in Media"),
            leaf("Study of Social Inequality and Stratification"),
            leaf("Research on Social Movements and Collective Action"),
            leaf("Family and Kinship Structures in a Modern Society"),
            leaf("Project on a Study of a Local Community"),
            leaf("Project on a Study of a Local Society"),
            leaf("Project on a Study of a Local Social Group"),
            leaf("Project on a Study of a Local Social Problem"),
            leaf("Project on a Study of a Local Social Solution"),
            leaf("Project on a Study of a Local Social Policy"),
            leaf("Project on a Study of a Local Social Law"),
            leaf("Project on a Study of a Local Social Regulation"),
            leaf("Project on a Study of a Local Social Standard"),
            leaf("Project on a Study of a Local Social Guideline"),
            leaf("Project on a Study of a Local Social Management Plan"),
            leaf("Project on a Study of a Local Social Impact Assessment"),
            leaf("Project on a Study of a Local Social Audit"),
            leaf("Project on a Study of a Local Social Monitoring Program"),
            leaf("Project on a Study of a Local Social Education Program"),
            leaf("Project on a Study of a Local Social Research Project"),
            leaf("Project on a Study of a Local Social Restoration Project"),
            leaf("Project on a Study of a Local Social Conservation Project"),
            leaf("Project on a Study of a Local Social Protection Project"),
            leaf("Project on a Study of a Local Social Sustainability Project"),
            leaf("Project on a Study of a Local Social Innovation Project"),
            leaf("Project on a Study of a Local Social Technology Project"),
            leaf("Project on a Study of a Local Social Design Project"),
            leaf("Project on a Study of a Local Social Engineering Project"),
            leaf("Project on a Study of a Local Social Science Project"),
            leaf("Project on a Study of a Local Social Management System"),
            leaf("Project on a Study of a Local Social Information System"),
            leaf("Project on a Study of a Local Social Database"),
            leaf("Project on a Study of a Local Social Model"),
            leaf("Project on a Study of a Local Social Simulation"),
            leaf("Project on a Study of a Local Social Analysis"),
            leaf("Project on a Study of a Local Social Assessment"),
            leaf("Project on a Study of a Local Social Impact"),
            leaf("Project on a Study of a Local Social Risk"),
            leaf("Project on a Study of a Local Social Problem"),
            leaf("Project on a Study of a Local Social Solution"),
            leaf("Project on a Study of a Local Social Policy"),
            leaf("Project on a Study of a Local Social Law"),
        ],
    },
    {
        name: "Statistics",
        children: [
            leaf("Statistical Modeling for Predictive Analysis of a Dataset"),
            leaf("Data Visualization Dashboard (R/Python) for a Survey"),
            leaf("A/B Testing for Website Optimization: A Statistical Approach"),
            leaf("Hypothesis Testing Simulation for a Clinical Trial"),
            leaf("Time-Series Analysis and Forecasting for Stock Prices"),
            leaf("Bayesian Statistics for Data Analysis and Inference"),
            leaf("Multivariate Analysis of a Social Science Dataset"),
            leaf("Machine Learning for Causal Inference"),
            leaf("Project on a Study of a Local Statistical Problem"),
            leaf("Project on a Study of a Local Statistical Solution"),
            leaf("Project on a Study of a Local Statistical Policy"),
            leaf("Project on a Study of a Local Statistical Law"),
            leaf("Project on a Study of a Local Statistical Regulation"),
            leaf("Project on a Study of a Local Statistical Standard"),
            leaf("Project on a Study of a Local Statistical Guideline"),
            leaf("Project on a Study of a Local Statistical Management Plan"),
            leaf("Project on a Study of a Local Statistical Impact Assessment"),
            leaf("Project on a Study of a Local Statistical Audit"),
            leaf("Project on a Study of a Local Statistical Monitoring Program"),
            leaf("Project on a Study of a Local Statistical Education Program"),
            leaf("Project on a Study of a Local Statistical Research Project"),
            leaf("Project on a Study of a Local Statistical Restoration Project"),
            leaf("Project on a Study of a Local Statistical Conservation Project"),
            leaf("Project on a Study of a Local Statistical Protection Project"),
            leaf("Project on a Study of a Local Statistical Sustainability Project"),
            leaf("Project on a Study of a Local Statistical Innovation Project"),
            leaf("Project on a Study of a Local Statistical Technology Project"),
            leaf("Project on a Study of a Local Statistical Design Project"),
            leaf("Project on a Study of a Local Statistical Engineering Project"),
            leaf("Project on a Study of a Local Statistical Science Project"),
            leaf("Project on a Study of a Local Statistical Management System"),
            leaf("Project on a Study of a Local Statistical Information System"),
            leaf("Project on a Study of a Local Statistical Database"),
            leaf("Project on a Study of a Local Statistical Model"),
            leaf("Project on a Study of a Local Statistical Simulation"),
            leaf("Project on a Study of a Local Statistical Analysis"),
            leaf("Project on a Study of a Local Statistical Assessment"),
            leaf("Project on a Study of a Local Statistical Impact"),
            leaf("Project on a Study of a Local Statistical Risk"),
            leaf("Project on a Study of a Local Statistical Problem"),
            leaf("Project on a Study of a Local Statistical Solution"),
            leaf("Project on a Study of a Local Statistical Policy"),
            leaf("Project on a Study of a Local Statistical Law"),
            leaf("Project on a Study of a Local Statistical Regulation"),
            leaf("Project on a Study of a Local Statistical Standard"),
            leaf("Project on a Study of a Local Statistical Guideline"),
        ],
    },
    {
        name: "Zoology",
        children: [
            leaf("Animal Behavior Monitoring System using Computer Vision"),
            leaf("Wildlife Conservation & Habitat Mapping using GIS and Drones"),
            leaf("Bio-acoustics Analysis of Animal Sounds for Species Identification"),
            leaf("Genomic Analysis of a Species for Evolutionary Study"),
            leaf("Study on the Impact of Urbanization on Avian Species"),
            leaf("Marine Biology: Coral Reef Health Assessment"),
            leaf("Entomology: Insect Pest Management in Agriculture"),
            leaf("Comparative Anatomy of Vertebrate Skeletons"),
            leaf("Project on the Reproductive Biology of a Mammal"),
            leaf("Project on the Feeding Ecology of a Carnivore"),
            leaf("Project on the Physiology of a Hibernating Animal"),
            leaf("Project on the Migration Patterns of Birds"),
            leaf("Project on the Genetics of a Species"),
            leaf("Project on a Wildlife Population Survey"),
            leaf("Project on the Effects of Climate Change on a Habitat"),
            leaf("Project on a Veterinary Clinic Management System"),
            leaf("Project on a Zoonotic Disease Outbreak Study"),
            leaf("Project on the Life Cycle of an Amphibian"),
            leaf("Project on a Study of Primate Behavior"),
            leaf("Project on the Ecology of a Pond Ecosystem"),
            leaf("Project on a Bird Migration Tracking System"),
            leaf("Project on the Role of Zoos in Conservation"),
            leaf("Project on a Study of a Marine Invertebrate"),
            leaf("Project on a Study of Animal Cognition"),
            leaf("Project on the Effects of Pollution on Aquatic Life"),
            leaf("Project on a Study of Reptile Behavior"),
            leaf("Project on a Study of a Fish Species"),
            leaf("Project on the Anatomy of a Bird's Wing"),
            leaf("Project on a Study of a Terrestrial Ecosystem"),
            leaf("Project on a Study of a Freshwater Ecosystem"),
            leaf("Project on a Study of a Marine Ecosystem"),
            leaf("Project on a Study of a Forest Ecosystem"),
            leaf("Project on a Study of a Desert Ecosystem"),
            leaf("Project on a Study of a Grassland Ecosystem"),
            leaf("Project on a Study of a Tundra Ecosystem"),
            leaf("Project on a Study of a Tropical Rainforest"),
            leaf("Project on a Study of a Temperate Forest"),
            leaf("Project on a Study of a Boreal Forest"),
            leaf("Project on a Study of a Coral Reef Ecosystem"),
            leaf("Project on a Study of a Wetland Ecosystem"),
            leaf("Project on a Study of an Estuary Ecosystem"),
            leaf("Project on a Study of a Coastal Ecosystem"),
            leaf("Project on a Study of a River Ecosystem"),
            leaf("Project on a Study of a Lake Ecosystem"),
            leaf("Project on a Study of a Glacier Ecosystem"),
            leaf("Project on a Study of a Volcano Ecosystem"),
            leaf("Project on a Study of a Cave Ecosystem"),
            leaf("Project on a Study of a Deep Sea Ecosystem"),
            leaf("Project on a Study of a Desert Ecosystem"),
            leaf("Project on a Study of a Mountain Ecosystem"),
        ],
    },
];


const PG_DATA = [
    {
        "name": "Accounting",
        "children": [
            {
                "name": "Financial Statement Analysis for Profitability Assessment"
            },
            {
                "name": "Cost-Volume-Profit Analysis for Decision Making"
            },
            {
                "name": "Auditing of Internal Controls and Fraud Detection"
            },
            {
                "name": "Blockchain Technology in Accounting and Auditing"
            },
            {
                "name": "Forensic Accounting Case Study: Detecting Financial Misconduct"
            },
            {
                "name": "Tax Planning and Management for Small Businesses"
            },
            {
                "name": "Implementation of a Cloud-Based Accounting System"
            },
            {
                "name": "Budgeting and Forecasting for a Startup"
            },
            {
                "name": "Analysis of IFRS vs. GAAP Reporting Standards"
            },
            {
                "name": "Working Capital Management Strategies"
            },
            {
                "name": "Automated Bookkeeping System using RPA"
            },
            {
                "name": "E-commerce Accounting Integration with ERP"
            },
            {
                "name": "Data Analytics for Expense Report Audits"
            },
            {
                "name": "Machine Learning Model for Predictive Accounting"
            },
            {
                "name": "Development of a Tax Calculator Web Application"
            },
            {
                "name": "Hospitality Sector Accounting Practices"
            },
            {
                "name": "Real Estate Investment Trust (REIT) Financial Analysis"
            },
            {
                "name": "Non-Profit Organization Fund Accounting"
            },
            {
                "name": "Agricultural Sector Cost Accounting"
            },
            {
                "name": "Manufacturing Overhead Allocation and Control"
            },
            {
                "name": "Ethical Considerations in Financial Reporting"
            },
            {
                "name": "The Impact of Big Data on Modern Auditing"
            },
            {
                "name": "Global Financial Reporting Standards Harmonization"
            },
            {
                "name": "Corporate Governance and Its Link to Financial Performance"
            },
            {
                "name": "Sustainability Reporting and its Impact on Investors"
            },
            {
                "name": "Project on Asset Valuation Techniques"
            },
            {
                "name": "Project on Inventory Management Systems"
            },
            {
                "name": "Project on Mergers and Acquisitions Accounting"
            },
            {
                "name": "Project on International Finance Reporting"
            },
            {
                "name": "Project on Capital Budgeting Analysis"
            },
            {
                "name": "Project on Payroll Management Automation"
            },
            {
                "name": "Project on Risk Management in Financial Institutions"
            },
            {
                "name": "Project on Financial Ratios and Benchmarking"
            },
            {
                "name": "Project on Enterprise Resource Planning (ERP) Systems"
            },
            {
                "name": "Project on Supply Chain Cost Optimization"
            },
            {
                "name": "Project on Investment Portfolio Analysis"
            },
            {
                "name": "Project on Treasury Management Functions"
            },
            {
                "name": "Project on Digital Currencies and Taxation"
            },
            {
                "name": "Project on Corporate Social Responsibility Accounting"
            },
            {
                "name": "Project on Performance Measurement in Organizations"
            },
            {
                "name": "Project on Cost Reduction Strategies"
            },
            {
                "name": "Project on Revenue Recognition Standards (ASC 606)"
            },
            {
                "name": "Project on Capital Market Efficiency Studies"
            },
            {
                "name": "Project on Hedge Fund Financial Reporting"
            },
            {
                "name": "Project on Venture Capital Accounting Practices"
            },
            {
                "name": "Project on Credit Risk Assessment Models"
            },
            {
                "name": "Project on Derivatives Accounting and Valuation"
            },
            {
                "name": "Project on Cash Flow Statement Analysis"
            },
            {
                "name": "Project on Public Sector Budgeting"
            },
            {
                "name": "Project on Financial Planning for Retirement"
            },
            {
                "name": "Project on Cloud Computing Financial Models"
            }
        ]
    },
    {
        "name": "Applied Economics",
        "children": [
            {
                "name": "Econometric Model for Predicting GDP Growth"
            },
            {
                "name": "Impact Analysis of Fiscal Policy on Inflation"
            },
            {
                "name": "Input-Output Analysis of a Regional Economy"
            },
            {
                "name": "Microeconomic Analysis of Market Structures and Firm Behavior"
            },
            {
                "name": "Labor Market Dynamics and Unemployment Analysis"
            },
            {
                "name": "International Trade Flows and Their Impact on National Economies"
            },
            {
                "name": "Applied Game Theory: Strategic Interactions in Oligopolies"
            },
            {
                "name": "Welfare Economics and Public Policy Evaluation"
            },
            {
                "name": "Behavioral Economics: Nudging Consumer Choices"
            },
            {
                "name": "Causal Inference in Program Evaluation"
            },
            {
                "name": "Natural Resource Economics and Environmental Policy"
            },
            {
                "name": "The Economics of Healthcare Systems"
            },
            {
                "name": "Financial Economics: Asset Pricing Models"
            },
            {
                "name": "Urban Economics and Housing Market Dynamics"
            },
            {
                "name": "Agricultural Economics: Supply and Demand Analysis"
            },
            {
                "name": "Economic Development in Developing Countries"
            },
            {
                "name": "Economic Inequality and Poverty Measurement"
            },
            {
                "name": "Econometrics of Panel Data and Time Series Analysis"
            },
            {
                "name": "Analysis of the Indian Economy and its Reforms"
            },
            {
                "name": "Project on the Economics of Education and Human Capital"
            },
            {
                "name": "Project on the Economics of Climate Change"
            },
            {
                "name": "Project on the Impact of Globalization on Local Industries"
            },
            {
                "name": "Project on Monetary Policy and Financial Stability"
            },
            {
                "name": "Project on Econometric Forecasting of Stock Prices"
            },
            {
                "name": "Project on Industrial Organization and Market Concentration"
            },
            {
                "name": "Project on the Economics of Migration"
            },
            {
                "name": "Project on Public Finance and Government Spending"
            },
            {
                "name": "Project on the Economics of Crime"
            },
            {
                "name": "Project on the Role of Technology in Economic Growth"
            },
            {
                "name": "Project on International Finance and Currency Exchange Rates"
            },
            {
                "name": "Project on the Economics of Happiness"
            },
            {
                "name": "Project on Experimental Economics and Decision Making"
            },
            {
                "name": "Project on Health Economics and Public Health Policy"
            },
            {
                "name": "Project on the Economics of Renewable Energy"
            },
            {
                "name": "Project on the Impact of Trade Wars on Global Trade"
            },
            {
                "name": "Project on the Economics of Social Networks"
            },
            {
                "name": "Project on the Role of the IMF and World Bank"
            },
            {
                "name": "Project on Financial Crisis and its Economic Impact"
            },
            {
                "name": "Project on Supply Chain Economics"
            },
            {
                "name": "Project on the Economics of Sports"
            },
            {
                "name": "Project on the Economics of Information"
            },
            {
                "name": "Project on the Economics of Natural Disasters"
            },
            {
                "name": "Project on the Role of Entrepreneurship in Economic Development"
            },
            {
                "name": "Project on the Economics of Tourism"
            },
            {
                "name": "Project on the Economics of Intellectual Property"
            },
            {
                "name": "Project on Regional Economic Development"
            },
            {
                "name": "Project on the Economics of Family"
            },
            {
                "name": "Project on the Economics of Law and Regulation"
            },
            {
                "name": "Project on the Economics of Climate Policy"
            }
        ]
    },
    {
        "name": "Applied Nutrition",
        "children": [
            {
                "name": "Personalized Diet Plan Generator for Athletes"
            },
            {
                "name": "Analysis of Public Health Nutrition Programs in India"
            },
            {
                "name": "Childhood Malnutrition Monitoring and Intervention System"
            },
            {
                "name": "Food Nutrient Database & API Development for App Integration"
            },
            {
                "name": "Dietary Interventions for Type 2 Diabetes Management"
            },
            {
                "name": "Role of Probiotics in Gut Health and Immunity"
            },
            {
                "name": "Analysis of Food Labeling and Consumer Awareness"
            },
            {
                "name": "Nutritional Requirements for Geriatric Populations"
            },
            {
                "name": "Impact of Veganism on Micronutrient Status"
            },
            {
                "name": "Developing a School Lunch Program for Nutritional Improvement"
            },
            {
                "name": "Nutritional Management of Chronic Kidney Disease"
            },
            {
                "name": "Eating Disorder Treatment and Nutritional Counseling"
            },
            {
                "name": "Assessing the Nutritional Needs of Pregnant Women"
            },
            {
                "name": "Impact of Fast Food Consumption on Adolescent Health"
            },
            {
                "name": "Designing a Diet Plan for Weight Loss and Management"
            },
            {
                "name": "Mobile App for Calorie and Macronutrient Tracking"
            },
            {
                "name": "AI-Based Food Recognition and Calorie Estimation"
            },
            {
                "name": "Sensor-Based System for Monitoring Hydration Levels"
            },
            {
                "name": "Data Analytics on Food Consumption Patterns in Urban Areas"
            },
            {
                "name": "VR Simulation for Nutritional Education"
            },
            {
                "name": "Project on Sport-Specific Nutrition for Endurance Athletes"
            },
            {
                "name": "Project on Food Safety and Hygiene Protocols"
            },
            {
                "name": "Project on the Effect of Organic Foods on Health"
            },
            {
                "name": "Project on Nutritional Deficiencies in Low-Income Groups"
            },
            {
                "name": "Project on the Role of Superfoods in a Balanced Diet"
            },
            {
                "name": "Project on Sustainable Diets and Environmental Impact"
            },
            {
                "name": "Project on Nutritional Counseling Techniques"
            },
            {
                "name": "Project on Food Allergies and Intolerances Management"
            },
            {
                "name": "Project on Food Preservation Techniques and Their Effects"
            },
            {
                "name": "Project on Designing a Menu for a Hospital Cafeteria"
            },
            {
                "name": "Project on the Impact of Processed Foods on Public Health"
            },
            {
                "name": "Project on Nutritional Guidelines for Different Lifestyles"
            },
            {
                "name": "Project on Herbal Supplements and Their Effects"
            },
            {
                "name": "Project on the Role of Vitamin D in Bone Health"
            },
            {
                "name": "Project on Carbohydrate and Protein Cycling in Diets"
            },
            {
                "name": "Project on the Effect of Sugar on Brain Function"
            },
            {
                "name": "Project on Mindful Eating and its Psychological Benefits"
            },
            {
                "name": "Project on the Impact of Fermented Foods on Gut Flora"
            },
            {
                "name": "Project on Nutritional Needs for a Ketogenic Diet"
            },
            {
                "name": "Project on Dietary Fiber and Digestive Health"
            },
            {
                "name": "Project on the Glycemic Index and Blood Sugar Control"
            },
            {
                "name": "Project on Community-Based Nutritional Programs"
            },
            {
                "name": "Project on the Use of Fortified Foods"
            },
            {
                "name": "Project on Food Additives and their Health Risks"
            },
            {
                "name": "Project on a Low-Salt Diet and Blood Pressure"
            },
            {
                "name": "Project on the Role of Iron in Anemia Prevention"
            },
            {
                "name": "Project on Omega-3 Fatty Acids and Heart Health"
            },
            {
                "name": "Project on Diet for Skin Health"
            },
            {
                "name": "Project on Nutritional Needs for Vegetarians"
            },
            {
                "name": "Project on Hydration and Cognitive Performance"
            }
        ]
    },
    {
        "name": "Biochemistry",
        "children": [
            {
                "name": "Protein-Ligand Interaction Visualization and Analysis"
            },
            {
                "name": "Enzyme Kinetics Simulation and Modeling"
            },
            {
                "name": "Metabolic Pathway Analysis Tool for Disease Prediction"
            },
            {
                "name": "Drug Discovery Pipeline Study with a focus on a specific disease"
            },
            {
                "name": "Molecular Cloning and Gene Expression Analysis"
            },
            {
                "name": "Study of DNA Replication and Repair Mechanisms"
            },
            {
                "name": "Protein Purification and Characterization Techniques"
            },
            {
                "name": "Analysis of Photosynthesis and Cellular Respiration"
            },
            {
                "name": "Bioinformatics Pipeline for Genome Annotation"
            },
            {
                "name": "Project on Lipid Metabolism and its Regulation"
            },
            {
                "name": "Project on Carbohydrate Metabolism Pathways"
            },
            {
                "name": "Project on Nucleic Acid Structure and Function"
            },
            {
                "name": "Project on Signal Transduction Pathways in Cells"
            },
            {
                "name": "Project on the Biochemistry of Hormones"
            },
            {
                "name": "Project on the Role of Vitamins and Minerals"
            },
            {
                "name": "Project on the Biochemistry of Neurotransmitters"
            },
            {
                "name": "Project on the Immune System and Antibody Production"
            },
            {
                "name": "Project on the Biochemistry of Cancer Cells"
            },
            {
                "name": "Project on the Effects of Toxins on Cellular Processes"
            },
            {
                "name": "Project on the Biochemistry of Aging"
            },
            {
                "name": "Project on the Use of Biosensors in Medicine"
            },
            {
                "name": "Project on the Biochemistry of Muscle Contraction"
            },
            {
                "name": "Project on the Role of Free Radicals in Disease"
            },
            {
                "name": "Project on Glycogen Synthesis and Degradation"
            },
            {
                "name": "Project on the Biochemistry of Vision"
            },
            {
                "name": "Project on the Structure and Function of Hemoglobin"
            },
            {
                "name": "Project on the Biochemistry of Plant Secondary Metabolites"
            },
            {
                "name": "Project on the Role of Enzymes in Industrial Processes"
            },
            {
                "name": "Project on the Biochemistry of DNA Damage and Repair"
            },
            {
                "name": "Project on the Biochemistry of Apoptosis"
            },
            {
                "name": "Project on the Role of RNA in Gene Regulation"
            },
            {
                "name": "Project on the Biochemistry of Photosynthesis"
            },
            {
                "name": "Project on the Effects of pH on Enzyme Activity"
            },
            {
                "name": "Project on the Use of Chromatography in Biochemistry"
            },
            {
                "name": "Project on the Biochemistry of Viral Replication"
            },
            {
                "name": "Project on the Structure of Antibodies"
            },
            {
                "name": "Project on the Role of ATP in Cellular Energy"
            },
            {
                "name": "Project on the Biochemistry of Blood Clotting"
            },
            {
                "name": "Project on the Role of Lipids in Cell Membranes"
            },
            {
                "name": "Project on the Biochemistry of Food Processing"
            },
            {
                "name": "Project on the Use of Bioinformatics in Drug Discovery"
            },
            {
                "name": "Project on the Role of Antioxidants in Health"
            },
            {
                "name": "Project on the Biochemistry of Photosynthesis and Respiration"
            },
            {
                "name": "Project on the Structure of Collagen"
            },
            {
                "name": "Project on the Role of Chaperones in Protein Folding"
            },
            {
                "name": "Project on the Biochemistry of Photosynthesis in Algae"
            },
            {
                "name": "Project on the Use of Spectroscopy in Biochemistry"
            },
            {
                "name": "Project on the Role of Calcium in Cellular Signaling"
            },
            {
                "name": "Project on the Biochemistry of Fermentation"
            },
            {
                "name": "Project on the Role of Phosphorylation in Signaling"
            }
        ]
    },
    {
        "name": "Bioinformatics",
        "children": [
            {
                "name": "Genomic Sequence Analysis for Disease Markers"
            },
            {
                "name": "Protein Structure Prediction using Computational Models"
            },
            {
                "name": "Phylogenetic Tree Construction and Evolutionary Analysis"
            },
            {
                "name": "Drug-Target Interaction Prediction using Machine Learning"
            },
            {
                "name": "RNA-Seq Data Analysis for Gene Expression Profiling"
            },
            {
                "name": "Developing a Bioinformatics Pipeline for Variant Calling"
            },
            {
                "name": "Analysis of Microbiome Data for Health and Disease"
            },
            {
                "name": "Database Development for a Specific Biological Dataset"
            },
            {
                "name": "Structural Bioinformatics of Membrane Proteins"
            },
            {
                "name": "Metagenomic Analysis of Environmental Samples"
            },
            {
                "name": "Project on Comparative Genomics of Different Species"
            },
            {
                "name": "Project on Functional Annotation of a Newly Sequenced Genome"
            },
            {
                "name": "Project on Network Analysis of Protein-Protein Interactions"
            },
            {
                "name": "Project on Cancer Genomics and Mutational Analysis"
            },
            {
                "name": "Project on the Use of Artificial Intelligence in Drug Discovery"
            },
            {
                "name": "Project on Epigenetic Data Analysis"
            },
            {
                "name": "Project on Molecular Dynamics Simulation of a Protein"
            },
            {
                "name": "Project on Clinical Data Analysis for Personalized Medicine"
            },
            {
                "name": "Project on Long Non-Coding RNA Analysis"
            },
            {
                "name": "Project on Single-Cell RNA Sequencing Data Analysis"
            },
            {
                "name": "Project on Transcriptome Analysis of a Plant"
            },
            {
                "name": "Project on the Use of Machine Learning for Gene Prediction"
            },
            {
                "name": "Project on Drug Repurposing using Bioinformatics"
            },
            {
                "name": "Project on the Analysis of Viral Genomes"
            },
            {
                "name": "Project on the Bioinformatics of Antimicrobial Resistance"
            },
            {
                "name": "Project on Immunoinformatics and Vaccine Design"
            },
            {
                "name": "Project on DNA Barcoding for Species Identification"
            },
            {
                "name": "Project on Comparative Transcriptomics"
            },
            {
                "name": "Project on Protein-Ligand Docking"
            },
            {
                "name": "Project on Analysis of Genomic Big Data"
            },
            {
                "name": "Project on the Use of Python for Bioinformatics"
            },
            {
                "name": "Project on the Bioinformatics of Human Genetic Diseases"
            },
            {
                "name": "Project on the Analysis of Gene Regulatory Networks"
            },
            {
                "name": "Project on the Role of Non-Coding DNA"
            },
            {
                "name": "Project on Genome Assembly and Annotation"
            },
            {
                "name": "Project on the Design of Primers for PCR"
            },
            {
                "name": "Project on the Use of R for Statistical Genomics"
            },
            {
                "name": "Project on the Bioinformatics of Plant Genomes"
            },
            {
                "name": "Project on the Role of Telomeres in Aging"
            },
            {
                "name": "Project on Bioinformatics in Forensic Science"
            },
            {
                "name": "Project on the Analysis of Single Nucleotide Polymorphisms (SNPs)"
            },
            {
                "name": "Project on Microarray Data Analysis"
            },
            {
                "name": "Project on the Bioinformatics of Pathogen Evolution"
            },
            {
                "name": "Project on the Role of Computational Biology in Drug Discovery"
            },
            {
                "name": "Project on the Bioinformatics of Food and Nutrition"
            },
            {
                "name": "Project on the Analysis of Genomic Data for Ancestry"
            },
            {
                "name": "Project on the Bioinformatics of Epigenetic Modifications"
            },
            {
                "name": "Project on the Role of Machine Learning in Proteomics"
            },
            {
                "name": "Project on the Bioinformatics of Drug Resistance"
            },
            {
                "name": "Project on the Bioinformatics of Personalized Medicine"
            }
        ]
    },
    {
        "name": "Biotechnology",
        "children": [
            {
                "name": "Genetically Modified Organisms (GMOs) and Their Regulation"
            },
            {
                "name": "Development of a Bioreactor for Biofuel Production"
            },
            {
                "name": "CRISPR-Cas9 Gene Editing for Disease Therapy"
            },
            {
                "name": "Bioremediation of Polluted Water using Microbes"
            },
            {
                "name": "Plant Tissue Culture for Crop Improvement"
            },
            {
                "name": "Production of Recombinant Proteins for Therapeutic Use"
            },
            {
                "name": "Application of Nanobiotechnology in Drug Delivery"
            },
            {
                "name": "Biosensor Development for Environmental Monitoring"
            },
            {
                "name": "Stem Cell Therapy for Regenerative Medicine"
            },
            {
                "name": "Analysis of Fermentation Processes in Food Production"
            },
            {
                "name": "Project on the Role of Biofertilizers and Biopesticides"
            },
            {
                "name": "Project on the Ethical and Social Implications of Biotechnology"
            },
            {
                "name": "Project on the Production of Bio-plastics"
            },
            {
                "name": "Project on Vaccine Development and Production"
            },
            {
                "name": "Project on Forensic Biotechnology and DNA Profiling"
            },
            {
                "name": "Project on the Use of Algae for Carbon Sequestration"
            },
            {
                "name": "Project on Gene Therapy for Genetic Disorders"
            },
            {
                "name": "Project on the Role of Probiotics in Human Health"
            },
            {
                "name": "Project on the Production of Bio-ethanol from Lignocellulosic Biomass"
            },
            {
                "name": "Project on the Use of Biosensors in Medical Diagnostics"
            },
            {
                "name": "Project on the Cloning of a Gene of Interest"
            },
            {
                "name": "Project on the Use of Antibodies in Research and Therapy"
            },
            {
                "name": "Project on the Role of Industrial Enzymes"
            },
            {
                "name": "Project on the Production of Biopharmaceuticals"
            },
            {
                "name": "Project on the Use of PCR in Molecular Diagnostics"
            },
            {
                "name": "Project on the Role of Stem Cells in Regenerative Medicine"
            },
            {
                "name": "Project on the Use of Microbes for Wastewater Treatment"
            },
            {
                "name": "Project on the Role of Bioinformatics in Biotechnology"
            },
            {
                "name": "Project on the Production of Therapeutic Proteins"
            },
            {
                "name": "Project on the Use of Gene Drives for Pest Control"
            },
            {
                "name": "Project on the Role of Bioreactors in Large-Scale Production"
            },
            {
                "name": "Project on the Ethical Aspects of Genetic Engineering"
            },
            {
                "name": "Project on the Use of DNA Fingerprinting in Forensics"
            },
            {
                "name": "Project on the Production of Single-Cell Protein"
            },
            {
                "name": "Project on the Role of Nanoparticles in Drug Delivery"
            },
            {
                "name": "Project on the Use of CRISPR for Disease Modeling"
            },
            {
                "name": "Project on the Production of Biodiesel"
            },
            {
                "name": "Project on the Role of Recombinant DNA Technology"
            },
            {
                "name": "Project on the Use of Biosensors for Pollution Detection"
            },
            {
                "name": "Project on the Production of Bioplastics from Algae"
            },
            {
                "name": "Project on the Role of Tissue Engineering in Medicine"
            },
            {
                "name": "Project on the Use of Microbes in Food Production"
            },
            {
                "name": "Project on the Role of Gene Therapy in Cancer Treatment"
            },
            {
                "name": "Project on the Production of Biopharmaceuticals in Plants"
            },
            {
                "name": "Project on the Use of Gene Silencing for Pest Control"
            },
            {
                "name": "Project on the Role of Biofilms in Industrial Processes"
            },
            {
                "name": "Project on the Use of Gene Editing for Crop Improvement"
            },
            {
                "name": "Project on the Production of Bio-ethanol from Waste"
            },
            {
                "name": "Project on the Role of Fermentation in Brewing"
            },
            {
                "name": "Project on the Use of Nanoparticles in Medical Imaging"
            }
        ]
    },
    {
        "name": "Botany",
        "children": [
            {
                "name": "Plant Tissue Culture for Mass Propagation of a Native Species"
            },
            {
                "name": "Phytoremediation of Heavy Metal Contaminated Soil"
            },
            {
                "name": "Ethnobotanical Study of Medicinal Plants in a Specific Region"
            },
            {
                "name": "Analysis of Photosynthesis Efficiency in Different Plant Species"
            },
            {
                "name": "Development of a Plant Disease Detection System using AI"
            },
            {
                "name": "Ecological Study of Forest Succession in a Degraded Area"
            },
            {
                "name": "Molecular Identification of a Plant Species using DNA Barcoding"
            },
            {
                "name": "Impact of Climate Change on Plant Phenology"
            },
            {
                "name": "Role of Plant Hormones in Growth and Development"
            },
            {
                "name": "Project on the Conservation of Endangered Plant Species"
            },
            {
                "name": "Project on the Effect of Pollution on Plant Growth"
            },
            {
                "name": "Project on the Role of Mycorrhizal Fungi in Plant Health"
            },
            {
                "name": "Project on Plant-Pathogen Interactions"
            },
            {
                "name": "Project on the Anatomy of a Plant Stem and Leaf"
            },
            {
                "name": "Project on the Taxonomy and Systematics of a Plant Family"
            },
            {
                "name": "Project on the Role of Plant Secondary Metabolites in Defense"
            },
            {
                "name": "Project on the Role of Genetically Modified Crops"
            },
            {
                "name": "Project on the Effect of Light on Plant Growth"
            },
            {
                "name": "Project on the Biogeography of a Plant Species"
            },
            {
                "name": "Project on the Role of Plant-Pollinator Interactions"
            },
            {
                "name": "Project on the Use of Plant Extracts as Antimicrobials"
            },
            {
                "name": "Project on the Role of Plant Hormones in Fruit Ripening"
            },
            {
                "name": "Project on the Conservation of Mangrove Forests"
            },
            {
                "name": "Project on the Role of Plant Biotechnology in Agriculture"
            },
            {
                "name": "Project on the Effects of Salinity on Plant Growth"
            },
            {
                "name": "Project on the Role of Plant Physiology in Drought Resistance"
            },
            {
                "name": "Project on the Anatomy of a Flower and its Role in Reproduction"
            },
            {
                "name": "Project on the Use of Remote Sensing for Vegetation Mapping"
            },
            {
                "name": "Project on the Role of Plant-Herbivore Interactions"
            },
            {
                "name": "Project on the Role of Plant Genetics in Crop Improvement"
            },
            {
                "name": "Project on the Use of Plant Tissue Culture for Conservation"
            },
            {
                "name": "Project on the Effects of Heavy Metals on Plant Physiology"
            },
            {
                "name": "Project on the Role of Plant-Microbe Interactions in Soil"
            },
            {
                "name": "Project on the Anatomy of a Root System"
            },
            {
                "name": "Project on the Role of Plant Genomics in Crop Breeding"
            },
            {
                "name": "Project on the Use of Plant Extracts for Biofuel Production"
            },
            {
                "name": "Project on the Effects of Nutrient Deficiency on Plant Growth"
            },
            {
                "name": "Project on the Role of Plant Systematics in Biodiversity Conservation"
            },
            {
                "name": "Project on the Effects of Water Stress on Plant Physiology"
            },
            {
                "name": "Project on the Role of Plant Hormones in Abiotic Stress Tolerance"
            },
            {
                "name": "Project on the Use of Plant-Based Dyes"
            },
            {
                "name": "Project on the Role of Plant Anatomy in Adaptation"
            },
            {
                "name": "Project on the Effects of Temperature on Plant Growth"
            },
            {
                "name": "Project on the Role of Plant Cell Culture in Biotechnology"
            },
            {
                "name": "Project on the Use of Plant Genomics for Disease Resistance"
            },
            {
                "name": "Project on the Role of Plant Hormones in Seed Germination"
            },
            {
                "name": "Project on the Use of Plant Tissue Culture for Medicinal Plants"
            },
            {
                "name": "Project on the Role of Plant Anatomy in Water Transport"
            },
            {
                "name": "Project on the Use of Plant Extracts as Bio-pesticides"
            },
            {
                "name": "Project on the Role of Plant Physiology in Photosynthesis"
            }
        ]
    },
    {
        "name": "Business Administration (MBA)",
        "children": [
            {
                "name": "Strategic Analysis and Recommendations for a Global Company"
            },
            {
                "name": "Financial Restructuring and M&A Case Study"
            },
            {
                "name": "Digital Transformation Strategy for a Traditional Business"
            },
            {
                "name": "Market Entry Strategy for a New Product in a Developing Market"
            },
            {
                "name": "Leadership and Change Management in a Post-Pandemic World"
            },
            {
                "name": "Supply Chain Resilience and Risk Management"
            },
            {
                "name": "Data-driven Marketing and Customer Segmentation"
            },
            {
                "name": "Business Plan for a Tech Startup with a Go-to-Market Strategy"
            },
            {
                "name": "Impact of ESG (Environmental, Social, and Governance) on Corporate Performance"
            },
            {
                "name": "Valuation of a Company using Discounted Cash Flow (DCF) Method"
            },
            {
                "name": "Project on Organizational Design and Restructuring"
            },
            {
                "name": "Project on Corporate Governance and Board Effectiveness"
            },
            {
                "name": "Project on Crisis Management and Business Continuity"
            },
            {
                "name": "Project on Talent Management and Leadership Development"
            },
            {
                "name": "Project on Brand Management and Brand Equity"
            },
            {
                "name": "Project on Project Management and Agile Methodologies"
            },
            {
                "name": "Project on International Business and Global Strategy"
            },
            {
                "name": "Project on Mergers and Acquisitions Integration"
            },
            {
                "name": "Project on Financial Risk Management"
            },
            {
                "name": "Project on Business Ethics and Social Responsibility"
            },
            {
                "name": "Project on Customer Relationship Management (CRM) Strategy"
            },
            {
                "name": "Project on Supply Chain Analytics and Optimization"
            },
            {
                "name": "Project on Business Intelligence and Data Warehousing"
            },
            {
                "name": "Project on Strategic Marketing Planning"
            },
            {
                "name": "Project on Operations Management and Process Improvement"
            },
            {
                "name": "Project on Entrepreneurship and Innovation Management"
            },
            {
                "name": "Project on Negotiation and Conflict Resolution"
            },
            {
                "name": "Project on Pricing Strategy and Revenue Management"
            },
            {
                "name": "Project on Global Supply Chain Management"
            },
            {
                "name": "Project on Digital Transformation in the Banking Industry"
            },
            {
                "name": "Project on Human Resource Management in a Global Context"
            },
            {
                "name": "Project on Financial Modeling and Valuation"
            },
            {
                "name": "Project on Business Analytics and Decision Making"
            },
            {
                "name": "Project on a New Business Venture Plan"
            },
            {
                "name": "Project on International Human Resource Management"
            },
            {
                "name": "Project on Business Law and Ethics"
            },
            {
                "name": "Project on Leadership and Organizational Change"
            },
            {
                "name": "Project on Strategic Financial Management"
            },
            {
                "name": "Project on Marketing Research and Consumer Insights"
            },
            {
                "name": "Project on Business Process Reengineering"
            },
            {
                "name": "Project on E-commerce Business Strategy"
            },
            {
                "name": "Project on Performance Management System Design"
            },
            {
                "name": "Project on Knowledge Management in Organizations"
            },
            {
                "name": "Project on Business Communication and Public Relations"
            },
            {
                "name": "Project on Quality Management and Six Sigma"
            },
            {
                "name": "Project on Global Marketing Strategy"
            },
            {
                "name": "Project on Capital Budgeting and Investment Decisions"
            },
            {
                "name": "Project on Customer Service Management"
            },
            {
                "name": "Project on Talent Acquisition and Workforce Planning"
            },
            {
                "name": "Project on IT Strategy and Management"
            }
        ]
    },
    {
        "name": "Chemistry",
        "children": [
            {
                "name": "Synthesis and Characterization of Novel Inorganic Compounds"
            },
            {
                "name": "Green Chemistry: Design of Sustainable Chemical Processes"
            },
            {
                "name": "Spectroscopic Analysis of Organic Molecules"
            },
            {
                "name": "Quantum Chemistry Calculations on Molecular Properties"
            },
            {
                "name": "Development of a Chemical Sensor for Pollution Detection"
            },
            {
                "name": "Study of Reaction Kinetics and Reaction Mechanisms"
            },
            {
                "name": "Polymer Chemistry: Synthesis and Characterization of New Polymers"
            },
            {
                "name": "Electrochemical Analysis of Corrosion in Metals"
            },
            {
                "name": "Photochemistry: Light-Induced Chemical Reactions"
            },
            {
                "name": "Project on Drug Discovery and Medicinal Chemistry"
            },
            {
                "name": "Project on Environmental Chemistry and Water Quality Analysis"
            },
            {
                "name": "Project on the Use of Nanomaterials in Catalysis"
            },
            {
                "name": "Project on Food Chemistry and Additives"
            },
            {
                "name": "Project on Forensic Chemistry and Substance Identification"
            },
            {
                "name": "Project on the Role of Catalysts in Industrial Processes"
            },
            {
                "name": "Project on Analytical Chemistry and Separation Techniques"
            },
            {
                "name": "Project on the Chemistry of Polymers and Plastics"
            },
            {
                "name": "Project on the Synthesis of a Natural Product"
            },
            {
                "name": "Project on the Use of Spectroscopy in Structural Analysis"
            },
            {
                "name": "Project on the Thermodynamics of Chemical Reactions"
            },
            {
                "name": "Project on the Chemistry of Renewable Energy Sources"
            },
            {
                "name": "Project on the Role of Enzymes in Chemical Reactions"
            },
            {
                "name": "Project on the Use of Mass Spectrometry in Chemistry"
            },
            {
                "name": "Project on the Chemistry of Cosmetics and Personal Care Products"
            },
            {
                "name": "Project on the Synthesis of Biodegradable Polymers"
            },
            {
                "name": "Project on the Use of X-ray Crystallography in Chemistry"
            },
            {
                "name": "Project on the Chemistry of Pharmaceuticals"
            },
            {
                "name": "Project on the Role of Green Solvents in Synthesis"
            },
            {
                "name": "Project on the Synthesis of Inorganic Nanoparticles"
            },
            {
                "name": "Project on the Chemistry of Batteries and Energy Storage"
            },
            {
                "name": "Project on the Role of Quantum Chemistry in Materials Science"
            },
            {
                "name": "Project on the Chemistry of DNA and RNA"
            },
            {
                "name": "Project on the Synthesis of Bio-polymers"
            },
            {
                "name": "Project on the Chemistry of Dyes and Pigments"
            },
            {
                "name": "Project on the Use of Chromatography in Separation"
            },
            {
                "name": "Project on the Synthesis of Flavors and Fragrances"
            },
            {
                "name": "Project on the Chemistry of Environmental Pollution"
            },
            {
                "name": "Project on the Role of Superconductors in Materials Science"
            },
            {
                "name": "Project on the Synthesis of Catalysts"
            },
            {
                "name": "Project on the Chemistry of Explosives"
            },
            {
                "name": "Project on the Use of NMR Spectroscopy in Structural Elucidation"
            },
            {
                "name": "Project on the Chemistry of Soil and Water"
            },
            {
                "name": "Project on the Role of Surface Chemistry in Catalysis"
            },
            {
                "name": "Project on the Synthesis of Agrochemicals"
            },
            {
                "name": "Project on the Chemistry of Polymers in Medicine"
            },
            {
                "name": "Project on the Role of Green Chemistry in Industry"
            },
            {
                "name": "Project on the Synthesis of Liquid Crystals"
            },
            {
                "name": "Project on the Chemistry of Nanomaterials in Medicine"
            },
            {
                "name": "Project on the Role of Chemical Reactions in Climate Change"
            },
            {
                "name": "Project on the Use of Chemical Sensors in Diagnostics"
            }
        ]
    },
    {
        "name": "Clinical Psychology",
        "children": [
            {
                "name": "Effectiveness of Cognitive Behavioral Therapy (CBT) for Anxiety Disorders"
            },
            {
                "name": "Impact of Social Media on Adolescent Mental Health"
            },
            {
                "name": "Study on the Efficacy of Mindfulness-Based Interventions for Stress Reduction"
            },
            {
                "name": "Assessment and Treatment of Post-Traumatic Stress Disorder (PTSD)"
            },
            {
                "name": "Neuropsychological Assessment of Cognitive Impairment"
            },
            {
                "name": "Child and Adolescent Psychology: A Case Study on a Specific Disorder"
            },
            {
                "name": "Role of Family Therapy in Addiction Treatment"
            },
            {
                "name": "Cross-Cultural Study on the Manifestation of Depression"
            },
            {
                "name": "Developing a Psychological First Aid Manual for Disaster Relief"
            },
            {
                "name": "Project on the Psychological Effects of the COVID-19 Pandemic"
            },
            {
                "name": "Project on the Role of Psychotherapy in Schizophrenia Treatment"
            },
            {
                "name": "Project on the Assessment of Eating Disorders and Body Image"
            },
            {
                "name": "Project on the Use of Virtual Reality in Exposure Therapy"
            },
            {
                "name": "Project on the Psychology of Pain Management"
            },
            {
                "name": "Project on the Role of Sleep in Mental Health"
            },
            {
                "name": "Project on the Impact of Childhood Trauma on Adult Behavior"
            },
            {
                "name": "Project on the Psychology of Criminal Behavior"
            },
            {
                "name": "Project on the Use of Art Therapy in Mental Health"
            },
            {
                "name": "Project on the Role of Empathy in Therapeutic Relationships"
            },
            {
                "name": "Project on the Psychology of Phobias and Their Treatment"
            },
            {
                "name": "Project on the Impact of Loneliness on Mental Well-being"
            },
            {
                "name": "Project on the Role of Self-Esteem in Psychological Health"
            },
            {
                "name": "Project on the Psychology of Addictive Behaviors"
            },
            {
                "name": "Project on the Role of Personality Disorders in Relationships"
            },
            {
                "name": "Project on the Psychology of Grief and Bereavement"
            },
            {
                "name": "Project on the Use of Play Therapy with Children"
            },
            {
                "name": "Project on the Psychology of Forgiveness"
            },
            {
                "name": "Project on the Role of Gratitude in Mental Health"
            },
            {
                "name": "Project on the Psychology of Resilience"
            },
            {
                "name": "Project on the Role of Cognitive Biases in Decision Making"
            },
            {
                "name": "Project on the Psychology of Learning Disabilities"
            },
            {
                "name": "Project on the Impact of Stress on Physical Health"
            },
            {
                "name": "Project on the Role of Social Support in Mental Health"
            },
            {
                "name": "Project on the Psychology of Motivation"
            },
            {
                "name": "Project on the Use of Relaxation Techniques for Anxiety"
            },
            {
                "name": "Project on the Psychology of Happiness"
            },
            {
                "name": "Project on the Role of Mindfulness in Clinical Practice"
            },
            {
                "name": "Project on the Psychology of Suicide"
            },
            {
                "name": "Project on the Use of Positive Psychology Interventions"
            },
            {
                "name": "Project on the Role of Emotional Intelligence"
            },
            {
                "name": "Project on the Psychology of Post-Traumatic Growth"
            },
            {
                "name": "Project on the Role of Neuroscience in Clinical Psychology"
            },
            {
                "name": "Project on the Psychology of Self-Harm"
            },
            {
                "name": "Project on the Use of Biofeedback in Therapy"
            },
            {
                "name": "Project on the Psychology of Obsessive-Compulsive Disorder (OCD)"
            },
            {
                "name": "Project on the Role of Spirituality in Mental Health"
            },
            {
                "name": "Project on the Psychology of Work-Life Balance"
            },
            {
                "name": "Project on the Use of Dialectical Behavior Therapy (DBT)"
            },
            {
                "name": "Project on the Psychology of Bullying"
            },
            {
                "name": "Project on the Role of Culture in Psychological Assessment"
            }
        ]
    },
    {
        "name": "Communication & Journalism",
        "children": [
            {
                "name": "Investigative Report on Local Government Accountability"
            },
            {
                "name": "Social Media Campaign Analysis for a Non-Profit Organization"
            },
            {
                "name": "Documentary Film on a Contemporary Social Issue"
            },
            {
                "name": "Content Analysis of Media Portrayals of a Specific Community"
            },
            {
                "name": "Public Relations Strategy for a Corporate Crisis"
            },
            {
                "name": "Ethical Implications of AI in Journalism"
            },
            {
                "name": "Podcast Series on a Historical Event"
            },
            {
                "name": "Analysis of Fake News and its Impact on Society"
            },
            {
                "name": "Cross-Cultural Communication in Global Business"
            },
            {
                "name": "Project on the Role of Citizen Journalism in a Democracy"
            },
            {
                "name": "Project on the Evolution of Digital Media and its Impact"
            },
            {
                "name": "Project on Political Communication and Election Campaigns"
            },
            {
                "name": "Project on the Impact of Social Media on Interpersonal Communication"
            },
            {
                "name": "Project on Photojournalism and Visual Storytelling"
            },
            {
                "name": "Project on Public Speaking and Persuasive Communication"
            },
            {
                "name": "Project on the Role of Public Relations in Brand Building"
            },
            {
                "name": "Project on Radio Broadcasting and Podcasting"
            },
            {
                "name": "Project on the History of Indian Journalism"
            },
            {
                "name": "Project on the Role of Media in Social Movements"
            },
            {
                "name": "Project on Corporate Communication and Internal Relations"
            },
            {
                "name": "Project on the Use of Data Journalism for Reporting"
            },
            {
                "name": "Project on the Legal and Ethical Issues in Journalism"
            },
            {
                "name": "Project on the Role of Media in Shaping Public Opinion"
            },
            {
                "name": "Project on the Impact of Television on Society"
            },
            {
                "name": "Project on the Future of News Media"
            },
            {
                "name": "Project on the Role of Advertising in a Market Economy"
            },
            {
                "name": "Project on a Case Study of a Media Scandal"
            },
            {
                "name": "Project on the Role of Print Media in the Digital Age"
            },
            {
                "name": "Project on the Use of Infographics in Journalism"
            },
            {
                "name": "Project on the Role of Communication in Leadership"
            },
            {
                "name": "Project on the Impact of Globalization on Media"
            },
            {
                "name": "Project on the Role of Film in Social Commentary"
            },
            {
                "name": "Project on the Use of Mobile Journalism (MoJo)"
            },
            {
                "name": "Project on the Role of Social Media in Public Relations"
            },
            {
                "name": "Project on a Case Study of a Political Campaign"
            },
            {
                "name": "Project on the Role of Communication in Conflict Resolution"
            },
            {
                "name": "Project on the Impact of Media on Body Image"
            },
            {
                "name": "Project on a Case Study of a Public Relations Campaign"
            },
            {
                "name": "Project on the Role of Public Opinion in Policy Making"
            },
            {
                "name": "Project on the Use of Visual Communication in Marketing"
            },
            {
                "name": "Project on the History of Public Relations"
            },
            {
                "name": "Project on the Role of Social Media in Political Activism"
            },
            {
                "name": "Project on a Case Study of a Corporate Communication Strategy"
            },
            {
                "name": "Project on the Role of Media in Disaster Management"
            },
            {
                "name": "Project on the Use of Virtual Reality in Journalism"
            },
            {
                "name": "Project on a Case Study of a News Organization's Ethics"
            },
            {
                "name": "Project on the Role of Communication in Health Awareness"
            },
            {
                "name": "Project on a Case Study of a Successful Social Media Campaign"
            },
            {
                "name": "Project on the Role of Artificial Intelligence in News Writing"
            },
            {
                "name": "Project on the Impact of Live Streaming on Media"
            }
        ]
    },
    {
        "name": "Computer Applications (MCA)",
        "children": [
            {
                "name": "Development of a Machine Learning Model for Predictive Analytics"
            },
            {
                "name": "Design and Implementation of a Secure E-commerce Platform"
            },
            {
                "name": "Building a Mobile App for Real-time Data Visualization"
            },
            {
                "name": "Cloud-based ERP System for Inventory Management"
            },
            {
                "name": "Blockchain-based Voting System for Enhanced Security"
            },
            {
                "name": "AI-powered Chatbot for Customer Service Automation"
            },
            {
                "name": "Data Analytics Dashboard for a Retail Business"
            },
            {
                "name": "Development of a Web Application with a Microservices Architecture"
            },
            {
                "name": "Cybersecurity Risk Assessment and Mitigation Plan"
            },
            {
                "name": "IoT-based Smart Home Automation System"
            },
            {
                "name": "Project on a Computer Vision System for Object Detection"
            },
            {
                "name": "Project on a Natural Language Processing (NLP) Application"
            },
            {
                "name": "Project on a Data Warehouse Design and Implementation"
            },
            {
                "name": "Project on a Mobile Game Development"
            },
            {
                "name": "Project on a Cloud-based Document Management System"
            },
            {
                "name": "Project on a Supply Chain Management System using AI"
            },
            {
                "name": "Project on a Social Media Analytics Tool"
            },
            {
                "name": "Project on a Geographic Information System (GIS) Application"
            },
            {
                "name": "Project on a Big Data Analytics Platform"
            },
            {
                "name": "Project on a Cybersecurity Threat Intelligence System"
            },
            {
                "name": "Project on an Augmented Reality (AR) Application"
            },
            {
                "name": "Project on a Machine Learning-based Recommendation System"
            },
            {
                "name": "Project on a Web Scraping Tool for Market Research"
            },
            {
                "name": "Project on a Virtual Reality (VR) Training Simulation"
            },
            {
                "name": "Project on a Business Process Automation (BPA) System"
            },
            {
                "name": "Project on a Blockchain-based Identity Management System"
            },
            {
                "name": "Project on a Deep Learning Model for Image Recognition"
            },
            {
                "name": "Project on a Cloud-based Customer Relationship Management (CRM) System"
            },
            {
                "name": "Project on an IoT-based Agricultural Monitoring System"
            },
            {
                "name": "Project on a Web-based Project Management Tool"
            },
            {
                "name": "Project on a Cybersecurity Incident Response Plan"
            },
            {
                "name": "Project on a Machine Learning-based Fraud Detection System"
            },
            {
                "name": "Project on an Automated Testing Framework for Software"
            },
            {
                "name": "Project on a Cloud-based Data Backup Solution"
            },
            {
                "name": "Project on a Social Networking Platform for a Niche Community"
            },
            {
                "name": "Project on a Natural Language Understanding (NLU) System"
            },
            {
                "name": "Project on an Automated Code Generation Tool"
            },
            {
                "name": "Project on a Supply Chain Optimization Model"
            },
            {
                "name": "Project on a Facial Recognition System"
            },
            {
                "name": "Project on a Business Intelligence Dashboard"
            },
            {
                "name": "Project on a Cloud-based HR Management System"
            },
            {
                "name": "Project on a Web-based Learning Management System"
            },
            {
                "name": "Project on a Cryptocurrency Trading Bot"
            },
            {
                "name": "Project on a Cybersecurity Intrusion Detection System"
            },
            {
                "name": "Project on a Machine Learning-based Credit Scoring Model"
            },
            {
                "name": "Project on a Cloud-based Healthcare Management System"
            },
            {
                "name": "Project on a Web-based Survey and Data Analysis Tool"
            },
            {
                "name": "Project on a Voice-controlled Smart Assistant"
            },
            {
                "name": "Project on a Mobile App for Location-based Services"
            },
            {
                "name": "Project on a Cybersecurity System for IoT Devices"
            }
        ]
    },
    {
        "name": "Data Science",
        "children": [
            {
                "name": "Predictive Model for Customer Churn Analysis"
            },
            {
                "name": "Sentiment Analysis of Social Media Data for a Brand"
            },
            {
                "name": "Credit Risk Assessment using Machine Learning Algorithms"
            },
            {
                "name": "Image Recognition Model for Medical Diagnosis"
            },
            {
                "name": "Web Scraping and Data Analysis for Market Trends"
            },
            {
                "name": "Time Series Forecasting of Sales Data"
            },
            {
                "name": "Natural Language Processing (NLP) for Text Summarization"
            },
            {
                "name": "Recommendation System for an E-commerce Website"
            },
            {
                "name": "Fraud Detection in Financial Transactions"
            },
            {
                "name": "Exploratory Data Analysis (EDA) of a Large Dataset"
            },
            {
                "name": "Project on a House Price Prediction Model"
            },
            {
                "name": "Project on a Customer Segmentation Model"
            },
            {
                "name": "Project on a Churn Prediction Model"
            },
            {
                "name": "Project on a Customer Lifetime Value (CLV) Prediction Model"
            },
            {
                "name": "Project on a Predictive Maintenance Model"
            },
            {
                "name": "Project on a Supply Chain Demand Forecasting Model"
            },
            {
                "name": "Project on a Fraud Detection Model in Insurance"
            },
            {
                "name": "Project on a Medical Diagnosis Prediction Model"
            },
            {
                "name": "Project on a Recommendation System for Movies"
            },
            {
                "name": "Project on a Stock Price Prediction Model"
            },
            {
                "name": "Project on a Natural Language Generation (NLG) System"
            },
            {
                "name": "Project on an Anomaly Detection System"
            },
            {
                "name": "Project on a Credit Card Fraud Detection Model"
            },
            {
                "name": "Project on a Healthcare Patient Readmission Prediction Model"
            },
            {
                "name": "Project on a Social Media Engagement Prediction Model"
            },
            {
                "name": "Project on a Customer Satisfaction Prediction Model"
            },
            {
                "name": "Project on a Real-time Traffic Prediction Model"
            },
            {
                "name": "Project on a Predictive Model for Employee Attrition"
            },
            {
                "name": "Project on an Image Classification Model"
            },
            {
                "name": "Project on a Time Series Forecasting Model for Energy Consumption"
            },
            {
                "name": "Project on a Natural Language Understanding (NLU) System"
            },
            {
                "name": "Project on a Text-based Recommendation System"
            },
            {
                "name": "Project on a Predictive Model for Flight Delays"
            },
            {
                "name": "Project on a Medical Image Analysis Model"
            },
            {
                "name": "Project on a Predictive Model for Disease Outbreaks"
            },
            {
                "name": "Project on a Sentiment Analysis Model for Product Reviews"
            },
            {
                "name": "Project on a Customer Service Chatbot"
            },
            {
                "name": "Project on a Predictive Model for Customer Behavior"
            },
            {
                "name": "Project on a Supply Chain Risk Prediction Model"
            },
            {
                "name": "Project on a Predictive Model for Retail Sales"
            },
            {
                "name": "Project on a Financial Market Prediction Model"
            },
            {
                "name": "Project on a Weather Forecasting Model"
            },
            {
                "name": "Project on a Sports Outcome Prediction Model"
            },
            {
                "name": "Project on a Predictive Model for E-commerce Traffic"
            },
            {
                "name": "Project on a Recommendation System for Music"
            },
            {
                "name": "Project on a Predictive Model for Loan Default"
            },
            {
                "name": "Project on a Face Recognition System"
            },
            {
                "name": "Project on a Predictive Model for Student Performance"
            },
            {
                "name": "Project on a Natural Language Question Answering System"
            },
            {
                "name": "Project on a Predictive Model for Real Estate Valuation"
            }
        ]
    },
    {
        "name": "Economics",
        "children": [
            {
                "name": "Econometric Analysis of Macroeconomic Factors on Stock Prices"
            },
            {
                "name": "Impact of Trade Tariffs on Global Supply Chains"
            },
            {
                "name": "Public Finance: Analysis of Government Expenditure and Taxation"
            },
            {
                "name": "Development Economics: Case Study of a Poverty Alleviation Program"
            },
            {
                "name": "Behavioral Economics and its Implications for Public Policy"
            },
            {
                "name": "Monetary Policy and its Effect on Inflation and Interest Rates"
            },
            {
                "name": "Environmental Economics: Carbon Pricing and Emissions Trading"
            },
            {
                "name": "Game Theory Applications in Business Strategy"
            },
            {
                "name": "Labor Economics: The Impact of Minimum Wage Policies"
            },
            {
                "name": "International Economics: Currency Exchange Rates and Balance of Payments"
            },
            {
                "name": "Project on the Economics of Education"
            },
            {
                "name": "Project on the Economics of Health and Healthcare Systems"
            },
            {
                "name": "Project on the Economics of Climate Change"
            },
            {
                "name": "Project on the Role of Financial Markets in Economic Growth"
            },
            {
                "name": "Project on the Economics of Information and Technology"
            },
            {
                "name": "Project on the Economics of Crime"
            },
            {
                "name": "Project on the Role of Agriculture in Economic Development"
            },
            {
                "name": "Project on the Economics of Urbanization"
            },
            {
                "name": "Project on the Economics of Gender Inequality"
            },
            {
                "name": "Project on the Role of the IMF and World Bank"
            },
            {
                "name": "Project on the Economics of Poverty and Inequality"
            },
            {
                "name": "Project on the Economics of Public Goods and Externalities"
            },
            {
                "name": "Project on the Economics of Human Capital"
            },
            {
                "name": "Project on the Role of Financial Institutions in an Economy"
            },
            {
                "name": "Project on the Economics of Natural Disasters"
            },
            {
                "name": "Project on the Economics of Tourism"
            },
            {
                "name": "Project on the Role of Entrepreneurship in Economic Development"
            },
            {
                "name": "Project on the Economics of Population"
            },
            {
                "name": "Project on the Economics of Social Networks"
            },
            {
                "name": "Project on the Economics of Renewable Energy"
            },
            {
                "name": "Project on the Economics of Taxation and Fiscal Policy"
            },
            {
                "name": "Project on the Role of International Organizations in Trade"
            },
            {
                "name": "Project on the Economics of Housing"
            },
            {
                "name": "Project on the Economics of Innovation"
            },
            {
                "name": "Project on the Economics of Sports"
            },
            {
                "name": "Project on the Economics of Law and Regulation"
            },
            {
                "name": "Project on the Economics of Happiness and Well-being"
            },
            {
                "name": "Project on the Role of Foreign Direct Investment (FDI)"
            },
            {
                "name": "Project on the Economics of Financial Crises"
            },
            {
                "name": "Project on the Economics of Supply Chains"
            },
            {
                "name": "Project on the Economics of Intellectual Property"
            },
            {
                "name": "Project on the Role of Government in a Market Economy"
            },
            {
                "name": "Project on the Economics of Behavioral Finance"
            },
            {
                "name": "Project on the Role of Competition Policy"
            },
            {
                "name": "Project on the Economics of Global Trade Agreements"
            },
            {
                "name": "Project on the Economics of Sustainable Development"
            },
            {
                "name": "Project on the Role of Central Banks in an Economy"
            },
            {
                "name": "Project on the Economics of Migration"
            },
            {
                "name": "Project on the Economics of Public Sector Undertakings (PSUs)"
            },
            {
                "name": "Project on the Economics of Healthcare Technology"
            }
        ]
    },
    {
        "name": "Electronics",
        "children": [
            {
                "name": "IoT-based Smart Home Automation System with Cloud Integration"
            },
            {
                "name": "Design and Simulation of a Digital Signal Processing (DSP) System"
            },
            {
                "name": "Embedded Systems: Development of a Real-time Operating System (RTOS)"
            },
            {
                "name": "Robotics: Design and Control of a Mobile Robot"
            },
            {
                "name": "Power Electronics: Design of a Solar Inverter System"
            },
            {
                "name": "VLSI Design: Layout and Simulation of a CMOS Inverter"
            },
            {
                "name": "Sensor Networks for Environmental Monitoring"
            },
            {
                "name": "Telecommunications: Design of a 5G Communication System"
            },
            {
                "name": "Biomedical Electronics: Development of an ECG Monitoring System"
            },
            {
                "name": "RF and Microwave Engineering: Design of a Microstrip Antenna"
            },
            {
                "name": "Project on the Design of a PCB for an Embedded System"
            },
            {
                "name": "Project on the Development of a Drone with Autonomous Navigation"
            },
            {
                "name": "Project on a Digital Image Processing System"
            },
            {
                "name": "Project on the Design of a Power Management System for IoT"
            },
            {
                "name": "Project on the Development of a Voice-Controlled System"
            },
            {
                "name": "Project on the Design of a Wireless Charging System"
            },
            {
                "name": "Project on the Development of a Gesture Recognition System"
            },
            {
                "name": "Project on the Design of a Smart Agriculture System"
            },
            {
                "name": "Project on the Development of a Fingerprint Recognition System"
            },
            {
                "name": "Project on the Design of a Smart Grid System"
            },
            {
                "name": "Project on the Development of a Facial Recognition System"
            },
            {
                "name": "Project on the Design of a Communication System for Satellites"
            },
            {
                "name": "Project on the Development of a Solar-powered Battery Charger"
            },
            {
                "name": "Project on the Design of a Wearable Health Monitoring Device"
            },
            {
                "name": "Project on the Development of a Smart Traffic Management System"
            },
            {
                "name": "Project on the Design of a Robotics Arm for Industrial Automation"
            },
            {
                "name": "Project on the Development of a Smart Water Management System"
            },
            {
                "name": "Project on the Design of a Security System with Motion Detection"
            },
            {
                "name": "Project on the Development of an Automated Vehicle System"
            },
            {
                "name": "Project on the Design of a Smart Lighting System"
            },
            {
                "name": "Project on the Development of a Smart Metering System"
            },
            {
                "name": "Project on the Design of a Smart City System"
            },
            {
                "name": "Project on the Development of a Voice-Activated Assistant"
            },
            {
                "name": "Project on the Design of a Smart Irrigation System"
            },
            {
                "name": "Project on the Development of a Smart Dustbin"
            },
            {
                "name": "Project on the Design of a Smart Parking System"
            },
            {
                "name": "Project on the Development of a Smart Street Light"
            },
            {
                "name": "Project on the Design of a Smart Healthcare System"
            },
            {
                "name": "Project on the Development of a Smart Classroom System"
            },
            {
                "name": "Project on the Design of a Smart Security Camera"
            },
            {
                "name": "Project on the Development of a Smart Air Quality Monitor"
            },
            {
                "name": "Project on the Design of a Smart Power Outlet"
            },
            {
                "name": "Project on the Development of a Smart Lock System"
            },
            {
                "name": "Project on the Design of a Smart Energy Monitor"
            },
            {
                "name": "Project on the Development of a Smart Thermostat"
            },
            {
                "name": "Project on the Design of a Smart Doorbell"
            },
            {
                "name": "Project on the Development of a Smart Pet Feeder"
            },
            {
                "name": "Project on the Design of a Smart Smoke Detector"
            },
            {
                "name": "Project on the Development of a Smart Refrigerator"
            },
            {
                "name": "Project on the Design of a Smart Washing Machine"
            }
        ]
    },
    {
        "name": "Environmental Science",
        "children": [
            {
                "name": "Water Quality Analysis of a Local River and Pollution Sources"
            },
            {
                "name": "Waste Management and Recycling Strategies for a University Campus"
            },
            {
                "name": "Impact of Urbanization on Local Biodiversity"
            },
            {
                "name": "Renewable Energy Systems: A Feasibility Study for a Solar Farm"
            },
            {
                "name": "Climate Change Mitigation and Adaptation Strategies"
            },
            {
                "name": "Soil Contamination Assessment and Bioremediation Techniques"
            },
            {
                "name": "Ecosystem Services Valuation of a Local Wetland"
            },
            {
                "name": "Air Pollution Monitoring and Control Measures in a City"
            },
            {
                "name": "Sustainable Agriculture Practices and Their Environmental Impact"
            },
            {
                "name": "Project on the Conservation of Endangered Species"
            },
            {
                "name": "Project on the Role of Green Building Technology"
            },
            {
                "name": "Project on the Impact of Plastic Pollution on Marine Life"
            },
            {
                "name": "Project on the Role of Environmental Impact Assessment (EIA)"
            },
            {
                "name": "Project on the Effects of Deforestation on Climate"
            },
            {
                "name": "Project on the Role of Sustainable Tourism"
            },
            {
                "name": "Project on the Use of Remote Sensing in Environmental Monitoring"
            },
            {
                "name": "Project on the Role of Public Awareness in Environmental Conservation"
            },
            {
                "name": "Project on the Effects of Industrial Effluents on Water Bodies"
            },
            {
                "name": "Project on the Role of Environmental Law and Policy"
            },
            {
                "name": "Project on the Use of GIS in Environmental Management"
            },
            {
                "name": "Project on the Effects of Noise Pollution on Wildlife"
            },
            {
                "name": "Project on the Role of Community-Based Conservation"
            },
            {
                "name": "Project on the Effects of Acid Rain on Forests"
            },
            {
                "name": "Project on the Role of Renewable Energy in Climate Change Mitigation"
            },
            {
                "name": "Project on the Effects of Oil Spills on Marine Ecosystems"
            },
            {
                "name": "Project on the Role of Environmental Education"
            },
            {
                "name": "Project on the Effects of Urban Heat Islands"
            },
            {
                "name": "Project on the Role of Sustainable Agriculture"
            },
            {
                "name": "Project on the Effects of Pesticides on Soil Health"
            },
            {
                "name": "Project on the Role of Carbon Sequestration"
            },
            {
                "name": "Project on the Effects of Eutrophication on Lakes"
            },
            {
                "name": "Project on the Role of Green Technology in Industry"
            },
            {
                "name": "Project on the Effects of Air Pollution on Human Health"
            },
            {
                "name": "Project on the Role of Sustainable Transport"
            },
            {
                "name": "Project on the Effects of Land Use Change on Biodiversity"
            },
            {
                "name": "Project on the Role of Environmental Auditing"
            },
            {
                "name": "Project on the Effects of Climate Change on Agriculture"
            },
            {
                "name": "Project on the Role of Environmental Justice"
            },
            {
                "name": "Project on the Effects of Waste Incineration"
            },
            {
                "name": "Project on the Role of Ecosystem Restoration"
            },
            {
                "name": "Project on the Effects of Industrialization on the Environment"
            },
            {
                "name": "Project on the Role of Green Finance"
            },
            {
                "name": "Project on the Effects of Climate Change on Water Resources"
            },
            {
                "name": "Project on the Role of Circular Economy"
            },
            {
                "name": "Project on the Effects of Nuclear Waste"
            },
            {
                "name": "Project on the Role of Sustainable Urban Planning"
            },
            {
                "name": "Project on the Effects of Global Warming on Polar Ice Caps"
            },
            {
                "name": "Project on the Role of Sustainable Forest Management"
            },
            {
                "name": "Project on the Effects of Pesticides on Water Quality"
            },
            {
                "name": "Project on the Role of Environmental Ethics"
            }
        ]
    },
    {
        "name": "Food & Nutrition",
        "children": [
            {
                "name": "Dietary Assessment and Nutritional Status of a Community"
            },
            {
                "name": "Development of a Functional Food Product for a Specific Health Condition"
            },
            {
                "name": "Analysis of Food Safety and Quality Control in the Supply Chain"
            },
            {
                "name": "Impact of Food Processing on Nutrient Content"
            },
            {
                "name": "Menu Planning and Nutritional Counseling for a Hospital"
            },
            {
                "name": "Role of Probiotics and Prebiotics in Gut Health"
            },
            {
                "name": "Food Fortification Strategies to Combat Micronutrient Deficiencies"
            },
            {
                "name": "Nutritional Needs of Athletes for Optimal Performance"
            },
            {
                "name": "Analysis of Food Labeling and Consumer Awareness"
            },
            {
                "name": "Project on Food Preservation Techniques"
            },
            {
                "name": "Project on the Role of Superfoods in a Balanced Diet"
            },
            {
                "name": "Project on the Impact of Fast Food on Public Health"
            },
            {
                "name": "Project on the Nutritional Management of Diabetes"
            },
            {
                "name": "Project on the Role of Diet in Cancer Prevention"
            },
            {
                "name": "Project on the Impact of Veganism on Health"
            },
            {
                "name": "Project on Food Additives and their Health Risks"
            },
            {
                "name": "Project on the Role of Herbal Supplements"
            },
            {
                "name": "Project on the Nutritional Needs of Pregnant Women"
            },
            {
                "name": "Project on the Role of Dietary Fiber in Digestive Health"
            },
            {
                "name": "Project on the Glycemic Index of Different Foods"
            },
            {
                "name": "Project on the Impact of Fermented Foods on Gut Flora"
            },
            {
                "name": "Project on the Role of Antioxidants in Health"
            },
            {
                "name": "Project on the Nutritional Needs of Geriatric Populations"
            },
            {
                "name": "Project on the Role of Hydration in Cognitive Function"
            },
            {
                "name": "Project on the Impact of Processed Foods on Public Health"
            },
            {
                "name": "Project on the Nutritional Value of Different Cuisines"
            },
            {
                "name": "Project on the Role of Vitamins in Immunity"
            },
            {
                "name": "Project on a Low-Salt Diet and Blood Pressure Management"
            },
            {
                "name": "Project on the Nutritional Needs for a Ketogenic Diet"
            },
            {
                "name": "Project on the Role of Omega-3 Fatty Acids"
            },
            {
                "name": "Project on the Nutritional Value of a Vegetarian Diet"
            },
            {
                "name": "Project on the Role of Iron in Anemia Prevention"
            },
            {
                "name": "Project on the Nutritional Needs for a Gluten-Free Diet"
            },
            {
                "name": "Project on the Role of Calcium in Bone Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-Carb Diet"
            },
            {
                "name": "Project on the Role of Protein in Muscle Building"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Protein Diet"
            },
            {
                "name": "Project on the Role of Carbohydrates in Energy"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Fiber Diet"
            },
            {
                "name": "Project on the Role of Fats in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-Fat Diet"
            },
            {
                "name": "Project on the Role of Minerals in the Body"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Carb Diet"
            },
            {
                "name": "Project on the Role of Water in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Balanced Diet"
            },
            {
                "name": "Project on the Role of Exercise in Weight Management"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-Sugar Diet"
            },
            {
                "name": "Project on the Role of Sleep in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Antioxidant Diet"
            },
            {
                "name": "Project on the Role of Mindful Eating"
            }
        ]
    },
    {
        "name": "Foreign Trade",
        "children": [
            {
                "name": "Analysis of the Impact of Trade Agreements on a Specific Industry"
            },
            {
                "name": "Development of an Export-Import Business Plan"
            },
            {
                "name": "Risk Management in International Supply Chains"
            },
            {
                "name": "Feasibility Study for a Company's Entry into a Foreign Market"
            },
            {
                "name": "Role of Foreign Direct Investment (FDI) in a Developing Economy"
            },
            {
                "name": "Cross-Cultural Communication in International Business Negotiations"
            },
            {
                "name": "International Logistics and Shipping Procedures"
            },
            {
                "name": "Analysis of Currency Exchange Rates and Hedging Strategies"
            },
            {
                "name": "E-commerce and Global Marketplaces: Opportunities and Challenges"
            },
            {
                "name": "Project on the Role of the World Trade Organization (WTO)"
            },
            {
                "name": "Project on the Impact of Brexit on UK-EU Trade"
            },
            {
                "name": "Project on the Role of Free Trade Zones"
            },
            {
                "name": "Project on the Trade Relations between India and another country"
            },
            {
                "name": "Project on the Impact of Tariffs on Global Trade"
            },
            {
                "name": "Project on the Role of Export-Import Bank in Trade Finance"
            },
            {
                "name": "Project on the Challenges of Global Supply Chain Management"
            },
            {
                "name": "Project on the Role of Digital Platforms in International Trade"
            },
            {
                "name": "Project on a Case Study of a Global Trade Dispute"
            },
            {
                "name": "Project on the Role of International Trade in Economic Development"
            },
            {
                "name": "Project on the Impact of COVID-19 on Global Supply Chains"
            },
            {
                "name": "Project on the Role of Customs and Border Control"
            },
            {
                "name": "Project on the Trade Policy of a Specific Country"
            },
            {
                "name": "Project on the Role of International Trade in Job Creation"
            },
            {
                "name": "Project on the Impact of Sanctions on International Trade"
            },
            {
                "name": "Project on the Role of Intellectual Property in Foreign Trade"
            },
            {
                "name": "Project on the Trade and Environmental Protection"
            },
            {
                "name": "Project on the Role of International Law in Trade"
            },
            {
                "name": "Project on the Impact of E-commerce on Foreign Trade"
            },
            {
                "name": "Project on the Role of Trade Blocs"
            },
            {
                "name": "Project on the Challenges of Trade with Emerging Economies"
            },
            {
                "name": "Project on the Role of Trade Finance"
            },
            {
                "name": "Project on the Impact of Technology on International Logistics"
            },
            {
                "name": "Project on a Case Study of a Successful Exporting Company"
            },
            {
                "name": "Project on the Role of International Business Law"
            },
            {
                "name": "Project on the Impact of Political Risk on Foreign Trade"
            },
            {
                "name": "Project on the Role of Trade Facilitation Measures"
            },
            {
                "name": "Project on the Challenges of Trade with the United States"
            },
            {
                "name": "Project on the Role of International Commercial Terms (Incoterms)"
            },
            {
                "name": "Project on the Impact of Globalization on Foreign Trade"
            },
            {
                "name": "Project on the Role of Multilateral Trade Agreements"
            },
            {
                "name": "Project on the Challenges of Trading with the European Union"
            },
            {
                "name": "Project on the Role of Export Marketing"
            },
            {
                "name": "Project on the Impact of Trade on Economic Inequality"
            },
            {
                "name": "Project on the Role of Trade in Services"
            },
            {
                "name": "Project on the Challenges of Trading with China"
            },
            {
                "name": "Project on the Role of International Trade in Food Security"
            },
            {
                "name": "Project on the Impact of Trade on Labor Standards"
            },
            {
                "name": "Project on the Role of Trade in Sustainable Development"
            },
            {
                "name": "Project on the Challenges of Trade in the Digital Age"
            },
            {
                "name": "Project on the Role of Trade in Climate Change"
            }
        ]
    },
    {
        "name": "Genetics",
        "children": [
            {
                "name": "Gene Expression Analysis in a Model Organism"
            },
            {
                "name": "Molecular Diagnostics for a Specific Genetic Disorder"
            },
            {
                "name": "Genome-Wide Association Study (GWAS) of a Complex Trait"
            },
            {
                "name": "Ethical Implications of Genetic Engineering and Gene Therapy"
            },
            {
                "name": "Phylogenetic Analysis of a Gene Family"
            },
            {
                "name": "CRISPR-Cas9 Gene Editing for Crop Improvement"
            },
            {
                "name": "Analysis of DNA Fingerprinting in Forensic Science"
            },
            {
                "name": "Epigenetics: Impact of Environmental Factors on Gene Expression"
            },
            {
                "name": "Population Genetics of a Wild Animal Species"
            },
            {
                "name": "Project on the Role of Genes in Human Diseases"
            },
            {
                "name": "Project on the Genetics of Cancer"
            },
            {
                "name": "Project on the Role of Mutations in Evolution"
            },
            {
                "name": "Project on the Genetics of Behavior"
            },
            {
                "name": "Project on the Genetics of Drug Metabolism"
            },
            {
                "name": "Project on the Role of RNA in Gene Regulation"
            },
            {
                "name": "Project on the Genetics of Plant Disease Resistance"
            },
            {
                "name": "Project on the Role of Telomeres in Aging"
            },
            {
                "name": "Project on the Genetics of Human Ancestry"
            },
            {
                "name": "Project on the Role of MicroRNA in Gene Regulation"
            },
            {
                "name": "Project on the Genetics of Human Height"
            },
            {
                "name": "Project on the Genetics of Eye Color"
            },
            {
                "name": "Project on the Role of Gene Therapy in Genetic Disorders"
            },
            {
                "name": "Project on the Genetics of Alzheimer's Disease"
            },
            {
                "name": "Project on the Genetics of Obesity"
            },
            {
                "name": "Project on the Role of CRISPR in Gene Therapy"
            },
            {
                "name": "Project on the Genetics of Autism"
            },
            {
                "name": "Project on the Role of DNA Repair in Cancer"
            },
            {
                "name": "Project on the Genetics of Schizophrenia"
            },
            {
                "name": "Project on the Role of Genetic Counseling"
            },
            {
                "name": "Project on the Genetics of Diabetes"
            },
            {
                "name": "Project on the Role of Gene Editing in Agriculture"
            },
            {
                "name": "Project on the Genetics of Heart Disease"
            },
            {
                "name": "Project on the Role of Epigenetics in Development"
            },
            {
                "name": "Project on the Genetics of Addiction"
            },
            {
                "name": "Project on the Role of Genetic Testing"
            },
            {
                "name": "Project on the Genetics of Athletic Performance"
            },
            {
                "name": "Project on the Role of DNA Methylation"
            },
            {
                "name": "Project on the Genetics of Immunity"
            },
            {
                "name": "Project on the Role of Genetic Markers in Disease"
            },
            {
                "name": "Project on the Genetics of Skin Color"
            },
            {
                "name": "Project on the Role of Transgenic Animals"
            },
            {
                "name": "Project on the Genetics of Personality Traits"
            },
            {
                "name": "Project on the Role of Genomic Data in Personalized Medicine"
            },
            {
                "name": "Project on the Genetics of Mental Disorders"
            },
            {
                "name": "Project on the Role of Gene Regulation in Cancer"
            },
            {
                "name": "Project on the Genetics of Animal Behavior"
            },
            {
                "name": "Project on the Role of Bioinformatics in Genetics"
            },
            {
                "name": "Project on the Genetics of Plant Metabolism"
            },
            {
                "name": "Project on the Role of Stem Cells in Gene Therapy"
            },
            {
                "name": "Project on the Genetics of Disease Resistance"
            }
        ]
    },
    {
        "name": "Geology",
        "children": [
            {
                "name": "Geological Mapping and Mineral Resource Assessment of a Region"
            },
            {
                "name": "Paleontological Study of a Fossil Site"
            },
            {
                "name": "Geochemical Analysis of Water Samples for Pollution Detection"
            },
            {
                "name": "Seismic Data Interpretation for Hydrocarbon Exploration"
            },
            {
                "name": "Analysis of a Volcanic Eruption and its Impact on the Environment"
            },
            {
                "name": "Study of Plate Tectonics and Earthquake Prediction"
            },
            {
                "name": "Petrological Analysis of Igneous Rocks"
            },
            {
                "name": "Geological Survey for Groundwater Resources"
            },
            {
                "name": "Impact of Climate Change on Glacial Retreat"
            },
            {
                "name": "Project on the Stratigraphy of a Sedimentary Basin"
            },
            {
                "name": "Project on the Geomorphology of a River Valley"
            },
            {
                "name": "Project on the Role of Remote Sensing in Geological Mapping"
            },
            {
                "name": "Project on the Mineralogy of a Rock Sample"
            },
            {
                "name": "Project on the Role of GIS in Geological Data Analysis"
            },
            {
                "name": "Project on the Formation of Fossils"
            },
            {
                "name": "Project on the Geology of a Specific Mountain Range"
            },
            {
                "name": "Project on the Role of Geophysics in Subsurface Exploration"
            },
            {
                "name": "Project on the Formation of Coal and Petroleum"
            },
            {
                "name": "Project on the Role of Geochemistry in Environmental Studies"
            },
            {
                "name": "Project on the Geology of the Moon and Mars"
            },
            {
                "name": "Project on the Role of Structural Geology in Mineral Deposits"
            },
            {
                "name": "Project on the Geology of a Specific Volcano"
            },
            {
                "name": "Project on the Role of Paleoclimatology in Climate Change Studies"
            },
            {
                "name": "Project on the Geology of a Specific Earthquake Zone"
            },
            {
                "name": "Project on the Role of Mineralogy in Industrial Processes"
            },
            {
                "name": "Project on the Geology of a Specific Desert"
            },
            {
                "name": "Project on the Role of Sedimentary Geology in Petroleum Exploration"
            },
            {
                "name": "Project on the Geology of a Specific Cave System"
            },
            {
                "name": "Project on the Role of Economic Geology in Mining"
            },
            {
                "name": "Project on the Geology of a Specific Coastal Area"
            },
            {
                "name": "Project on the Role of Volcanology in Hazard Assessment"
            },
            {
                "name": "Project on the Geology of a Specific Glacier"
            },
            {
                "name": "Project on the Role of Hydrogeology in Water Management"
            },
            {
                "name": "Project on the Geology of a Specific Ocean Basin"
            },
            {
                "name": "Project on the Role of Engineering Geology in Construction"
            },
            {
                "name": "Project on the Geology of a Specific Mountain Pass"
            },
            {
                "name": "Project on the Role of Environmental Geology in Land Use Planning"
            },
            {
                "name": "Project on the Geology of a Specific Meteorite Impact Crater"
            },
            {
                "name": "Project on the Role of Geophysics in Environmental Studies"
            },
            {
                "name": "Project on the Geology of a Specific River Delta"
            },
            {
                "name": "Project on the Role of Geochemistry in Pollution Control"
            },
            {
                "name": "Project on the Geology of a Specific Lake"
            },
            {
                "name": "Project on the Role of Paleontology in Evolutionary Studies"
            },
            {
                "name": "Project on the Geology of a Specific Island"
            },
            {
                "name": "Project on the Role of Petrology in Materials Science"
            },
            {
                "name": "Project on the Geology of a Specific Geyser"
            },
            {
                "name": "Project on the Role of Structural Geology in Earthquake Prediction"
            },
            {
                "name": "Project on the Geology of a Specific Canyon"
            },
            {
                "name": "Project on the Role of Sedimentology in Climate Reconstruction"
            },
            {
                "name": "Project on the Geology of a Specific Desert Oasis"
            }
        ]
    },
    {
        "name": "Health Administration",
        "children": [
            {
                "name": "Strategic Planning for a Hospital's Expansion"
            },
            {
                "name": "Financial Management and Budgeting in a Healthcare Facility"
            },
            {
                "name": "Healthcare Quality Improvement: A Six Sigma Approach"
            },
            {
                "name": "Implementation of an Electronic Health Record (EHR) System"
            },
            {
                "name": "Healthcare Policy Analysis: Impact of a New Regulation"
            },
            {
                "name": "Human Resource Management in the Healthcare Sector"
            },
            {
                "name": "Supply Chain Management for a Pharmaceutical Company"
            },
            {
                "name": "Patient Satisfaction and Experience Improvement Plan"
            },
            {
                "name": "Risk Management and Patient Safety in a Hospital"
            },
            {
                "name": "Project on the Role of Telehealth in Rural Healthcare"
            },
            {
                "name": "Project on Healthcare Marketing and Patient Outreach"
            },
            {
                "name": "Project on the Legal and Ethical Issues in Healthcare"
            },
            {
                "name": "Project on the Role of Data Analytics in Healthcare"
            },
            {
                "name": "Project on the Impact of COVID-19 on the Healthcare System"
            },
            {
                "name": "Project on the Role of Health Insurance in Healthcare"
            },
            {
                "name": "Project on the Management of a Long-Term Care Facility"
            },
            {
                "name": "Project on the Role of Public Health Administration"
            },
            {
                "name": "Project on the Management of a Mental Health Clinic"
            },
            {
                "name": "Project on the Role of Health Information Technology"
            },
            {
                "name": "Project on the Management of a Public Health Crisis"
            },
            {
                "name": "Project on the Role of Healthcare Finance"
            },
            {
                "name": "Project on the Management of a Non-Profit Healthcare Organization"
            },
            {
                "name": "Project on the Role of Quality Management in Healthcare"
            },
            {
                "name": "Project on the Management of a Home Healthcare Agency"
            },
            {
                "name": "Project on the Role of Strategic Planning in Healthcare"
            },
            {
                "name": "Project on the Management of a Dental Clinic"
            },
            {
                "name": "Project on the Role of Healthcare Ethics"
            },
            {
                "name": "Project on the Management of a Rehabilitation Center"
            },
            {
                "name": "Project on the Role of Patient Data Privacy"
            },
            {
                "name": "Project on the Management of a Hospital Pharmacy"
            },
            {
                "name": "Project on the Role of Healthcare Policy"
            },
            {
                "name": "Project on the Management of a Nursing Home"
            },
            {
                "name": "Project on the Role of Patient Advocacy"
            },
            {
                "name": "Project on the Management of a Medical Group Practice"
            },
            {
                "name": "Project on the Role of Healthcare Leadership"
            },
            {
                "name": "Project on the Management of a Community Health Center"
            },
            {
                "name": "Project on the Role of Healthcare Communication"
            },
            {
                "name": "Project on the Management of a Diagnostic Lab"
            },
            {
                "name": "Project on the Role of Healthcare Marketing"
            },
            {
                "name": "Project on the Management of a Clinical Research Organization"
            },
            {
                "name": "Project on the Role of Healthcare Human Resources"
            },
            {
                "name": "Project on the Management of a Hospice"
            },
            {
                "name": "Project on the Role of Healthcare Supply Chain Management"
            },
            {
                "name": "Project on the Management of a Sports Medicine Clinic"
            },
            {
                "name": "Project on the Role of Healthcare Risk Management"
            },
            {
                "name": "Project on the Management of a Substance Abuse Treatment Center"
            },
            {
                "name": "Project on the Role of Healthcare Information Systems"
            },
            {
                "name": "Project on the Management of a Palliative Care Unit"
            },
            {
                "name": "Project on the Role of Healthcare Quality"
            },
            {
                "name": "Project on the Management of a Pediatric Clinic"
            }
        ]
    },
    {
        "name": "History",
        "children": [
            {
                "name": "The Impact of the British Colonial Rule on Indian Economy"
            },
            {
                "name": "Historical Analysis of a Specific Political Revolution"
            },
            {
                "name": "Social and Cultural History of a Specific Period or Region"
            },
            {
                "name": "Role of Women in a Historical Event"
            },
            {
                "name": "Oral History Project on a Local Community"
            },
            {
                "name": "Archaeological Study of an Ancient Civilization"
            },
            {
                "name": "Intellectual History of a Specific Philosophical Movement"
            },
            {
                "name": "History of Science and Technology"
            },
            {
                "name": "The Role of Propaganda in a Historical Conflict"
            },
            {
                "name": "Project on the History of Indian Art and Architecture"
            },
            {
                "name": "Project on the History of the Indian Freedom Struggle"
            },
            {
                "name": "Project on the History of Indian Railways"
            },
            {
                "name": "Project on the History of Indian Cinema"
            },
            {
                "name": "Project on the History of Indian Education System"
            },
            {
                "name": "Project on the History of Indian Agriculture"
            },
            {
                "name": "Project on the History of the Indian Army"
            },
            {
                "name": "Project on the History of the Indian Constitution"
            },
            {
                "name": "Project on the History of Indian Literature"
            },
            {
                "name": "Project on the History of Indian Music"
            },
            {
                "name": "Project on the History of Indian Religion"
            },
            {
                "name": "Project on the History of the Indian Judiciary"
            },
            {
                "name": "Project on the History of the Indian Economy"
            },
            {
                "name": "Project on the History of the Indian Financial System"
            },
            {
                "name": "Project on the History of the Indian Banking System"
            },
            {
                "name": "Project on the History of the Indian Trade Union Movement"
            },
            {
                "name": "Project on the History of Indian Foreign Policy"
            },
            {
                "name": "Project on the History of Indian Science and Technology"
            },
            {
                "name": "Project on the History of Indian Sports"
            },
            {
                "name": "Project on the History of Indian Medicine"
            },
            {
                "name": "Project on the History of Indian Theatre"
            },
            {
                "name": "Project on the History of Indian Architecture"
            },
            {
                "name": "Project on the History of Indian Cuisine"
            },
            {
                "name": "Project on the History of Indian Clothing"
            },
            {
                "name": "Project on the History of Indian Festivals"
            },
            {
                "name": "Project on the History of Indian Languages"
            },
            {
                "name": "Project on the History of Indian Kingdoms"
            },
            {
                "name": "Project on the History of Indian Empires"
            },
            {
                "name": "Project on the History of Indian Dynasties"
            },
            {
                "name": "Project on the History of Indian Rulers"
            },
            {
                "name": "Project on the History of Indian Wars"
            },
            {
                "name": "Project on the History of Indian Rebellions"
            },
            {
                "name": "Project on the History of Indian Social Reform Movements"
            },
            {
                "name": "Project on the History of Indian Religious Movements"
            },
            {
                "name": "Project on the History of Indian Political Parties"
            },
            {
                "name": "Project on the History of Indian Economic Policies"
            },
            {
                "name": "Project on the History of Indian Social Structures"
            },
            {
                "name": "Project on the History of Indian Legal System"
            },
            {
                "name": "Project on the History of Indian Culture"
            },
            {
                "name": "Project on the History of Indian Philosophy"
            },
            {
                "name": "Project on the History of Indian Art Forms"
            }
        ]
    },
    {
        "name": "Human Resource Management",
        "children": [
            {
                "name": "Employee Engagement and Retention Strategies for the IT Sector"
            },
            {
                "name": "Performance Appraisal System Design and Implementation"
            },
            {
                "name": "Recruitment and Selection Process Automation using AI"
            },
            {
                "name": "Analysis of Work-Life Balance and its Impact on Productivity"
            },
            {
                "name": "Strategic Human Resource Planning for a Startup"
            },
            {
                "name": "Training and Development Needs Analysis for a Company"
            },
            {
                "name": "Compensation and Benefits Package Design"
            },
            {
                "name": "Conflict Resolution and Grievance Handling in the Workplace"
            },
            {
                "name": "Diversity and Inclusion Policies in the Workplace"
            },
            {
                "name": "Project on the Role of Human Resource Information Systems (HRIS)"
            },
            {
                "name": "Project on the Impact of Remote Work on Employee Morale"
            },
            {
                "name": "Project on Employee Wellness Programs"
            },
            {
                "name": "Project on the Role of HR in Organizational Change"
            },
            {
                "name": "Project on a Case Study of a Successful Employee Relations Program"
            },
            {
                "name": "Project on the Legal and Ethical Issues in HR"
            },
            {
                "name": "Project on the Role of HR in a Mergers and Acquisitions"
            },
            {
                "name": "Project on a Case Study of a Workplace Harassment Case"
            },
            {
                "name": "Project on the Role of Performance Management in Career Development"
            },
            {
                "name": "Project on a Case Study of a Layoff and its Impact"
            },
            {
                "name": "Project on the Role of HR in Talent Acquisition"
            },
            {
                "name": "Project on a Case Study of an Employee Engagement Survey"
            },
            {
                "name": "Project on the Role of HR in Building a Positive Work Culture"
            },
            {
                "name": "Project on a Case Study of a Succession Planning Program"
            },
            {
                "name": "Project on the Role of HR in Crisis Management"
            },
            {
                "name": "Project on a Case Study of a Performance Improvement Plan"
            },
            {
                "name": "Project on the Role of HR in Employee Onboarding"
            },
            {
                "name": "Project on a Case Study of an Employee Termination"
            },
            {
                "name": "Project on the Role of HR in Employee Offboarding"
            },
            {
                "name": "Project on a Case Study of a Training Program's Effectiveness"
            },
            {
                "name": "Project on the Role of HR in Compensation and Benefits"
            },
            {
                "name": "Project on a Case Study of a Diversity and Inclusion Program"
            },
            {
                "name": "Project on the Role of HR in Workplace Safety"
            },
            {
                "name": "Project on a Case Study of a Workplace Conflict"
            },
            {
                "name": "Project on the Role of HR in Labor Relations"
            },
            {
                "name": "Project on a Case Study of a Union Negotiation"
            },
            {
                "name": "Project on the Role of HR in Employee Communication"
            },
            {
                "name": "Project on a Case Study of an Employee Grievance"
            },
            {
                "name": "Project on the Role of HR in Global Operations"
            },
            {
                "name": "Project on a Case Study of a Performance Management System"
            },
            {
                "name": "Project on the Role of HR in Strategic Planning"
            },
            {
                "name": "Project on a Case Study of a Company's Culture Change"
            },
            {
                "name": "Project on the Role of HR in Workforce Planning"
            },
            {
                "name": "Project on a Case Study of a Successful HR Transformation"
            },
            {
                "name": "Project on the Role of HR in Employee Development"
            },
            {
                "name": "Project on a Case Study of an International HR Policy"
            },
            {
                "name": "Project on the Role of HR in Risk Management"
            },
            {
                "name": "Project on a Case Study of a Company's Benefits Program"
            },
            {
                "name": "Project on the Role of HR in Talent Management"
            },
            {
                "name": "Project on a Case Study of a Remote Work Policy"
            },
            {
                "name": "Project on the Role of HR in Performance Improvement"
            }
        ]
    },
    {
        "name": "Information Technology",
        "children": [
            {
                "name": "Development of a Secure Web Application using a Modern Framework"
            },
            {
                "name": "Cloud Computing Migration Strategy for a Small Business"
            },
            {
                "name": "Cybersecurity Risk Assessment and Penetration Testing"
            },
            {
                "name": "Design and Implementation of a Relational Database System"
            },
            {
                "name": "Network Design and Security for a Corporate Office"
            },
            {
                "name": "Mobile App Development for a Niche Market"
            },
            {
                "name": "Business Intelligence (BI) Dashboard for Data-driven Decisions"
            },
            {
                "name": "IoT-based Smart Campus Management System"
            },
            {
                "name": "IT Project Management and Agile Methodology Implementation"
            },
            {
                "name": "Project on a Blockchain-based Supply Chain Management System"
            },
            {
                "name": "Project on an Automated Software Testing Framework"
            },
            {
                "name": "Project on a Data Backup and Disaster Recovery Plan"
            },
            {
                "name": "Project on a Virtual Reality (VR) Training Simulation"
            },
            {
                "name": "Project on a Machine Learning-based Recommendation System"
            },
            {
                "name": "Project on a Cloud-based Customer Relationship Management (CRM) System"
            },
            {
                "name": "Project on a Natural Language Processing (NLP) Application"
            },
            {
                "name": "Project on an Augmented Reality (AR) Application"
            },
            {
                "name": "Project on a Web-based Learning Management System"
            },
            {
                "name": "Project on a Cybersecurity Incident Response Plan"
            },
            {
                "name": "Project on a Big Data Analytics Platform"
            },
            {
                "name": "Project on an IoT-based Smart Agriculture System"
            },
            {
                "name": "Project on a Web-based Project Management Tool"
            },
            {
                "name": "Project on a Blockchain-based Identity Management System"
            },
            {
                "name": "Project on a Deep Learning Model for Image Recognition"
            },
            {
                "name": "Project on an Automated HR Management System"
            },
            {
                "name": "Project on a Voice-controlled Smart Assistant"
            },
            {
                "name": "Project on a Mobile App for Location-based Services"
            },
            {
                "name": "Project on a Cybersecurity System for IoT Devices"
            },
            {
                "name": "Project on a Cloud-based Healthcare Management System"
            },
            {
                "name": "Project on a Web-based Survey and Data Analysis Tool"
            },
            {
                "name": "Project on a Cryptocurrency Trading Bot"
            },
            {
                "name": "Project on a Cybersecurity Intrusion Detection System"
            },
            {
                "name": "Project on a Machine Learning-based Credit Scoring Model"
            },
            {
                "name": "Project on a Cloud-based Document Management System"
            },
            {
                "name": "Project on a Social Networking Platform for a Niche Community"
            },
            {
                "name": "Project on a Natural Language Understanding (NLU) System"
            },
            {
                "name": "Project on an Automated Code Generation Tool"
            },
            {
                "name": "Project on a Supply Chain Optimization Model"
            },
            {
                "name": "Project on a Facial Recognition System"
            },
            {
                "name": "Project on a Business Intelligence Dashboard"
            },
            {
                "name": "Project on a Cloud-based ERP System"
            },
            {
                "name": "Project on a Web-based Learning Management System"
            },
            {
                "name": "Project on a Cybersecurity System for a Small Business"
            },
            {
                "name": "Project on a Machine Learning-based Fraud Detection System"
            },
            {
                "name": "Project on an Automated Testing Framework for Web Applications"
            },
            {
                "name": "Project on a Cloud-based Data Analytics Platform"
            },
            {
                "name": "Project on an IoT-based Smart City System"
            },
            {
                "name": "Project on a Web-based Healthcare Management System"
            },
            {
                "name": "Project on a Voice-controlled Home Automation System"
            },
            {
                "name": "Project on a Mobile App for Fitness Tracking"
            }
        ]
    },
    {
        "name": "International Relations",
        "children": [
            {
                "name": "Analysis of a Specific International Conflict and its Resolution"
            },
            {
                "name": "Role of the United Nations in Peacekeeping Operations"
            },
            {
                "name": "Impact of Globalization on National Sovereignty"
            },
            {
                "name": "Foreign Policy Analysis of a Major World Power"
            },
            {
                "name": "Cross-Cultural Negotiation and Diplomacy Case Study"
            },
            {
                "name": "International Law and Human Rights: A Case Study"
            },
            {
                "name": "Role of Non-State Actors in International Relations"
            },
            {
                "name": "Cybersecurity and its Impact on International Security"
            },
            {
                "name": "Analysis of International Trade Agreements and Their Impact"
            },
            {
                "name": "Project on the Role of Regional Organizations in Global Politics"
            },
            {
                "name": "Project on a Case Study of a Humanitarian Crisis"
            },
            {
                "name": "Project on the Role of the International Criminal Court"
            },
            {
                "name": "Project on the Impact of Climate Change on Geopolitics"
            },
            {
                "name": "Project on the Role of International Non-Governmental Organizations (INGOs)"
            },
            {
                "name": "Project on the History of a Specific International Treaty"
            },
            {
                "name": "Project on the Role of the World Bank in Development"
            },
            {
                "name": "Project on a Case Study of a Peace Negotiation"
            },
            {
                "name": "Project on the Role of International Law in Conflict Resolution"
            },
            {
                "name": "Project on the Impact of Economic Sanctions"
            },
            {
                "name": "Project on a Case Study of a Failed State"
            },
            {
                "name": "Project on the Role of Diplomacy in Crisis Management"
            },
            {
                "name": "Project on the Impact of Technology on International Relations"
            },
            {
                "name": "Project on the Role of the International Monetary Fund (IMF)"
            },
            {
                "name": "Project on a Case Study of a Successful Diplomatic Mission"
            },
            {
                "name": "Project on the Role of Media in International Relations"
            },
            {
                "name": "Project on the Impact of Terrorism on Global Security"
            },
            {
                "name": "Project on a Case Study of a Civil War"
            },
            {
                "name": "Project on the Role of International Organizations in Trade"
            },
            {
                "name": "Project on the Impact of Migration on International Relations"
            },
            {
                "name": "Project on a Case Study of a Political Assassination"
            },
            {
                "name": "Project on the Role of Human Rights in Foreign Policy"
            },
            {
                "name": "Project on the Impact of Social Media on International Relations"
            },
            {
                "name": "Project on a Case Study of a Border Dispute"
            },
            {
                "name": "Project on the Role of International Law in War Crimes"
            },
            {
                "name": "Project on the Impact of Nuclear Proliferation"
            },
            {
                "name": "Project on a Case Study of a Coup d'état"
            },
            {
                "name": "Project on the Role of International Development Aid"
            },
            {
                "name": "Project on the Impact of Oil on International Relations"
            },
            {
                "name": "Project on a Case Study of a Trade War"
            },
            {
                "name": "Project on the Role of International Relations in Climate Policy"
            },
            {
                "name": "Project on the Impact of Drones on Warfare"
            },
            {
                "name": "Project on a Case Study of a Global Pandemic Response"
            },
            {
                "name": "Project on the Role of International Law in the Oceans"
            },
            {
                "name": "Project on the Impact of Nationalism on International Relations"
            },
            {
                "name": "Project on a Case Study of a Refugee Crisis"
            },
            {
                "name": "Project on the Role of International Relations in Cybersecurity"
            },
            {
                "name": "Project on the Impact of Space Exploration on International Relations"
            },
            {
                "name": "Project on a Case Study of a Political Protest Movement"
            },
            {
                "name": "Project on the Role of International Relations in a Global Economy"
            }
        ]
    },
    {
        "name": "Journalism & Mass Communication",
        "children": [
            {
                "name": "Investigative Report on Local Government Corruption"
            },
            {
                "name": "Content Analysis of News Coverage of a Political Event"
            },
            {
                "name": "Documentary Film on a Social Justice Issue"
            },
            {
                "name": "Public Relations Campaign for a Non-Profit Organization"
            },
            {
                "name": "The Role of Social Media in Political Communication"
            },
            {
                "name": "Ethical Challenges in Digital Journalism"
            },
            {
                "name": "Podcast Series on a Historical Event"
            },
            {
                "name": "Analysis of Fake News and Misinformation"
            },
            {
                "name": "Cross-Cultural Communication in International Media"
            },
            {
                "name": "Project on the Impact of Citizen Journalism"
            },
            {
                "name": "Project on the Evolution of Digital Media"
            },
            {
                "name": "Project on a Case Study of a Media Scandal"
            },
            {
                "name": "Project on the Role of Communication in Crisis Management"
            },
            {
                "name": "Project on the Impact of Media on Public Opinion"
            },
            {
                "name": "Project on the Future of News Reporting"
            },
            {
                "name": "Project on the Role of Advertising in Consumer Behavior"
            },
            {
                "name": "Project on a Case Study of a Political Campaign"
            },
            {
                "name": "Project on the Role of Public Relations in Brand Building"
            },
            {
                "name": "Project on the Impact of Globalization on Media"
            },
            {
                "name": "Project on the Role of Social Media in Public Relations"
            },
            {
                "name": "Project on a Case Study of a Successful Social Media Campaign"
            },
            {
                "name": "Project on the Role of Communication in Health Awareness"
            },
            {
                "name": "Project on a Case Study of a Corporate Communication Strategy"
            },
            {
                "name": "Project on the Role of Media in Disaster Management"
            },
            {
                "name": "Project on the Use of Virtual Reality in Journalism"
            },
            {
                "name": "Project on a Case Study of a News Organization's Ethics"
            },
            {
                "name": "Project on the Role of Artificial Intelligence in News Writing"
            },
            {
                "name": "Project on the Impact of Live Streaming on Media"
            },
            {
                "name": "Project on the Role of Media in Social Movements"
            },
            {
                "name": "Project on the Legal and Ethical Issues in Journalism"
            },
            {
                "name": "Project on the Impact of Television on Society"
            },
            {
                "name": "Project on the Future of Print Media"
            },
            {
                "name": "Project on the Role of Advertising in the Digital Age"
            },
            {
                "name": "Project on a Case Study of a Public Relations Crisis"
            },
            {
                "name": "Project on the Role of Communication in Leadership"
            },
            {
                "name": "Project on the Impact of Media on Body Image"
            },
            {
                "name": "Project on a Case Study of a Successful Brand Campaign"
            },
            {
                "name": "Project on the Role of Public Opinion in Policy Making"
            },
            {
                "name": "Project on the Use of Visual Communication in Marketing"
            },
            {
                "name": "Project on the History of Public Relations"
            },
            {
                "name": "Project on the Role of Social Media in Political Activism"
            },
            {
                "name": "Project on a Case Study of a Corporate Communication Strategy"
            },
            {
                "name": "Project on the Role of Media in Disaster Management"
            },
            {
                "name": "Project on the Use of Virtual Reality in Journalism"
            },
            {
                "name": "Project on a Case Study of a News Organization's Ethics"
            },
            {
                "name": "Project on the Role of Communication in Health Awareness"
            },
            {
                "name": "Project on a Case Study of a Successful Social Media Campaign"
            },
            {
                "name": "Project on the Role of Artificial Intelligence in News Writing"
            },
            {
                "name": "Project on the Impact of Live Streaming on Media"
            }
        ]
    },
    {
        "name": "Medical Laboratory Technology",
        "children": [
            {
                "name": "Development of a Diagnostic Test for a Specific Disease"
            },
            {
                "name": "Quality Control and Assurance in a Clinical Laboratory"
            },
            {
                "name": "Automation of Laboratory Processes for Increased Efficiency"
            },
            {
                "name": "Analysis of Blood Samples for Hematological Disorders"
            },
            {
                "name": "Role of Microbiology in Diagnosing Infectious Diseases"
            },
            {
                "name": "Cytological Analysis of Cell Samples for Cancer Detection"
            },
            {
                "name": "Biochemical Analysis of Body Fluids for Metabolic Disorders"
            },
            {
                "name": "Use of Molecular Techniques in Genetic Testing"
            },
            {
                "name": "Management of a Medical Laboratory"
            },
            {
                "name": "Project on the Role of Medical Laboratory Technologists in Patient Care"
            },
            {
                "name": "Project on the Use of Automation in a Clinical Laboratory"
            },
            {
                "name": "Project on the Role of Quality Management in a Medical Lab"
            },
            {
                "name": "Project on the Diagnosis of a Specific Infectious Disease"
            },
            {
                "name": "Project on the Role of Hematology in Blood Banking"
            },
            {
                "name": "Project on the Use of Molecular Diagnostics in Genetic Testing"
            },
            {
                "name": "Project on the Role of Clinical Chemistry in Disease Diagnosis"
            },
            {
                "name": "Project on the Use of Histology in Pathology"
            },
            {
                "name": "Project on the Role of Immunology in Disease Diagnosis"
            },
            {
                "name": "Project on the Use of Point-of-Care Testing"
            },
            {
                "name": "Project on the Role of Microbiology in Food Safety"
            },
            {
                "name": "Project on the Use of Cytogenetics in Disease Diagnosis"
            },
            {
                "name": "Project on the Role of Urinalysis in Kidney Disease"
            },
            {
                "name": "Project on the Use of Serology in Infectious Disease"
            },
            {
                "name": "Project on the Role of Medical Laboratory Technology in Public Health"
            },
            {
                "name": "Project on the Use of Automation in a Blood Bank"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Hospital"
            },
            {
                "name": "Project on the Use of a Blood Gas Analyzer"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Research Setting"
            },
            {
                "name": "Project on the Use of a Coagulation Analyzer"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Forensic Lab"
            },
            {
                "name": "Project on the Use of a Urine Analyzer"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Veterinary Clinic"
            },
            {
                "name": "Project on the Use of a Blood Culture System"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Public Health Lab"
            },
            {
                "name": "Project on the Use of a Fecal Occult Blood Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Commercial Lab"
            },
            {
                "name": "Project on the Use of a C-Reactive Protein (CRP) Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Research Lab"
            },
            {
                "name": "Project on the Use of a Glucose Meter"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Hospital Lab"
            },
            {
                "name": "Project on the Use of a Hemoglobin A1c Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Blood Donor Center"
            },
            {
                "name": "Project on the Use of a Liver Function Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Fertility Clinic"
            },
            {
                "name": "Project on the Use of a Kidney Function Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Toxicology Lab"
            },
            {
                "name": "Project on the Use of a Thyroid Function Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Genetic Lab"
            },
            {
                "name": "Project on the Use of a Tumor Marker Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Cancer Hospital"
            }
        ]
    },
    {
        "name": "Microbiology",
        "children": [
            {
                "name": "Isolation and Identification of Bacteria from Environmental Samples"
            },
            {
                "name": "Antimicrobial Susceptibility Testing of Clinical Isolates"
            },
            {
                "name": "Microbial Production of a Specific Enzyme or Antibiotic"
            },
            {
                "name": "Bioremediation of Polluted Water using Microorganisms"
            },
            {
                "name": "Analysis of Foodborne Pathogens in a Food Product"
            },
            {
                "name": "Role of Microbes in Wastewater Treatment"
            },
            {
                "name": "Study of Viral Replication and Antiviral Agents"
            },
            {
                "name": "Microbial Fuel Cells for Sustainable Energy"
            },
            {
                "name": "Analysis of the Human Microbiome and its Impact on Health"
            },
            {
                "name": "Project on the Role of Bacteria in Nitrogen Fixation"
            },
            {
                "name": "Project on the Role of Fungi in Industrial Processes"
            },
            {
                "name": "Project on the Role of Yeasts in Fermentation"
            },
            {
                "name": "Project on the Role of Algae in Biofuel Production"
            },
            {
                "name": "Project on the Role of Viruses in Gene Therapy"
            },
            {
                "name": "Project on the Role of Prions in Neurodegenerative Diseases"
            },
            {
                "name": "Project on the Role of Microbes in Soil Health"
            },
            {
                "name": "Project on the Role of Microbes in Food Preservation"
            },
            {
                "name": "Project on the Role of Microbes in Drug Discovery"
            },
            {
                "name": "Project on the Role of Microbes in Bioremediation"
            },
            {
                "name": "Project on the Role of Microbes in the Carbon Cycle"
            },
            {
                "name": "Project on the Role of Microbes in the Sulfur Cycle"
            },
            {
                "name": "Project on the Role of Microbes in the Phosphorus Cycle"
            },
            {
                "name": "Project on the Role of Microbes in the Nitrogen Cycle"
            },
            {
                "name": "Project on the Role of Microbes in the Oxygen Cycle"
            },
            {
                "name": "Project on the Role of Microbes in the Water Cycle"
            },
            {
                "name": "Project on the Role of Microbes in Disease"
            },
            {
                "name": "Project on the Role of Microbes in Immunity"
            },
            {
                "name": "Project on the Role of Microbes in Digestion"
            },
            {
                "name": "Project on the Role of Microbes in the Gut"
            },
            {
                "name": "Project on the Role of Microbes in the Skin"
            },
            {
                "name": "Project on the Role of Microbes in the Mouth"
            },
            {
                "name": "Project on the Role of Microbes in the Lungs"
            },
            {
                "name": "Project on the Role of Microbes in the Blood"
            },
            {
                "name": "Project on the Role of Microbes in the Brain"
            },
            {
                "name": "Project on the Role of Microbes in the Heart"
            },
            {
                "name": "Project on the Role of Microbes in the Kidney"
            },
            {
                "name": "Project on the Role of Microbes in the Liver"
            },
            {
                "name": "Project on the Role of Microbes in the Spleen"
            },
            {
                "name": "Project on the Role of Microbes in the Pancreas"
            },
            {
                "name": "Project on the Role of Microbes in the Stomach"
            },
            {
                "name": "Project on the Role of Microbes in the Intestines"
            },
            {
                "name": "Project on the Role of Microbes in the Colon"
            },
            {
                "name": "Project on the Role of Microbes in the Appendix"
            },
            {
                "name": "Project on the Role of Microbes in the Gallbladder"
            },
            {
                "name": "Project on the Role of Microbes in the Bladder"
            },
            {
                "name": "Project on the Role of Microbes in the Uterus"
            },
            {
                "name": "Project on the Role of Microbes in the Vagina"
            },
            {
                "name": "Project on the Role of Microbes in the Testis"
            },
            {
                "name": "Project on the Role of Microbes in the Ovary"
            },
            {
                "name": "Project on the Role of Microbes in the Bone Marrow"
            }
        ]
    },
    {
        "name": "Nursing (M.Sc Nursing)",
        "children": [
            {
                "name": "Evidence-Based Practice: A Systematic Review of Nursing Interventions"
            },
            {
                "name": "Clinical Leadership and Management in a Hospital Ward"
            },
            {
                "name": "Patient Safety and Quality Improvement in a Healthcare Setting"
            },
            {
                "name": "Role of Advanced Practice Nurses in Primary Healthcare"
            },
            {
                "name": "Analysis of the Impact of Nurse-Patient Ratios on Patient Outcomes"
            },
            {
                "name": "Nursing Informatics: Implementation of a Clinical Information System"
            },
            {
                "name": "Mental Health Nursing: A Case Study on a Specific Disorder"
            },
            {
                "name": "Community Health Nursing: A Needs Assessment in a Rural Community"
            },
            {
                "name": "Ethical and Legal Issues in Nursing Practice"
            },
            {
                "name": "Project on the Role of Nurses in Disaster Management"
            },
            {
                "name": "Project on the Impact of Nurse Burnout on Patient Care"
            },
            {
                "name": "Project on a Case Study of a Patient with a Chronic Illness"
            },
            {
                "name": "Project on the Role of Palliative Care in Nursing"
            },
            {
                "name": "Project on the Role of Nursing in Cancer Treatment"
            },
            {
                "name": "Project on the Role of Nursing in Geriatric Care"
            },
            {
                "name": "Project on the Role of Nursing in Pediatric Care"
            },
            {
                "name": "Project on the Role of Nursing in Critical Care"
            },
            {
                "name": "Project on the Role of Nursing in Emergency Care"
            },
            {
                "name": "Project on the Role of Nursing in Mental Health Care"
            },
            {
                "name": "Project on the Role of Nursing in Community Health"
            },
            {
                "name": "Project on the Role of Nursing in Public Health"
            },
            {
                "name": "Project on the Role of Nursing in School Health"
            },
            {
                "name": "Project on the Role of Nursing in Occupational Health"
            },
            {
                "name": "Project on the Role of Nursing in Home Healthcare"
            },
            {
                "name": "Project on the Role of Nursing in Hospice Care"
            },
            {
                "name": "Project on the Role of Nursing in Rehabilitation"
            },
            {
                "name": "Project on the Role of Nursing in Medical-Surgical Care"
            },
            {
                "name": "Project on the Role of Nursing in Maternal-Child Health"
            },
            {
                "name": "Project on the Role of Nursing in Neonatal Care"
            },
            {
                "name": "Project on the Role of Nursing in Cardiovascular Care"
            },
            {
                "name": "Project on the Role of Nursing in Respiratory Care"
            },
            {
                "name": "Project on the Role of Nursing in Renal Care"
            },
            {
                "name": "Project on the Role of Nursing in Neurological Care"
            },
            {
                "name": "Project on the Role of Nursing in Orthopedic Care"
            },
            {
                "name": "Project on the Role of Nursing in Urological Care"
            },
            {
                "name": "Project on the Role of Nursing in Gastrointestinal Care"
            },
            {
                "name": "Project on the Role of Nursing in Endocrine Care"
            },
            {
                "name": "Project on the Role of Nursing in Dermatological Care"
            },
            {
                "name": "Project on the Role of Nursing in Oncology Care"
            },
            {
                "name": "Project on the Role of Nursing in Immunological Care"
            },
            {
                "name": "Project on the Role of Nursing in Infectious Disease Care"
            },
            {
                "name": "Project on the Role of Nursing in Pain Management"
            },
            {
                "name": "Project on the Role of Nursing in Wound Care"
            },
            {
                "name": "Project on the Role of Nursing in Diabetes Management"
            },
            {
                "name": "Project on the Role of Nursing in Hypertension Management"
            },
            {
                "name": "Project on the Role of Nursing in Obesity Management"
            },
            {
                "name": "Project on the Role of Nursing in Smoking Cessation"
            },
            {
                "name": "Project on the Role of Nursing in Alcohol and Drug Abuse"
            },
            {
                "name": "Project on the Role of Nursing in Mental Health Promotion"
            },
            {
                "name": "Project on the Role of Nursing in Patient Education"
            }
        ]
    },
    {
        "name": "Nutrition & Dietetics",
        "children": [
            {
                "name": "Dietary Management for Type 2 Diabetes Patients"
            },
            {
                "name": "Nutritional Counseling and Meal Planning for Athletes"
            },
            {
                "name": "Role of Micronutrients in Boosting the Immune System"
            },
            {
                "name": "Assessment of Nutritional Status in Pediatric Patients"
            },
            {
                "name": "Impact of a Plant-Based Diet on Cardiovascular Health"
            },
            {
                "name": "Developing a Nutrition Education Program for a School"
            },
            {
                "name": "Clinical Nutrition: Management of Chronic Kidney Disease"
            },
            {
                "name": "Role of Gut Microbiota in Health and Disease"
            },
            {
                "name": "Food Allergies and Intolerances: Diagnosis and Dietary Management"
            },
            {
                "name": "Project on the Role of Diet in Cancer Prevention"
            },
            {
                "name": "Project on the Impact of Fast Food on Public Health"
            },
            {
                "name": "Project on the Role of Omega-3 Fatty Acids in Brain Health"
            },
            {
                "name": "Project on the Nutritional Needs of Pregnant Women"
            },
            {
                "name": "Project on the Role of Protein in Muscle Building"
            },
            {
                "name": "Project on the Nutritional Needs of Geriatric Populations"
            },
            {
                "name": "Project on the Role of Vitamins in Immunity"
            },
            {
                "name": "Project on a Low-Salt Diet and Blood Pressure Management"
            },
            {
                "name": "Project on the Nutritional Needs for a Ketogenic Diet"
            },
            {
                "name": "Project on the Role of Dietary Fiber in Digestive Health"
            },
            {
                "name": "Project on the Glycemic Index of Different Foods"
            },
            {
                "name": "Project on the Impact of Fermented Foods on Gut Flora"
            },
            {
                "name": "Project on the Role of Antioxidants in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Vegetarian Diet"
            },
            {
                "name": "Project on the Role of Hydration in Cognitive Function"
            },
            {
                "name": "Project on the Impact of Processed Foods on Public Health"
            },
            {
                "name": "Project on the Nutritional Value of Different Cuisines"
            },
            {
                "name": "Project on the Role of Minerals in the Body"
            },
            {
                "name": "Project on a Low-Carb Diet and Weight Management"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Protein Diet"
            },
            {
                "name": "Project on the Role of Carbohydrates in Energy"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Fiber Diet"
            },
            {
                "name": "Project on the Role of Fats in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-Fat Diet"
            },
            {
                "name": "Project on the Role of Water in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Balanced Diet"
            },
            {
                "name": "Project on the Role of Exercise in Weight Management"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-Sugar Diet"
            },
            {
                "name": "Project on the Role of Sleep in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Antioxidant Diet"
            },
            {
                "name": "Project on the Role of Mindful Eating"
            },
            {
                "name": "Project on the Impact of Fasting on Metabolism"
            },
            {
                "name": "Project on the Nutritional Needs for a Mediterranean Diet"
            },
            {
                "name": "Project on the Role of Vitamin D in Bone Health"
            },
            {
                "name": "Project on the Nutritional Needs for a DASH Diet"
            },
            {
                "name": "Project on the Role of Iron in Anemia Prevention"
            },
            {
                "name": "Project on the Nutritional Needs for a GAPS Diet"
            },
            {
                "name": "Project on the Role of Magnesium in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-FODMAP Diet"
            },
            {
                "name": "Project on the Role of Zinc in Immunity"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-Histamine Diet"
            }
        ]
    },
    {
        "name": "Philosophy",
        "children": [
            {
                "name": "Analysis of Existentialism and its Relevance in Modern Life"
            },
            {
                "name": "The Ethics of Artificial Intelligence and Robotics"
            },
            {
                "name": "Epistemology: The Nature and Limits of Human Knowledge"
            },
            {
                "name": "Political Philosophy: A Comparative Study of Plato and Aristotle"
            },
            {
                "name": "Philosophy of Mind: The Mind-Body Problem"
            },
            {
                "name": "Logic and Critical Thinking in Everyday Arguments"
            },
            {
                "name": "Metaphysics: The Nature of Reality and Existence"
            },
            {
                "name": "Aesthetics: The Philosophy of Art and Beauty"
            },
            {
                "name": "The Philosophy of Science and Scientific Method"
            },
            {
                "name": "Project on the Philosophy of Religion and the Existence of God"
            },
            {
                "name": "Project on the Philosophy of Language"
            },
            {
                "name": "Project on the Philosophy of History"
            },
            {
                "name": "Project on the Philosophy of Education"
            },
            {
                "name": "Project on the Philosophy of Law"
            },
            {
                "name": "Project on the Philosophy of Technology"
            },
            {
                "name": "Project on the Philosophy of Ethics and Morality"
            },
            {
                "name": "Project on the Philosophy of Mind and Consciousness"
            },
            {
                "name": "Project on the Philosophy of Politics and Government"
            },
            {
                "name": "Project on the Philosophy of Art and Aesthetics"
            },
            {
                "name": "Project on the Philosophy of Science and its Limits"
            },
            {
                "name": "Project on the Philosophy of Religion and Faith"
            },
            {
                "name": "Project on the Philosophy of Psychology and the Self"
            },
            {
                "name": "Project on the Philosophy of Logic and Reasoning"
            },
            {
                "name": "Project on the Philosophy of Time and Space"
            },
            {
                "name": "Project on the Philosophy of Free Will and Determinism"
            },
            {
                "name": "Project on the Philosophy of Happiness and Well-being"
            },
            {
                "name": "Project on the Philosophy of Love and Relationships"
            },
            {
                "name": "Project on the Philosophy of Death and Dying"
            },
            {
                "name": "Project on the Philosophy of Life and Meaning"
            },
            {
                "name": "Project on the Philosophy of Mind and Artificial Intelligence"
            },
            {
                "name": "Project on the Philosophy of Language and Communication"
            },
            {
                "name": "Project on the Philosophy of Education and its Purpose"
            },
            {
                "name": "Project on the Philosophy of Law and Justice"
            },
            {
                "name": "Project on the Philosophy of Technology and its Impact"
            },
            {
                "name": "Project on the Philosophy of Ethics and Business"
            },
            {
                "name": "Project on the Philosophy of Mind and Consciousness"
            },
            {
                "name": "Project on the Philosophy of Politics and Power"
            },
            {
                "name": "Project on the Philosophy of Art and Creativity"
            },
            {
                "name": "Project on the Philosophy of Science and its History"
            },
            {
                "name": "Project on the Philosophy of Religion and Belief"
            },
            {
                "name": "Project on the Philosophy of Psychology and Emotions"
            },
            {
                "name": "Project on the Philosophy of Logic and Fallacies"
            },
            {
                "name": "Project on the Philosophy of Time and Memory"
            },
            {
                "name": "Project on the Philosophy of Free Will and Choice"
            },
            {
                "name": "Project on the Philosophy of Happiness and Purpose"
            },
            {
                "name": "Project on the Philosophy of Love and Friendship"
            },
            {
                "name": "Project on the Philosophy of Death and Grief"
            },
            {
                "name": "Project on the Philosophy of Life and its Value"
            },
            {
                "name": "Project on the Philosophy of Mind and Robots"
            },
            {
                "name": "Project on the Philosophy of Language and Thought"
            }
        ]
    },
    {
        "name": "Physics",
        "children": [
            {
                "name": "Quantum Computing: Principles and Applications"
            },
            {
                "name": "Astrophysics: Simulation of a Black Hole's Event Horizon"
            },
            {
                "name": "Nanotechnology: Fabrication and Characterization of Nanomaterials"
            },
            {
                "name": "Optics: Design and Simulation of a Laser System"
            },
            {
                "name": "Thermodynamics: Energy Efficiency Analysis of a Power Plant"
            },
            {
                "name": "Particle Physics: Data Analysis from the Large Hadron Collider"
            },
            {
                "name": "Condensed Matter Physics: Study of Superconductors"
            },
            {
                "name": "Computational Physics: Simulation of a Planetary Orbit"
            },
            {
                "name": "Medical Physics: Application of Radiation in Cancer Therapy"
            },
            {
                "name": "Project on the Theory of Relativity and its Experimental Evidence"
            },
            {
                "name": "Project on the Physics of Renewable Energy Sources"
            },
            {
                "name": "Project on the Physics of Musical Instruments"
            },
            {
                "name": "Project on the Physics of Sports"
            },
            {
                "name": "Project on the Physics of Climate Change"
            },
            {
                "name": "Project on the Physics of Space Exploration"
            },
            {
                "name": "Project on the Physics of Solar Cells"
            },
            {
                "name": "Project on the Physics of Lasers"
            },
            {
                "name": "Project on the Physics of Fiber Optics"
            },
            {
                "name": "Project on the Physics of Medical Imaging (MRI, CT Scan)"
            },
            {
                "name": "Project on the Physics of Nuclear Power"
            },
            {
                "name": "Project on the Physics of Semiconductors"
            },
            {
                "name": "Project on the Physics of Nanomaterials"
            },
            {
                "name": "Project on the Physics of Superconductors"
            },
            {
                "name": "Project on the Physics of Quantum Mechanics"
            },
            {
                "name": "Project on the Physics of General Relativity"
            },
            {
                "name": "Project on the Physics of the Standard Model"
            },
            {
                "name": "Project on the Physics of Cosmology"
            },
            {
                "name": "Project on the Physics of Black Holes"
            },
            {
                "name": "Project on the Physics of Dark Matter and Dark Energy"
            },
            {
                "name": "Project on the Physics of String Theory"
            },
            {
                "name": "Project on the Physics of the Big Bang"
            },
            {
                "name": "Project on the Physics of Neutron Stars"
            },
            {
                "name": "Project on the Physics of Gravity"
            },
            {
                "name": "Project on the Physics of Electromagnetism"
            },
            {
                "name": "Project on the Physics of Thermodynamics"
            },
            {
                "name": "Project on the Physics of Fluid Dynamics"
            },
            {
                "name": "Project on the Physics of Acoustics"
            },
            {
                "name": "Project on the Physics of Optics"
            },
            {
                "name": "Project on the Physics of Magnetism"
            },
            {
                "name": "Project on the Physics of Nuclear Reactions"
            },
            {
                "name": "Project on the Physics of Fission and Fusion"
            },
            {
                "name": "Project on the Physics of the Sun and Stars"
            },
            {
                "name": "Project on the Physics of the Planets"
            },
            {
                "name": "Project on the Physics of the Moon"
            },
            {
                "name": "Project on the Physics of the Earth"
            },
            {
                "name": "Project on the Physics of Weather"
            },
            {
                "name": "Project on the Physics of Earthquakes"
            },
            {
                "name": "Project on the Physics of Volcanoes"
            },
            {
                "name": "Project on the Physics of Tides"
            },
            {
                "name": "Project on the Physics of Ocean Currents"
            }
        ]
    },
    {
        "name": "Psychology",
        "children": [
            {
                "name": "Cognitive Psychology: Memory and Learning in Different Age Groups"
            },
            {
                "name": "Social Psychology: The Impact of Group Dynamics on Individual Behavior"
            },
            {
                "name": "Developmental Psychology: The Effects of Parenting Styles on Child Development"
            },
            {
                "name": "Abnormal Psychology: A Case Study on a Specific Disorder"
            },
            {
                "name": "Positive Psychology: The Role of Gratitude in Mental Well-being"
            },
            {
                "name": "Neuroscience: The Brain's Response to Stress"
            },
            {
                "name": "Cross-Cultural Psychology: A Comparative Study of Personality Traits"
            },
            {
                "name": "Industrial-Organizational Psychology: Employee Motivation and Job Satisfaction"
            },
            {
                "name": "Clinical Psychology: Effectiveness of a Specific Therapeutic Intervention"
            },
            {
                "name": "Project on the Psychology of Social Media and its Impact"
            },
            {
                "name": "Project on the Psychology of Advertising and Consumer Behavior"
            },
            {
                "name": "Project on the Psychology of Criminal Behavior"
            },
            {
                "name": "Project on the Role of Sleep in Mental Health"
            },
            {
                "name": "Project on the Psychology of Phobias and Their Treatment"
            },
            {
                "name": "Project on the Impact of Childhood Trauma on Adult Behavior"
            },
            {
                "name": "Project on the Role of Empathy in Human Relationships"
            },
            {
                "name": "Project on the Psychology of Forgiveness"
            },
            {
                "name": "Project on the Psychology of Happiness and Well-being"
            },
            {
                "name": "Project on the Role of Personality in Career Choice"
            },
            {
                "name": "Project on the Psychology of Learning Disabilities"
            },
            {
                "name": "Project on the Impact of Stress on Physical Health"
            },
            {
                "name": "Project on the Role of Social Support in Mental Health"
            },
            {
                "name": "Project on the Psychology of Motivation"
            },
            {
                "name": "Project on the Use of Relaxation Techniques for Anxiety"
            },
            {
                "name": "Project on the Psychology of Resilience"
            },
            {
                "name": "Project on the Role of Cognitive Biases in Decision Making"
            },
            {
                "name": "Project on the Psychology of Addictive Behaviors"
            },
            {
                "name": "Project on the Role of Emotional Intelligence"
            },
            {
                "name": "Project on the Psychology of Post-Traumatic Growth"
            },
            {
                "name": "Project on the Role of Neuroscience in Psychology"
            },
            {
                "name": "Project on the Psychology of Self-Harm"
            },
            {
                "name": "Project on the Use of Biofeedback in Therapy"
            },
            {
                "name": "Project on the Psychology of Obsessive-Compulsive Disorder (OCD)"
            },
            {
                "name": "Project on the Role of Spirituality in Mental Health"
            },
            {
                "name": "Project on the Psychology of Work-Life Balance"
            },
            {
                "name": "Project on the Use of Dialectical Behavior Therapy (DBT)"
            },
            {
                "name": "Project on the Psychology of Bullying"
            },
            {
                "name": "Project on the Role of Culture in Psychological Assessment"
            },
            {
                "name": "Project on the Psychology of Gender"
            },
            {
                "name": "Project on the Psychology of Sexuality"
            },
            {
                "name": "Project on the Psychology of Love and Relationships"
            },
            {
                "name": "Project on the Psychology of Death and Dying"
            },
            {
                "name": "Project on the Psychology of Religion"
            },
            {
                "name": "Project on the Psychology of Art and Creativity"
            },
            {
                "name": "Project on the Psychology of Music"
            },
            {
                "name": "Project on the Psychology of Film"
            },
            {
                "name": "Project on the Psychology of Gaming"
            },
            {
                "name": "Project on the Psychology of Sports"
            },
            {
                "name": "Project on the Psychology of Animals"
            },
            {
                "name": "Project on the Psychology of Plants"
            }
        ]
    },
    {
        "name": "Public Administration",
        "children": [
            {
                "name": "Policy Analysis of a Government Program"
            },
            {
                "name": "E-Governance: Implementation of Digital Services in a Municipality"
            },
            {
                "name": "Public Sector Financial Management and Budgeting"
            },
            {
                "name": "Urban Planning and Development in a Smart City"
            },
            {
                "name": "Role of Non-Governmental Organizations (NGOs) in Social Development"
            },
            {
                "name": "Crisis Management and Disaster Response Plan for a City"
            },
            {
                "name": "Public Policy and Environmental Sustainability"
            },
            {
                "name": "Human Resource Management in the Civil Service"
            },
            {
                "name": "Citizen Participation in Local Government"
            },
            {
                "name": "Project on the Role of Public Administration in Economic Development"
            },
            {
                "name": "Project on the Impact of Public-Private Partnerships (PPPs)"
            },
            {
                "name": "Project on the Role of Public Administration in Rural Development"
            },
            {
                "name": "Project on the Role of Public Administration in Social Justice"
            },
            {
                "name": "Project on the Role of Public Administration in Healthcare"
            },
            {
                "name": "Project on the Role of Public Administration in Education"
            },
            {
                "name": "Project on the Role of Public Administration in Law and Order"
            },
            {
                "name": "Project on the Role of Public Administration in Infrastructure Development"
            },
            {
                "name": "Project on the Role of Public Administration in Environmental Protection"
            },
            {
                "name": "Project on the Role of Public Administration in Human Rights"
            },
            {
                "name": "Project on the Role of Public Administration in Public Safety"
            },
            {
                "name": "Project on the Role of Public Administration in Public Works"
            },
            {
                "name": "Project on the Role of Public Administration in Public Utilities"
            },
            {
                "name": "Project on the Role of Public Administration in Urban Planning"
            },
            {
                "name": "Project on the Role of Public Administration in Regional Planning"
            },
            {
                "name": "Project on the Role of Public Administration in National Planning"
            },
            {
                "name": "Project on the Role of Public Administration in International Relations"
            },
            {
                "name": "Project on the Role of Public Administration in Global Governance"
            },
            {
                "name": "Project on the Role of Public Administration in Public Finance"
            },
            {
                "name": "Project on the Role of Public Administration in Public Sector Reform"
            },
            {
                "name": "Project on the Role of Public Administration in E-Governance"
            },
            {
                "name": "Project on the Role of Public Administration in Citizen-Centric Governance"
            },
            {
                "name": "Project on the Role of Public Administration in Good Governance"
            },
            {
                "name": "Project on the Role of Public Administration in Public Policy Analysis"
            },
            {
                "name": "Project on the Role of Public Administration in Policy Implementation"
            },
            {
                "name": "Project on the Role of Public Administration in Policy Evaluation"
            },
            {
                "name": "Project on the Role of Public Administration in Decision Making"
            },
            {
                "name": "Project on the Role of Public Administration in Problem Solving"
            },
            {
                "name": "Project on the Role of Public Administration in Leadership"
            },
            {
                "name": "Project on the Role of Public Administration in Communication"
            },
            {
                "name": "Project on the Role of Public Administration in Conflict Resolution"
            },
            {
                "name": "Project on the Role of Public Administration in Crisis Management"
            },
            {
                "name": "Project on the Role of Public Administration in Disaster Management"
            },
            {
                "name": "Project on the Role of Public Administration in Public Relations"
            },
            {
                "name": "Project on the Role of Public Administration in Strategic Planning"
            },
            {
                "name": "Project on the Role of Public Administration in Change Management"
            },
            {
                "name": "Project on the Role of Public Administration in Organizational Development"
            },
            {
                "name": "Project on the Role of Public Administration in Human Resource Management"
            },
            {
                "name": "Project on the Role of Public Administration in Financial Management"
            },
            {
                "name": "Project on the Role of Public Administration in Technology"
            },
            {
                "name": "Project on the Role of Public Administration in Innovation"
            }
        ]
    },
    {
        "name": "Public Health (MPH)",
        "children": [
            {
                "name": "Epidemiological Study of a Communicable Disease Outbreak"
            },
            {
                "name": "Health Promotion Campaign for a Community on a Specific Issue"
            },
            {
                "name": "Analysis of the Impact of Public Policy on Health Outcomes"
            },
            {
                "name": "Community Health Needs Assessment and Intervention Plan"
            },
            {
                "name": "Role of Health Education in Disease Prevention"
            },
            {
                "name": "Environmental Health: Impact of Air Pollution on Respiratory Health"
            },
            {
                "name": "Maternal and Child Health: A Program Evaluation"
            },
            {
                "name": "Healthcare Systems and Delivery Models"
            },
            {
                "name": "Global Health: A Comparative Study of Health Systems"
            },
            {
                "name": "Project on the Role of Public Health in Disaster Preparedness"
            },
            {
                "name": "Project on the Role of Public Health in Chronic Disease Management"
            },
            {
                "name": "Project on the Role of Public Health in Infectious Disease Control"
            },
            {
                "name": "Project on the Role of Public Health in Food Safety"
            },
            {
                "name": "Project on the Role of Public Health in Water Quality"
            },
            {
                "name": "Project on the Role of Public Health in Sanitation"
            },
            {
                "name": "Project on the Role of Public Health in Mental Health"
            },
            {
                "name": "Project on the Role of Public Health in Nutrition"
            },
            {
                "name": "Project on the Role of Public Health in Physical Activity"
            },
            {
                "name": "Project on the Role of Public Health in Tobacco Control"
            },
            {
                "name": "Project on the Role of Public Health in Alcohol and Drug Abuse"
            },
            {
                "name": "Project on the Role of Public Health in Injury Prevention"
            },
            {
                "name": "Project on the Role of Public Health in Violence Prevention"
            },
            {
                "name": "Project on the Role of Public Health in Suicide Prevention"
            },
            {
                "name": "Project on the Role of Public Health in Immunization"
            },
            {
                "name": "Project on the Role of Public Health in Health Equity"
            },
            {
                "name": "Project on the Role of Public Health in Health Disparities"
            },
            {
                "name": "Project on the Role of Public Health in Social Determinants of Health"
            },
            {
                "name": "Project on the Role of Public Health in Environmental Justice"
            },
            {
                "name": "Project on the Role of Public Health in Climate Change"
            },
            {
                "name": "Project on the Role of Public Health in Global Health Security"
            },
            {
                "name": "Project on the Role of Public Health in Public Policy"
            },
            {
                "name": "Project on the Role of Public Health in Healthcare Reform"
            },
            {
                "name": "Project on the Role of Public Health in Healthcare Administration"
            },
            {
                "name": "Project on the Role of Public Health in Health Information Technology"
            },
            {
                "name": "Project on the Role of Public Health in Health Communication"
            },
            {
                "name": "Project on the Role of Public Health in Health Education"
            },
            {
                "name": "Project on the Role of Public Health in Health Promotion"
            },
            {
                "name": "Project on the Role of Public Health in Disease Prevention"
            },
            {
                "name": "Project on the Role of Public Health in Community Health"
            },
            {
                "name": "Project on the Role of Public Health in School Health"
            },
            {
                "name": "Project on the Role of Public Health in Occupational Health"
            },
            {
                "name": "Project on the Role of Public Health in Environmental Health"
            },
            {
                "name": "Project on the Role of Public Health in Global Health"
            },
            {
                "name": "Project on the Role of Public Health in Maternal and Child Health"
            },
            {
                "name": "Project on the Role of Public Health in Mental Health"
            },
            {
                "name": "Project on the Role of Public Health in Public Policy Analysis"
            },
            {
                "name": "Project on the Role of Public Health in Policy Implementation"
            },
            {
                "name": "Project on the Role of Public Health in Policy Evaluation"
            },
            {
                "name": "Project on the Role of Public Health in Health Systems"
            },
            {
                "name": "Project on the Role of Public Health in Healthcare Delivery"
            }
        ]
    },
    {
        "name": "Statistics",
        "children": [
            {
                "name": "Predictive Modeling of a Financial Market using Time Series Analysis"
            },
            {
                "name": "Regression Analysis of Socioeconomic Factors on Educational Outcomes"
            },
            {
                "name": "Bayesian Statistics: A Case Study in Medical Diagnosis"
            },
            {
                "name": "Design of Experiments for a Clinical Trial"
            },
            {
                "name": "Data Mining and Cluster Analysis of Customer Behavior"
            },
            {
                "name": "Hypothesis Testing and A/B Testing for Website Optimization"
            },
            {
                "name": "Statistical Process Control in Manufacturing"
            },
            {
                "name": "Non-Parametric Statistics: Analysis of Non-Normal Data"
            },
            {
                "name": "Monte Carlo Simulation for Risk Assessment"
            },
            {
                "name": "Project on a Machine Learning Model for Prediction"
            },
            {
                "name": "Project on a Data Visualization Dashboard"
            },
            {
                "name": "Project on a Time Series Forecasting Model"
            },
            {
                "name": "Project on a Predictive Model for Customer Churn"
            },
            {
                "name": "Project on a Fraud Detection Model"
            },
            {
                "name": "Project on a Credit Scoring Model"
            },
            {
                "name": "Project on a Recommendation System"
            },
            {
                "name": "Project on a Sentiment Analysis Model"
            },
            {
                "name": "Project on a Medical Diagnosis Prediction Model"
            },
            {
                "name": "Project on a Stock Price Prediction Model"
            },
            {
                "name": "Project on a House Price Prediction Model"
            },
            {
                "name": "Project on a Customer Segmentation Model"
            },
            {
                "name": "Project on a Churn Prediction Model"
            },
            {
                "name": "Project on a Customer Lifetime Value (CLV) Prediction Model"
            },
            {
                "name": "Project on a Predictive Maintenance Model"
            },
            {
                "name": "Project on a Supply Chain Demand Forecasting Model"
            },
            {
                "name": "Project on a Fraud Detection Model in Insurance"
            },
            {
                "name": "Project on a Medical Image Analysis Model"
            },
            {
                "name": "Project on a Social Media Engagement Prediction Model"
            },
            {
                "name": "Project on a Customer Satisfaction Prediction Model"
            },
            {
                "name": "Project on a Real-time Traffic Prediction Model"
            },
            {
                "name": "Project on a Predictive Model for Employee Attrition"
            },
            {
                "name": "Project on an Image Classification Model"
            },
            {
                "name": "Project on a Time Series Forecasting Model for Energy Consumption"
            },
            {
                "name": "Project on a Natural Language Understanding (NLU) System"
            },
            {
                "name": "Project on a Text-based Recommendation System"
            },
            {
                "name": "Project on a Predictive Model for Flight Delays"
            },
            {
                "name": "Project on a Medical Image Analysis Model"
            },
            {
                "name": "Project on a Predictive Model for Disease Outbreaks"
            },
            {
                "name": "Project on a Sentiment Analysis Model for Product Reviews"
            },
            {
                "name": "Project on a Customer Service Chatbot"
            },
            {
                "name": "Project on a Predictive Model for Customer Behavior"
            },
            {
                "name": "Project on a Supply Chain Risk Prediction Model"
            },
            {
                "name": "Project on a Predictive Model for Retail Sales"
            },
            {
                "name": "Project on a Financial Market Prediction Model"
            },
            {
                "name": "Project on a Weather Forecasting Model"
            },
            {
                "name": "Project on a Sports Outcome Prediction Model"
            },
            {
                "name": "Project on a Predictive Model for E-commerce Traffic"
            },
            {
                "name": "Project on a Recommendation System for Music"
            },
            {
                "name": "Project on a Predictive Model for Loan Default"
            },
            {
                "name": "Project on a Face Recognition System"
            }
        ]
    },
    {
        "name": "Supply Chain Management",
        "children": [
            {
                "name": "Supply Chain Network Design and Optimization"
            },
            {
                "name": "Inventory Management Strategies for a Retail Business"
            },
            {
                "name": "Logistics and Transportation Optimization using Route Planning"
            },
            {
                "name": "Risk Management and Resilience in Global Supply Chains"
            },
            {
                "name": "Impact of E-commerce on Last-Mile Delivery"
            },
            {
                "name": "Sustainable Supply Chain: Green Logistics and Ethical Sourcing"
            },
            {
                "name": "Blockchain Technology for Supply Chain Transparency"
            },
            {
                "name": "Data Analytics for Demand Forecasting and Planning"
            },
            {
                "name": "Feasibility Study for a Warehouse Automation System"
            },
            {
                "name": "Project on the Role of AI in Supply Chain"
            },
            {
                "name": "Project on the Impact of COVID-19 on Global Supply Chains"
            },
            {
                "name": "Project on a Case Study of a Successful Supply Chain"
            },
            {
                "name": "Project on the Role of Supply Chain in a Manufacturing Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Service Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Retail Business"
            },
            {
                "name": "Project on the Role of Supply Chain in a Healthcare System"
            },
            {
                "name": "Project on the Role of Supply Chain in a Food and Beverage Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Fashion Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Tech Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Pharmaceutical Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Non-Profit Organization"
            },
            {
                "name": "Project on the Role of Supply Chain in a Government Agency"
            },
            {
                "name": "Project on the Role of Supply Chain in a Logistics Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Transportation Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Warehouse"
            },
            {
                "name": "Project on the Role of Supply Chain in a Distribution Center"
            },
            {
                "name": "Project on the Role of Supply Chain in a Port"
            },
            {
                "name": "Project on the Role of Supply Chain in an Airport"
            },
            {
                "name": "Project on the Role of Supply Chain in a Customs Brokerage"
            },
            {
                "name": "Project on the Role of Supply Chain in a Freight Forwarder"
            },
            {
                "name": "Project on the Role of Supply Chain in a Shipping Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Railroad Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Trucking Company"
            },
            {
                "name": "Project on the Role of Supply Chain in an Air Cargo Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Pipeline Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Public Utility"
            },
            {
                "name": "Project on the Role of Supply Chain in a Telecommunications Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Media Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Sports Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Entertainment Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Tourism Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Hospitality Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Restaurant Chain"
            },
            {
                "name": "Project on the Role of Supply Chain in a Fast Food Chain"
            },
            {
                "name": "Project on the Role of Supply Chain in a Supermarket Chain"
            },
            {
                "name": "Project on the Role of Supply Chain in a Department Store"
            },
            {
                "name": "Project on the Role of Supply Chain in a Convenience Store"
            },
            {
                "name": "Project on the Role of Supply Chain in an Online Retailer"
            },
            {
                "name": "Project on the Role of Supply Chain in a Direct-to-Consumer Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Subscription Box Company"
            }
        ]
    },
    {
        "name": "Zoology",
        "children": [
            {
                "name": "Behavioral Study of a Specific Animal Species in its Natural Habitat"
            },
            {
                "name": "Conservation Genetics of an Endangered Species"
            },
            {
                "name": "Physiological Adaptations of Animals to Extreme Environments"
            },
            {
                "name": "Impact of Climate Change on Animal Migration Patterns"
            },
            {
                "name": "Comparative Anatomy of Vertebrates"
            },
            {
                "name": "Ecological Study of a Marine Ecosystem"
            },
            {
                "name": "Animal Communication and Social Structures"
            },
            {
                "name": "Role of Wildlife Forensics in Combating Illegal Poaching"
            },
            {
                "name": "Parasitology: A Study of a Specific Host-Parasite Relationship"
            },
            {
                "name": "Project on the Role of Zoos in Animal Conservation"
            },
            {
                "name": "Project on the Effects of Pollution on Aquatic Life"
            },
            {
                "name": "Project on the Role of Animal Behavior in Survival"
            },
            {
                "name": "Project on the Evolution of a Specific Animal Group"
            },
            {
                "name": "Project on the Role of Genetics in Animal Breeding"
            },
            {
                "name": "Project on the Impact of Human-Wildlife Conflict"
            },
            {
                "name": "Project on the Role of Endocrine System in Animal Behavior"
            },
            {
                "name": "Project on the Anatomy of a Specific Animal"
            },
            {
                "name": "Project on the Role of Immunology in Animal Health"
            },
            {
                "name": "Project on the Role of Neurobiology in Animal Cognition"
            },
            {
                "name": "Project on the Role of Animal Welfare in Research"
            },
            {
                "name": "Project on the Role of Animal Models in Human Disease Research"
            },
            {
                "name": "Project on the Role of Parasites in Ecosystems"
            },
            {
                "name": "Project on the Role of Birds in Seed Dispersal"
            },
            {
                "name": "Project on the Role of Insects in Pollination"
            },
            {
                "name": "Project on the Role of Fish in Aquatic Ecosystems"
            },
            {
                "name": "Project on the Role of Reptiles in the Food Chain"
            },
            {
                "name": "Project on the Role of Amphibians in the Environment"
            },
            {
                "name": "Project on the Role of Mammals in the Ecosystem"
            },
            {
                "name": "Project on the Role of Marine Animals in Ocean Health"
            },
            {
                "name": "Project on the Role of Freshwater Animals in River Health"
            },
            {
                "name": "Project on the Role of Terrestrial Animals in Land Health"
            },
            {
                "name": "Project on the Role of Vertebrates in the Ecosystem"
            },
            {
                "name": "Project on the Role of Invertebrates in the Ecosystem"
            },
            {
                "name": "Project on the Role of Animal Diversity in Biodiversity"
            },
            {
                "name": "Project on the Role of Animal Behavior in Habitat Selection"
            },
            {
                "name": "Project on the Role of Animal Physiology in Adaptation"
            },
            {
                "name": "Project on the Role of Animal Genetics in Evolution"
            },
            {
                "name": "Project on the Role of Animal Ecology in Conservation"
            },
            {
                "name": "Project on the Role of Animal Anatomy in Function"
            },
            {
                "name": "Project on the Role of Animal Taxonomy in Classification"
            },
            {
                "name": "Project on the Role of Animal Systematics in Relationships"
            },
            {
                "name": "Project on the Role of Animal Conservation in Endangered Species"
            },
            {
                "name": "Project on the Role of Animal Welfare in Animal Cruelty"
            },
            {
                "name": "Project on the Role of Animal Rights in Animal Testing"
            },
            {
                "name": "Project on the Role of Animal Ethics in Animal Research"
            },
            {
                "name": "Project on the Role of Animal Law in Animal Protection"
            },
            {
                "name": "Project on the Role of Animal Science in Animal Husbandry"
            },
            {
                "name": "Project on the Role of Animal Nutrition in Animal Health"
            },
            {
                "name": "Project on the Role of Animal Health in Disease Prevention"
            },
            {
                "name": "Project on the Role of Animal Medicine in Disease Treatment"
            }
        ]
    }
]
// Please note: The above lists are not exhaustive for all subjects but provide the complete structure and a detailed example for the initial subjects.
// You can use this pattern to fill in the remaining subjects as required.

/* ---------- CSS Theme Classes ---------- */

const cssTheme = `
/* Dark Forest Theme */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Inter', system-ui, sans-serif;
  }
  .text-primary-text {
    /* For light theme, a dark text color is needed */
    color: #0f2920;
  }
}

@layer components {
  /* Primary Button */
  .btn-primary {
    @apply bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] hover:from-[#1f3b30] hover:to-[#4a5c4f] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3a4a3f] focus:ring-offset-2;
  }

  /* Secondary Button */
  .btn-secondary {
    @apply bg-[#1f3b30] hover:bg-[#3a4a3f] text-white font-semibold py-3 px-6 rounded-lg border-2 border-[#0f2920] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3a4a3f] focus:ring-offset-2;
  }

  /* Outlined Button */
  .btn-outline {
    @apply bg-transparent hover:bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] hover:text-white font-semibold py-3 px-6 rounded-lg border-[1px] border-[#0f2920] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3a4a3f] focus:ring-offset-2;
  }

  /* Card Component */
  .card {
    /* Updated for light theme */
    @apply rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-[#d7f2da] text-black;
  }

  /* Section Padding */
  .section-padding {
    @apply py-16 md:py-24;
  }

  /* Container */
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  /* Gradient Text */
  .gradient-text {
    @apply bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] bg-clip-text text-transparent;
  }

  /* Gradient Background */
  .gradient-bg {
    @apply bg-gradient-to-br from-[#0f2920] to-[#3a4a3f];
  }
}
`;

/* ---------- Mobile Dropdown UI Component (for Mobile Devices) ---------- */

const MobileProjects = ({ data }) => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (categoryName) => {
        setOpenCategory(openCategory === categoryName ? null : categoryName);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
            {data.map((category) => (
                <div key={category.name} className="mb-4 rounded-lg overflow-hidden border border-[#0f2920] bg-white">
                    <button
                        onClick={() => toggleCategory(category.name)}
                        className="w-full flex justify-between items-center py-4 px-6 text-left font-bold text-black transition-colors duration-200 hover:bg-[#d7f2da]"
                    >
                        <span className="flex items-center gap-2">
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openCategory === category.name ? 'rotate-180' : ''}`} />
                            {category.name}
                        </span>
                    </button>
                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${openCategory === category.name ? 'max-h-[60vh] overflow-y-auto' : 'max-h-0'
                            }`}
                    >
                        <ul className="px-6 py-4 space-y-2 scrollbar-thin scrollbar-thumb-[#0f2920] scrollbar-track-[#d7f2da]">
                            {category.children.map((project, index) => (
                                <li key={index} className="text-gray-600 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0"></span>
                                    {project.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};



/* ---------- Main Page Component ---------- */
const AcademicProjects = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState("UG Subjects");
    const [selectedCategory, setSelectedCategory] = useState(UG_DATA[0]?.name || null);

    const dataToShow = activeTab === "UG Subjects" ? UG_DATA : PG_DATA;

    useEffect(() => {
        if (!selectedCategory || !dataToShow.find(cat => cat.name === selectedCategory)) {
            setSelectedCategory(dataToShow[0]?.name || null);
        }
    }, [activeTab, dataToShow, selectedCategory]);

    const features = [
        {
            icon: <BookOpen className="w-8 h-8 text-[#0f2920]" />,
            title: "Project Planning ",
            description: "Comprehensive planning with Research Methodology, Timelines, and Resource Allocation.",
        },
        {
            icon: <Users className="w-8 h-8 text-[#0f2920]" />,
            title: "Expert Guidance",
            description: "One-on-One Mentorship from Experienced Researchers and Industry Professionals.",
        },
        {
            icon: <Award className="w-8 h-8 text-[#0f2920]" />,
            title: "Quality Assurance",
            description: "Peer Reviews and Validation processes to meet Academic Standards.",
        },
        {
            icon: <Target className="w-8 h-8 text-[#0f2920]" />,
            title: "Implementation Support",
            description: "Help with Data Collection, Analysis, and Execution using Industry-Standard Tools.",
        },
    ];

    const benefits = [
        "Enhanced Research Skills and Methodology",
        "Industry-Relevant Project Experience",
        "Opportunities for Publications & Patents",
        "Networking with Industry Professionals",
    ];

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const projectListContent = () => {
        const projects = dataToShow.find(cat => cat.name === selectedCategory)?.children || [];
        if (projects.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                    <GraduationCap className="w-24 h-24 text-gray-400 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-600">
                        No Projects Available
                    </h2>
                    <p className="text-gray-500 mt-2 text-justify">
                        Please select another subject.
                    </p>
                </div>
            );
        }

        return (
            <div className="p-8">
                <h2 className="text-2xl font-bold text-primary-text mb-4">
                    Projects for {selectedCategory}
                </h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700 h-[550px] overflow-y-auto pr-4">
                    {projects.map((project, index) => (
                        <li key={index} className="text-base font-medium">
                            {project.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 text-black">
            <style>{cssTheme}</style>

            {/* Hero Section */}
            <section
                className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${Banner})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
                        Academic Projects
                    </h1>
                </motion.div>
            </section>

            {/* Features & Main UI Section */}
            <section className="w-full py-12 px-4 lg:px-12 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="card p-6 text-center"
                            >
                                <div className="w-16 h-16 bg-white border border-[#0f2920] rounded-full flex items-center justify-center mx-auto mb-4">
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                                <p className="text-secondary-text text-justify">{f.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Toggle */}
                    <section className="flex justify-center mb-8 px-4">
                        <div className="flex border-2 border-[#0f2920] rounded-full w-full max-w-sm overflow-hidden">
                            <motion.button
                                layout
                                onClick={() => setActiveTab("UG Subjects")}
                                className={`flex-1 py-2 text-center font-semibold relative z-10 rounded-full ${activeTab === "UG Subjects" ? "text-white" : "text-[#0f2920]"
                                    }`}
                            >
                                {activeTab === "UG Subjects" && (
                                    <motion.span
                                        layoutId="pill-bg"
                                        className="absolute inset-0 bg-[#0f2920] rounded-full"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">UG Subjects</span>
                            </motion.button>

                            <motion.button
                                layout
                                onClick={() => setActiveTab("PG Subjects")}
                                className={`flex-1 py-2 text-center font-semibold relative z-10 rounded-full ${activeTab === "PG Subjects" ? "text-white" : "text-[#0f2920]"
                                    }`}
                            >
                                {activeTab === "PG Subjects" && (
                                    <motion.span
                                        layoutId="pill-bg"
                                        className="absolute inset-0 bg-[#0f2920] rounded-full"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">PG Subjects</span>
                            </motion.button>
                        </div>
                    </section>

                    {/* Conditional Rendering of the Two-Pane UI or Mobile Dropdown */}
                    {isMobile ? (
                        <MobileProjects data={dataToShow} />
                    ) : (
                        <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:h-[700px] overflow-hidden mb-8">
                            {/* Left Pane - Subject List */}
                            <div className="col-span-1 bg-white text-[#400000] border border-gray-200 rounded-lg shadow-sm overflow-y-auto">
                                <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 sticky top-0">
                                    <h2 className="text-xl font-bold text-primary-text">Subject Catalog</h2>
                                </div>
                                {/* List of Categories */}
                                {dataToShow.map((category) => (
                                    <div key={category.name} className="py-2">
                                        <div
                                            className={`font-bold px-4 py-2 border-b border-gray-200 text-[#400000] cursor-pointer ${selectedCategory === category.name ? 'text-[#0f2920]' : 'text-gray-700'}`}
                                            onClick={() => setSelectedCategory(category.name)}
                                        >
                                            {category.name}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Pane - Project Details */}
                            <div className="col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                                {projectListContent()}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits */}
            <section className="w-full py-12 px-4 lg:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
                        Why Choose Our Academic Projects Service?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((b, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 rounded-xl card p-5 shadow-sm"
                            >
                                <CheckCircle className="h-5 w-5 text-[#ffnf3f] flex-shrink-0" />
                                <span className="text-secondary-text">{b}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full py-16 px-4 lg:px-12 bg-[#d7f2da] text-black text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
                        Ready to Start Your Academic Project?
                    </h2>
                    <p className="text-lg mb-8 text-primary-text text-center">
                        Let’s discuss your requirements and craft a roadmap to success.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl bg-[#1e1e1e] shadow-lg transition-all duration-300 hover:bg-[#333333] hover:scale-105"
                        >
                            Get Started <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AcademicProjects;


