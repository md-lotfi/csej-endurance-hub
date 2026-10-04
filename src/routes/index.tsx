import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, Clock3, MapPin, Menu, Mountain, Phone, Send, Timer, X, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/csej-hero.jpg";
import trailImage from "@/assets/csej-trail.jpg";
import hiitImage from "@/assets/csej-hiit.jpg";
import logoAsset from "@/assets/CSEJ-logo.svg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CSEJ | Club Sportif Endurance Jijel" },
      { name: "description", content: "Découvrez le Club Sportif Endurance Jijel : course sur piste, trail et HIIT à Jijel." },
      { property: "og:title", content: "CSEJ | Club Sportif Endurance Jijel" },
      { property: "og:description", content: "Course, trail et HIIT. Ensemble, plus loin." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Language = "fr" | "ar";

const copy = {
  fr: {
    nav: ["Accueil", "Qui sommes-nous", "Programmes", "Contact"], join: "Rejoignez-nous",
    heroTag: "Club Sportif Endurance Jijel", hero: "Excellence. Endurance. Jijel.", heroSub: "Rejoignez le mouvement.",
    heroBody: "Courir ensemble. Se dépasser ensemble. Une communauté unie par l’effort, au cœur de Jijel.", discover: "Découvrir le club",
    aboutKicker: "Notre identité", aboutTitle: "Plus qu’un club, une force collective.",
    aboutBody: "CSEJ rassemble les passionnés de course et d’entraînement fonctionnel à Jijel. Notre mission : rendre l’endurance accessible, cultiver la discipline et avancer ensemble — sur piste, en montagne et au-delà.",
    pillars: [["Jijel, notre terrain", "De la piste au littoral, nous puisons notre énergie dans un territoire unique."], ["L’effort partagé", "Chaque séance transforme l’effort individuel en réussite collective."], ["Héritage algérien", "Fiers de nos couleurs, nous portons les valeurs du sport algérien."]],
    programsKicker: "Nos disciplines", programsTitle: "Trois terrains. Un même engagement.",
    programs: [["Course sur piste", "Vitesse, technique et progression mesurée sur piste."], ["Trail endurance", "Dénivelé, nature et résistance sur les sentiers de Jijel."], ["HIIT & conditionnement", "Des intervalles intenses pour développer puissance et agilité."]],
    scheduleKicker: "Rythme hebdomadaire", scheduleTitle: "La semaine CSEJ", day: "Jour", session: "Séance", time: "Horaire", remark: "Remarques",
    rows: [
      ["Samedi", "HIIT & conditionnement", "18:00", "Stade de Jijel"],
      ["Lundi", "Course en extérieur ou Trail endurance (10 à 15 km par groupes)", "15:30", "—"],
      ["Mercredi", "Trail endurance", "18:00", "Point de départ communiqué"],
      ["Vendredi", "Sortie collective", "06:30", "Jijel"],
    ],
    contactKicker: "Prenez le départ", contactTitle: "Votre prochaine foulée commence ici.", contactBody: "Une question sur les entraînements ou envie de rejoindre le groupe ? Écrivez-nous ou contactez directement un représentant du club.",
    name: "Nom complet", email: "E-mail", phone: "Téléphone", message: "Votre message", send: "Envoyer le message", sent: "Message prêt à être envoyé !", reps: "Représentants officiels", location: "Notre point de rencontre", map: "Voir sur Google Maps", footer: "Ensemble, plus loin.", legal: "Club Sportif Endurance Jijel © 2024",
  },
  ar: {
    nav: ["الرئيسية", "من نحن", "البرامج", "اتصل بنا"], join: "انضم إلينا",
    heroTag: "النادي الرياضي للتحمل جيجل", hero: "التميز. التحمل. جيجل.", heroSub: "انضم إلى الحركة.",
    heroBody: "نركض معاً. نتجاوز حدودنا معاً. مجتمع يوحّده الجهد في قلب جيجل.", discover: "اكتشف النادي",
    aboutKicker: "هويتنا", aboutTitle: "أكثر من نادٍ، قوة جماعية.",
    aboutBody: "يجمع نادي CSEJ عشاق الجري والتدريب الوظيفي في جيجل. مهمتنا هي جعل رياضة التحمل متاحة للجميع، وتنمية الانضباط والتقدم معاً على المضمار وفي الجبال وما بعدها.",
    pillars: [["جيجل، ملعبنا", "من المضمار إلى الساحل، نستمد طاقتنا من أرض فريدة."], ["الجهد المشترك", "كل حصة تحول الجهد الفردي إلى نجاح جماعي."], ["إرث جزائري", "نعتز بألواننا ونحمل قيم الرياضة الجزائرية."]],
    programsKicker: "تخصصاتنا", programsTitle: "ثلاثة ميادين. التزام واحد.",
    programs: [["الجري على المضمار", "السرعة والتقنية والتطور المدروس على المضمار."], ["التحمل الجبلي", "الطبيعة والمرتفعات والمقاومة على مسارات جيجل."], ["التمارين المكثفة", "فترات عالية الشدة لتطوير القوة والرشاقة."]],
    scheduleKicker: "الإيقاع الأسبوعي", scheduleTitle: "أسبوع CSEJ", day: "اليوم", session: "التدريب", time: "التوقيت", remark: "ملاحظات",
    rows: [
      ["السبت", "HIIT وتكييف بدني", "18:00", "ملعب جيجل"],
      ["الاثنين", "الجري الخارجي أو الجري الجبلي للتحمل (10 إلى 15 كلم حسب المجموعات)", "15:30", "—"],
      ["الأربعاء", "الجري الجبلي للتحمل (Trail endurance)", "18:00", "نقطة الانطلاق تُعلن لاحقا"],
      ["الجمعة", "خرجة جماعية", "06:30", "جيجل"],
    ],
    contactKicker: "خذ الانطلاقة", contactTitle: "خطوتك القادمة تبدأ هنا.", contactBody: "هل لديك سؤال حول التدريبات أو ترغب في الانضمام؟ راسلنا أو اتصل مباشرة بأحد ممثلي النادي.",
    name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "الهاتف", message: "رسالتك", send: "إرسال الرسالة", sent: "رسالتك جاهزة للإرسال!", reps: "الممثلون الرسميون", location: "نقطة تجمعنا", map: "افتح في خرائط Google", footer: "معاً، إلى أبعد مدى.", legal: "النادي الرياضي للتحمل جيجل © 2024",
  },
};

function Index() {
  const [language, setLanguage] = useState<Language>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const t = copy[language];
  const rtl = language === "ar";
  const navTargets = ["home", "about", "programs", "contact"];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [language, rtl]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main dir={rtl ? "rtl" : "ltr"} className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="CSEJ">
            <img src={logoAsset.url} alt="Logo CSEJ" className="size-14 shrink-0 object-contain" width="56" height="56" />
            <div className="hidden leading-tight sm:block">
              <strong className="block font-display text-xl text-primary">CSEJ</strong>
              <span className="block max-w-40 text-[10px] font-bold uppercase text-muted-foreground">Club Sportif Endurance Jijel</span>
            </div>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {t.nav.map((item, index) => <a key={item} href={`#${navTargets[index]}`} className="text-sm font-semibold text-primary transition-colors hover:text-accent">{item}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex h-10 items-center border border-border bg-secondary p-1" aria-label="Langue">
              {(["fr", "ar"] as Language[]).map((lang) => <Button key={lang} variant={language === lang ? "primary" : "ghost"} className="h-8 px-3 text-xs uppercase" onClick={() => setLanguage(lang)}>{lang}</Button>)}
            </div>
            <Button asChild variant="cta" className="hidden md:inline-flex"><a href="#contact">{t.join}<ArrowRight className="size-4 rtl:rotate-180" /></a></Button>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">{t.nav.map((item, index) => <a key={item} href={`#${navTargets[index]}`} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 font-semibold text-primary">{item}</a>)}</nav>}
      </header>

      <section id="home" className="relative min-h-[88svh] pt-20">
        <img src={heroImage} alt={rtl ? "أرجل عدائين ينطلقون معاً على المضمار" : "Jambes de coureurs démarrant ensemble sur une piste"} className="absolute inset-0 h-full w-full object-cover object-center" width="1920" height="1080" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/5 rtl:bg-gradient-to-l" />
        <div className="relative mx-auto flex min-h-[calc(88svh-5rem)] max-w-7xl items-center px-5 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-extrabold uppercase text-primary"><span className="h-px w-9 bg-accent" />{t.heroTag}</p>
            <h1 className="max-w-xl text-6xl font-extrabold uppercase leading-[0.9] text-primary sm:text-7xl lg:text-8xl">{t.hero}</h1>
            <p className="mt-5 font-display text-3xl font-bold uppercase text-accent sm:text-4xl">{t.heroSub}</p>
            <p className="mt-6 max-w-lg text-base leading-8 text-foreground/75">{t.heroBody}</p>
            <Button asChild variant="primary" size="lg" className="mt-8"><a href="#about">{t.discover}<ArrowDown className="size-4" /></a></Button>
          </div>
        </div>
      </section>

      <section id="about" className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:px-8">
          <div className="border-s-4 border-primary ps-8">
            <SectionTitle kicker={t.aboutKicker} title={t.aboutTitle} />
            <p className="mt-7 text-lg leading-8 text-muted-foreground">{t.aboutBody}</p>
          </div>
          <div className="grid gap-1 bg-border sm:grid-cols-3 lg:grid-cols-1">
            {t.pillars.map(([title, body], index) => <div key={title} className="bg-background p-6"><span className="font-display text-3xl font-bold text-accent">0{index + 1}</span><h3 className="mt-3 text-xl font-bold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section id="programs" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle kicker={t.programsKicker} title={t.programsTitle} />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.programs.map(([title, body], index) => {
              const images = [heroImage, trailImage, hiitImage];
              const icons = [<Timer key="timer" />, <Mountain key="mountain" />, <Zap key="zap" />];
              return <article key={title} className="group overflow-hidden border border-border bg-card"><div className="relative h-56 overflow-hidden"><img src={images[index]} alt="" loading="lazy" width="1200" height="800" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute bottom-0 start-0 grid size-12 place-items-center bg-primary text-primary-foreground">{icons[index]}</span></div><div className="p-6"><span className="text-xs font-bold text-accent">0{index + 1}</span><h3 className="mt-2 text-2xl font-bold text-primary">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p></div></article>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle kicker={t.scheduleKicker} title={t.scheduleTitle} inverse />
          <div className="mt-12 overflow-x-auto border border-primary-foreground/25">
            <table className="w-full min-w-180 text-start"><thead className="bg-primary-foreground/10 text-xs uppercase"><tr>{[t.day, t.session, t.time, t.place].map((h) => <th key={h} className="px-6 py-4 text-start font-bold">{h}</th>)}</tr></thead><tbody>{t.rows.map((row) => <tr key={row[0]} className="border-t border-primary-foreground/20">{row.map((cell, index) => <td key={cell} className={`px-6 py-5 text-sm ${index === 0 ? "font-bold text-primary-foreground" : "text-primary-foreground/75"}`}>{index === 2 && <Clock3 className="me-2 inline size-4 text-accent" />}{cell}</td>)}</tr>)}</tbody></table>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div><SectionTitle kicker={t.contactKicker} title={t.contactTitle} /><p className="mt-6 max-w-xl leading-7 text-muted-foreground">{t.contactBody}</p>
            <h3 className="mt-10 text-xl font-bold text-primary">{t.reps}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2"><Contact name="Mechtar Hamza" number="+213 669 13 24 39" /><Contact name="Laissaoui Ferhat" number="+213 551 05 66 86" /></div>
            <div className="mt-8 border-s-4 border-accent bg-secondary p-6"><p className="text-xs font-bold uppercase text-muted-foreground">{t.location}</p><p className="mt-2 flex items-center gap-2 font-bold text-primary"><MapPin className="size-5 text-accent" />Jijel, Algérie</p><a href="https://maps.google.com/?q=36.82193933022667,5.770131368649796" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-bold text-accent hover:underline">{t.map}</a></div>
          </div>
          <form onSubmit={submit} className="border border-border bg-secondary p-6 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2"><Field label={t.name} name="name" /><Field label={t.email} name="email" type="email" /><Field label={t.phone} name="phone" className="sm:col-span-2" /><label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold text-primary">{t.message}</span><textarea required rows={5} className="w-full resize-none border border-input bg-background px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary" /></label></div>
            <Button type="submit" variant="cta" size="lg" className="mt-6 w-full">{sent ? t.sent : t.send}<Send className="size-4 rtl:rotate-180" /></Button>
          </form>
        </div>
      </section>

      <footer className="bg-primary py-12 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center md:flex-row md:text-start lg:px-8"><div className="flex items-center gap-3"><img src={logoAsset.url} alt="CSEJ" width="52" height="52" className="size-13 rounded-sm bg-background object-contain p-1" /><div><strong className="block font-display text-2xl">CSEJ</strong><span className="text-xs text-primary-foreground/70">{t.footer}</span></div></div><div className="text-sm text-primary-foreground/75"><a href="tel:+213669132439" className="hover:text-primary-foreground">+213 669 13 24 39</a><span className="mx-3">•</span><a href="tel:+213551056686" className="hover:text-primary-foreground">+213 551 05 66 86</a></div><div><div className="mb-2 flex justify-center gap-1 md:justify-end"><Button variant="ghost" className="h-7 px-2 text-primary-foreground hover:text-accent" onClick={() => setLanguage("fr")}>FR</Button><span>/</span><Button variant="ghost" className="h-7 px-2 text-primary-foreground hover:text-accent" onClick={() => setLanguage("ar")}>AR</Button></div><p className="text-xs text-primary-foreground/60">{t.legal}</p></div></div></footer>
    </main>
  );
}

function SectionTitle({ kicker, title, inverse = false }: { kicker: string; title: string; inverse?: boolean }) {
  return <div><p className={`mb-4 flex items-center gap-3 text-xs font-extrabold uppercase ${inverse ? "text-primary-foreground/70" : "text-accent"}`}><span className={`h-px w-8 ${inverse ? "bg-accent" : "bg-primary"}`} />{kicker}</p><h2 className={`max-w-3xl text-4xl font-extrabold uppercase leading-none sm:text-5xl ${inverse ? "text-primary-foreground" : "text-primary"}`}>{title}</h2></div>;
}

function Contact({ name, number }: { name: string; number: string }) {
  return <a href={`tel:${number.replaceAll(" ", "")}`} className="border border-border p-5 transition-colors hover:border-primary"><span className="block font-bold text-primary">{name}</span><span className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><Phone className="size-4 text-accent" />{number}</span></a>;
}

function Field({ label, name, type = "text", className = "" }: { label: string; name: string; type?: string; className?: string }) {
  return <label className={className}><span className="mb-2 block text-sm font-bold text-primary">{label}</span><input required name={name} type={type} className="h-12 w-full border border-input bg-background px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary" /></label>;
}
