<?php
/**
 * Template Name: Página de Aliados
 * Description: Plantilla para la página de Aliados
 */

get_header();
?>

<!-- Hero Section -->
<section class="hero" style="height: 400px;">
    <div class="hero-overlay"></div>
    <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&h=1080&fit=crop')"></div>
    <div class="container hero-content">
        <h1 class="hero-title">Nuestros Aliados Estratégicos</h1>
        <p class="hero-subtitle">
            Gracias a nuestros aliados, podemos hacer realidad los sueños de cientos de niños cada año
        </p>
    </div>
</section>

<!-- Aliados Grid -->
<section class="section section-gray">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Nuestros Aliados Estratégicos</h2>
            <p class="section-description">
                Organizaciones que confían en nuestra misión y nos apoyan activamente
            </p>
        </div>

        <div class="cards-grid">
            <?php
            $aliados = array(
                array(
                    'name' => 'Ministerio de Salud Pública',
                    'category' => 'Salud',
                    'description' => 'Apoyo médico y logístico para el traslado de pacientes',
                    'logo' => 'https://customer-assets.emergentagent.com/job_deseo-web/artifacts/v6mb7g6y_1630664618187.jpg'
                ),
                array(
                    'name' => 'Universidad de Especialidades Espíritu Santo',
                    'category' => 'Educación',
                    'description' => 'Apoyo académico y voluntariado estudiantil',
                    'logo' => 'https://customer-assets.emergentagent.com/job_deseo-web/artifacts/13bnb8sg_logo-gabo-01.jpg'
                ),
                array(
                    'name' => 'Banco de Alimentos Diakonia',
                    'category' => 'Alimentación',
                    'description' => 'Apoyo nutricional y alimentario para las familias',
                    'logo' => 'https://customer-assets.emergentagent.com/job_deseo-web/artifacts/jhjhyhtn_images.png'
                )
            );
            
            foreach ($aliados as $aliado) :
            ?>
            <div class="card card-hover card-image">
                <div class="card-image-wrapper">
                    <img src="<?php echo esc_url($aliado['logo']); ?>" alt="<?php echo esc_attr($aliado['name']); ?>">
                </div>
                <div class="card-body">
                    <div class="card-badge"><?php echo esc_html($aliado['category']); ?></div>
                    <h3 class="card-title"><?php echo esc_html($aliado['name']); ?></h3>
                    <p class="card-text">
                        <?php echo esc_html($aliado['description']); ?>
                    </p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
    <div class="container">
        <div class="cta-card">
            <h2 class="cta-title">¿Quieres Ser Nuestro Aliado?</h2>
            <p class="cta-description">
                Contacta con nosotros y descubre cómo tu organización puede marcar la diferencia
            </p>
            <div class="cta-buttons">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDSL1haTnNUN5xqWf2J4fpgDwD7VRW1_th8xR6cAulcjUArg/viewform" target="_blank" rel="noopener noreferrer" class="btn btn-white btn-lg">
                    Rellena este Formulario
                </a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>