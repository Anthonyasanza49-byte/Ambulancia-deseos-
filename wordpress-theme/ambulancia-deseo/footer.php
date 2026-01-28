<!-- Footer -->
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="footer-logo">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <img src="https://customer-assets.emergentagent.com/job_deseo-web/artifacts/3xcqgn2q_image.png" alt="<?php bloginfo('name'); ?>">
                    <?php endif; ?>
                </a>
                <p class="footer-text">
                    Cumplimos sueños que transforman vidas. Hacemos posible que niños con enfermedades graves cumplan sus sueños más profundos.
                </p>
            </div>

            <div class="footer-col">
                <h3 class="footer-title">Enlaces Rápidos</h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'container' => false,
                    'menu_class' => 'footer-menu',
                    'fallback_cb' => function() {
                        echo '<ul class="footer-menu">';
                        echo '<li><a href="' . esc_url(home_url('/')) . '">Inicio</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/aliados')) . '">Aliados</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/voluntarios')) . '">Voluntarios</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/suenos-cumplidos')) . '">Sueños Cumplidos</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/donaciones')) . '">Donaciones</a></li>';
                        echo '</ul>';
                    },
                ));
                ?>
            </div>

            <div class="footer-col">
                <h3 class="footer-title">Contacto</h3>
                <ul class="footer-contact">
                    <li>
                        <?php echo ambulancia_deseo_get_svg_icon('map-pin'); ?>
                        <span>Calle Principal #123<br>Quito, Ecuador</span>
                    </li>
                    <li>
                        <?php echo ambulancia_deseo_get_svg_icon('phone'); ?>
                        <span>+593 2 123 4567</span>
                    </li>
                    <li>
                        <?php echo ambulancia_deseo_get_svg_icon('mail'); ?>
                        <span>info@ambulanciadeseo.org</span>
                    </li>
                </ul>
            </div>

            <div class="footer-col">
                <h3 class="footer-title">Síguenos</h3>
                <div class="social-links">
                    <a href="#" class="social-link" aria-label="Facebook">
                        <?php echo ambulancia_deseo_get_svg_icon('facebook'); ?>
                    </a>
                    <a href="#" class="social-link" aria-label="Instagram">
                        <?php echo ambulancia_deseo_get_svg_icon('instagram'); ?>
                    </a>
                    <a href="#" class="social-link" aria-label="Twitter">
                        <?php echo ambulancia_deseo_get_svg_icon('twitter'); ?>
                    </a>
                </div>
                <p class="footer-text mt-2">
                    Únete a nuestra comunidad y sé parte del cambio.
                </p>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>