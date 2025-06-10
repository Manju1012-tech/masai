import React, { useState } from 'react';

interface FeedbackData {
  name: string;
  email: string;
  rating: number | '';
  feedback: string;
}

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackData>({
    name: '',
    email: '',
    rating: '',
    feedback: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || formData.rating === '' || !formData.feedback) {
      alert('Please fill all fields');
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', rating: '', feedback: '' });
  };

  return (
    <div>
      <h2>Customer Feedback Form</h2>
      {submitted && <p>Thank you for your feedback!</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" /><br />
        <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating (1-5)" /><br />
        <textarea name="feedback" value={formData.feedback} onChange={handleChange} placeholder="Your Feedback" /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
