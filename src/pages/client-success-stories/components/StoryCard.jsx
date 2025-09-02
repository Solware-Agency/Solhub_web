import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryCard = ({ story, onViewDetails }) => {
  return (
    <div className="card-medical-elevated group hover:hover-lift hover:hover-glow">
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={story?.image}
          alt={story?.facilityName}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${story?.typeColor}`}>
            {story?.type}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-background/80 backdrop-blur-sm rounded-full p-2">
            <Icon name={story?.icon} size={20} className="text-primary" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {story?.facilityName}
          </h3>
          <div className="flex items-center space-x-1 text-warning">
            {[...Array(5)]?.map((_, i) => (
              <Icon key={i} name="Star" size={16} className="fill-current" />
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="MapPin" size={14} />
            <span>{story?.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={14} />
            <span>{story?.staffSize} empleados</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 line-clamp-3">
          {story?.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {story?.keyMetrics?.slice(0, 2)?.map((metric, index) => (
            <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">
                {metric?.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric?.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={story?.testimonial?.avatar}
              alt={story?.testimonial?.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-medium text-foreground">
                {story?.testimonial?.name}
              </div>
              <div className="text-xs text-muted-foreground">
                {story?.testimonial?.role}
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(story)}
            iconName="ArrowRight"
            iconPosition="right"
            className="hover:bg-primary/10 hover:border-primary hover:text-primary"
          >
            Ver Caso
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;