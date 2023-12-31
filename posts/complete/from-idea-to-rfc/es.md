---
title: De la idea al RFC Estructurando Propuestas en el Mundo del Software
description: Una guía para documentar y compartir tus ideas de manera efectiva en tu equipo de desarrollo
date: 2023-10-09
---

En el ámbito del desarrollo de software, las ideas fluyen constantemente, gracias en parte a una cultura de innovación fomentada.

Sin embargo, una cultura de innovación robusta también necesita herramientas efectivas que permitan que esas ideas brillantes trasciendan las discusiones iniciales y se encaminen hacia la implementación real.

Una de esas herramientas es el ‘Documento de Solicitud de Comentarios’, o RFC (por sus siglas en inglés, Request for Comments). En este blog, exploraremos cómo un RFC no solo puede ser la voz de tus ideas, sino el primer paso sólido hacia su realización.

## Entendamos lo que queremos solucionar.

Cualquier idea que pongamos en ejecución involucrará tiempo y entre más tiempo le dediquemos, más difícil será desapegarnos de la misma (costo hundido).

Es bueno iterar rápido, pero es importante comprender, compartir y validar nuestra idea antes de ejecutarla.

Tengamos claras estas preguntas: ¿Qué queremos solucionar? ¿Cuál será nuestro resultado y qué valor aportará al tenerlo completado? En esta primera fase serán más importante que el “cómo”, por esto, tratemos de escribir y compartir nuestra idea en un lenguaje no técnico y seamos enfáticos en el valor de negocio que esto puede aportar.

## Redactemos Nuestra iniciativa

Escribir puede ser una tarea desafiante y dar el primer paso es, a menudo, el mayor obstáculo.

Por eso, es beneficioso recurrir a metodologías existentes que nos proporcionen un impulso y una guía para hacerlo.

Aquí hay algunos pasos sugeridos para estructurar tu iniciativa:

Establecer un formato: Define un formato que te permita estandarizar el contenido (más adelante, proporcionaré algunas sugerencias).
Título Descriptivo: Redacta un título claro que refleje la intención de la solución propuesta.
Análisis del Problema: Céntrate en explicar el problema, proporciona una breve descripción de posibles soluciones, y anticipa los resultados esperados.
Claridad y Accesibilidad: Mantén el lenguaje lo menos técnico posible para que cualquier persona en la empresa pueda comprender el documento.
Mantenlo simple.See breve, generalmente a las personas no les gusta leer documentos muy largos.
Para facilitar la redacción de tu iniciativa, podrías explorar algunas de las siguientes metodologías: SCQA, Técnica de la Pirámide, Los 5 Porqués, Marco PAS, y La Regla de Tres.

## Compartamos y Sumemos Más Personas a la Iniciativa

La ventaja de compartir nuestra iniciativa es que la exponemos a diversas perspectivas que, posiblemente, no hemos considerado.

Esto nos ayudará a ganar posibles aliados, identificar riesgos, encontrar soluciones más eficaces o incluso discernir si es el momento adecuado para ponerla en marcha.

Para lograr esto, es fundamental redactar la iniciativa en una plataforma donde todos puedan aportar con comentarios. Algunas de estas plataformas incluyen: Confluence, Google Workspace, Notion, Microsoft SharePoint, GitLab o GitHub Wiki, entre otras.

## Definamos los pasos a seguir

Un documento como el RFC puede tener diversas finalidades, independientemente de si obtiene aceptación o no, y todas estas finalidades son válidas.

Puede ser el catalizador para implementar un cambio en el presente o en el futuro, o puede ayudarnos a identificar que no es el momento adecuado para proceder.

Algunas de las posibles derivaciones de un RFC incluyen:

- **Inicio de un Registro de Decisiones de Arquitectura (ADR):** \
  Un RFC aceptado puede marcar el comienzo de un ADR, lo cual nos ayudará a mantener un registro detallado de las decisiones tomadas y sus justificaciones.

- **Lanzamiento de una Iniciativa Validada de Producto o Ingenieria** \
  Si el RFC propone una mejora o una nueva característica para un producto, y recibe aceptación, puede dar lugar a una iniciativa validada de producto que lleve la idea a la implementación.

- **Desestimación por Desalineación u otro motivo** \
   En caso de que el RFC no esté alineado con los objetivos actuales de la empresa, podría ser desestimado. Sin embargo, esto también es valioso, ya que ayuda a mantener el enfoque y la alineación con la estrategia de la empresa.
  Esta fase final del RFC proporciona un camino claro sobre los próximos pasos, ya sea para avanzar con la propuesta o para aprender y adaptarse a partir de la retroalimentación recibida.

---

## Propuesta de formato par el documento RFC

Existen diversos formatos y secciones que, como empresa, podrían ser adoptados, modificados o eliminados según corresponda. Todo dependerá del contexto y de las necesidades específicas de cada caso.

A continuación, presentaré un esquema que podría servir como marco de trabajo para estructurar un Request for Comments (RFC), teniendo en cuenta que deberá ser adaptado según las necesidades particulares.

```markdown
# Título

## Contexto

Descripción detallada del problema que se pretende resolver.

### Suposición

Breve descripción de la solución propuesta.

### Objetivo

Especificación de para quién o qué proporciona una solución.

### Resultados Esperados

Descripción de los resultados que se esperan obtener con esta solución.

### Criterios de Finalización

Indicadores que determinarán el éxito de la solución.

## Soluciones Consideradas

Descripción de las alternativas evaluadas, incluyendo herramientas, metodologías o enfoques considerados.

### Decisión

Exposición de la opción seleccionada como la mejor solución y justificación de por qué se considera la más adecuada.

## Consecuencias y Riesgos

Identificación y análisis de los riesgos potenciales asociados con la implementación de esta solución.

## Preguntas Frecuentes

Listado de preguntas y respuestas que puedan ayudar a aclarar la idea.

## Referencias

Enlistado de links relevantes que puedan complementar la idea, incluyendo casos de éxito, blogs, fuentes adicionales, entre otros.
```

### Sección de Hipótesis

Podemos consolidar las secciones de [suposición, objetivo, resultados esperados, y criterios de finalización] en una única sección denominada Hipótesis, mediante una tabla informativa que permite una comprensión rápida y clara de la iniciativa a primera vista.


La tabla permite que el lector capture la esencia de la iniciativa de manera eficiente.

> Gracias a [Cheyne Wagner]() por compartir esta valiosa metodología en el uso de la Hipótesis.

## Referencias

- [Fundamentals of software Architecture by Mark Richards & Neal Ford]()
- [Design It! by Michael Keeling]()
- [Thinking, Fast and Slow by Daniel Kahneman]()
