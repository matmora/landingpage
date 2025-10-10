import { ReactNode } from 'react';

interface ContentStepProps {
  stepNumber: string;
  title: string;
  content: ReactNode;
  tip?: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export const ContentStep = ({ 
  stepNumber, 
  title, 
  content, 
  tip, 
  imageSrc, 
  imageAlt, 
  reverse = false 
}: ContentStepProps) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Content */}
          <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
            <div className="fade-in">
              <div className="mb-4">
                <span className="text-sm font-inter font-medium tracking-widest text-gray-500 uppercase">
                  Step {stepNumber}
                </span>
              </div>
              
              <h2 className="slide-up mb-6 text-3xl md:text-4xl lg:text-5xl font-editorial font-semibold leading-tight">
                {title}
              </h2>
              
              <div className="fade-in mb-8 text-lg md:text-xl font-inter leading-relaxed text-gray-700 space-y-4">
                {content}
              </div>
              
              {tip && (
                <div className="fade-in p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-base font-inter font-medium text-gray-900">
                    <span className="text-blue-600 font-semibold">Tip:</span> {tip}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Image */}
          <div className={`${reverse ? 'lg:col-start-1' : ''}`}>
            <div className="slide-up">
              <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="section-image lazy-image w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};