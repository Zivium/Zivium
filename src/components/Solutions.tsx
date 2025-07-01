
import React from 'react';
import { Zap, Target, Rocket, BarChart3, Users, Clock } from 'lucide-react';
import { UserType } from '../pages/Index';

interface SolutionsProps {
  userType: UserType;
  isVisible: boolean;
}

const Solutions = ({ userType, isVisible }: SolutionsProps) => {
  if (!userType) return null;

  const solutions = {
    investor: [
      {
        icon: BarChart3,
        title: "Portfolio Intelligence Hub",
        subtitle: "Unified Dashboard",
        description: "Transform scattered investment data into a centralized intelligence platform. Real-time portfolio health monitoring with predictive analytics and automated risk assessment.",
        features: ["Real-time Portfolio Tracking", "Predictive Risk Analytics", "Automated Due Diligence", "Exit Strategy Planning"],
        metrics: { value: "Enhanced", label: "Decision Making Speed" },
        visualization: {
          type: "progress",
          data: [
            { label: "Data Integration", value: 95 },
            { label: "Risk Assessment", value: 88 },
            { label: "ROI Tracking", value: 92 }
          ]
        }
      },
      {
        icon: Users,
        title: "Smart Networking Engine",
        subtitle: "Connection Intelligence",
        description: "Leverage AI-powered networking to connect with high-potential startups and co-investors. Automated opportunity matching based on your investment thesis and portfolio strategy.",
        features: ["AI-Powered Deal Sourcing", "Co-investor Matching", "Startup Scoring Algorithm", "Network Effect Analytics"],
        metrics: { value: "Amplified", label: "Quality Deal Flow" },
        visualization: {
          type: "network",
          data: [
            { node: "Your Portfolio", connections: 8 },
            { node: "Co-investors", connections: 24 },
            { node: "New Opportunities", connections: 15 }
          ]
        }
      },
      {
        icon: Rocket,
        title: "Growth Acceleration Suite",
        subtitle: "Value Creation Tools",
        description: "Provide strategic value to your portfolio companies with integrated growth tools, mentorship platforms, and resource sharing capabilities.",
        features: ["Mentorship Matching", "Resource Library", "Growth Playbooks", "Success Metrics Tracking"],
        metrics: { value: "Enhanced", label: "Portfolio Growth Potential" },
        visualization: {
          type: "growth",
          data: [
            { period: "Traditional Approach", growth: 18 },
            { period: "With Zivium", growth: 65 }
          ]
        }
      }
    ],
    founder: [
      {
        icon: Zap,
        title: "Automated Investor Relations",
        subtitle: "Communication Engine",
        description: "Streamline investor communications with automated update generation, scheduling, and personalized content delivery. Keep investors engaged without the manual overhead.",
        features: ["Auto-Generated Updates", "Personalized Content", "Meeting Scheduling", "Engagement Analytics"],
        metrics: { value: "Significant", label: "Time Savings on Updates" },
        visualization: {
          type: "timeline",
          data: [
            { task: "Manual Updates", time: 8, status: "before" },
            { task: "Automated Updates", time: 0.8, status: "after" }
          ]
        }
      },
      {
        icon: Target,
        title: "Funding Optimization Platform",
        subtitle: "Capital Strategy",
        description: "Optimize your fundraising strategy with investor matching, pitch optimization, and funding round management. Connect with investors who align with your vision and stage.",
        features: ["Investor Matching", "Pitch Deck Analytics", "Round Management", "Valuation Modeling"],
        metrics: { value: "Accelerated", label: "Funding Cycles" },
        visualization: {
          type: "funnel",
          data: [
            { stage: "Prospects", count: 100 },
            { stage: "Interested", count: 45 },
            { stage: "Committed", count: 12 }
          ]
        }
      },
      {
        icon: Clock,
        title: "Operational Excellence Suite",
        subtitle: "Business Intelligence",
        description: "Focus on building your product while Zivium handles operational reporting, compliance tracking, and strategic planning automation.",
        features: ["Automated Reporting", "Compliance Tracking", "Strategic Planning", "Performance Dashboards"],
        metrics: { value: "Enhanced", label: "Focus on Core Business" },
        visualization: {
          type: "allocation",
          data: [
            { category: "Core Business", before: 45, after: 80 },
            { category: "Admin Tasks", before: 55, after: 20 }
          ]
        }
      }
    ]
  };

  const renderVisualization = (viz: any) => {
    switch (viz.type) {
      case 'progress':
        return (
          <div className="space-y-3">
            {viz.data.map((item: any, idx: number) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-zivium-navy">{item.label}</span>
                  <span className="text-zivium-gold font-semibold">{item.value}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-zivium-navy to-zivium-gold h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'network':
        return (
          <div className="grid grid-cols-1 gap-3">
            {viz.data.map((node: any, idx: number) => (
              <div key={idx} className="bg-zivium-navy text-white p-3 rounded-lg text-center">
                <div className="font-semibold text-sm">{node.node}</div>
                <div className="text-zivium-gold text-lg font-bold">{node.connections}</div>
                <div className="text-xs opacity-80">connections</div>
              </div>
            ))}
          </div>
        );
      case 'growth':
        return (
          <div className="space-y-3">
            {viz.data.map((period: any, idx: number) => (
              <div key={idx} className={`p-3 rounded-lg ${idx === 0 ? 'bg-red-50' : 'bg-green-50'}`}>
                <div className="text-sm font-medium">{period.period}</div>
                <div className={`text-2xl font-bold ${idx === 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {period.growth}%
                </div>
                <div className="text-xs text-gray-600">Growth Potential</div>
              </div>
            ))}
          </div>
        );
      case 'timeline':
        return (
          <div className="space-y-3">
            {viz.data.map((task: any, idx: number) => (
              <div key={idx} className={`p-3 rounded-lg ${task.status === 'before' ? 'bg-red-50' : 'bg-green-50'}`}>
                <div className="text-sm font-medium">{task.task}</div>
                <div className={`text-xl font-bold ${task.status === 'before' ? 'text-red-600' : 'text-green-600'}`}>
                  {task.time}h
                </div>
                <div className="text-xs text-gray-600">per week</div>
              </div>
            ))}
          </div>
        );
      case 'funnel':
        return (
          <div className="space-y-2">
            {viz.data.map((stage: any, idx: number) => (
              <div key={idx} className="relative">
                <div className="flex justify-between items-center bg-zivium-navy text-white p-2 rounded">
                  <span className="text-sm">{stage.stage}</span>
                  <span className="font-bold">{stage.count}</span>
                </div>
                <div 
                  className="bg-zivium-gold h-1 rounded transition-all duration-1000"
                  style={{ width: `${(stage.count / 100) * 100}%` }}
                ></div>
              </div>
            ))}
          </div>
        );
      case 'allocation':
        return (
          <div className="space-y-3">
            {viz.data.map((item: any, idx: number) => (
              <div key={idx} className="space-y-2">
                <div className="text-sm font-medium text-zivium-navy">{item.category}</div>
                <div className="flex space-x-2">
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1">Before</div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-red-400 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${item.before}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-red-600 mt-1">{item.before}%</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1">After</div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-green-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${item.after}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-green-600 mt-1">{item.after}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-24">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold text-zivium-navy mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.3s' }}>
          Next-Generation <span className="text-zivium-gold">{userType === 'investor' ? 'Investor' : 'Founder'} Tools</span>
        </h2>
        <p className={`text-xl text-zivium-medium-gray max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
          Advanced solutions designed specifically for {userType === 'investor' ? 'sophisticated investors' : 'growth-stage entrepreneurs'} who demand precision and efficiency.
        </p>
      </div>
      
      <div className="space-y-16">
        {solutions[userType].map((solution, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${1.7 + index * 0.3}s` }}
          >
            <div className={`grid lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content - Centered */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex flex-col items-center text-center space-y-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-zivium-navy to-zivium-gold rounded-xl">
                    <solution.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-zivium-navy mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm font-medium text-zivium-gold uppercase tracking-wider">
                      {solution.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-zivium-medium-gray leading-relaxed mb-6 text-center">
                  {solution.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-zivium-medium-gray bg-gray-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-zivium-gold rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium text-center">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-zivium-navy to-zivium-gold p-4 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">{solution.metrics.value}</div>
                  <div className="text-sm opacity-90">{solution.metrics.label}</div>
                </div>
              </div>

              {/* Visualization */}
              <div className={`bg-gray-50 rounded-2xl p-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-zivium-navy mb-2">
                    Performance Metrics
                  </h4>
                </div>
                {renderVisualization(solution.visualization)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
