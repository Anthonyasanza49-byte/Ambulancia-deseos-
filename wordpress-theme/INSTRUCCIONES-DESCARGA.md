# INSTRUCCIONES DE DESCARGA - TEMA WORDPRESS AMBULANCIA DESEO

## 📦 Archivos del Tema

El tema completo de WordPress está ubicado en:
**`/app/wordpress-theme/ambulancia-deseo/`**

También hay un archivo ZIP listo para instalar:
**`/app/wordpress-theme/ambulancia-deseo.zip`**

## 📥 Cómo Descargar los Archivos

### Opción 1: Descargar carpeta completa
```bash
# Desde tu terminal local, usa SCP o SFTP para descargar:
scp -r user@server:/app/wordpress-theme/ambulancia-deseo /tu/carpeta/local/
```

### Opción 2: Descargar archivo ZIP
```bash
# Descarga el ZIP comprimido:
scp user@server:/app/wordpress-theme/ambulancia-deseo.zip /tu/carpeta/local/
```

## 🚀 Instalación en WordPress

### Método Rápido (Recomendado)
1. Descarga el archivo `ambulancia-deseo.zip`
2. Ve a tu WordPress → **Apariencia** → **Temas**
3. Haz clic en **Añadir nuevo** → **Subir tema**
4. Selecciona el archivo ZIP
5. Haz clic en **Instalar ahora**
6. Una vez instalado, haz clic en **Activar**

### Método Manual (FTP)
1. Descarga la carpeta `ambulancia-deseo` completa
2. Conéctate a tu servidor por FTP
3. Sube la carpeta a `/wp-content/themes/`
4. Ve a WordPress → **Apariencia** → **Temas**
5. Activa el tema "Ambulancia Deseo"

## 📋 Estructura del Tema

```
ambulancia-deseo/
├── style.css              # Estilos + Header del tema
├── functions.php          # Funciones del tema
├── index.php              # Página de inicio
├── header.php             # Cabecera y navbar
├── footer.php             # Pie de página
├── page-aliados.php       # Plantilla de Aliados
├── js/
│   └── main.js           # JavaScript
└── README.md             # Documentación completa
```

## ✅ Cambios Implementados

### 1. Logos de Aliados Reales
- ✅ Ministerio de Salud Pública
- ✅ Universidad de Especialidades Espíritu Santo
- ✅ Banco de Alimentos Diakonia

### 2. Botón de Contacto Actualizado
- ✅ Cambio de "Contáctanos" a "Rellena este Formulario"
- ✅ Enlace al Google Forms:
  `https://docs.google.com/forms/d/e/1FAIpQLSfDSL1haTnNUN5xqWf2J4fpgDwD7VRW1_th8xR6cAulcjUArg/viewform`

## 🎨 Características del Tema

- ✅ Diseño responsive (móvil, tablet, escritorio)
- ✅ Colores oficiales de Ambulancia Deseo
- ✅ Logo oficial integrado
- ✅ Menú de navegación sticky
- ✅ Menú móvil hamburguesa
- ✅ Footer completo con enlaces y redes sociales
- ✅ Iconos SVG optimizados
- ✅ Animaciones suaves
- ✅ Compatible con WordPress 5.0+

## 📖 Configuración Post-Instalación

Una vez instalado el tema, sigue estos pasos:

### 1. Crear Menús
- Ve a **Apariencia** → **Menús**
- Crea "Menú Principal" y asígnalo a "Menú Principal"
- Crea "Menú Footer" y asígnalo a "Menú Footer"
- Añade páginas: Inicio, Aliados, Voluntarios, Sueños Cumplidos, Donaciones

### 2. Subir Logo
- Ve a **Apariencia** → **Personalizar** → **Identidad del sitio**
- Sube el logo oficial de Ambulancia Deseo

### 3. Crear Páginas
Crea estas páginas con los slugs exactos:
- `inicio` (marcar como página de inicio)
- `aliados`
- `voluntarios`
- `suenos-cumplidos`
- `donaciones`

### 4. Configurar Página de Inicio
- Ve a **Ajustes** → **Lectura**
- Selecciona "Una página estática"
- Elige "Inicio" como página de inicio

## 🔧 Personalización

El tema está listo para usar, pero puedes personalizarlo:

### Cambiar Colores
Edita las variables CSS en `style.css`:
```css
:root {
    --color-primary: #1FA8A1;
    --color-accent: #6FD3C8;
    --color-dark: #0F5E63;
}
```

### Modificar Contenido
- Los textos están en los archivos PHP
- Las imágenes están en URLs externas (puedes cambiarlas a locales)
- Los iconos son SVG inline (fáciles de modificar)

## 📱 Contacto y Soporte

Para modificaciones adicionales del tema, edita los archivos PHP/CSS según necesites.
El código está bien comentado y organizado para facilitar las modificaciones.

---

**Tema creado para Ambulancia Deseo**
© 2024 - Todos los derechos reservados
