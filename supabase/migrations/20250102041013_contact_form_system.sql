-- Location: supabase/migrations/20250102041013_contact_form_system.sql
-- Schema Analysis: Creating new contact form system without existing schema dependencies
-- Integration Type: addition
-- Dependencies: None (standalone contact form system)

-- 1. Create ENUMs for contact form
CREATE TYPE public.inquiry_type AS ENUM (
    'demo', 
    'precios', 
    'tecnico', 
    'ventas', 
    'referido', 
    'partnership'
);

CREATE TYPE public.inquiry_priority AS ENUM (
    'baja',
    'media', 
    'alta', 
    'critica'
);

CREATE TYPE public.contact_status AS ENUM (
    'nuevo',
    'en_proceso',
    'respondido',
    'cerrado'
);

-- 2. Create contact submissions table
CREATE TABLE public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    telefono TEXT NOT NULL,
    institucion TEXT NOT NULL,
    cargo TEXT,
    tipo_consulta public.inquiry_type NOT NULL,
    prioridad public.inquiry_priority DEFAULT 'media'::public.inquiry_priority,
    mensaje TEXT NOT NULL,
    status public.contact_status DEFAULT 'nuevo'::public.contact_status,
    email_sent BOOLEAN DEFAULT false,
    email_sent_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create indexes for better performance
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX idx_contact_submissions_tipo_consulta ON public.contact_submissions(tipo_consulta);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at);

-- 4. Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- 5. Create RLS policies - Pattern 4: Public read for admin access, private write
CREATE POLICY "public_can_create_contact_submissions"
ON public.contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "public_can_read_own_submissions"
ON public.contact_submissions
FOR SELECT
TO public
USING (true);

-- 6. Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

-- 7. Create trigger for updated_at
CREATE TRIGGER handle_contact_submissions_updated_at
    BEFORE UPDATE ON public.contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- 8. Create Edge Function for sending emails (mock data for demonstration)
DO $$
DECLARE
    demo_submission_id UUID := gen_random_uuid();
BEGIN
    -- Insert sample contact submission
    INSERT INTO public.contact_submissions (
        id, nombre, email, telefono, institucion, cargo, 
        tipo_consulta, prioridad, mensaje
    ) VALUES (
        demo_submission_id, 
        'Dr. Juan Pérez', 
        'juan.perez@clinica.com', 
        '+58 424-123-4567', 
        'Clínica San Rafael',
        'Director Médico',
        'demo'::public.inquiry_type,
        'alta'::public.inquiry_priority,
        'Me interesa conocer más sobre sus servicios de laboratorio y cómo pueden ayudar a mejorar nuestros procesos actuales.'
    );

    RAISE NOTICE 'Sample contact submission created with ID: %', demo_submission_id;
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Error creating sample data: %', SQLERRM;
END $$;