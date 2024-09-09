import React, { useEffect } from 'react';

const LoadScripts = () => {
  useEffect(() => {
    // Función para cargar un script dinámicamente
    const loadScript = (src, onLoadCallback) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = onLoadCallback;
      document.body.appendChild(script);
    };

    // Cargar jQuery primero
    loadScript('/js/jquery-3.3.1.min.js', () => {
      console.log('jQuery cargado');

      // Una vez que jQuery está listo, cargamos los demás scripts que lo requieren
      const scripts = [
        '/js/bootstrap.min.js',
        '/js/comboTreePlugin.js',
        '/js/swiper.min.js',
        '/js/jquery.inview.min.js',
        '/js/jquery.magnific-popup.js',
        '/js/jquery.nice-select.min.js',
        '/js/modernizr.js',
        '/js/owl.carousel.js',
        '/js/plugin.js',
        '/js/custom.js',

      ];

      scripts.forEach(src => {
        loadScript(src, () => {
          console.log(`${src} cargado`);
        });
      });
    });

    // Cleanup: remover los scripts cuando el componente se desmonte
    return () => {
      document.querySelectorAll('script').forEach(script => {
        if (script.src.includes('/js/')) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return null; // Este componente no necesita renderizar nada
};

export default LoadScripts;
