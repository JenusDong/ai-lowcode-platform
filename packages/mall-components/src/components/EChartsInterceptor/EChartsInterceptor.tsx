import React, { useRef, useEffect } from 'react'

interface EChartsInterceptorProps {
  children: React.ReactNode
  __designMode?: string
}

const EChartsInterceptor: React.FC<EChartsInterceptorProps> = ({ children, __designMode }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (__designMode === 'design' && wrapperRef.current) {
      const echartsInstance = wrapperRef.current.querySelector('[_echarts_instance_]')
      if (echartsInstance) {
        console.log('[EChartsInterceptor] Found echarts, adding interceptor')
        echartsInstance.setAttribute('data-leaf', 'true')
      }

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              if (node.hasAttribute('_echarts_instance_')) {
                node.setAttribute('data-leaf', 'true')
              }
              const nested = node.querySelector?.('[_echarts_instance_]')
              if (nested) {
                nested.setAttribute('data-leaf', 'true')
              }
            }
          })
        })
      })

      observer.observe(wrapperRef.current, { childList: true, subtree: true })

      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const echartsDiv = target.closest('[_echarts_instance_]')
        if (echartsDiv && wrapperRef.current) {
          console.log('[EChartsInterceptor] Click on echarts')
          let el: HTMLElement | null = target
          while (el && el !== wrapperRef.current) {
            if (el.hasAttribute('_echarts_instance_')) {
              el.setAttribute('data-leaf', 'true')
            }
            el = el.parentElement
          }
        }
      }

      wrapperRef.current.addEventListener('click', handleClick, true)

      return () => {
        observer.disconnect()
        wrapperRef.current?.removeEventListener('click', handleClick, true)
      }
    }
  }, [__designMode])

  if (__designMode !== 'design') {
    return <>{children}</>
  }

  return (
    <div
      ref={wrapperRef}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      {children}
      <div
        className="echarts-interceptor"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
          cursor: 'pointer',
          zIndex: 10,
          pointerEvents: 'auto',
        }}
        data-leaf="true"
      />
    </div>
  )
}

export default EChartsInterceptor