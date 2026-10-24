import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';

import fs from 'fs';

// Plugin to guarantee that all JS/TS module scripts and assets are served with proper MIME types
function strictMimeTypesPlugin(): Plugin {
  const isScriptOrModule = (url: string) => {
    const cleanUrl = url.split('?')[0].toLowerCase();
    return (
      cleanUrl.endsWith('.js') ||
      cleanUrl.endsWith('.mjs') ||
      cleanUrl.endsWith('.cjs') ||
      cleanUrl.endsWith('.ts') ||
      cleanUrl.endsWith('.tsx') ||
      cleanUrl.endsWith('.jsx') ||
      url.includes('/@vite/') ||
      url.includes('/@fs/') ||
      url.includes('/node_modules/')
    );
  };

  const isCss = (url: string) => {
    const cleanUrl = url.split('?')[0].toLowerCase();
    return cleanUrl.endsWith('.css');
  };

  const isWasm = (url: string) => {
    const cleanUrl = url.split('?')[0].toLowerCase();
    return cleanUrl.endsWith('.wasm');
  };

  const isJson = (url: string) => {
    const cleanUrl = url.split('?')[0].toLowerCase();
    return cleanUrl.endsWith('.json');
  };

  const handleMiddleware = (req: any, res: any, next: any) => {
    const url = req.url || '';

    // Intercept writeHead and setHeader to prevent any application/octet-stream fallback for scripts
    const originalSetHeader = res.setHeader.bind(res);
    res.setHeader = function (name: string, value: any) {
      if (typeof name === 'string' && name.toLowerCase() === 'content-type') {
        if (typeof value === 'string' && value.includes('application/octet-stream')) {
          if (isScriptOrModule(url)) {
            value = 'text/javascript; charset=utf-8';
          } else if (isCss(url)) {
            value = 'text/css; charset=utf-8';
          } else if (isWasm(url)) {
            value = 'application/wasm';
          } else if (isJson(url)) {
            value = 'application/json; charset=utf-8';
          }
        }
      }
      return originalSetHeader(name, value);
    };

    const originalWriteHead = res.writeHead.bind(res);
    res.writeHead = function (statusCode: number, ...args: any[]) {
      const currentType = res.getHeader('content-type');
      if (
        !currentType ||
        (typeof currentType === 'string' && currentType.includes('application/octet-stream'))
      ) {
        if (isScriptOrModule(url)) {
          res.setHeader('content-type', 'text/javascript; charset=utf-8');
        } else if (isCss(url)) {
          res.setHeader('content-type', 'text/css; charset=utf-8');
        } else if (isWasm(url)) {
          res.setHeader('content-type', 'application/wasm');
        } else if (isJson(url)) {
          res.setHeader('content-type', 'application/json; charset=utf-8');
        }
      }
      return (originalWriteHead as any)(statusCode, ...args);
    };

    next();
  };

  return {
    name: 'strict-mime-types-enforcer',
    configureServer(server) {
      server.middlewares.use(handleMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleMiddleware);
    },
    closeBundle() {
      // Ensure dist/404.html exists as a duplicate of dist/index.html for GitHub Pages SPA routing
      try {
        const distIndex = path.resolve(process.cwd(), 'dist', 'index.html');
        const dist404 = path.resolve(process.cwd(), 'dist', '404.html');
        if (fs.existsSync(distIndex)) {
          fs.copyFileSync(distIndex, dist404);
        }
      } catch (err) {
        // Non-blocking in dev
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), strictMimeTypesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

