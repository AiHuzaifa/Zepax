import {ArrowUpRight, Star} from "lucide-react";
export const freelancerProfile="https://www.freelancer.com/u/huzaifa306";
export const fiverrProfile="https://www.fiverr.com/afzalriaz";
const reviews=[
 {platform:"Freelancer.com",project:"GoHighLevel Website Build",quote:"He always responds quickly\nand does excellent work."},
 {platform:"Freelancer.com",project:"Zoho Payment Integration",quote:"Clear communication and deliver as promised."},
 {platform:"Fiverr",project:"Zoho CRM Automation fix",quote:"Great to work with. Professional, proactive in communication, and an overall great partner. Would definitely recommend."},
 {platform:"Freelancer.com",project:"Automate MS Form Data Processing",quote:"Super easy to communicate with, understands everything you’re asking for, no need to repeat anything, understands exactly what you need and delivers a finished project!"},
 {platform:"Freelancer.com",project:"Urgent Debugging: AI Booking System Integration",quote:"His attention to detail, reliability, and dedication to delivering top-tier results are truly impressive. Working with him has been a pleasure, and I highly recommend his services to anyone looking for excellence and professionalism."},
 {platform:"Freelancer.com",project:"n8n Workflow Creation for SMS Booking Agent",quote:"He explained everything clearly while walking me through each step and really demystified the process. Whenever challenges came up, he was right on point with solutions and kept a calm, “no worries, we’ll work it out” attitude."}
];
export function ClientReviews(){return <section className="section wrap feedback-page" aria-labelledby="client-proof-heading"><header className="feedback-intro"><span className="eyebrow">IN THEIR OWN WORDS</span><h1 id="client-proof-heading">The experience matters.<br/><em>So does the work.</em></h1><p>What clients have shared about communication, delivery and working together.</p></header><div className="feedback-grid">{reviews.map(r=><article className="feedback-card" key={r.project}><span className="feedback-quote" aria-hidden="true">“</span><blockquote>{r.quote}</blockquote><span className="feedback-signature">Client feedback</span></article>)}</div><div className="feedback-footer"><p>Selected client feedback. Personal names omitted.</p><a className="button" href="/contact">Start with a free consultation <ArrowUpRight size={17}/></a></div></section>}
