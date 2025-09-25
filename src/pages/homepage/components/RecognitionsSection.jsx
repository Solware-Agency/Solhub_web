import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const RecognitionsSection = () => {
  return (
    <section className="py-20 bg-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-medical opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-medical"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse-medical" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container-medical relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Reconocimientos
          </h2>
          <div className="w-24 h-1 bg-gradient-medical mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Recognition Card */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="glass-card p-8 md:p-10 hover:shadow-glass-hover transition-all duration-300 max-w-md w-full">
                {/* Trophy Icon */}
                <div className="w-16 h-16 bg-gradient-medical rounded-2xl flex items-center justify-center mb-6 shadow-medical-glow">
                  <Icon name="Trophy" size={32} color="white" />
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Hackathon IESA
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Instituto de Estudios Superiores de Administración
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Reconocidos por nuestra innovación en salud digital, elevando la calidad y eficiencia de clínicas y laboratorios en Venezuela.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-medical text-white font-semibold rounded-full text-sm shadow-medical-glow">
                    1° Lugar
                  </span>
                  <span className="px-4 py-2 glass-light text-foreground font-semibold rounded-full text-sm border border-border">
                    2025
                  </span>
                </div>
              </div>
            </div>

            {/* IESA Logo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="glass-card p-8 hover:shadow-glass-hover transition-all duration-300">
                  <img
                    src="/iesa.webp"
                    alt="IESA - Instituto de Estudios Superiores de Administración"
                    className="w-full max-w-xs h-auto object-contain"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full animate-pulse-medical"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full animate-pulse-medical" style={{ animationDelay: '1s' }}></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-light p-8 rounded-2xl border border-border max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
              "Menos papeles, más precisión, salud conectada. Eso es SolHub."
            </blockquote>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-gradient-medical rounded-full"></div>
              <div className="w-2 h-2 bg-gradient-medical rounded-full" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-gradient-medical rounded-full" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecognitionsSection;
