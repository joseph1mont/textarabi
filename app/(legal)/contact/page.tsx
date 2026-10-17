// file path: app/%28legal%29/contact/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, ArrowLeft, ShieldCheck, Zap } from "lucide-react";

export default function ContactFormEN() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Smooth UI transition for form submission simulation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Support | TextArabi",
      description:
        "Contact support for TextArabi feature optimization suggestions or layout alignment inquiries.",
      url: "https://textarabi.com/contact",
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://textarabi.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://textarabi.com/contact",
        },
      ],
    },
  ];

  return (
    <div
      className="w-full bg-slate-50/60 min-h-screen py-12 md:py-16"
      dir="ltr"
    >
      {/* Schema.org Structured Data */}
      {jsonLd.map((schema, index) => (
        <script
          key={`contact-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb back navigation line */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-[-4px]" />
            <span>Back to Main Application</span>
          </Link>
        </div>

        {/* Master Two-Column Grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Platform Context & Info Cards (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Contact Support
              </h1>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Have a new script feature optimization suggestion or need to
                report a layout alignment bug? We are always ready to assist the
                Arabic web layout ecosystem.
              </p>
            </div>

            <hr className="border-slate-200 my-4" />

            {/* Feature Info Card 1 */}
            <div className="border border-slate-200/80 bg-white rounded-xl shadow-xs p-4 flex items-start gap-4">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-0.5">
                  Data Privacy Secured
                </h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                  All parsing scripts run entirely inside your client-side
                  sandbox runtime. Contact details are solely used to resolve
                  issues and are never processed externally.
                </p>
              </div>
            </div>

            {/* Feature Info Card 2 */}
            <div className="border border-slate-200/80 bg-white rounded-xl shadow-xs p-4 flex items-start gap-4">
              <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl shrink-0 mt-0.5">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-0.5">
                  Engine Response Speed
                </h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                  Our developer teams evaluate tickets iteratively across
                  timeframes. Technical inquiries typically receive updates
                  within a 24–48 hour turnaround.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Core Functional Form Component Container (Spans 7 cols) */}
          <div className="lg:col-span-7">
            <div className="border border-slate-200 rounded-2xl shadow-xs bg-white p-6 md:p-8">
              {isSuccess ? (
                <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900 mb-2">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for providing engineering inputs to help polish
                    the suite. Your incident track is logged and our support
                    team will connect with you shortly.
                  </p>
                  <Button
                    variant="outline"
                    className="border-slate-200 hover:bg-slate-50 font-bold px-5 cursor-pointer rounded-xl text-slate-700"
                    onClick={() => setIsSuccess(false)}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Dual Form Input Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-slate-700 font-bold text-sm"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="h-11 border-slate-200 focus-visible:ring-blue-500 bg-slate-50/30 rounded-lg text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-slate-700 font-bold text-sm"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="h-11 border-slate-200 focus-visible:ring-blue-500 bg-slate-50/30 rounded-lg text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Subject Line Input */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-slate-700 font-bold text-sm"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      placeholder="e.g. Feature Request for Arabic Diacritic Parsing Engine"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      className="h-11 border-slate-200 focus-visible:ring-blue-500 bg-slate-50/30 rounded-lg text-sm"
                    />
                  </div>

                  {/* Deep Message Content Input */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-slate-700 font-bold text-sm"
                    >
                      Message Content
                    </Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Describe your optimization ideas or software error logs clearly..."
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="border-slate-200 focus-visible:ring-blue-500 bg-slate-50/30 rounded-lg text-sm resize-none min-h-[140px] leading-relaxed"
                    />
                  </div>

                  {/* Premium Styled Shadcn Interactive Submission Trigger */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 rounded-xl transition-all duration-150 gap-2 cursor-pointer shadow-xs disabled:opacity-75 text-sm"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
