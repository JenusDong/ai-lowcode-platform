(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['@alifd/layout'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('@alifd/layout'));
  } else {
    var result = factory(root.AlifdLayout);
    root.LayoutComponents = result;
  }
}(typeof self !== 'undefined' ? self : this, function(AlifdLayout) {
  'use strict';

  var LayoutComponents = {};

  function createLayoutComponents(AlifdLayout) {
    if (!AlifdLayout) return null;
    
    return {
      Page: AlifdLayout.Page,
      Block: AlifdLayout.Block,
      Cell: AlifdLayout.Cell,
      Grid: AlifdLayout.Grid,
      Row: AlifdLayout.Row,
      Col: AlifdLayout.Col,
      P: AlifdLayout.P,
      Text: AlifdLayout.Text,
      PageHeader: AlifdLayout.PageHeader,
      PageFooter: AlifdLayout.PageFooter,
      PageNav: AlifdLayout.PageNav,
      PageAside: AlifdLayout.PageAside,
      Breadcrumb: AlifdLayout.Breadcrumb,
      Shell: AlifdLayout.Shell,
      ShellContent: AlifdLayout.ShellContent,
      NextPage: AlifdLayout.Page,
      NextBlock: AlifdLayout.Block,
      NextBlockCell: AlifdLayout.Cell,
      NextRowColContainer: AlifdLayout.Grid,
      NextRow: AlifdLayout.Row,
      NextCol: AlifdLayout.Col,
      NextP: AlifdLayout.P,
      NextText: AlifdLayout.Text,
      NextPageHeader: AlifdLayout.PageHeader,
      NextPageFooter: AlifdLayout.PageFooter,
      NextPageNav: AlifdLayout.PageNav,
      NextPageAside: AlifdLayout.PageAside,
      NextBreadcrumb: AlifdLayout.Breadcrumb,
      NextShell: AlifdLayout.Shell,
      NextShellContent: AlifdLayout.ShellContent,
    };
  }

  function registerToRenderer() {
    if (typeof window === 'undefined') return false;

    var AlifdLayout = window.AlifdLayout;
    var components = createLayoutComponents(AlifdLayout);
    
    if (!components) {
      console.log('[LayoutComponents] AlifdLayout not loaded yet, waiting...');
      return false;
    }

    function tryRegister(win, source) {
      if (!win || !win.SimulatorRenderer || !win.SimulatorRenderer._components) {
        return false;
      }

      var registered = false;
      Object.keys(components).forEach(function(name) {
        if (components[name] && !win.SimulatorRenderer._components[name]) {
          win.SimulatorRenderer._components[name] = components[name];
          registered = true;
        }
      });

      if (registered) {
        console.log('[LayoutComponents] Registered layout components to ' + source);
      }
      return registered;
    }

    tryRegister(window, 'main window');

    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
      try {
        if (iframe.contentWindow) {
          tryRegister(iframe.contentWindow, 'iframe');
        }
      } catch (e) {
        console.log('[LayoutComponents] Cannot access iframe:', e);
      }
    });

    return true;
  }

  function initLayoutComponents() {
    if (window.AlifdLayout) {
      LayoutComponents = createLayoutComponents(window.AlifdLayout);
      registerToRenderer();
    } else {
      var checkCount = 0;
      var maxChecks = 50;
      
      function checkAlifdLayout() {
        checkCount++;
        if (window.AlifdLayout) {
          LayoutComponents = createLayoutComponents(window.AlifdLayout);
          registerToRenderer();
        } else if (checkCount < maxChecks) {
          setTimeout(checkAlifdLayout, 100);
        } else {
          console.warn('[LayoutComponents] AlifdLayout not found after ' + maxChecks + ' attempts');
        }
      }
      
      setTimeout(checkAlifdLayout, 0);
    }
  }

  if (typeof window !== 'undefined') {
    setTimeout(initLayoutComponents, 0);
    setTimeout(registerToRenderer, 100);
    setTimeout(registerToRenderer, 500);
    setTimeout(registerToRenderer, 1000);
    setTimeout(registerToRenderer, 2000);
    setTimeout(registerToRenderer, 3000);

    if (window.addEventListener) {
      window.addEventListener('load', function() {
        initLayoutComponents();
        registerToRenderer();
      });
    }

    if (typeof MutationObserver !== 'undefined') {
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(function(node) {
            if (node.tagName === 'IFRAME' || (node.querySelectorAll && node.querySelectorAll('iframe').length > 0)) {
              setTimeout(registerToRenderer, 100);
            }
          });
        });
      });

      observer.observe(document.documentElement || document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  return LayoutComponents;
}));
