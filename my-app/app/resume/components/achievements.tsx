import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">
        Extracurricular Activities & Achievements
      </h2>
      <div className="space-y-6">
        {/* seperate */}
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              Weather Derivative Pricing & Hedging Simulation
            </h3>
            <span className="text-sm text-muted-foreground">
              November - December 2025
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Developed a quantitative framework in MATLAB to price weather
            derivatives (CDD/HDD options) using an Ornstein-Uhlenbeck process,
            Monte Carlo simulation (Euler-Maruyama scheme), and sensitivity
            analysis (Vega) to evaluate temperature volatility hedging for a
            Financial Engineering class project.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Quantitative Financial Modeling
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Stochastic Processes
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Derivative Pricing
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              MATLAB
            </Badge>
          </div>
        </div>
        {/* seperate */}
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              Volunteer Staff — International Collegiate Programming Contest
              (ICPC)
            </h3>
            <span className="text-sm text-muted-foreground">
              October - November 2025
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Assisted in organizing and running the 2025 ICPC Asia Bangkok
            Regional Contest.
          </p>
        </div>
        {/* seperate */}
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              Amazon (AMZN) Equity Research — TBS Stock Pitch 2025
            </h3>
            <span className="text-sm text-muted-foreground">October 2025</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Conducted equity research for Amazon (NASDAQ: AMZN) for the
            Thammasat Business School (TBS) Stock Pitch 2025 competition.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Equity Research
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Valuation Analysis
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Investment Thesis
            </Badge>
          </div>
        </div>
        {/* seperate */}
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              Trading Competition — Rotman x CBS 2025
            </h3>
            <span className="text-sm text-muted-foreground">
              July - August 2025
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Ranked 8th in a global trading simulation hosted by the Rotman
            School of Management, University of Toronto, in collaboration with
            the Faculty of Commerce and Accountancy, Chulalongkorn University.
            Competed in real-time market simulations covering Liability, ETF
            Arbitrage, and Commodities Trading. Focused on evaluating tender
            offers, managing liquidity risk, and executing high-pressure trades
            using the RIT simulator.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Trading Strategies
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Liquidity Risk Management
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Arbitrage
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Decision-Making
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Financial Analysis
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              Fine-Tuning Large Language Diffusion Models for Thai News
              Summarization
            </h3>
            <span className="text-sm text-muted-foreground">
              March - May 2025
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Fine-tuned and evaluated a diffusion-based large language model
            (LLaDA) for Thai news summarization. Leveraged LLM-as-a-Judge
            (QAG-based) evaluation, compared diffusion against autoregressive
            models, and analyzed context-length strategies (MapReduce vs
            Refine).
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Natural Language Processing (NLP)
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Fine-Tuning
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              LangChain
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Model Inference
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Large Language Models (LLM)
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Diffusion Models
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              National AI Student Challenge 2025 — AWS Regional LLM League
            </h3>
            <span className="text-sm text-muted-foreground">
              March - May 2025
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Participated in the National AI Student Challenge 2025 hosted by AI
            Singapore and Amazon Web Services (AWS), focusing on the development
            and application of large language models using AWS technologies.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Amazon Web Services (AWS)
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Large Language Models (LLM)
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Artificial Intelligence (AI)
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">CUVI Stock Pitch</h3>
            <span className="text-sm text-muted-foreground">
              March - April 2025
            </span>
          </div>
          <p className="font-medium">⭕ Finalist</p>
          <p className="text-sm text-muted-foreground">
            Conducted equity research and valuation of a SET-listed company;
            presented investment thesis and risk assessment to a panel of
            industry professionals and fund managers.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Equity Research
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Valuation Analysis
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Investment Thesis
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              Investment Portfolio Analytics Dashboard Web App
              <Link
                href="https://investment-portfoliogit-kan92h8iyt5covyupaxqo7.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </h3>
            <span className="text-sm text-muted-foreground">November 2024</span>
          </div>
          <ul className="ml-5 list-disc text-sm text-muted-foreground">
            <li>
              Developed an OCR/LLM-powered system to extract and organize
              investment data.
            </li>
            <li>
              Built and deployed a dashboard with key performance metrics (ROI,
              Sharpe Ratio, Volatility, CVaR).
            </li>
          </ul>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Investment Tracker
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Interactive Dashboard
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              LLM
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              OCR
            </Badge>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              Machine Learning for Fundraising Campaigns — SAS x CBS Hackathon
              Season 4
            </h3>
            <span className="text-sm text-muted-foreground">October 2024</span>
          </div>
          <p className="font-medium">🎖️ 4th Place</p>
          <ul className="ml-5 list-disc text-sm text-muted-foreground">
            <li>Built a 2-stage ensemble model for targeted donor outreach.</li>
            <li>
              Achieved high-precision donor predictions and effective cost
              management.
            </li>
          </ul>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Targeted Marketing Models
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Ensemble Learning
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Cost management
            </Badge>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              Stock Return Forecasting with Portfolio Optimization Project
            </h3>
            <span className="text-sm text-muted-foreground">
              April - May 2024
            </span>
          </div>
          <ul className="ml-5 list-disc text-sm text-muted-foreground">
            <li>
              Developed an alpha factor model to forecast stock returns using
              classical ML and LSTM networks.
            </li>
            <li>
              Designed and implemented quantitative trading strategies using
              historical data for backtesting.
            </li>
            <li>
              Integrated portfolio optimization techniques to maximize returns
              and minimize risks.
            </li>
          </ul>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Quantitative Finance
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Factor Modeling
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Alpha Modeling
            </Badge>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">Investment Experience</h3>
            <span className="text-sm text-muted-foreground">April 2024</span>
          </div>
          <ul className="ml-5 list-disc text-sm text-muted-foreground">
            <li>
              Managed a self-directed investment portfolio with a TWRR of
              15.46%, MWRR of 34.34%, and ROI of 14.47%, achieving an AUM of
              B119,240.51 (as of February 28, 2025).
            </li>
            <li>
              Evaluated risk-adjusted performance, maintaining a Sharpe Ratio of
              0.54 (ifi ~ 4%, CBOE-10Y-TNX).
            </li>
            <li>
              Monitored portfolio risk, with an MDD of 11.95%, VaR of 3.25%, and
              CVaR of 4.64%.
            </li>
          </ul>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Portfolio Management
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Risk Metrics
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Performance Analytics
            </Badge>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">Aihack Thailand 2023 - AI Hackathon</h3>
            <span className="text-sm text-muted-foreground">December 2023</span>
          </div>
          <p className="font-medium">🏆 1st Prize & Best Performance Prize</p>
          <p className="text-sm text-muted-foreground">
            Created a machine learning model to forecast credit default risk.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Credit Risk Modeling
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Hackathon Winner
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Optimization
            </Badge>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              Participation in Business Case Competitions
            </h3>
          </div>
          <ul className="ml-5 list-disc text-sm text-muted-foreground">
            <li>
              <div className="flex justify-between">
                <span>
                  <span className="font-serif text-base not-italic text-foreground">
                    GrabSparks 2025, Grab
                  </span>{" "}
                  - Next frontier strategies for thriving in a shifting economy.
                </span>
                <span className="ml-4 whitespace-nowrap">October 2025</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span>
                  <span className="font-serif text-base not-italic text-foreground">
                    Intania Case Competition
                  </span>{" "}
                  - Built UAM strategy using AI/cloud for 200K trips/year goal.
                </span>
                <span className="ml-4 whitespace-nowrap">March 2025</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span>
                  <span className="font-serif text-base not-italic text-foreground">
                    Hult Prize at Chulalongkorn
                  </span>{" "}
                  - Developed a social enterprise idea aligned with UN SDGs.
                </span>
                <span className="ml-4 whitespace-nowrap">2023</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span>
                  <span className="font-serif text-base not-italic text-foreground">
                    Chulalongkorn Case Discovery x Ascend Money
                  </span>{" "}
                  - Formulated a strategic plan for financial services
                  application.
                </span>
                <span className="ml-4 whitespace-nowrap">2023</span>
              </div>
            </li>
          </ul>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Strategic Planning
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Business Innovation
            </Badge>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              Final round in Space Youth Challenge by NARIT
            </h3>
            <span className="text-sm text-muted-foreground">December 2021</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Presented ideas on meteor prevention at the National Science and
            Technology Fair 2021.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Rocket Equation
            </Badge>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              The 2nd Kibo Robot Programming Challenge by NSTDA x JAXA
            </h3>
            <span className="text-sm text-muted-foreground">July 2021</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Programmed a robot to move in a specified direction while on the
            International Space Station (ISS).
          </p>
        </div>
      </div>
    </section>
  );
}
