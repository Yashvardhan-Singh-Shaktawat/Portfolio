import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@primer/react';
import './GithubSection.css';

// Fallback data in case GitHub API rate limit is hit or network is offline
const FALLBACK_PROFILE = {
  name: 'Yashvardhan Singh Shaktawat',
  login: 'Yashvardhan-Singh-Shaktawat',
  avatar_url: 'https://avatars.githubusercontent.com/u/144933924?v=4',
  bio: 'Full Stack Developer & AI Enthusiast. Building intelligent factory control systems, telemetry tools, and classroom screen-sharing systems.',
  followers: 5,
  following: 8,
  public_repos: 5,
  html_url: 'https://github.com/Yashvardhan-Singh-Shaktawat'
};

const REPO_DESCRIPTIONS = {
  'SU-HACKATHON-2026': 'WeaveMind — A full-stack AI-powered manufacturing management platform for textile factories. Integrates real-time IoT sensor telemetry via Socket.IO and YOLOv8 defect detection for high-precision fabric rolls inspection.',
  'LAB-MANAGEMENT_SYSTEM-': 'LabManagerPro — An advanced laboratory management ecosystem where a Django backend serves as the brain, a Flutter dashboard as the eyes, and a Win32 Python agent as the enforcer. Features high-performance screen streaming (<500ms), kiosk-mode lockouts, and asset hardware scanner.',
  'IOT-PROJECT': 'SolarMonitor-IoT — A smart energy telemetry and management system. Integrates ESP32 microcontroller with current/power sensors (INA219, PZEM) and a Django web panel for automated battery health tracking and grid relay path control.',
  'A-django-project-': 'CryptoCoin — A multi-module responsive financial web portal integrated with third-party pricing APIs, tracking crypto price feeds. Built with Django and deployed on PythonAnywhere.'
};

const getRepoDescription = (repo) => {
  const name = repo.name || '';
  
  if (name.toUpperCase().includes('HACKATHON') || name.toUpperCase().includes('WEAVEMIND')) {
    return REPO_DESCRIPTIONS['SU-HACKATHON-2026'];
  }
  if (name.toUpperCase().includes('LAB-MANAGEMENT') || name.toUpperCase().includes('LABMANAGER') || name.toUpperCase().includes('LAB_MANAGEMENT')) {
    return REPO_DESCRIPTIONS['LAB-MANAGEMENT_SYSTEM-'];
  }
  if (name.toUpperCase().includes('IOT') || name.toUpperCase().includes('SOLAR')) {
    return REPO_DESCRIPTIONS['IOT-PROJECT'];
  }
  if (name.toUpperCase().includes('DJANGO-PROJECT') || name.toUpperCase().includes('CRYPTO') || name.toUpperCase().includes('A-DJANGO')) {
    return REPO_DESCRIPTIONS['A-django-project-'];
  }
  
  return repo.description || 'No description provided.';
};

const FALLBACK_REPOS = [
  {
    name: 'SU-HACKATHON-2026',
    description: REPO_DESCRIPTIONS['SU-HACKATHON-2026'],
    language: 'JavaScript',
    stargazers_count: 3,
    forks_count: 1,
    html_url: 'https://github.com/Yashvardhan-Singh-Shaktawat/SU-HACKATHON-2026'
  },
  {
    name: 'LAB-MANAGEMENT_SYSTEM-',
    description: REPO_DESCRIPTIONS['LAB-MANAGEMENT_SYSTEM-'],
    language: 'JavaScript',
    stargazers_count: 2,
    forks_count: 0,
    html_url: 'https://github.com/Yashvardhan-Singh-Shaktawat/LAB-MANAGEMENT_SYSTEM-'
  },
  {
    name: 'IOT-PROJECT',
    description: REPO_DESCRIPTIONS['IOT-PROJECT'],
    language: 'HTML',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/Yashvardhan-Singh-Shaktawat/IOT-PROJECT'
  },
  {
    name: 'A-django-project-',
    description: REPO_DESCRIPTIONS['A-django-project-'],
    language: 'Python',
    stargazers_count: 1,
    forks_count: 0,
    html_url: 'https://github.com/Yashvardhan-Singh-Shaktawat/A-django-project-'
  }
];

// Map language to GitHub language colors
const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Flutter: '#02569B',
  TypeScript: '#3178c6'
};

export default function GithubSection({ theme }) {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contributionData, setContributionData] = useState([]);

  // Generate simulated low-activity contribution calendar (average 2-4 contributions per month)
  // 53 weeks * 7 days = 371 days
  useEffect(() => {
    const data = Array(371).fill(0);
    
    // Simulate 12 months with 30 days each, picking exactly 2 to 4 active days per month
    for (let m = 0; m < 12; m++) {
      const monthStart = m * 30;
      const monthEnd = Math.min(monthStart + 30, 371);
      
      const numContributions = Math.floor(Math.random() * 3) + 2; // 2, 3, or 4 active days
      const activeIndices = [];
      
      while (activeIndices.length < numContributions) {
        const idx = Math.floor(Math.random() * (monthEnd - monthStart)) + monthStart;
        if (!activeIndices.includes(idx)) {
          activeIndices.push(idx);
        }
      }
      
      activeIndices.forEach(idx => {
        data[idx] = Math.random() > 0.8 ? 2 : 1; // Level 1 is light green, Level 2 is medium
      });
    }
    
    setContributionData(data);
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function fetchGithubData() {
      setLoading(true);
      
      // We will try fetching the user request: Yashvardhan-Singh-a
      let usernameToFetch = 'Yashvardhan-Singh-a';
      let userRes = await fetch(`https://api.github.com/users/${usernameToFetch}`);
      
      // If 404, fallback to Yashvardhan-Singh-Shaktawat
      if (!userRes.ok && userRes.status === 404) {
        usernameToFetch = 'Yashvardhan-Singh-Shaktawat';
        userRes = await fetch(`https://api.github.com/users/${usernameToFetch}`);
      }

      if (isMounted) {
        if (userRes.ok) {
          const profileData = await userRes.json();
          setProfile(profileData);

          // Now fetch repositories
          const reposRes = await fetch(`https://api.github.com/users/${usernameToFetch}/repos?sort=updated&per_page=6`);
          if (reposRes.ok) {
            const reposData = await reposRes.json();
            // Filter out empty or duplicate-looking names if any, and map
            setRepos(reposData);
          } else {
            // Fallback repos if profile succeeded but repos failed
            setRepos(FALLBACK_REPOS);
          }
        } else {
          // If all failed, load local fallbacks
          setProfile(FALLBACK_PROFILE);
          setRepos(FALLBACK_REPOS);
        }
        setLoading(false);
      }
    }

    fetchGithubData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Map application theme 'light' | 'dark' to Primer's 'day' | 'night'
  const primerColorMode = theme === 'dark' ? 'night' : 'day';

  if (loading) {
    return (
      <section id="github" className="section github-section">
        <div className="container">
          <div className="github-header">
            <span className="section-tag">Activity & Repositories</span>
            <h2 className="section-title">GitHub Overview</h2>
          </div>
          
          <div className="github-container">
            <div className="github-profile-card github-shimmer" style={{ height: '380px' }}></div>
            <div>
              <div className="github-shimmer" style={{ height: '40px', width: '200px', marginBottom: '20px' }}></div>
              <div className="github-repos-grid">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="github-shimmer" style={{ height: '140px', borderRadius: '8px' }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const activeProfile = profile || FALLBACK_PROFILE;
  const activeRepos = repos.length > 0 ? repos : FALLBACK_REPOS;

  return (
    <ThemeProvider colorMode={primerColorMode}>
      <section id="github" className="section github-section">
        <div className="container">
          
          <div className="github-header">
            <span className="section-tag">Activity & Repositories</span>
            <h2 className="section-title">GitHub Developer Hub</h2>
          </div>

          <div className="github-container">
            {/* Left side - Profile Card */}
            <div className="github-profile-card">
              <div className="github-avatar-container">
                <img 
                  src={activeProfile.avatar_url} 
                  alt={activeProfile.name} 
                  className="github-avatar"
                />
                <div className="github-avatar-badge" title="Octocat Badge">
                  🐙
                </div>
              </div>

              <h3 className="github-profile-name">{activeProfile.name || 'Yashvardhan Singh'}</h3>
              <span className="github-profile-username">@{activeProfile.login}</span>
              
              <p className="github-profile-bio">
                {activeProfile.bio || 'Full Stack Engineer & Solutions Architect passionate about AI and Systems.'}
              </p>

              <div className="github-stats-grid">
                <div className="github-stat-item">
                  <span className="github-stat-value">{activeProfile.public_repos}</span>
                  <span className="github-stat-label">Repos</span>
                </div>
                <div className="github-stat-item">
                  <span className="github-stat-value">{activeProfile.followers}</span>
                  <span className="github-stat-label">Followers</span>
                </div>
                <div className="github-stat-item">
                  <span className="github-stat-value">{activeProfile.following}</span>
                  <span className="github-stat-label">Following</span>
                </div>
              </div>

              <a 
                href={activeProfile.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-profile-link"
              >
                <span>View Full Profile</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>

            {/* Right side - Repositories Grid */}
            <div>
              <div className="github-repos-header">
                <h3 className="github-repos-title">Featured Repositories</h3>
                <span className="github-profile-username" style={{ margin: 0 }}>
                  Showing {activeRepos.length} public repos
                </span>
              </div>

              <div className="github-repos-grid">
                {activeRepos.map((repo) => (
                  <div key={repo.name} className="github-repo-card">
                    <div className="github-repo-card-top">
                      <div className="github-repo-card-header">
                        <div className="github-repo-title-group">
                          <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1.5 1.5 0 0 1 1.5-1.5h7.5z" />
                          </svg>
                          <a 
                            href={repo.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="github-repo-name-link"
                          >
                            {repo.name}
                          </a>
                        </div>
                        <span className="github-repo-visibility-badge">
                          Public
                        </span>
                      </div>
                      
                      <p className="github-repo-description">
                        {getRepoDescription(repo)}
                      </p>
                    </div>

                    <div className="github-repo-card-footer">
                      <div className="github-repo-language-info">
                        <span 
                          className="github-repo-language-color" 
                          style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || 'var(--text-muted)' }} 
                        />
                        <span>{repo.language || 'Unknown'}</span>
                      </div>
                      
                      <div className="github-repo-stats-info">
                        {repo.stargazers_count > 0 && (
                          <div className="github-repo-stat-badge">
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                              <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
                            </svg>
                            <span>{repo.stargazers_count}</span>
                          </div>
                        )}
                        {repo.forks_count > 0 && (
                          <div className="github-repo-stat-badge">
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                              <path d="M6 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 10V6M6 12v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-3" />
                            </svg>
                            <span>{repo.forks_count}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Simulated Contribution Board */}
              <div className="github-contributions-widget">
                <div className="github-contributions-title">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2.00.9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                  </svg>
                  <span>Contribution Calendar</span>
                </div>

                <div className="github-contributions-grid">
                  {contributionData.map((level, index) => (
                    <div 
                      key={index} 
                      className={`github-contrib-day level-${level}`}
                      title={`Contributions: Level ${level}`}
                    />
                  ))}
                </div>

                <div className="github-contributions-legend">
                  <span>Less</span>
                  <div className="github-legend-box level-0" />
                  <div className="github-legend-box level-1" />
                  <div className="github-legend-box level-2" />
                  <div className="github-legend-box level-3" />
                  <div className="github-legend-box level-4" />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </ThemeProvider>
  );
}
