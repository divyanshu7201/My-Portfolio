import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import MainNavigation from '../../components/UI/MainNavigation';
import ContactForm from '../../components/UI/ContactForm';
import ContactInfo from './components/ContactInfo';
import ResumeDownload from './components/ResumeDownload';

const ContactResume = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFormSubmit = async (formData) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact & Resume - EngiPortfolio | Alex Johnson</title>
        <meta 
          name="description" 
          content="Get in touch with Alex Johnson for internship opportunities, project collaborations, or general inquiries. Download resume and portfolio materials." 
        />
        <meta name="keywords" content="contact, resume, download, engineering student, portfolio, internship" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavigation />

        <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-heading text-4xl font-bold text-foreground md:text-5xl">
              Let's Connect
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              I'm always open to discussing new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm onSubmit={handleFormSubmit} />
            </div>

            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>

          <div className="mt-12">
            <ResumeDownload />
          </div>
        </main>

        <footer className="border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="caption text-muted-foreground">
                &copy; {new Date()?.getFullYear()} Alex Johnson. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactResume;