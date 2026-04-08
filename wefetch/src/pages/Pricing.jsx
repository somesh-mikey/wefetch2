import { useEffect, useRef } from 'react';
import './Pricing.css';
import { ArrowRightIcon } from '../components/Icons';
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

export default function Pricing() {
  return (
    <main className="pricing-page">
      <Section className="pricing-hero">
        <div className="container">
          <div className="pricing-hero-content text-center">
            <h1 className="fade-up delay-1">Transparent <span className="highlight">Pricing</span></h1>
            <p className="hero-sub fade-up delay-2">
              Flexible plans tailored for your sustainability journey. Choose the right level of support for your global compliance needs.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pricing-plans bg-dark-2">
        <div className="container">
          <div className="plans-grid fade-up delay-1">
            <div className="plan-card">
              <h3>Starter</h3>
              <p className="plan-desc">For small teams getting started with compliance.</p>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">499</span>
                <span className="period">/mo</span>
              </div>
              <ul className="plan-features">
                <li><i className="las la-check"></i> 1 Dedicated Team Member</li>
                <li><i className="las la-check"></i> Basic BRSR Framework</li>
                <li><i className="las la-check"></i> Monthly Data Reviews</li>
                <li><i className="las la-check"></i> Standard Support</li>
              </ul>
              <Link to="#" className="btn btn-outline">Get Started</Link>
            </div>

            <div className="plan-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3>Professional</h3>
              <p className="plan-desc">For growing companies with cross-border needs.</p>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">1,299</span>
                <span className="period">/mo</span>
              </div>
              <ul className="plan-features">
                <li><i className="las la-check"></i> 3 Dedicated Team Members</li>
                <li><i className="las la-check"></i> CBAM & CSRD Support</li>
                <li><i className="las la-check"></i> Weekly Strategy Calls</li>
                <li><i className="las la-check"></i> Priority Support</li>
              </ul>
              <Link to="#" className="btn btn-primary">Start Free Trial</Link>
            </div>

            <div className="plan-card">
              <h3>Enterprise</h3>
              <p className="plan-desc">For large organizations requiring comprehensive management.</p>
              <div className="plan-price">
                <span className="amount text-lg">Custom</span>
              </div>
              <ul className="plan-features">
                <li><i className="las la-check"></i> Full Virtual Sustainability Team</li>
                <li><i className="las la-check"></i> All Global Frameworks</li>
                <li><i className="las la-check"></i> Direct API Integrations</li>
                <li><i className="las la-check"></i> 24/7 Dedicated Support Head</li>
              </ul>
              <Link to="#" className="btn btn-outline">Contact Sales</Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pricing-faq bg-dark">
        <div className="container text-center fade-up delay-1">
          <h2>Frequently Asked <span className="highlight">Questions</span></h2>
          <p className="faq-sub">Can't find the answer you're looking for? Reach out to our customer support team.</p>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I change my plan later?</h4>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be applied in the next billing cycle.</p>
            </div>
            <div className="faq-item">
              <h4>What is a Virtual Team Member?</h4>
              <p>A virtual team member is a dedicated sustainability expert from Wefetch assigned entirely to your compliance workflows.</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}