# Tema WordPress - Ambulancia Deseo

## Descripción
Tema personalizado para el sitio web de Ambulancia Deseo, una fundación que cumple los sueños de niños con enfermedades graves.

## Instalación
### Método 1: Subir a WordPress

1. **Comprimir la carpeta del tema:**
   - Comprime la carpeta `ambulancia-deseo` en un archivo ZIP
   - Asegúrate de que la estructura sea: `ambulancia-deseo.zip` > archivos del tema

2. **Subir al WordPress:**
   - Ve a tu panel de WordPress
   - Navega a **Apariencia > Temas**
   - Haz clic en **Añadir nuevo** > **Subir tema**
   - Selecciona el archivo ZIP y haz clic en **Instalar ahora**
   - Una vez instalado, haz clic en **Activar**

### Método 2: FTP/SFTP

1. Conecta a tu servidor por FTP
2. Navega a `/wp-content/themes/`
3. Sube la carpeta `ambulancia-deseo` completa
4. Ve al panel de WordPress > **Apariencia > Temas**
5. Activa el tema "Ambulancia Deseo"

## Configuración del Tema

### 1. Menús

El tema incluye dos ubicaciones de menú:

#### Menú Principal (Navbar)
1. Ve a **Apariencia > Menús**
2. Crea un nuevo menú llamado "Menú Principal"
3. Añade las siguientes páginas:
   - Inicio
   - Aliados
   - Voluntarios
   - Sueños Cumplidos
   - Donaciones
4. Asigna este menú a la ubicación "Menú Principal"
5. Guarda los cambios

#### Menú Footer
1. Crea otro menú llamado "Menú Footer"
2. Añade las mismas páginas que el menú principal
3. Asigna este menú a la ubicación "Menú Footer"
4. Guarda los cambios

### 2. Logo Personalizado

1. Ve a **Apariencia > Personalizar**
2. Navega a **Identidad del sitio**
3. Sube el logo oficial de Ambulancia Deseo
4. Ajusta el tamaño si es necesario
5. Publica los cambios

### 3. Páginas Necesarias

Crea las siguientes páginas en WordPress:

1. **Inicio** (Front Page)
   - Título: "Inicio"
   - Plantilla: Página de inicio (usar index.php)
   - Marca esta como página de inicio en **Ajustes > Lectura**

2. **Aliados**
   - Título: "Aliados"
   - Slug: `aliados`

3. **Voluntarios**
   - Título: "Voluntarios"
   - Slug: `voluntarios`

4. **Sueños Cumplidos**
   - Título: "Sueños Cumplidos"
   - Slug: `suenos-cumplidos`

5. **Donaciones**
   - Título: "Donaciones"
   - Slug: `donaciones`

### 4. Configurar Página de Inicio

1. Ve a **Ajustes > Lectura**
2. Selecciona "Una página estática"
3. En "Página de inicio", selecciona la página "Inicio"
4. Guarda los cambios

## Características del Tema

### Diseño
- ✅ Diseño responsive (mobile, tablet, desktop)
- ✅ Colores de marca (#1FA8A1, #6FD3C8, #0F5E63)
- ✅ Tipografía Inter de Google Fonts
- ✅ Animaciones suaves y transiciones

### Funcionalidades
- ✅ Menú de navegación sticky
- ✅ Menú móvil hamburguesa
- ✅ Soporte para logo personalizado
- ✅ 2 ubicaciones de menú (principal y footer)
- ✅ Footer con 4 áreas de widgets
- ✅ Iconos SVG integrados
- ✅ Optimizado para SEO

### Secciones de la Página de Inicio
1. Hero con imagen de fondo
2. ¿Qué Hacemos? (3 servicios)
3. Estadísticas (4 métricas)
4. Sueños Cumplidos (3 historias)
5. Call to Action
6. Footer completo

## Personalización
### Colores
Para cambiar los colores del tema, edita las variables CSS en `style.css`:

```css
:root {
    --color-primary: #1FA8A1;
    --color-primary-hover: #17A2A4;
    --color-accent: #6FD3C8;
    --color-dark: #0F5E63;
    --color-text: #2E2E2E;
    --color-text-light: #7A7A7A;
    --color-bg-light: #F5F7F7;
    --color-white: #FFFFFF;
}
```

### Imágenes
Las imágenes están actualmente alojadas externamente. Para usar imágenes locales:

1. Sube las imágenes a la biblioteca de medios de WordPress
2. Reemplaza las URLs en los archivos del tema
3. O usa campos personalizados (ACF) para hacerlo dinámico

## Plugins Recomendados

### Esenciales
1. **Contact Form 7** - Para formularios de contacto
2. **Yoast SEO** - Optimización SEO
3. **WP Super Cache** - Cache y rendimiento

### Opcionales
1. **Advanced Custom Fields (ACF)** - Para campos personalizados
2. **WPForms** - Formularios avanzados
3. **Elementor** - Constructor de páginas (si quieres editar visualmente)

## Estructura de Archivos

```
ambulancia-deseo/
├── style.css           # Estilos principales + header del tema
├── functions.php       # Funciones del tema
├── index.php           # Plantilla principal (home)
├── header.php          # Cabecera + navbar
├── footer.php          # Pie de página
├── js/
│   └── main.js         # JavaScript personalizado
├── screenshot.png      # Captura del tema (300x225px)
└── README.md           # Este archivo
```

## Soporte Técnico

### Requisitos Mínimos
- WordPress 5.0 o superior
- PHP 7.4 o superior
- MySQL 5.6 o superior

### Navegadores Soportados
- Chrome (2 últimas versiones)
- Firefox (2 últimas versiones)
- Safari (2 últimas versiones)
- Edge (2 últimas versiones)

## Próximos Pasos

Después de instalar el tema:

1. ✅ Configura los menús
2. ✅ Sube el logo
3. ✅ Crea las páginas necesarias
4. ✅ Configura la página de inicio
5. ✅ Personaliza los colores si es necesario
6. ✅ Añade contenido a cada página
7. ✅ Instala plugins recomendados
8. ✅ Configura formularios de contacto
9. ✅ Optimiza imágenes
10. ✅ Prueba en dispositivos móviles

## Cambios Recientes

### V1.0.0
- ✅ Lanzamiento inicial del tema
- ✅ Página de inicio completa
- ✅ Navbar responsive
- ✅ Footer con menús
- ✅ Diseño mobile-first
- ✅ Botón "Rellena este formulario" en sección de aliados apuntando a Google Forms

## Licencia

GNU General Public License v2 or later

## Créditos

Desarrollado para Ambulancia Deseo

---

© 2024 Ambulancia Deseo. Todos los derechos reservados.