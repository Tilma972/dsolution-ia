import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  imageSrc: string;
  altText: string;
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  altText,
  quote,
  name,
  title,
}) => {
  return (
    <div className="bg-card-bg p-8 rounded-lg shadow-lg text-center border border-primary/20 transition duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
      <div className="mb-6">
        <Image
          src={imageSrc}
          alt={altText}
          width={144} // Approx h-24
          height={144} // Approx w-24
          className="rounded-full object-cover border-2 border-primary mx-auto"
        />
      </div>
      <blockquote className="text-lg italic text-subtle-text mb-6">
        "{quote}"
      </blockquote>
      <p className="font-semibold text-white">{name}</p>
      <p className="text-sm text-secondary">{title}</p>
    </div>
  );
};

export default TestimonialCard;
