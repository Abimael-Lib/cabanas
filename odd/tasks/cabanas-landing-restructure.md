# Landing Cabañas Cielo Azul — Reestructuración por secciones

## Objetivo
Rediseñar `index.html` (y sus CSS/JS asociados) para que siga exactamente esta estructura de secciones:

1. **Header**: logo (imagen + nombre), navegación y botón de WhatsApp.
2. **Hero**: fotografía principal, nombre del complejo y ubicación.
3. **Cabañas**: tarjetas de las 3 (o más) cabañas (sección existente, mantener).
4. **Servicios**: pileta, Wi-Fi, parrilla, estacionamiento, etc. (sección "Experiencia" renombrada).
5. **Galería**: fotografías del complejo (nueva).
6. **Ubicación**: mapa y referencias (sección existente).
7. **Contacto**: WhatsApp, teléfono y redes sociales (nueva, unificada).
8. **Footer**: información del negocio.

## Problema / qué cambia respecto a hoy
- Eliminar sección "Opiniones de huéspedes" (resuelto: usuario pidió eliminarla).
- Mantener "Nuestras Cabañas" (usuario eligió mantener las 3 tarjetas con precios y botón Reservar).
- Header: agregar logo de imagen + botón de WhatsApp a la derecha del nav.
- Hero: cambiar CTA actual por nombre del complejo + ubicación; el botón de WhatsApp se mueve al header.
- "Experiencia" → renombrar "Servicios"; alinear contenido a pileta, Wi-Fi, parrilla, estacionamiento, etc.
- Nueva sección "Galería" con grilla de fotos y lightbox simple.
- Nueva sección "Contacto" con botón WhatsApp, teléfono y redes sociales.
- Footer: mantiene datos del negocio.

## Alcance autorizado
Editar `index.html`, `css/style.css`, `js/app.js`. Usar placeholders de Unsplash para fotografías donde no exista archivo local (`assets/` está vacío). Números de contacto y redes sociales: reutilizar los ya presentes en la página (teléfono +54 343 700-0000, reservas@..., Instagram/Facebook `cabancielazul`).

## Restricciones
- No crear archivos aparte de `index.html` / `css/style.css` / `js/app.js` sin consultar.
- Todo en inglés en artefactos de código; español en textos visibles al usuario (página en `lang="es"`).
- Mantener accesibilidad (aria-label, contrastes, navegación por teclado, foco visible).

## Tareas (IDs estables)
| ID | Tarea | Estado | Aceptación / Checks |
|----|-------|--------|---------------------|
| T0 | Crear rama `feat/landing-restructure` desde `main` | hecho | Rama creada desde `main` (433238a) |
| T1 | Eliminar sección "Opiniones" de HTML y CSS | hecho | grep `review|Opiniones` sin matches en html/css/js |
| T2 | Header: logo imagen + nombre + botón WhatsApp | hecho | Logo img + nombre; botón wa.me en header |
| T3 | Hero: foto principal + nombre + ubicación | hecho | Hero muestra nombre + `.hero-location` |
| T4 | "Experiencia" → "Servicios" | hecho | Sección `#services`, h2 "Servicios" |
| T5 | Nueva sección "Galería" (grilla + lightbox JS) | hecho | 6 fotos + lightbox verificado en navegador real |
| T6 | Nueva sección "Contacto" | hecho | WhatsApp grande, tel:, email, IG/FB, dirección |
| T7 | Actualizar enlaces nav y smooth-scroll | hecho | 6 anclas: home/cabanas/services/galeria/ubication/contacto |
| T8 | Revisión funcional final | hecho | node --check OK; writer verificó en ego-browser |
| T9 | Commit de trabajo-unitario en rama feature | hecho | Commit `0655342` en `feat/landing-restructure` |
| T10 | Fix: línea blanca entre header y hero | hecho | Quitado `margin-top: 1rem` de `.hero`; commit `b66f60d` |

## Estado final (evidence)
- Commit work-unit: `0655342` feat: restructure landing into header/hero/cabins/services/gallery/location/contact/footer
- Diff: 3 archivos (index.html, css/style.css, js/app.js), 347 adiciones + 143 borrados = 490 líneas (supera heurística 400; es un site estático de página única, no se divide).
- Assessment RDD: `gentle-ai.review-assessment/v1` risk=medium, review_due=true (slice_budget_reached).
- Review lifecycle: consent granted por el usuario; START creó lineage `review-6e08ee9c729115f0`, estado `reviewing`, lente `review-reliability`.
- **Bloqueo honesto**: el collect del review exige capturar el resultado del reviewer vía OpenCode Task con el `provider_task` provider-issued; este runtime no expone ese bloque y el transporte V2 está deshabilitado ("Do not start a review or launch reviewer subagents on V2"). No se fabricó resultado ni se lanzó reviewer improvisado. El candidato queda congelado en `reviewing`; delivery pendiente de decisión del usuario (continuar sin el receipt de review o correr el review en runtime con transporte disponible).
- Líneas pendientes no commiteadas: `.atl/` (ya venía sucio, no es de esta feature), `odd/tasks/cabanas-landing-restructure.md` (doc de seguimiento, fuera del candidato por decisión del usuario), `.codegraph/` (tooling).


## Acceptance criteria
- Las 8 secciones existen en el orden indicado y cada una cumple su contenido.
- "Opiniones" eliminada por completo (HTML + CSS).
- Galería con al menos 4 fotografías y lightbox funcional.
- Contacto con botón WhatsApp, teléfono y redes sociales (Instagram, Facebook).
- Ruta de navegación: Inicio / Cabañas / Servicios / Galería / Ubicación / Contacto.
- Cambios commiteados en rama `feat/landing-restructure` con mensaje conventional.

## Delivery strategy
- Estimado de líneas autorizadas (additions + deletions): ~350–450. Estrategia default `ask-on-risk`; si el conteo supera ~400 antes del siguiente commit, preguntar cadena de PRs o excepción.
- Rama única `feat/landing-restructure`; merge bajo criterio del usuario (no es necesario push ni PR para este trabajo de freelance).

## Checklist
- [x] T0 rama creada
- [x] T1 opiniones eliminada
- [x] T2 header con logo y whatsapp
- [x] T3 hero con nombre y ubicación
- [x] T4 servicios renombrado
- [x] T5 galería nueva
- [x] T6 contacto nuevo
- [x] T7 enlaces nav actualizados
- [x] T8 revisión funcional
- [x] T9 commit work-unit (0655342)
- [x] Tarea cerrada en documento (review en estado `reviewing`, bloqueado por transporte del runtime — ver Estado final)
