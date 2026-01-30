<?php get_header(); ?>

<!-- Hero Section -->
<section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-bg" style="background-image: url('https://customer-assets.emergentagent.com/job_deseo-web/artifacts/emmwnbg9_WhatsApp%20Image%202024-11-01%20at%2013.00.33.jpeg')"></div>
    <div class="container hero-content">
        <h1 class="hero-title">
            Cumplimos Sueños que<br>
            <span class="text-accent">Transforman Vidas</span>
        </h1>
        <p class="hero-subtitle">
            Hacemos posible que niños con enfermedades graves cumplan sus sueños más profundos
        </p>
        <div class="hero-buttons">
            <a href="<?php echo esc_url(home_url('/donaciones')); ?>" class="btn btn-primary btn-lg">Dona Ahora</a>
            <a href="<?php echo esc_url(home_url('/voluntarios')); ?>" class="btn btn-secondary btn-lg">Sé Voluntario</a>
        </div>
    </div>
</section>

<!-- ¿Qué Hacemos? Section -->
<section class="section section-gray">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">¿Qué Hacemos?</h2>
            <p class="section-description">
                Ambulancia Deseo es una fundación que cumple los deseos más profundos de niños y jóvenes con enfermedades graves, brindándoles momentos de alegría y esperanza.
            </p>
        </div>
        
        <div class="cards-grid">
            <div class="card card-hover">
                <div class="card-icon">
                    <?php echo ambulancia_deseo_get_svg_icon('heart'); ?>
                </div>
                <h3 class="card-title">Cumplimos Sueños</h3>
                <p class="card-text">
                    Hacemos realidad los deseos de niños con enfermedades terminales o crónicas, creando momentos inolvidables.
                </p>
            </div>

            <div class="card card-hover">
                <div class="card-icon">
                    <?php echo ambulancia_deseo_get_svg_icon('users'); ?>
                </div>
                <h3 class="card-title">Red de Voluntarios</h3>
                <p class="card-text">
                    Contamos con un equipo de voluntarios capacitados y comprometidos que hacen posible cada sueño.
                </p>
            </div>

            <div class="card card-hover">
                <div class="card-icon">
                    <?php echo ambulancia_deseo_get_svg_icon('plane'); ?>
                </div>
                <h3 class="card-title">Transporte Seguro</h3>
                <p class="card-text">
                    Ambulancias equipadas y personal médico capacitado garantizan viajes seguros para cumplir cada deseo.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="stats-section">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-icon">
                    <?php echo ambulancia_deseo_get_svg_icon('sparkles'); ?>
                </div>
                <div class="stat-number">500+</div>
                <div class="stat-label">Sueños Cumplidos</div>
            </div>
            <div class="stat-item">
                <div class="stat-icon">
                    <?php echo ambulancia_deseo_get_svg_icon('users'); ?>
                </div>
                <div class="stat-number">300+</div>
                <div class="stat-label">Voluntarios Activos</div>
            </div>
            <div class="stat-item">
                <div class="stat-icon">
                    <?php echo ambulancia_deseo_get_svg_icon('heart'); ?>
                </div>
                <div class="stat-number">50+</div>
                <div class="stat-label">Aliados Estratégicos</div>
            </div>
            <div class="stat-item">
                <div class="stat-icon">
                    <?php echo ambulancia_deseo_get_svg_icon('award'); ?>
                </div>
                <div class="stat-number">15</div>
                <div class="stat-label">Años de Experiencia</div>
            </div>
        </div>
    </div>
</section>

<!-- Sueños Cumplidos Section -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Sueños Cumplidos</h2>
            <p class="section-description">
                Cada sueño cumplido es una historia de esperanza, valentía y amor.
            </p>
        </div>
        
        <div class="cards-grid">
            <?php
            $suenos = array(
                array(
                    'image' => 'https://customer-assets.emergentagent.com/job_deseo-web/artifacts/emmwnbg9_WhatsApp%20Image%202024-11-01%20at%2013.00.33.jpeg',
                    'badge' => 'Octubre 2024',
                    'title' => 'Vuelo en Avión',
                    'description' => 'Santiago cumplió su sueño de volar y conocer la cabina del piloto'
                ),
                array(
                    'image' => 'https://customer-assets.emergentagent.com/job_deseo-web/artifacts/zpemo73s_IMG_9556.HEIC',
                    'badge' => 'Agosto 2025 ',
                    'title' => 'Conocí a mi idolo ',
                    'description' => 'Adriana :” Mi sueño es conocer al artista Paulo Londra, poder conversar con él, poder abrazarlo y
asistir a su concierto. “'
                ),
                array(
                    'image' => 'https://customer-assets.emergentagent.com/job_deseo-web/artifacts/m3y6h3yf_IMG_4180.HEIC',
                    'badge' => 'Agosto 2024',
                    'title' => 'Día Especial',
                    'description' => 'Un día inolvidable para cumplir sueños'
                )
            );
            
            foreach ($suenos as $sueno) :
            ?>
            <div class="card card-hover card-image">
                <div class="card-image-wrapper">
                    <img src="<?php echo esc_url($sueno['image']); ?>" alt="<?php echo esc_attr($sueno['title']); ?>">
                </div>
                <div class="card-body">
                    <div class="card-badge"><?php echo esc_html($sueno['badge']); ?></div>
                    <h3 class="card-title"><?php echo esc_html($sueno['title']); ?></h3>
                    <p class="card-text">
                        <?php echo esc_html($sueno['description']); ?>
                    </p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>

        <div class="text-center mt-4">
            <a href="<?php echo esc_url(home_url('/suenos-cumplidos')); ?>" class="btn btn-primary btn-lg">Ver Más Historias</a>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
    <div class="container">
        <div class="cta-card">
            <h2 class="cta-title">Únete a Nuestra Misión</h2>
            <p class="cta-description">
                Tu apoyo puede transformar la vida de un niño. Cada donación cuenta, cada voluntario suma.
            </p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url(home_url('/donaciones')); ?>" class="btn btn-white btn-lg">Hacer una Donación</a>
                <a href="<?php echo esc_url(home_url('/voluntarios')); ?>" class="btn btn-outline-white btn-lg">Ser Voluntario</a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>