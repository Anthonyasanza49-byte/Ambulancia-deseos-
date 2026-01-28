<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Navbar -->
<nav class="navbar">
    <div class="container navbar-content">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
            <?php if (has_custom_logo()) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <img src="https://customer-assets.emergentagent.com/job_deseo-web/artifacts/3xcqgn2q_image.png" alt="<?php bloginfo('name'); ?>">
            <?php endif; ?>
        </a>
        
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container' => false,
            'menu_class' => 'nav-menu',
            'fallback_cb' => false,
        ));
        ?>
        
        <div class="nav-actions">
            <a href="<?php echo esc_url(home_url('/donaciones')); ?>" class="btn btn-primary">Dona Ahora</a>
            <button class="mobile-menu-btn" id="mobileMenuBtn">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</nav>