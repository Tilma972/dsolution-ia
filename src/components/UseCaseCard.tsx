import React from 'react';

interface UseCaseCardProps {
  title: string;
  description: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description }) => {
  return (
    <div className="bg-card-bg p-6 rounded-lg shadow-lg border border-primary/20 transition duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-subtle-text">{description}</p>
    </div>
  );
};

export default UseCaseCard;
