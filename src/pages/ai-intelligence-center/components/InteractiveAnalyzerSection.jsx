import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const InteractiveAnalyzerSection = () => {
  const [analysisStep, setAnalysisStep] = useState('upload');
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const mockResults = {
    patientInfo: {
      id: "PAC-2025-001",
      age: 45,
      gender: "Femenino",
      testType: "Química Sanguínea Completa"
    },
    aiAnalysis: {
      overallRisk: "Moderado",
      riskScore: 67,
      criticalFindings: [
        {
          parameter: "Glucosa",
          value: "145 mg/dL",
          reference: "70-100 mg/dL",
          status: "Elevado",
          severity: "warning",
          aiInsight: "Posible resistencia a la insulina. Recomendar prueba de tolerancia a la glucosa."
        },
        {
          parameter: "Colesterol Total",
          value: "245 mg/dL",
          reference: "< 200 mg/dL",
          status: "Alto",
          severity: "error",
          aiInsight: "Riesgo cardiovascular elevado. Evaluar perfil lipídico completo y factores de riesgo."
        },
        {
          parameter: "Creatinina",
          value: "1.3 mg/dL",
          reference: "0.6-1.2 mg/dL",
          status: "Límite Alto",
          severity: "warning",
          aiInsight: "Función renal en límite. Monitorear evolución y considerar evaluación nefrológica."
        }
      ],
      recommendations: [
        "Repetir glucosa en ayunas en 1 semana",
        "Solicitar HbA1c para evaluación diabética",
        "Perfil lipídico completo con HDL/LDL",
        "Evaluación cardiovascular integral",
        "Control nefrológico en 3 meses"
      ],
      confidence: 94.2
    }
  };

  const handleFileUpload = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      setSelectedFile({
        name: file?.name,
        size: (file?.size / 1024)?.toFixed(1) + ' KB',
        type: file?.type
      });
      setAnalysisStep('preview');
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisStep('analyzing');
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
      setAnalysisStep('results');
    }, 3000);
  };

  const resetAnalyzer = () => {
    setAnalysisStep('upload');
    setSelectedFile(null);
    setAnalysisResults(null);
    setIsAnalyzing(false);
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'error': return 'text-error bg-error/10 border-error/20';
      case 'warning': return 'text-warning bg-warning/10 border-warning/20';
      case 'success': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <section className="py-20 bg-muted/10">
      <div className="container-medical">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-medical">Prueba la IA</span>
            <br />
            <span className="text-foreground">en Tiempo Real</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experimenta cómo nuestro sistema de IA analiza resultados de laboratorio. 
            Sube un reporte anonimizado y observa las capacidades de análisis en acción.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {/* Progress Steps */}
            <div className="bg-muted/20 p-6 border-b border-border">
              <div className="flex items-center justify-between">
                {['upload', 'preview', 'analyzing', 'results']?.map((step, index) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      analysisStep === step
                        ? 'bg-primary text-primary-foreground'
                        : index < ['upload', 'preview', 'analyzing', 'results']?.indexOf(analysisStep)
                        ? 'bg-success text-success-foreground' :'bg-muted text-muted-foreground'
                    }`}>
                      {index < ['upload', 'preview', 'analyzing', 'results']?.indexOf(analysisStep) ? (
                        <Icon name="Check" size={16} />
                      ) : (
                        index + 1
                      )}
                    </div>
                    {index < 3 && (
                      <div className={`w-16 h-0.5 mx-2 ${
                        index < ['upload', 'preview', 'analyzing', 'results']?.indexOf(analysisStep)
                          ? 'bg-success' :'bg-muted'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className={analysisStep === 'upload' ? 'text-primary font-medium' : 'text-muted-foreground'}>
                  Subir Archivo
                </span>
                <span className={analysisStep === 'preview' ? 'text-primary font-medium' : 'text-muted-foreground'}>
                  Vista Previa
                </span>
                <span className={analysisStep === 'analyzing' ? 'text-primary font-medium' : 'text-muted-foreground'}>
                  Analizando
                </span>
                <span className={analysisStep === 'results' ? 'text-primary font-medium' : 'text-muted-foreground'}>
                  Resultados
                </span>
              </div>
            </div>

            <div className="p-8">
              {/* Upload Step */}
              {analysisStep === 'upload' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center space-y-6"
                >
                  <div className="border-2 border-dashed border-border rounded-xl p-12 hover:border-primary/50 transition-colors duration-300">
                    <Icon name="Upload" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Sube un Reporte de Laboratorio
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Formatos soportados: PDF, JPG, PNG (máximo 5MB)
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button
                        variant="outline"
                        size="lg"
                        iconName="FolderOpen"
                        iconPosition="left"
                        className="cursor-pointer"
                        asChild
                      >
                        <span>Seleccionar Archivo</span>
                      </Button>
                    </label>
                  </div>
                  
                  <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="AlertTriangle" size={20} className="text-warning mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-warning mb-1">Importante:</p>
                        <p className="text-muted-foreground">
                          Este es un demo con fines educativos. No subas información médica real o sensible. 
                          Los resultados son simulados y no constituyen diagnóstico médico.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Preview Step */}
              {analysisStep === 'preview' && selectedFile && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-muted/20 rounded-lg p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="FileText" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{selectedFile?.name}</h3>
                        <p className="text-sm text-muted-foreground">{selectedFile?.size}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">La IA analizará:</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-success" />
                          <span className="text-muted-foreground">Valores fuera de rango</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-success" />
                          <span className="text-muted-foreground">Patrones anómalos</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-success" />
                          <span className="text-muted-foreground">Correlaciones clínicas</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-success" />
                          <span className="text-muted-foreground">Recomendaciones</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      onClick={resetAnalyzer}
                      iconName="ArrowLeft"
                      iconPosition="left"
                    >
                      Cambiar Archivo
                    </Button>
                    <Button
                      variant="default"
                      onClick={startAnalysis}
                      iconName="Play"
                      iconPosition="left"
                      className="bg-gradient-medical hover:opacity-90"
                    >
                      Iniciar Análisis IA
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Analyzing Step */}
              {analysisStep === 'analyzing' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center space-y-8"
                >
                  <div className="w-24 h-24 bg-gradient-medical rounded-full flex items-center justify-center mx-auto">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Icon name="Brain" size={32} color="white" />
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Analizando con IA...
                    </h3>
                    <p className="text-muted-foreground">
                      Procesando patrones y generando insights clínicos
                    </p>
                  </div>

                  <div className="max-w-md mx-auto">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Progreso del análisis</span>
                      <span>87%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-gradient-medical h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '87%' }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-muted-foreground">Patrones identificados</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                      <span className="text-muted-foreground">Correlaciones analizadas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-muted-foreground">Generando insights</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Results Step */}
              {analysisStep === 'results' && analysisResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Análisis Completado</h3>
                      <p className="text-muted-foreground">
                        Paciente: {analysisResults?.patientInfo?.id} | {analysisResults?.patientInfo?.testType}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Confianza IA</div>
                      <div className="text-2xl font-bold text-gradient-medical">
                        {analysisResults?.aiAnalysis?.confidence}%
                      </div>
                    </div>
                  </div>

                  {/* Risk Assessment */}
                  <div className="bg-muted/20 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-foreground">Evaluación de Riesgo</h4>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        analysisResults?.aiAnalysis?.overallRisk === 'Alto' ? 'bg-error/10 text-error' :
                        analysisResults?.aiAnalysis?.overallRisk === 'Moderado'? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
                      }`}>
                        {analysisResults?.aiAnalysis?.overallRisk}
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="bg-gradient-medical h-3 rounded-full"
                        style={{ width: `${analysisResults?.aiAnalysis?.riskScore}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>Bajo</span>
                      <span>Score: {analysisResults?.aiAnalysis?.riskScore}/100</span>
                      <span>Alto</span>
                    </div>
                  </div>

                  {/* Critical Findings */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Hallazgos Críticos</h4>
                    <div className="space-y-4">
                      {analysisResults?.aiAnalysis?.criticalFindings?.map((finding, index) => (
                        <div key={index} className={`p-4 rounded-lg border ${getSeverityColor(finding?.severity)}`}>
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h5 className="font-semibold">{finding?.parameter}</h5>
                              <div className="text-sm">
                                <span className="font-medium">{finding?.value}</span>
                                <span className="text-muted-foreground ml-2">
                                  (Referencia: {finding?.reference})
                                </span>
                              </div>
                            </div>
                            <div className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(finding?.severity)}`}>
                              {finding?.status}
                            </div>
                          </div>
                          <div className="bg-background/50 rounded p-3 mt-3">
                            <div className="flex items-start space-x-2">
                              <Icon name="Brain" size={16} className="text-primary mt-0.5" />
                              <div>
                                <div className="text-xs text-primary font-medium mb-1">Insight de IA:</div>
                                <p className="text-sm text-muted-foreground">{finding?.aiInsight}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Recomendaciones Clínicas</h4>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                      <div className="space-y-3">
                        {analysisResults?.aiAnalysis?.recommendations?.map((recommendation, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium text-primary">{index + 1}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{recommendation}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                    <Button
                      variant="outline"
                      onClick={resetAnalyzer}
                      iconName="RotateCcw"
                      iconPosition="left"
                    >
                      Analizar Otro Reporte
                    </Button>
                    <Button
                      variant="default"
                      iconName="Download"
                      iconPosition="left"
                      className="bg-gradient-medical hover:opacity-90"
                    >
                      Descargar Reporte Completo
                    </Button>
                    <Button
                      variant="secondary"
                      iconName="MessageCircle"
                      iconPosition="left"
                    >
                      Contáctanos
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAnalyzerSection;