import { useEffect, useRef } from 'react';
import './About.css';
import { UserIcon } from '../components/Icons';
import { Link } from 'react-router-dom';

function Section({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(f => f.classList.add('visible')); });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <section ref={ref} className={className}>{children}</section>;
}

export default function About() {
  return (
    <main className="about-page">
      <Section className="about-hero">
        <div className="container">
          <div className="about-hero-content text-center">
            <h1 className="fade-up delay-1">About <span className="highlight">Wefetch</span></h1>
            <p className="hero-sub fade-up delay-2">
              We’re building a better way for businesses to operate — responsibly.<br /><br />
              Sustainability is becoming a core part of how businesses grow.<br />But for many companies, the path forward is still unclear.
            </p>
          </div>
        </div>
      </Section>

      <Section className="about-mission bg-dark-2">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text fade-up delay-1">
              <h2>Our <span className="highlight">Approach</span></h2>
              <p>
                We believe sustainability should deliver measurable results not just good intentions. Our focus is on helping businesses achieve cost reductions and better ROI by embedding responsible practices into everyday operations with structure, consistency, and clarity.
              </p>
              <h2 style={{ marginTop: '24px' }}>Our <span className="highlight">Mission</span></h2>
              <p>
                To empower businesses globally to collectively contribute towards reducing up to 5% of the world’s carbon footprint, by making sustainability simple, structured, and continuous.
              </p>
              <h2 style={{ marginTop: '24px' }}>Our <span className="highlight">Vision</span></h2>
              <p>
                To become the operating system for sustainability, enabling businesses worldwide to build and scale responsible practices.
              </p>
            </div>
            <div className="mission-stats fade-up delay-2">
              <div className="stat-card">
                <span className="stat-big">7+</span>
                <span>Sectors Covered</span>
              </div>
              <div className="stat-card">
                <span className="stat-big">30+</span>
                <span>Report Frame Works</span>
              </div>
              <div className="stat-card">
                <span className="stat-big">5%</span>
                <span>Target to Reduce Carbon Footprint</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="about-story bg-dark">
        <div className="container">
          <div className="story-content fade-up delay-1">
            <h2>Our <span className="highlight">Team</span></h2>
            <p>
              Wefetch is built by a team that believes businesses can grow while being responsible to the environment.
            </p>

            <h2 style={{ marginTop: '40px' }}>Join the <span className="highlight">Journey</span></h2>
            <p>
              Sustainable growth is not about doing everything at once. It’s about building the right systems and improving consistently over time. We’re here to make that easier.
            </p>

            <p style={{ marginTop: '24px', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--clr-accent)' }}>
              You don’t need to build a sustainability team.<br />
              You can simply access one.
            </p>
          </div>
        </div>
      </Section>

      <Section className="about-team bg-dark-2">
        <div className="container">
          <div className="text-center fade-up delay-1">
            <h2>Our <span className="highlight">Leadership Team</span></h2>
            <p className="team-sub" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>The global sustainability challenges are unique, and so is our expertise.</p>
          </div>
          <div className="team-grid" style={{ alignItems: 'stretch' }}>
            {[
              {
                name: 'Balaji S',
                role: 'CEO, Wefetch',
                image: '/images/CEO.jpeg',
                desc: 'I come from an agricultural background, which gave me early exposure to how environmental changes impact real-world systems. Over time, I started looking deeper into where these challenges originate and how industries have evolved. What stood out was this: many businesses today are willing to move in a better direction, but often lack the clarity and structure to do it effectively. That’s where the idea for Wefetch came in. What if businesses didn’t have to figure everything out on their own? What if responsible operations could be built in a more structured and consistent way? Wefetch was built to enable that shift — helping companies move forward, not just by growing, but by growing more responsibly.'
              },
              {
                name: 'GM',
                role: 'General Manager',
                image: '/images/GM.jpeg',
                desc: 'I didn’t grow up feeling disconnected from nature. I was always around it, and I think that shaped how I see things today. It made me realise early on how fragile the environment really is and why it’s something worth protecting. When I stepped into the business world, one thing kept bothering me: if companies want to do the right thing, why is it still so hard for them to actually operate responsibly? That question is what eventually led me to Wefetch. I didn’t choose Wefetch just for a role. I chose it because of what it’s trying to solve. Sustainability can feel confusing and overwhelming for a lot of businesses, and Wefetch makes it simpler. It breaks things down, gives clarity, and helps companies actually take action instead of just talking about it. In my time here, I’ve seen how much of a difference that clarity makes. When businesses understand what to do and how to do it, they move faster. They go from intention to real action. For me, this isn’t just a job. It feels like I’m part of something that actually matters, helping businesses grow while also reducing their impact. And honestly, that’s what makes this journey worth it.'
              }
            ].map((member, i) => (
              <div className={`team-member fade-up delay-${(i % 4) + 1}`} key={member.name} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', color: '#000', borderRadius: '16px', padding: '16px' }}>
                <img src={member.image} alt={member.name} style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', aspectRatio: '4/3', marginBottom: '20px', filter: 'grayscale(100%)' }} />
                <h4 style={{ textAlign: 'center', marginBottom: '4px', fontSize: '1.25rem', color: '#111' }}>{member.name}</h4>
                <div style={{ textAlign: 'center', color: '#666', marginBottom: '24px', fontSize: '0.9rem' }}>{member.role}</div>
                <p style={{ textAlign: 'left', whiteSpace: 'pre-wrap', width: '100%', color: '#444', fontSize: '0.9rem' }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}