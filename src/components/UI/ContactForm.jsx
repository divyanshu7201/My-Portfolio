import React, { useState } from 'react';
import Icon from '../AppIcon';
import Input from './Input';
import Button from './Button';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.subject?.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        await onSubmit(formData);
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg border border-border bg-card p-8 shadow-elevation-2">
      <div className="mb-6">
        <h2 className="mb-2 font-heading text-2xl font-semibold text-foreground">
          Send a Message
        </h2>
        <p className="text-muted-foreground">
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <Input
          type="text"
          name="name"
          label="Full Name"
          placeholder="John Doe"
          value={formData?.name}
          onChange={handleChange}
          error={errors?.name}
          required
          disabled={isSubmitting}
        />

        <Input
          type="email"
          name="email"
          label="Email Address"
          placeholder="john.doe@example.com"
          value={formData?.email}
          onChange={handleChange}
          error={errors?.email}
          required
          disabled={isSubmitting}
        />

        <Input
          type="text"
          name="subject"
          label="Subject"
          placeholder="Project Inquiry"
          value={formData?.subject}
          onChange={handleChange}
          error={errors?.subject}
          required
          disabled={isSubmitting}
        />

        <div>
          <label 
            htmlFor="message" 
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Message <span className="text-error">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell me about your project or inquiry..."
            value={formData?.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full rounded-lg border px-4 py-3 text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
              errors?.message 
                ? 'border-error bg-error/5' :'border-input bg-background hover:border-ring/50'
            }`}
          />
          {errors?.message && (
            <p className="mt-2 flex items-center space-x-1 text-sm text-error">
              <Icon name="AlertCircle" size={14} />
              <span>{errors?.message}</span>
            </p>
          )}
        </div>

        {submitStatus === 'success' && (
          <div className="flex items-start space-x-3 rounded-lg border border-success bg-success/10 p-4">
            <Icon name="CheckCircle2" size={20} className="text-success" />
            <div>
              <p className="font-medium text-success">Message sent successfully!</p>
              <p className="caption text-success/80">
                Thank you for reaching out. I'll respond to your inquiry within 24-48 hours.
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-start space-x-3 rounded-lg border border-error bg-error/10 p-4">
            <Icon name="XCircle" size={20} className="text-error" />
            <div>
              <p className="font-medium text-error">Failed to send message</p>
              <p className="caption text-error/80">
                Please try again or contact me directly via email.
              </p>
            </div>
          </div>
        )}

        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;