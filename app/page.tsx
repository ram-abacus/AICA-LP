'use client';
import Badge from 'components/Badge';
import { HubSpotForm } from 'components/form';
import Image from 'next/image';
import { useState } from 'react';


const BRAND = {
  name: 'AICA SUNMICA',
  product: 'Decorative Laminates',
  primary: '#8e082e',
  text: '#101113',
  bg: '#fff7fa',
  white: '#ffffff',
  border: '#efd3dc',
};

const PLACEHOLDERS = [
  { alt: 'Kitchen Cabinets', src: 'Room.webp' },
  { alt: 'Doors', src: 'Door.webp' },
  { alt: 'Wardrobe Panels', src: 'Office.webp' },
  { alt: 'Office Worktop', src: 'Sofa.webp' },
];

const applications = [
  { label: "Kitchen Countertops & Backsplashes", image: "Kitchen.png" },
  { label: "Hospitality And Retail", image: "Hospitality.webp" },
  { label: "Home & Office Furniture", image: "Home-Office Furniture.png" },
  { label: "Hotels & Restaurants", image: "Hotels.png" },
  { label: "Office Partitions & Shelves", image: "Office.png" },
  { label: "Wardrobes & Closet Interiors", image: "Wardrobe.png" },
  { label: "Wall Panelling", image: "Wall Panel.png" },
];

const shades = [
  { label: "E 947/1947", img: "1947.webp", name: "Agro Wood II" },
  { label: "E 987/1987", img: "1987.webp", name: "Scioss Pine" },
  { label: "5412", img: "5412.webp", name: "Woodland Bloom Dark" },
  { label: "D 5049", img: "D 5049.webp", name: "Graphite Grey" },
  { label: "D 5059", img: "D 5059.webp", name: "Salmon Rose" },
  { label: "D 5060", img: "D 5060.webp", name: "Taupe" },
  { label: "D 5330", img: "D 5330.webp", name: "Classic Walnut" },
  { label: "D 5344", img: "D 5344.webp", name: "Latin Teak" },
  { label: "SL 16", img: "SL 16.webp", name: "Highland Pine" },
  { label: "SL 21", img: "SL 21.webp", name: "Baverian Beech" },
  { label: "SL 30", img: "SL 30.webp", name: "Dark Walnut" },
  { label: "SL 94", img: "SL 94.webp", name: "Brown Jute Fabric" },
];

// const SHADES = Array.from({ length: 12 }).map((_, i) => ({
//   code: `AS-${1001 + i}`,
//   name: `Shade ${i + 1}`,
//   img: `/placeholders/shade-${String(i+1).padStart(2,'0')}.jpg`
// }));

export default function Page() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', requirement: '' });
  const [agree, setAgree] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };
  const validPhone = (v: string) => /(\+?\d[\d\s-]{7,15})$/.test(v.trim());
  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const validate = () => form.name.trim() && validPhone(form.phone) && validEmail(form.email) && form.city.trim() && form.requirement.trim() && agree;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) { alert('Please fill all fields correctly.'); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (res.ok) setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full" style={{ background: BRAND.bg, color: BRAND.text }}>
      {/* <div className="w-full text-center text-sm py-2" style={{ background: BRAND.primary, color: '#fff' }}>
        <span className="font-semibold">Festive Offer:</span> Free sample kit + shade card on first consultation
      </div> */}

      <header className="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-white/70" style={{ borderColor: BRAND.border }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="logo.svg" alt="Aica Sunmica Logo" className="w-28 md:w-40 h-9 object-contain" />
            {/* <div>
              <p className="text-xs tracking-wider text-neutral-500">{BRAND.name}</p>
              <h1 className="text-sm sm:text-base font-semibold">{BRAND.product}</h1>
            </div> */}
          </div>
          <a href="#lead-form" className="px-4 py-2 rounded-xl font-semibold border" style={{ background: BRAND.primary, borderColor: BRAND.primary, color: '#fff' }}>
            Get Best Quote
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge>Kitchens · Wardrobes · Wall Panels · Furniture</Badge>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mt-4">
                Premium Decorative Laminates for Everyday Living
              </h2>
              <p className="mt-4 text-neutral-700 max-w-2xl">
                Built for Indian homes — scratch-resistant, heat & moisture resistant, and easy to maintain. Get free samples and expert guidance on textures & finishes.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {['Scratch & Abrasion Resistant','Heat & Moisture Safe','Stain-Free, Easy Clean','1500+ Designs & Textures'].map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: BRAND.primary }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#lead-form" className="px-5 py-3 rounded-xl font-semibold" style={{ background: BRAND.primary, color: '#fff' }}>
                  Get Catalogue & Price
                </a>
                <a href="tel:+919999999999" className="px-5 py-3 rounded-xl font-semibold border" style={{ borderColor: BRAND.primary }}>
                  Call Now
                </a>
              </div>
              <p className="mt-3 text-xs text-neutral-600">Free sample kit in select cities. Limited-time offers for early enquiries.</p>
            </div>

            <div id="lead-form" className="rounded-2xl p-5 md:p-6 shadow-xl border bg-white" style={{ borderColor: BRAND.border }}>
              <h3 className="text-xl font-bold">Get Best Quote</h3>
              <p className="text-sm text-neutral-600 mt-1">Share your details and we’ll call back within 30 minutes.</p>

                <HubSpotForm/>

              {/* <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <input name="name" value={form.name} onChange={update} placeholder="e.g., Rohan Sharma"
                    className="mt-1 w-full rounded-xl px-4 py-3 bg-white border focus:outline-none focus:ring-2"
                    style={{ borderColor: BRAND.border }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <input name="phone" value={form.phone} onChange={update} placeholder="e.g., +91 98xxxxxxx"
                      className="mt-1 w-full rounded-xl px-4 py-3 bg-white border focus:outline-none focus:ring-2"
                      style={{ borderColor: BRAND.border }} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input name="email" value={form.email} onChange={update} placeholder="e.g., you@example.com"
                      className="mt-1 w-full rounded-xl px-4 py-3 bg-white border focus:outline-none focus:ring-2"
                      style={{ borderColor: BRAND.border }} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">City</label>
                    <input name="city" value={form.city} onChange={update} placeholder="e.g., Gurgaon"
                      className="mt-1 w-full rounded-xl px-4 py-3 bg-white border focus:outline-none focus:ring-2"
                      style={{ borderColor: BRAND.border }} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Requirement</label>
                    <input name="requirement" value={form.requirement} onChange={update} placeholder="e.g., Kitchen shutters 120 sq.ft, matte texture"
                      className="mt-1 w-full rounded-xl px-4 py-3 bg-white border focus:outline-none focus:ring-2"
                      style={{ borderColor: BRAND.border }} />
                  </div>
                </div>
                <label className="flex items-start gap-2 text-xs text-neutral-700">
                  <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} className="mt-1" />
                  I agree to be contacted via call/WhatsApp about laminates and related offers.
                </label>
                <button type="submit" disabled={submitting}
                  className="rounded-xl px-5 py-3 font-semibold flex items-center justify-center gap-2"
                  style={{ background: BRAND.primary, color: '#fff' }}>
                  {submitting ? 'Submitting...' : 'Get Best Quote'}
                </button>
                {submitted && (
                  <p className="text-green-700 text-sm font-medium">Thanks! Your request is submitted. Our team will contact you shortly.</p>
                )}
                <p className="text-[10px] text-neutral-500">We respect your privacy. No spam.</p>
              </form> */}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y" style={{ borderColor: BRAND.border, background: BRAND.white }}>
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { t: '10+ Year Durability', d: 'Everyday wear & tear' },
            { t: 'Low Maintenance', d: 'Wipe clean; stain-free' },
            { t: 'Vast Collection', d: '1500+ designs & textures' },
            { t: 'Fast Delivery', d: 'Pan-India network' },
          ].map((k) => (
            <div key={k.t} className="rounded-2xl p-4 border bg-white" style={{ borderColor: BRAND.border }}>
              <div className="text-sm text-neutral-600">{k.d}</div>
              <div className="mt-1 text-lg font-bold" style={{ color: BRAND.primary }}>{k.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-end justify-between">
            <h3 className="text-2xl md:text-3xl font-extrabold">Design Inspiration</h3>
            <a href="#lead-form" className="text-sm underline" style={{ color: BRAND.primary }}>Get shade card →</a>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PLACEHOLDERS.map((p, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden border bg-white flex items-center justify-center text-xs text-neutral-500" style={{ borderColor: BRAND.border }}>
                <Image src={p.src} alt={p.alt} width={200} height={150} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: BRAND.border, background: BRAND.white }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-2xl md:text-3xl font-extrabold">Explore Our Shades</h3>
          <p className="text-neutral-700 mt-2">Tap a shade to request samples with your quote.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {shades.map((sh) => (
              <button key={sh.label} className="group text-left rounded-2xl overflow-hidden border bg-white hover:shadow-md transition" style={{ borderColor: BRAND.border }}>
                <div className="aspect-[5/3] w-full overflow-hidden bg-[#f6e7ec] flex items-center justify-center text-xs text-neutral-500">
                    <Image src={sh.img} alt={sh.name} width={200} height={120} className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-2 text-sm">
                  <div className="font-medium">{sh.label} {sh.name}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8">
            <a href="#lead-form" className="px-5 py-3 rounded-xl font-semibold inline-block" style={{ background: BRAND.primary, color: '#fff' }}>Request Shade Samples</a>
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: BRAND.border, background: BRAND.white }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-2xl md:text-3xl font-extrabold">Applications</h3>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10">
             {applications.map((item) => (
                <div key={item.label} className="group flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl border bg-white flex items-center justify-center transition-transform group-hover:scale-105" style={{ borderColor: BRAND.border }}>
                  <Image src={item.image} alt={item.label} width={48} height={48} />
                </div>
                <div className="mt-3 font-medium text-sm">{item.label}</div>
              </div>
             ))}
             {/* {['Kitchen Cabinets','Wardrobes','Wall Panels','TV Units','Doors','Worktops','Office Furniture'].map((label) => (
              <div key={label} className="group flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl border bg-white flex items-center justify-center transition-transform group-hover:scale-105" style={{ borderColor: BRAND.border }}>
                  <Image src={application.image} alt={label} width={48} height={48} />
                  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="10" y="14" width="28" height="20" />
                    <line x1="10" y1="24" x2="38" y2="24" />
                  </svg>
                </div>
                <div className="mt-3 font-medium text-sm">{label}</div>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-2xl md:text-3xl font-extrabold">Why Choose {BRAND.name} Laminates?</h3>
          <div className="mt-6 overflow-x-auto">
            {/* <table className="min-w-[720px] w-full border-separate border-spacing-y-2"> */}
            <table className="min-w-[720px] w-full border-separate border-spacing-x-4 border-spacing-y-2">
              <thead>
                <tr>
                  {['Criteria', `${BRAND.name} Laminates`, 'Paint / Veneer'].map((h) => (
                    <th key={h} className="text-left text-sm font-semibold px-4 py-2 bg-[#fde8f0] rounded-md border" style={{ borderColor: BRAND.border }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Daily durability', 'High - scratch & abrasion resistant', 'Medium - prone to marks'],
                  ['Moisture & heat', 'Resists household moisture & heat', 'Sensitive to spills & heat'],
                  ['Maintenance', 'Wipe clean; stain-free', 'Frequent touch-ups required'],
                  ['Design options', '1500+ shades & textures', 'Limited by paint/veneer availability'],
                ].map((row, idx) => (
                  <tr key={idx}>
                    {row.map((cell, i) => (
                      <td key={i} className="px-4 py-3 bg-white border rounded-xl text-sm" style={{ borderColor: BRAND.border }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <a href="#lead-form" className="px-5 py-3 rounded-xl font-semibold inline-block" style={{ background: BRAND.primary, color: '#fff' }}>Get Samples & Quote</a>
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: BRAND.border, background: BRAND.white }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-2xl md:text-3xl font-extrabold">Your Project in 4 Easy Steps</h3>
          <div className="mt-6 grid md:grid-cols-4 gap-4">
            {[
              { t: 'Consult', d: 'Share sizes & application' },
              { t: 'Select', d: 'Choose shades & textures' },
              { t: 'Quote', d: 'Transparent pricing & timelines' },
              { t: 'Install', d: 'Pro carpenter/installer network' },
            ].map((s, i) => (
              <div key={s.t} className="rounded-2xl p-5 border bg-white" style={{ borderColor: BRAND.border }}>
                <div className="text-4xl font-black" style={{ color: BRAND.primary }}>{i + 1}</div>
                <div className="mt-2 font-semibold">{s.t}</div>
                <div className="text-sm text-neutral-700">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-end justify-between">
            <h3 className="text-2xl md:text-3xl font-extrabold">What Homeowners Say</h3>
            <a href="#lead-form" className="text-sm underline" style={{ color: BRAND.primary }}>Request references →</a>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { n: 'A. Verma, Noida', t: 'Matte finish looks premium and is easy to clean. Excellent variety of textures.' },
              { n: 'N. Joshi, Pune', t: 'Used for kitchen & wardrobe. Heat and moisture resistance is reliable.' },
              { n: 'S. Singh, Gurgaon', t: 'Loved the shades and overall finish. Quick sampling and delivery.' },
            ].map((c) => (
              <div key={c.n} className="rounded-2xl p-5 border bg-white" style={{ borderColor: BRAND.border }}>
                <div className="text-sm text-neutral-800">“{c.t}”</div>
                <div className="mt-3 text-xs text-neutral-600">— {c.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: BRAND.border, background: BRAND.white }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-2xl md:text-3xl font-extrabold">FAQs</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              { q: 'Are laminates suitable for kitchens?', a: 'Yes. Choose heat & moisture resistant grades; matte textures hide fingerprints better.' },
              { q: 'Gloss vs Matte - which to pick?', a: 'Gloss is reflective and vibrant; matte gives a premium, subtle look and hides marks.' },
              { q: 'Can I get samples before ordering?', a: 'Absolutely. Request a free sample kit and shade card to compare at home.' },
              { q: 'What thicknesses are available?', a: 'Standard 0.8mm/1mm; specialty textures and designs vary by collection.' },
            ].map((f) => (
              <div key={f.q} className="rounded-2xl p-5 border bg-white" style={{ borderColor: BRAND.border }}>
                <div className="font-semibold" style={{ color: BRAND.primary }}>{f.q}</div>
                <div className="mt-2 text-sm text-neutral-700">{f.a}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a href="#lead-form" className="px-5 py-3 rounded-xl font-semibold inline-block" style={{ background: BRAND.primary, color: '#fff' }}>Get Expert Advice</a>
          </div>
        </div>
      </section>

      <footer className="border-t" style={{ borderColor: BRAND.border, background: BRAND.white }}>
        {/* <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm tracking-wider text-neutral-500">{BRAND.name}</div>
            <div className="text-xl font-bold">{BRAND.product}</div>
            <p className="text-sm text-neutral-700 mt-3 max-w-md">
              This landing page captures end-customer enquiries for {BRAND.product}. Product images are representational; final shades/specs may vary.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2" style={{ color: BRAND.primary }}>Reach Us</div>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>Call: <a className="underline" href="tel:+919999999999">+91 99999 99999</a></li>
              <li>WhatsApp: <a className="underline" href="https://wa.me/919999999999" target="_blank">Chat Now</a></li>
              <li>Email: <a className="underline" href="mailto:sales@example.com">sales@example.com</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2" style={{ color: BRAND.primary }}>Quick Links</div>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><a className="underline" href="#lead-form">Get Best Quote</a></li>
              <li><a className="underline" href="https://aicasunmica.com/decorative-laminates" target="_blank">Official Laminates Page</a></li>
            </ul>
          </div>
        </div> */}
        <div className="px-4 py-4 text-center text-xs text-neutral-600 border-t" style={{ borderColor: BRAND.border }}>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
      </footer>

      <a href="#lead-form" className="fixed bottom-5 right-5 rounded-full px-5 py-3 shadow-xl font-bold" style={{ background: BRAND.primary, color: '#fff' }}>
        Get Best Quote
      </a>
    </div>
  );
}