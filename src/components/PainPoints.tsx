
import React from 'react';
import { TrendingDown, AlertTriangle, Eye } from 'lucide-react';
import { UserType } from '../pages/Index';

interface PainPointsProps {
  userType: UserType;
  isVisible: boolean;
}

const PainPoints = ({ userType, isVisible }: PainPointsProps) => {
  if (!userType) return null;

  const painPoints = {
    investor: [
      {
        icon: TrendingDown,
        title: "Portfolio Fragmentation",
        description: "Your investments live across multiple platforms, spreadsheets, and email threads. Critical insights remain buried in data silos, making strategic decisions reactive rather than proactive.",
        solution: {
          title: "The Zivium Solution",
          subtitle: "Unified Intelligence Dashboard",
          description: "Aggregate all portfolio data into a single, sophisticated interface. Real-time synchronization across platforms with institutional-grade security.",
          metrics: [
            { label: "Significant reduction in data gathering time", value: "Enhanced Efficiency" }
          ]
        },
        visual: {
          type: "chart",
          beforeAfter: {
            before: { label: "Before: Fragmented Data", value: "12+ Hours/Week", color: "red" },
            after: { label: "After: Unified Intelligence", value: "2 Hours/Week", color: "green" }
          },
          insight: "Accelerated Strategic Analysis"
        }
      },
      {
        icon: AlertTriangle,
        title: "Compliance Complexity",
        description: "Regulatory reporting consumes strategic thinking time. Manual processes create compliance risk while sophisticated investors deserve automated precision.",
        solution: {
          title: "The Zivium Solution",
          subtitle: "Automated Intelligence Reports",
          description: "Generate compliance documentation automatically. Built-in regulatory frameworks ensure accuracy while freeing your time for strategic decisions.",
          metrics: [
            { label: "Enhanced compliance accuracy potential", value: "Maximum Precision" }
          ]
        },
        visual: {
          type: "workflow",
          steps: [
            { label: "Manual Data Collection", time: "5-8 hours per report", status: "current" },
            { label: "Automated Intelligence", time: "15 minutes per report", status: "solution" }
          ],
          reduction: "Significant Time Optimization"
        }
      },
      {
        icon: Eye,
        title: "Strategic Blindspots",
        description: "Without unified intelligence, patterns remain invisible. Market opportunities slip by while you're managing operational complexity instead of strategic positioning.",
        solution: {
          title: "The Zivium Solution",
          subtitle: "Synchronized Intelligence Hub",
          description: "AI-powered pattern recognition across your entire portfolio. Predictive analytics and market intelligence that transforms reactive management into proactive strategy.",
          metrics: [
            { label: "Accelerated strategic decision making potential", value: "Enhanced Speed" }
          ]
        },
        visual: {
          type: "metrics",
          data: [
            { label: "Growth Potential", value: "Enhanced", trend: "up" },
            { label: "ROI Optimization", value: "Improved", trend: "up" },
            { label: "Success Rate", value: "Maximized", trend: "up" },
            { label: "Exit Efficiency", value: "Optimized", trend: "down" }
          ],
          insight: "Enhanced Performance Potential"
        }
      }
    ],
    founder: [
      {
        icon: TrendingDown,
        title: "Reporting Burden",
        subtitle: "Manual Update Cycles",
        description: "Transform hours of manual reporting into minutes of review. Our intelligent system aggregates data from your existing tools and generates professional investor updates automatically.",
        stat: "Auto-Generated",
        statLabel: "Monthly Report Status",
        improvement: "2 Minutes",
        improvementLabel: "With Zivium",
        details: ["Revenue Growth Potential: Enhanced", "User Acquisition: Accelerated", "Burn Rate: Optimized"]
      },
      {
        icon: AlertTriangle,
        title: "Communication Gaps",
        subtitle: "Investor Relations",
        description: "Centralize all investor communications in one intelligent platform. Track conversations, manage follow-ups, and ensure nothing falls through the cracks during critical fundraising periods.",
        stat: "Unified Platform",
        statLabel: "All Communications",
        improvement: "Zero Gaps",
        improvementLabel: "Communication Status"
      },
      {
        icon: Eye,
        title: "Growth Distraction",
        subtitle: "Administrative Overhead",
        description: "Get the strategic visibility you need to make informed decisions quickly. Real-time insights into your company's health, investor sentiment, and growth trajectory.",
        stat: "18 months",
        statLabel: "Runway remaining",
        improvement: "Enhanced Focus",
        improvementLabel: "On Core Business",
        details: ["Goal completion potential: Maximized", "Active investors: 12"]
      }
    ]
  };

  if (userType === 'investor') {
    return (
      <div className="mb-24">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-zivium-navy mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            Three Critical Challenges <span className="text-zivium-gold">Solved</span>
          </h2>
          <p className={`text-xl text-zivium-medium-gray max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
            Every sophisticated investor faces the same fundamental obstacles. We've engineered precision solutions for each.
          </p>
        </div>
        
        <div className="space-y-16">
          {painPoints[userType].map((point, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.9 + index * 0.2}s` }}
            >
              <div className="p-8">
                {/* Header - Centered */}
                <div className="flex flex-col items-center text-center space-y-4 mb-6">
                  <div className="p-3 bg-red-50 rounded-xl">
                    <point.icon size={32} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zivium-navy mb-2">
                      {point.title}
                    </h3>
                    <p className="text-zivium-medium-gray leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Solution */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-zivium-navy text-center">
                      {point.solution.title}
                    </h4>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h5 className="font-semibold text-zivium-navy mb-2 text-center">
                        {point.solution.subtitle}
                      </h5>
                      <p className="text-sm text-zivium-medium-gray mb-3 text-center">
                        {point.solution.description}
                      </p>
                      {point.solution.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-center text-sm text-zivium-gold">
                          <span className="mr-2">⚡</span>
                          {metric.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Visual */}
                  <div className="bg-zivium-light-gray rounded-lg p-4">
                    {point.visual.type === 'chart' && (
                      <div className="space-y-4">
                        <h5 className="font-semibold text-center text-zivium-navy">
                          Portfolio Overview: Before vs After
                        </h5>
                        <div className="space-y-3">
                          <div className="bg-red-100 rounded p-3">
                            <div className="text-sm text-red-700">{point.visual.beforeAfter.before.label}</div>
                            <div className="font-bold text-red-800">{point.visual.beforeAfter.before.value}</div>
                          </div>
                          <div className="bg-green-100 rounded p-3">
                            <div className="text-sm text-green-700">{point.visual.beforeAfter.after.label}</div>
                            <div className="font-bold text-green-800">{point.visual.beforeAfter.after.value}</div>
                          </div>
                        </div>
                        <div className="text-center mt-4">
                          <div className="text-sm text-zivium-gold">⚡ {point.visual.insight}</div>
                        </div>
                      </div>
                    )}

                    {point.visual.type === 'workflow' && (
                      <div className="space-y-4">
                        <h5 className="font-semibold text-center text-zivium-navy">
                          Compliance Reporting Workflow
                        </h5>
                        <div className="space-y-3">
                          {point.visual.steps.map((step, idx) => (
                            <div key={idx} className={`rounded p-3 ${step.status === 'current' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                              <div className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full ${step.status === 'current' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                                <span className="text-sm font-medium">{step.label}</span>
                              </div>
                              <div className="text-xs ml-4">{step.time}</div>
                            </div>
                          ))}
                        </div>
                        <div className="text-center bg-blue-50 rounded p-2">
                          <div className="text-lg font-bold text-blue-800">{point.visual.reduction}</div>
                        </div>
                      </div>
                    )}

                    {point.visual.type === 'metrics' && (
                      <div className="space-y-4">
                        <h5 className="font-semibold text-center text-zivium-navy">
                          Strategic Intelligence Overview
                        </h5>
                        <div className="grid grid-cols-2 gap-3">
                          {point.visual.data.map((metric, idx) => (
                            <div key={idx} className="bg-white rounded p-3 text-center">
                              <div className={`text-lg font-bold ${metric.trend === 'up' ? 'text-green-600' : 'text-orange-600'}`}>
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-600">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-orange-600">📈 {point.visual.insight}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  
  return (
    <div className="mb-24">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold text-zivium-dark-gray mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          Three Critical Challenges <span className="text-zivium-gold">Solved</span>
        </h2>
        <p className={`text-xl text-zivium-medium-gray max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          Every sophisticated {userType} faces the same fundamental obstacles. We've engineered precision solutions for each.
        </p>
      </div>
      
      <div className="space-y-12">
        {painPoints[userType].map((point, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${0.9 + index * 0.2}s` }}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Left Content - Centered */}
              <div className="space-y-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-red-50 rounded-xl">
                    <point.icon size={32} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zivium-dark-gray mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm font-medium text-zivium-medium-gray uppercase tracking-wider">
                      {point.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-zivium-medium-gray leading-relaxed text-lg text-center">
                  {point.description}
                </p>

                {point.details && (
                  <div className="space-y-2">
                    {point.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-zivium-medium-gray">
                        <div className="w-2 h-2 bg-zivium-medium-gray rounded-full mr-3"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Stats */}
              <div className="bg-zivium-light-gray rounded-xl p-6 flex flex-col justify-center">
                <div className="text-center space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-zivium-error-red mb-1">
                      {point.stat}
                    </div>
                    <div className="text-sm text-zivium-medium-gray font-medium">
                      {point.statLabel}
                    </div>
                  </div>
                
                  {point.improvement && (
                    <>
                      <div className="text-zivium-medium-gray">↓</div>
                      <div>
                        <div className="text-3xl font-bold text-zivium-success-green mb-1">
                          {point.improvement}
                        </div>
                        <div className="text-sm text-zivium-medium-gray font-medium">
                          {point.improvementLabel}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainPoints;
